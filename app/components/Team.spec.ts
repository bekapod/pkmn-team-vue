import { render, screen, within } from "@testing-library/vue";
import Meta from "./Team.stories";
import Team from "./Team.vue";
import userEvent from "@testing-library/user-event";

const setup = (props = {}) =>
  render(Team, {
    props: { ...Meta.args, ...props },
  });

test("renders the members", () => {
  setup();
  expect(screen.getByText(/#4 charmander/i)).toBeInTheDocument();
  expect(screen.getByText(/#25 pikachu/i)).toBeInTheDocument();
  expect(screen.getByText(/#93 haunter/i)).toBeInTheDocument();
});

test("renders the member's moves", () => {
  setup();
  expect(
    within(screen.getByTestId("team-member-2")).getByRole("listitem", {
      name: /substitute/i,
    }),
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-2")).getByRole("listitem", {
      name: /flash/i,
    }),
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-2")).getByRole("listitem", {
      name: /rest/i,
    }),
  ).toBeInTheDocument();

  expect(
    within(screen.getByTestId("team-member-3")).getByRole("listitem", {
      name: /substitute/i,
    }),
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-3")).getByRole("listitem", {
      name: /rest/i,
    }),
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-3")).getByRole("listitem", {
      name: /explosion/i,
    }),
  ).toBeInTheDocument();
});

test("emits remove-member event when remove button is clicked", () => {
  const { emitted } = setup();
  expect(emitted()).not.toHaveProperty("remove-member");
  userEvent.click(
    screen.getAllByRole("button", { name: "Remove team member" })[1],
  );
  expect(emitted()).toHaveProperty("remove-member", [
    [Meta.args?.members?.[1]?.id],
  ]);
});

test("emits remove-move event when remove button on move is clicked", () => {
  const { emitted } = setup();
  expect(emitted()).not.toHaveProperty("remove-move");
  userEvent.click(
    within(screen.getByTestId("team-member-2")).getAllByRole("button", {
      name: "Remove move",
    })[2],
  );
  expect(emitted()).toHaveProperty("remove-move", [
    [Meta.args?.members?.[1]?.id, Meta.args?.members?.[1]?.moves?.[2]?.id],
  ]);
});
