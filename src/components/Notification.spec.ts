import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import Notification from "./Notification.vue";

const setup = (props = {}) =>
  render(Notification, {
    props: {
      type: "error",
      ...props,
    },
    slots: {
      title: "Some notification",
      default:
        "Bear claw donut dessert chocolate bar donut. Sesame snaps donut donut dragée gummies. Lollipop icing candy canes jujubes toffee.",
    },
  });

test("renders the notification title & content", () => {
  setup();
  expect(screen.getByText("Some notification")).toBeInTheDocument();
  expect(screen.getByText(/Bear claw/)).toBeInTheDocument();
});

test("renders notification action", () => {
  const callback = vitest.fn();
  setup({ action: { label: "Some action", callback } });
  expect(callback).toHaveBeenCalledTimes(0);
  userEvent.click(screen.getByRole("button", { name: "Some action" }));
  expect(callback).toHaveBeenCalledTimes(1);
});
