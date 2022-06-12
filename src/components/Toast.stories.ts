import Toast from "./Toast.vue";
import ToastContainer from "./ToastContainer.vue";
import type { Meta, Story } from "@storybook/vue3";

const csf: Meta = {
  component: Toast,
  subcomponents: { ToastContainer },
  args: {
    type: "success",
  },
  argTypes: {
    type: {
      options: ["error", "success"],
      control: { type: "radio" },
    },
    close: { action: "@close" },
  },
};

const Template: Story = ({ close, ...args }) => ({
  components: { Toast, ToastContainer },
  setup() {
    return { args, close };
  },
  template: `
    <Toast v-bind="args" @close="close">
      <template #title>Some notification</template>
      Bear claw donut dessert chocolate bar donut. Sesame snaps donut donut dragée gummies. Lollipop icing candy canes jujubes toffee.
    </Toast>
  `,
});

export const Success = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  type: "error",
};

export default csf;
