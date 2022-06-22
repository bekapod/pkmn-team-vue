import { render, screen } from "@testing-library/vue";
import Ability from "./Ability.vue";

const setup = (props = {}) =>
  render(Ability, {
    props: {
      name: "Blaze",
      effect:
        "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
      isHidden: false,
      ...props,
    },
  });

test("renders ability name", () => {
  setup();
  expect(screen.getByText("Blaze")).toBeInTheDocument();
});

test("renders ability description", () => {
  setup();
  expect(
    screen.getByText(
      "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less."
    )
  ).toBeInTheDocument();
});

test("can render as alternative element", () => {
  setup({ as: "h1" });
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
