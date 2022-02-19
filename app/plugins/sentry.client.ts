import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const { vueApp } = nuxtApp;

  Sentry.init({
    app: [vueApp],
    dsn: config.sentryDsn,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(
          nuxtApp.$router,
        ),
        tracingOrigins: ["localhost", "pkmn-team.bekapod.codes", /^\//],
      }),
    ],
    logErrors: false,
    normalizeDepth: 0,
    tracesSampleRate: config.sentryTracesSampleRate || 1.0,
    debug: config.sentryEnableDebug || false,
    environment: config.environment || "dev",
    beforeSend(event, hint) {
      if (event.exception) {
        console.error(
          `[Exeption handled by Sentry]: (${hint?.originalException})`,
          { event, hint },
        );
      }
      event.logger = "Browser";
      return event;
    },
  });

  vueApp.mixin(
    Sentry.createTracingMixins({
      trackComponents: true,
      timeout: 2000,
      hooks: ["activate", "mount", "update"],
    }),
  );

  Sentry.attachErrorHandler(vueApp, {
    logErrors: false,
    attachProps: true,
    trackComponents: true,
    timeout: 2000,
    hooks: ["activate", "mount", "update"],
  });

  return {
    provide: {
      sentry: Sentry,
    },
  };
});
