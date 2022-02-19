/* eslint-disable @typescript-eslint/ban-ts-comment */
import "@testing-library/jest-dom";
import { config } from "@vue/test-utils";
import { plugin, defaultConfig } from "@formkit/vue";
import customConfig from "./app/formkit.config";
import { publicRuntimeConfig } from "./app/config";
import { client } from "./app/lib/graphql-client";
import { server } from "./app/mocks/server";
import { router } from "./app/mocks/router";

// @ts-ignore
window.useRuntimeConfig = () => ({
  ...publicRuntimeConfig,
});

// @ts-ignore
window.useNuxtApp = () => ({
  $graphQLClient: client,
});

// @ts-ignore
window.useRouter = () => router;

// @ts-ignore
window.useRoute = () => ({
  name: "index",
});

// @ts-ignore
config.global.stubs["NuxtLink"] = {
  props: ["to"],
  template: `<a :href="to"><slot /></a>`,
};

config.global.plugins = [[plugin, defaultConfig(customConfig)]];

beforeAll(() => server.listen());

beforeEach(() => {
  const toastTeleportTarget = document.createElement("div");
  toastTeleportTarget.setAttribute("id", "toast-teleport-target");

  document.body.appendChild(toastTeleportTarget);
});

afterEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, testing-library/no-node-access
  document.body.removeChild(document.getElementById("toast-teleport-target")!);

  server.resetHandlers();

  router.push.mockClear();
});

afterAll(() => server.close());
