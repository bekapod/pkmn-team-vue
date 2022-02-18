import { Meta, Story } from "@storybook/vue3";
import { DamageClass } from "~~/generated";
import TeamMemberMove from "../TeamMemberMove.vue";

const csf: Meta = {
  title: "components/Team Member Move",
  component: TeamMemberMove,
  args: {
    id: "226c7a31-fcbd-4557-b432-8abe86767879",
    name: "Explosion",
    type: {
      id: "normal",
      name: "Normal",
      slug: "normal",
    },
    damageClass: DamageClass.Physical,
  },
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
    <TeamMemberMove v-bind="args" @remove="remove" />
  `,
});

export default csf;
