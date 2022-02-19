import { Meta, Story } from "@storybook/vue3";
import { MoveLearnMethod } from "@/graphql";
import TeamMember from "./TeamMember.vue";
import { charmander, rest, slash, substitute } from "@/data/mocks";

const csf: Meta = {
  title: "components/Team Member",
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

export const teamMember: Story = ({
  remove,
  "remove-move": removeMove,
  ...args
}) => ({
  components: { TeamMember },
  setup() {
    return { args, remove, removeMove };
  },
  template: `
    <ul class="list-none"><TeamMember v-bind="args" @remove="remove" @remove-move="removeMove" /></ul>
  `,
});

export default csf;