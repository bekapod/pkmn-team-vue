import TypeTag from "./TypeTag.vue";

export default {
  title: "components/Type Tag",
  component: TypeTag,
  args: {
    slug: "ghost",
    name: "Ghost",
  },
};

export const typeTag = (args: unknown) => ({
  components: { TypeTag },
  setup() {
    return { args };
  },
  template: `
    <TypeTag v-bind="args" />
  `,
});
