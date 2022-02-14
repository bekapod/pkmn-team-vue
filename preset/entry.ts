/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import "#polyfill";
import {
  getAssetFromKV,
  mapRequestToAsset,
} from "@cloudflare/kv-asset-handler";
import Toucan from "toucan-js";
import { withoutBase } from "ufo";
import { handle } from "@nuxt/nitro-edge/dist/runtime/server";
import {
  requestHasBody,
  useRequestBody,
} from "@nuxt/nitro-edge/dist/runtime/server/utils";
import { Handle, CallContext } from "unenv/runtime/fetch/index";
import { IncomingMessage, ServerResponse } from "unenv/runtime/node/http/index";
import yn from "yn";
import { buildAssetsURL, baseURL } from "#paths";

addEventListener("fetch", (event: any) => {
  const sentry = new Toucan({
    context: event,
    dsn: SENTRY_DSN,
    debug: yn(SENTRY_ENABLE_DEBUG, { default: false }),
    environment: SENTRY_ENVIRONMENT ?? "dev",
    allowedHeaders: ["user-agent"],
    allowedSearchParams: /(.*)/,
    rewriteFrames: {
      root: "/",
    },
    transportOptions: {
      headers: {
        "CF-Access-Client-ID": SENTRY_CLIENT_ID,
        "CF-Access-Client-Secret": SENTRY_CLIENT_SECRET,
      },
    },
  });

  event.respondWith(handleEvent(event, sentry));
});

async function handleEvent(event: any, sentry: any) {
  try {
    return await getAssetFromKV(event, {
      cacheControl: assetsCacheControl,
      mapRequestToAsset: baseURLModifier,
    });
  } catch (_err) {
    // Ignore
  }

  const url = new URL(event.request.url);
  let body;
  if (requestHasBody(event.request)) {
    body = await useRequestBody(event.request);
  }

  // @ts-ignore
  const r = await createCall(handle)({
    event,
    url: url.pathname + url.search,
    host: url.hostname,
    protocol: url.protocol,
    headers: event.request.headers,
    method: event.request.method,
    redirect: event.request.redirect,
    body,
    context: {
      sentry,
    },
  });

  return new Response(r.body, {
    headers: r.headers as any,
    status: r.status,
    statusText: r.statusText,
  });
}

function createCall(handle: Handle) {
  return function callHandle(context: CallContext) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req as any);

    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = context.headers || {};
    req.headers.host = req.headers.host || context.host || undefined;

    // @ts-ignore
    req.connection.encrypted =
      // @ts-ignore
      req.connection.encrypted || context.protocol === "https";

    // @ts-ignore
    req.body = context.body || null;

    // @ts-ignore
    req.context = context.context || {};

    return handle(req, res).then(() => {
      const r = {
        body: (res._data as any)?.toString() ?? "",
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage,
      };

      req.destroy();
      res.destroy();

      return r;
    });
  };
}

function assetsCacheControl(request: Request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(buildAssetsURL())) {
    return {
      browserTTL: 31536000,
      edgeTTL: 31536000,
    };
  }
  return {};
}

const baseURLModifier = (request: Request) => {
  const url = withoutBase(request.url, baseURL());
  return mapRequestToAsset(new Request(url, request));
};
