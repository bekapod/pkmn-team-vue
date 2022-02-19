import { Meta, Story } from "@storybook/vue3";
import { haunter } from "@/data/mocks";
import PokemonLine from "../PokemonLine.vue";

const csf: Meta = {
  title: "components/Pokemon Line",
  component: PokemonLine,
  args: haunter,
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
