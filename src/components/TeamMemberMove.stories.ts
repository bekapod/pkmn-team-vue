import TeamMemberMove from "./TeamMemberMove.vue";
import type { Meta, Story } from "@storybook/vue3";
import { explosion } from "@/data/mocks";

const csf: Meta = {
  component: TeamMemberMove,
  args: explosion,
  argTypes: {
    remove: { action: "@remove" },
  },
};

export const Default: Story = ({ remove, ...args }) => ({
  components: { TeamMemberMove },
  setup() {
    return { args, remove };
  },
  template: `
    <ul class="list-none"><TeamMemberMove v-bind="args" @remove="remove" /></ul>
  `,
});

export default csf;
