import TeamMember from "./TeamMember.vue";
import type { Meta, Story } from "@storybook/vue3";
import { charmander, rest, slash, substitute } from "@/data/mocks";
import { MoveLearnMethod } from "@/graphql";

const csf: Meta = {
  component: TeamMember,
  args: {
    id: "1",
    pokemon: charmander,
    moves: [
      {
        id: "1",
        slot: 1,
        levelLearnedAt: 0,
        learnMethod: MoveLearnMethod.LevelUp,
        move: substitute,
      },
      {
        id: "2",
        slot: 2,
        levelLearnedAt: 0,
        learnMethod: MoveLearnMethod.LevelUp,
        move: slash,
      },
      {
        id: "3",
        slot: 3,
        levelLearnedAt: 0,
        learnMethod: MoveLearnMethod.LevelUp,
        move: rest,
      },
    ],
  },
  argTypes: {
    remove: { action: "@remove" },
    "remove-move": { action: "@remove-move" },
  },
};

const Template: Story = ({ remove, "remove-move": removeMove, ...args }) => ({
  components: { TeamMember },
  setup() {
    return { args, remove, removeMove };
  },
  template: `
    <ul class="list-none"><TeamMember v-bind="args" @remove="remove" @remove-move="removeMove" /></ul>
  `,
});

export const Default = Template.bind({});

export const Editable = Template.bind({});
Editable.args = { canEdit: true };

export default csf;
