import Move from "./Move.vue";
import type { Meta, Story } from "@storybook/vue3";
import { explosion, flash, rest, slash, substitute } from "@/data/mocks";
import { MoveLearnMethod } from "@/graphql";

const csf: Meta = {
  component: Move,
  args: {},
};

const Template: Story = (args) => ({
  components: { Move },
  setup() {
    return { args };
  },
  template: `
    <Move v-bind="args" />
  `,
});

export const Substitute = Template.bind({});
Substitute.args = substitute;

export const Slash = Template.bind({});
Slash.args = slash;

export const Rest = Template.bind({});
Rest.args = { ...rest, learnMethod: MoveLearnMethod.Egg };

export const Flash = Template.bind({});
Flash.args = { ...flash, learnMethod: MoveLearnMethod.Machine };

export const Explosion = Template.bind({});
Explosion.args = {
  ...explosion,
  learnMethod: MoveLearnMethod.LevelUp,
  levelLearnedAt: 10,
};

export default csf;
