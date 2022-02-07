import { app } from "@storybook/vue3";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { publicRuntimeConfig } from "../config.ts";
import "../app/assets/css/main.css";

window.useRuntimeConfig = () => ({
  ...publicRuntimeConfig,
});

app.component("NuxtLink", {
  props: ["to"],
  template: `<a :href="to"><slot /></a>`,
});

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
          width: `${414 / 16}em`,
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
