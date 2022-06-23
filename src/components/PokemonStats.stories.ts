import PokemonStats from "./PokemonStats.vue";
import type { Meta, Story } from "@storybook/vue3";
import { haunter } from "@/data/mocks";

const csf: Meta = {
  component: PokemonStats,
  args: haunter,
};

export const Default: Story = (args) => ({
  components: { PokemonStats },
  setup() {
    return { args };
  },
  template: `
    <PokemonStats v-bind="args" />
  `,
});

export default csf;
