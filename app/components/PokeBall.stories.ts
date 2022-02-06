import PokeBall from "./PokeBall.vue";

export default {
  title: "components/Poke Ball",
  component: PokeBall,
  args: {
    class: "w-8 h-8",
  },
};

export const pokeBall = (args: unknown) => ({
  components: { PokeBall },
  setup() {
    return { args };
  },
  template: '<PokeBall v-bind="args" />',
});
