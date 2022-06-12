import PokeBall from "./PokeBall.vue";
import type { Meta, Story } from "@storybook/vue3";

const csf: Meta = {
  component: PokeBall,
  args: {
    class: "w-8 h-8",
  },
};

export const Default: Story = (args) => ({
  components: { PokeBall },
  setup() {
    return { args };
  },
  template: '<PokeBall v-bind="args" />',
});

export default csf;
