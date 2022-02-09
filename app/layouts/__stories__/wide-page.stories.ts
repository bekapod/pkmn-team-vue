import WidePage from "../wide-page.vue";

export default {
  title: "layouts/Wide Page",
  component: WidePage,
  parameters: {
    layout: "fullscreen",
  },
};

export const widePage = () => ({
  components: { WidePage },
  template: "<WidePage />",
});
