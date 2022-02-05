import AppHeader from "./AppHeader.vue";

export default {
  title: "App Header",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export const appHeader = () => ({
  components: { AppHeader },
  template: "<AppHeader>Header Text</AppHeader>",
});
