import PokemonLine from "./PokemonLine.vue";
import type { Meta, Story } from "@storybook/vue3";
import { haunter } from "@/data/mocks";

const csf: Meta = {
  component: PokemonLine,
  args: haunter,
};

export const Default: Story = (args) => ({
  components: { PokemonLine },
  setup() {
    return { args };
  },
  template: `
    <PokemonLine v-bind="args" />
  `,
});

export default csf;
