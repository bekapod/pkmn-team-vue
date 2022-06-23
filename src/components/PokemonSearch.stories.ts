import PokemonSearch from "./PokemonSearch.vue";
import type { Story } from "@storybook/vue3";

const csf = {
  component: PokemonSearch,
  args: {},
};

export const Default: Story = (args) => ({
  components: { PokemonSearch },
  setup() {
    return { args };
  },
  template: `
    <PokemonSearch />
  `,
});

export default csf;
