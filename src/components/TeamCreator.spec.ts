import { render, screen } from "@testing-library/vue";
import TeamCreator from "./TeamCreator.vue";
import { globalPlugins } from "@/test-helpers";

const setup = (props = {}) =>
  render(TeamCreator, {
    props,
    global: {
      plugins: globalPlugins,
    },
  });

test("renders team create form", () => {
  setup();
  expect(
    screen.getByRole("textbox", { name: "Team name" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Create team" })
  ).toBeInTheDocument();
});
