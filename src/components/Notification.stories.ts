import { action } from "@storybook/addon-actions";
import Notification from "./Notification.vue";
import type { Meta, Story } from "@storybook/vue3";

const csf: Meta = {
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

const Template: Story = (args) => ({
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

export const Success = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  type: "error",
};

export const NotificationWithAction = Template.bind({});
NotificationWithAction.args = {
  type: "error",
  action: {
    label: "Some action",
    callback: action("action-click"),
  },
};

export default csf;
