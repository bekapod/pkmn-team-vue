import { Meta, Story } from "@storybook/vue3";
import PokemonLine from "../PokemonLine.vue";

const csf: Meta = {
  title: "components/Pokemon Line",
  component: PokemonLine,
  args: {
    pokedexId: 93,
    name: "Haunter",
    sprite: "pokemon/93.png",
    types: [
      { name: "Poison", slug: "poison", slot: 2 },
      { name: "Ghost", slug: "ghost", slot: 1 },
    ],
  },
};

export const pokemonLine: Story = args => ({
  components: { PokemonLine },
  setup() {
    return { args };
  },
  template: `
    <PokemonLine v-bind="args" />
  `,
});

export default csf;
