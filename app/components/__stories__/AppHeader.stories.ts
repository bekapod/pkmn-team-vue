import AppHeader from "../AppHeader.vue";
import TeamCreator from "../TeamCreator.vue";

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

export const appHeaderWithForm = () => ({
  components: { AppHeader, TeamCreator },
  template: `
    <AppHeader>
      <template #action><TeamCreator /></template>
    </AppHeader>
  `,
});
