import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import Meta from "./TeamMember.stories";
import TeamMember from "./TeamMember.vue";

const setup = (props = {}) =>
  render(TeamMember, {
    props: { ...Meta.args, ...props },
  });

test("renders the pokemon", () => {
  setup();
  expect(screen.getByText(/#4 charmander/i)).toBeInTheDocument();
});

test("renders the pokemon's stats", () => {
  setup();
  /* eslint-disable testing-library/no-node-access */
  expect(screen.getByText(/hp/i).nextElementSibling).toHaveTextContent("39");
  expect(screen.getByText(/^atk/i).nextElementSibling).toHaveTextContent("52");
  expect(screen.getByText(/^def/i).nextElementSibling).toHaveTextContent("43");
  expect(screen.getByText(/sp\. atk/i).nextElementSibling).toHaveTextContent(
    "60"
  );
  expect(screen.getByText(/sp\. def/i).nextElementSibling).toHaveTextContent(
    "50"
  );
  expect(screen.getByText(/spd/i).nextElementSibling).toHaveTextContent("65");
  /* eslint-enable testing-library/no-node-access */
});

test("renders the pokemon's moves", () => {
  setup();
  expect(
    screen.getByRole("listitem", { name: /substitute/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("listitem", { name: /slash/i })).toBeInTheDocument();
  expect(screen.getByRole("listitem", { name: /rest/i })).toBeInTheDocument();
});

test("does not render options when not editable", async () => {
  setup();
  expect(
    screen.queryByRole("button", { name: "Open options" })
  ).not.toBeInTheDocument();
});

test("emits remove event when remove button is clicked", async () => {
  const { emitted } = setup({ canEdit: true });
  expect(emitted()).not.toHaveProperty("remove");
  userEvent.click(screen.getByRole("button", { name: "Open options" }));
  userEvent.click(
    await screen.findByRole("menuitem", { name: "Remove team member" })
  );
  expect(emitted()).toHaveProperty("remove", [[Meta.args?.id]]);
});

test("emits remove-move event when remove button on move is clicked", () => {
  const { emitted } = setup();
  expect(emitted()).not.toHaveProperty("remove-move");
  userEvent.click(screen.getAllByRole("button", { name: "Remove move" })[1]);
  expect(emitted()).toHaveProperty("remove-move", [
    [Meta.args?.id, Meta.args?.moves?.[1]?.id],
  ]);
});
