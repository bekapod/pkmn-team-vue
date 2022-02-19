import { render, screen } from "@testing-library/vue";
import Meta from "./TeamMemberMove.stories";
import TeamMemberMove from "./TeamMemberMove.vue";
import userEvent from "@testing-library/user-event";

const setup = (props = {}) =>
  render(TeamMemberMove, {
    props: { ...Meta.args, ...props },
  });

test("renders the move title", () => {
  setup();
  expect(screen.getByText("Explosion")).toBeInTheDocument();
});

test("adds type gradient", () => {
  setup();
  expect(screen.getByText("Explosion")).toHaveStyle({
    "--type-gradient":
      "linear-gradient(90deg, var(--colors-physical) 0%, var(--colors-physical) 50%, var(--colors-normal) 50%, var(--colors-normal) 100%)",
  });
});

test("emits remove event when remove button is clicked", () => {
  const { emitted } = setup();
  expect(emitted()).not.toHaveProperty("remove");
  userEvent.click(screen.getByRole("button", { name: "Remove move" }));
  expect(emitted()).toHaveProperty("remove", [[Meta.args?.id]]);
});
