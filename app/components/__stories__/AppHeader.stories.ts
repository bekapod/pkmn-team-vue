import AppHeader from "../AppHeader.vue";

export default {
  title: "components/App Header",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export const appHeader = () => ({
  components: { AppHeader },
  template: "<AppHeader />",
});
