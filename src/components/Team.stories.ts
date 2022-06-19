import Team from "./Team.vue";
import type { Meta, Story } from "@storybook/vue3";
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
import { useTeam } from "@/stores";

const csf: Meta = {
  component: Team,
  args: {},
  argTypes: {
    "remove-member": { action: "@remove-member" },
    "remove-move": { action: "@remove-move" },
    "find-member": { action: "@find-member" },
  },
};

const Template: Story = ({
  "remove-member": removeMember,
  "remove-move": removeMove,
  "find-member": findMember,
  ...args
}) => ({
  components: { Team },
  setup() {
    return { args, removeMember, removeMove, findMember };
  },
  template: `
    <Team v-bind="args" @remove-member="removeMember" @remove-move="removeMove" @find-member="findMember" />
  `,
});

export const Default = Template.bind({});
Default.decorators = [
  (story) => {
    const team = useTeam();
    team.id = "team-id";
    team.name = "A team name!";
    team.addMember({
      id: "1",
      slot: 1,
      pokemon: charmander,
    });
    team.addMember({
      id: "2",
      slot: 2,
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
    });
    team.addMember({
      id: "3",
      slot: 3,
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
    });
    return story();
  },
];

export const Empty = Template.bind({});
Empty.decorators = [
  (story) => {
    const team = useTeam();
    team.id = "team-id";
    team.name = "A team name!";
    return story();
  },
];

export default csf;
