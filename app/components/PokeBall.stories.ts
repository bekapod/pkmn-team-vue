import PokeBall from "./PokeBall.vue";

export default {
  title: "Poke Ball",
  component: PokeBall,
  args: {
    class: "w-8 h-8",
  },
};

export const pokeBall = args => ({
  components: { PokeBall },
  setup() {
    return { args };
  },
  template: '<PokeBall v-bind="args" />',
});
