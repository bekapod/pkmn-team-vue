import AppHeader from "./AppHeader.vue";
import TeamCreator from "./TeamCreator.vue";
import type { Meta, Story } from "@storybook/vue3";

const csf: Meta = {
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    teamCreated: { action: "@team-created" },
  },
};

export const Default: Story = () => ({
  components: { AppHeader },
  template: "<AppHeader />",
});

export const AppHeaderWithForm: Story = ({ teamCreated, ...args }) => ({
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
