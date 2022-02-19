import { Meta, Story } from "@storybook/vue3";
import TeamMemberMove from "./TeamMemberMove.vue";
import { explosion } from "@/data/mocks";

const csf: Meta = {
  title: "components/Team Member Move",
  component: TeamMemberMove,
  args: explosion,
  argTypes: {
    remove: { action: "@remove" },
  },
};

export const teamMemberMove: Story = ({ remove, ...args }) => ({
  components: { TeamMemberMove },
  setup() {
    return { args, remove };
  },
  template: `
    <ul class="list-none"><TeamMemberMove v-bind="args" @remove="remove" /></ul>
  `,
});

export default csf;
