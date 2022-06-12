import Page from "../page.vue";

export default {
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => ({
  components: { Page },
  template: "<Page />",
});
