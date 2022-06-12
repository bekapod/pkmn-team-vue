import TypeTag from "./TypeTag.vue";
import type { Meta, Story } from "@storybook/vue3";
import { ghost } from "@/data/mocks";

const csf: Meta = {
  component: TypeTag,
  args: ghost,
};

export const Default: Story = (args) => ({
  components: { TypeTag },
  setup() {
    return { args };
  },
  template: `
    <TypeTag v-bind="args" />
  `,
});

export default csf;
