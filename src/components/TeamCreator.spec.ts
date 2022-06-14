import { render, screen } from "@testing-library/vue";
import TeamCreator from "./TeamCreator.vue";
import { globalPlugins } from "@/test-helpers";

vitest.mock("@auth0/auth0-vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { ref } = require("vue");
  return {
    useAuth0: vitest.fn().mockReturnValue({
      loginWithRedirect: vitest.fn(),
      logout: vitest.fn(),
      isAuthenticated: ref(false),
      error: ref(null),
    }),
  };
});

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
