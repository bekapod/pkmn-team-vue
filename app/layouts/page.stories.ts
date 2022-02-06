import Page from "./page.vue";

export default {
  title: "layouts/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const page = () => ({
  components: { Page },
  template: "<Page />",
});
