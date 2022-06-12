import { createAuth0 } from "@auth0/auth0-vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { BrowserTracing } from "@sentry/tracing";
import * as Sentry from "@sentry/vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import formkitConfig from "./formkit.config";
import router from "./router";

const app = createApp(App);

Sentry.init({
  app,
  trackComponents: true,
  dsn: import.meta.env.VITE_SENTRY_DSN,
  debug: import.meta.env.VITE_SENTRY_DEBUG === "true",
  environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
  ],
  tracesSampleRate: 1.0,
});
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    redirect_uri: window.location.origin,
  })
);
app.use(createPinia());
app.use(plugin, defaultConfig({ config: formkitConfig }));
app.use(router);

app.mount("#app");
