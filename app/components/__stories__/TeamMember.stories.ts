import { Meta, Story } from "@storybook/vue3";
import { MoveTarget, DamageClass, MoveLearnMethod } from "~~/generated";
import TeamMember from "../TeamMember.vue";

const csf: Meta = {
  title: "components/Team Member",
  component: TeamMember,
  args: {
    id: "1",
    pokemon: {
      id: "4",
      name: "Charmander",
      slug: "charmander",
      pokedexId: 4,
      sprite: "pokemon/4.png",
      types: [
        {
          id: "fire",
          name: "Fire",
          slug: "fire",
        },
      ],
      hp: 39,
      attack: 52,
      defense: 43,
      specialAttack: 60,
      specialDefense: 50,
      speed: 65,
    },
    moves: [
      {
        id: "1",
        slot: 1,
        levelLearnedAt: 0,
        learnMethod: MoveLearnMethod.LevelUp,
        move: {
          id: "623bcd4a-da0d-4b47-9b4b-96601d465cc1",
          name: "Substitute",
          slug: "substitute",
          type: {
            id: "normal",
            name: "Normal",
            slug: "normal",
          },
          pp: 10,
          target: MoveTarget.User,
          damageClass: DamageClass.Status,
          effect:
            "Transfers 1/4 of the user's max HP into a doll, protecting the user from further damage or status changes until it breaks.",
        },
      },
      {
        id: "2",
        slot: 2,
        levelLearnedAt: 0,
        learnMethod: MoveLearnMethod.LevelUp,
        move: {
          id: "38335f1b-6c2c-4e63-b046-d9c57edb2501",
          name: "Slash",
          slug: "slash",
          type: {
            id: "normal",
            name: "Normal",
            slug: "normal",
          },
          power: 70,
          accuracy: 100,
          pp: 20,
          target: MoveTarget.SelectedPokemon,
          damageClass: DamageClass.Physical,
          effect: "Has an increased chance for a critical hit.",
        },
      },
      {
        id: "3",
        slot: 3,
        levelLearnedAt: 0,
        learnMethod: MoveLearnMethod.LevelUp,
        move: {
          id: "b85adec9-3993-436e-b5bd-78056a14c617",
          name: "Rest",
          slug: "rest",
          type: {
            id: "psychic",
            name: "Psychic",
            slug: "psychic",
          },
          pp: 10,
          target: MoveTarget.User,
          damageClass: DamageClass.Status,
          effect: "User sleeps for two turns, completely healing itself.",
        },
      },
    ],
  },
  argTypes: {
    remove: { action: "@remove" },
  },
};

export const teamMember: Story = ({ remove, ...args }) => ({
  components: { TeamMember },
  setup() {
    return { args, remove };
  },
  template: `
    <TeamMember v-bind="args" @remove="remove" />
  `,
});

export default csf;
