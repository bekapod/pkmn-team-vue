import Ability from "./Ability.vue";
import type { Meta, Story } from "@storybook/vue3";

const csf: Meta = {
  component: Ability,
  args: {
    name: "Blaze",
    effect:
      "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
    isHidden: false,
  },
};

const Template: Story = (args) => ({
  components: { Ability },
  setup() {
    return { args };
  },
  template: `
    <Ability v-bind="args" />
  `,
});

export const Default = Template.bind({});
export const Hidden = Template.bind({});
Hidden.args = { isHidden: true };

export default csf;
