import { Meta, Story } from "@storybook/vue3";
import {
  charmander,
  explosion,
  flash,
  haunter,
  pikachu,
  rest,
  substitute,
} from "@/data/mocks";
import { MoveLearnMethod } from "@/graphql";
import Team from "./Team.vue";

const csf: Meta = {
  title: "components/Team",
  component: Team,
  args: {
    members: [
      {
        id: "1",
        pokemon: charmander,
      },
      {
        id: "2",
        pokemon: pikachu,
        moves: [
          {
            id: "1",
            slot: 1,
            learnMethod: MoveLearnMethod.LevelUp,
            levelLearnedAt: 0,
            move: substitute,
          },
          {
            id: "2",
            slot: 2,
            learnMethod: MoveLearnMethod.LevelUp,
            levelLearnedAt: 0,
            move: rest,
          },
          {
            id: "3",
            slot: 3,
            learnMethod: MoveLearnMethod.LevelUp,
            levelLearnedAt: 0,
            move: flash,
          },
        ],
      },
      {
        id: "3",
        pokemon: haunter,
        moves: [
          {
            id: "4",
            slot: 1,
            learnMethod: MoveLearnMethod.LevelUp,
            levelLearnedAt: 0,
            move: substitute,
          },
          {
            id: "5",
            slot: 2,
            learnMethod: MoveLearnMethod.LevelUp,
            levelLearnedAt: 0,
            move: rest,
          },
          {
            id: "6",
            slot: 3,
            learnMethod: MoveLearnMethod.LevelUp,
            levelLearnedAt: 0,
            move: explosion,
          },
        ],
      },
    ],
  },
  argTypes: {
    "remove-member": { action: "@remove-member" },
    "remove-move": { action: "@remove-move" },
  },
};

export const team: Story = ({
  "remove-member": removeMember,
  "remove-move": removeMove,
  ...args
}) => ({
  components: { Team },
  setup() {
    return { args, removeMember, removeMove };
  },
  template: `
    <Team v-bind="args" @remove-member="removeMember" @remove-move="removeMove" />
  `,
});

export default csf;
