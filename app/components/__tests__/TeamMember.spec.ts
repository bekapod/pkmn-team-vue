import { render, screen } from "@testing-library/vue";
import Meta from "../__stories__/TeamMember.stories";
import TeamMember from "../TeamMember.vue";
import userEvent from "@testing-library/user-event";

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
  expect(screen.getByText(/attack/i).nextElementSibling).toHaveTextContent(
    "52",
  );
  expect(screen.getByText(/defense/i).nextElementSibling).toHaveTextContent(
    "43",
  );
  expect(screen.getByText(/sp\. atk/i).nextElementSibling).toHaveTextContent(
    "60",
  );
  expect(screen.getByText(/sp\. def/i).nextElementSibling).toHaveTextContent(
    "50",
  );
  expect(screen.getByText(/speed/i).nextElementSibling).toHaveTextContent("65");
  /* eslint-enable testing-library/no-node-access */
});

test("renders the pokemon's moves", () => {
  setup();
  expect(
    screen.getByRole("listitem", { name: /substitute/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("listitem", { name: /slash/i })).toBeInTheDocument();
  expect(screen.getByRole("listitem", { name: /rest/i })).toBeInTheDocument();
});

test("emits remove event when remove button is clicked", () => {
  const { emitted } = setup();
  expect(emitted()).not.toHaveProperty("remove");
  userEvent.click(screen.getByRole("button", { name: "Remove team member" }));
  expect(emitted()).toHaveProperty("remove", [[Meta.args?.id]]);
});
