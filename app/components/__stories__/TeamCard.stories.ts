import { Meta, Story } from "@storybook/vue3";
import TeamCard from "../TeamCard.vue";

const csf: Meta = {
  title: "components/Team Card",
  component: TeamCard,
  args: {
    id: "123",
    createdAt: "2020-12-12T19:17:37Z",
    name: "My Super Team!",
    members: [
      {
        id: "1",
        pokemon: {
          name: "Charmander",
          pokedexId: 4,
          sprite: "pokemon/4.png",
          types: [{ name: "Fire", slug: "fire", slot: 1 }],
        },
      },
      {
        id: "2",
        pokemon: {
          name: "Pikachu",
          pokedexId: 25,
          sprite: "pokemon/25.png",
          types: [{ name: "Electric", slug: "electric", slot: 1 }],
        },
      },
      {
        id: "3",
        pokemon: {
          name: "Haunter",
          pokedexId: 93,
          sprite: "pokemon/93.png",
          types: [
            { name: "Poison", slug: "poison", slot: 2 },
            { name: "Ghost", slug: "ghost", slot: 1 },
          ],
        },
      },
    ],
  },
};

export const teamCard: Story = (args: unknown) => ({
  components: { TeamCard },
  setup() {
    return { args };
  },
  template: `
    <TeamCard class="w-[500px]" v-bind="args" />
  `,
});

export default csf;
