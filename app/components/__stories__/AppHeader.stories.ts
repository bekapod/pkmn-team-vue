import { Meta, Story } from "@storybook/vue3";
import AppHeader from "../AppHeader.vue";
import TeamCreator from "../TeamCreator.vue";

const csf: Meta = {
  title: "components/App Header",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    teamCreated: { action: "@team-created" },
  },
};

export const appHeader: Story = () => ({
  components: { AppHeader },
  template: "<AppHeader />",
});

export const appHeaderWithForm: Story = ({ teamCreated, ...args }) => ({
  components: { AppHeader, TeamCreator },
  setup() {
    return { args, teamCreated };
  },
  template: `
    <AppHeader v-bind="args">
      <template #action><TeamCreator @team-created="teamCreated" /></template>
    </AppHeader>
  `,
});

export default csf;
