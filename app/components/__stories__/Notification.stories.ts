import { action } from "@storybook/addon-actions";
import Notification from "../Notification.vue";

export default {
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

const Template = (args: unknown) => ({
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

export const notification = Template.bind({});

export const notificationWithAction = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
notificationWithAction.args = {
  type: "error",
  action: {
    label: "Some action",
    callback: action("action-click"),
  },
};
