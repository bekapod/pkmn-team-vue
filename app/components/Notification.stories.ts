import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";
import Notification from "./Notification.vue";

const csf: Meta = {
  title: "components/Notification",
  component: Notification,
  args: {
    type: "success",
  },
  argTypes: {
    type: {
      options: ["error", "success"],
      control: { type: "radio" },
    },
  },
};

const Template: Story = args => ({
  components: { Notification },
  setup() {
    return { args };
  },
  template: `
    <Notification v-bind="args">
      <template #title>Some notification</template>
      Bear claw donut dessert chocolate bar donut. Sesame snaps donut donut dragée gummies. Lollipop icing candy canes jujubes toffee.
    </Notification>`,
});

export const success = Template.bind({});

export const error = Template.bind({});
error.args = {
  type: "error",
};

export const notificationWithAction = Template.bind({});
notificationWithAction.args = {
  type: "error",
  action: {
    label: "Some action",
    callback: action("action-click"),
  },
};

export default csf;
