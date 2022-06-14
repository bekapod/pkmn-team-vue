import { createAuth0 } from "@auth0/auth0-vue";
import { app } from "@storybook/vue3";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { plugin as formkitPlugin, defaultConfig } from "@formkit/vue";
import { createPinia } from "pinia";
import formkitConfig from "@/formkit.config";
import { useToasts, useTeam, useTeams } from "@/stores";
import vueRouter from "storybook-vue3-router";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/assets/base.css";

initialize();

const pinia = createPinia();
app.use(pinia);

app.use(formkitPlugin, defaultConfig({ config: formkitConfig }));

app.use(
  createAuth0({
    domain: "https://example.com",
    client_id: "test",
    audience: "https://example.com",
    redirect_uri: window.location.origin,
  })
);

export const decorators = [
  mswDecorator,
  vueRouter(),
  (story) => {
    const toasts = useToasts();
    const team = useTeam();
    const teams = useTeams();
    toasts.$reset();
    team.$reset();
    teams.$reset();
    return story();
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    grid: { cellSize: 16 },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      sm: {
        name: `Theme: SM`,
        styles: {
          width: `${440 / 16}em`,
          height: "100%",
        },
      },
      md: {
        name: `Theme: MD`,
        styles: {
          width: `${768 / 16}em`,
          height: "100%",
        },
      },
      lg: {
        name: `Theme: LG`,
        styles: {
          width: `${1024 / 16}em`,
          height: "100%",
        },
      },
      xl: {
        name: `Theme: XL`,
        styles: {
          width: `${1280 / 16}em`,
          height: "100%",
        },
      },
      ...INITIAL_VIEWPORTS,
    },
  },
};