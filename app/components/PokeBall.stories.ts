import { Meta, Story } from "@storybook/vue3";
import PokeBall from "./PokeBall.vue";

const csf: Meta = {
  title: "components/Poke Ball",
  component: PokeBall,
  args: {
    class: "w-8 h-8",
  },
};

export const pokeBall: Story = args => ({
  components: { PokeBall },
  setup() {
    return { args };
  },
  template: '<PokeBall v-bind="args" />',
});

export default csf;
