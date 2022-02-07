import PokemonLine from "../PokemonLine.vue";

export default {
  title: "components/Pokemon Line",
  component: PokemonLine,
  args: {
    pokedexId: 93,
    name: "Haunter",
    sprite: "93.png",
    types: [
      { name: "Poison", slug: "poison", slot: 2 },
      { name: "Ghost", slug: "ghost", slot: 1 },
    ],
  },
};

export const pokemonLine = (args: unknown) => ({
  components: { PokemonLine },
  setup() {
    return { args };
  },
  template: `
    <PokemonLine v-bind="args" />
  `,
});
