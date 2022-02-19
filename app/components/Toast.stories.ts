import { Meta, Story } from "@storybook/vue3";
import Toast from "./Toast.vue";
import ToastContainer from "./ToastContainer.vue";

const csf: Meta = {
  title: "components/Toast",
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
    <ToastContainer>
      <Toast v-bind="args" @close="close">
        <template #title>Some notification</template>
        Bear claw donut dessert chocolate bar donut. Sesame snaps donut donut dragée gummies. Lollipop icing candy canes jujubes toffee.
      </Toast>
    </ToastContainer>
  `,
});

export const success = Template.bind({});

export const error = Template.bind({});
error.args = {
  type: "error",
};

export default csf;
