import { render, screen } from "@testing-library/vue";
import Meta from "./Toast.stories";
import Toast from "./Toast.vue";
import userEvent from "@testing-library/user-event";

const setup = (props = {}) =>
  render(Toast, {
    props: { ...Meta.args, ...props },
    slots: {
      title: "Some notification",
      default:
        "Bear claw donut dessert chocolate bar donut. Sesame snaps donut donut dragée gummies. Lollipop icing candy canes jujubes toffee.",
    },
  });

test("renders the toast title & content", () => {
  setup();
  expect(screen.getByText("Some notification")).toBeInTheDocument();
  expect(screen.getByText(/Bear claw/)).toBeInTheDocument();
});

test("emits close event when close button is clicked", () => {
  const { emitted } = setup();
  expect(emitted()).not.toHaveProperty("close");
  userEvent.click(screen.getByRole("button", { name: "Close" }));
  expect(emitted()).toHaveProperty("close");
});
