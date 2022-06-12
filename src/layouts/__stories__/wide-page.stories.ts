import WidePage from "../wide-page.vue";

export default {
  component: WidePage,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => ({
  components: { WidePage },
  template: "<WidePage />",
});
