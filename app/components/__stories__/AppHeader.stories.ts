import { Meta, Story } from "@storybook/vue3";
import AppHeader from "../AppHeader.vue";
import TeamCreator from "../TeamCreator.vue";

const csf: Meta = {
  title: "components/App Header",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export const appHeader: Story = () => ({
  components: { AppHeader },
  template: "<AppHeader />",
});

export const appHeaderWithForm: Story = () => ({
  components: { AppHeader, TeamCreator },
  template: `
    <AppHeader>
      <template #action><TeamCreator /></template>
    </AppHeader>
  `,
});

export default csf;
