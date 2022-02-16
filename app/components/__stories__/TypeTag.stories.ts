import { Meta, Story } from "@storybook/vue3";
import TypeTag from "../TypeTag.vue";

const csf: Meta = {
  title: "components/Type Tag",
  component: TypeTag,
  args: {
    slug: "ghost",
    name: "Ghost",
  },
};

export const typeTag: Story = args => ({
  components: { TypeTag },
  setup() {
    return { args };
  },
  template: `
    <TypeTag v-bind="args" />
  `,
});

export default csf;
