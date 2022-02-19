import { render, screen } from "@testing-library/vue";
import TeamCreator from "./TeamCreator.vue";

const setup = (props = {}) =>
  render(TeamCreator, {
    props,
  });

test("renders team create form", () => {
  setup();
  expect(
    screen.getByRole("textbox", { name: "Team name" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Create team" }),
  ).toBeInTheDocument();
});
