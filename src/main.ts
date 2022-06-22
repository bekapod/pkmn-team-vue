import { plugin, defaultConfig } from "@formkit/vue";
import { BrowserTracing } from "@sentry/tracing";
import * as Sentry from "@sentry/vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import formkitConfig from "./formkit.config";
import { auth, authInstance, debounceActions } from "./lib";
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
  beforeSend: (event) => {
    if (import.meta.env.DEV) {
      console.error(event);
    }
    return event;
  },
});
app.use(authInstance);
app.use(createPinia());
app.use(plugin, defaultConfig({ config: formkitConfig }));
app.use(router);

const pinia = createPinia();
pinia.use(debounceActions);
pinia.use(auth);
app.use(pinia);

app.mount("#app");
