import { app } from "@storybook/vue3";
import PokeBall from "../app/components/PokeBall.vue";
import "../app/assets/css/main.css";

app.component("NuxtLink", {
  props: ["to"],
  template: `<a :href="to"><slot /></a>`,
});

app.component("PokeBall", PokeBall);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    grid: { cellSize: 12 },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
