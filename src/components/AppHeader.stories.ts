import AppHeader from "./AppHeader.vue";
import TeamCreator from "./TeamCreator.vue";
import type { Meta, Story } from "@storybook/vue3";
import { useTrainer } from "@/stores";

const csf: Meta = {
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    teamCreated: { action: "@team-created" },
  },
  decorators: [
    (story) => {
      const trainer = useTrainer();
      trainer.id = undefined;
      trainer.username = undefined;
      trainer.picture = undefined;
      return story();
    },
  ],
};

export const Default: Story = () => ({
  components: { AppHeader },
  template: "<AppHeader />",
});

export const LoggedIn: Story = () => ({
  components: { AppHeader },
  template: "<AppHeader />",
});
LoggedIn.decorators = [
  (story) => {
    const trainer = useTrainer();
    trainer.id = "TRA123";
    trainer.username = "A user";
    trainer.picture = "https://placey.bekapod.codes/g/120/120/ffffff/000000";
    return story();
  },
];

export const WithForm: Story = ({ teamCreated, ...args }) => ({
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
