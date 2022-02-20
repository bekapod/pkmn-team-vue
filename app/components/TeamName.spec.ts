import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { useTeam } from "@/stores";
import TeamName from "./TeamName.vue";

const setup = ({ name, ...props } = { name: "" }) => {
  const team = useTeam();
  team.name = name;
  return render(TeamName, {
    props,
  });
};

test("renders team name update button", () => {
  setup({ name: "A team name!" });
  expect(
    screen.getByRole("button", { name: /a team name!/i }),
  ).toBeInTheDocument();
});

test("renders team name update form when button is clicked", async () => {
  setup({ name: "A team name!" });
  userEvent.click(screen.getByRole("button", { name: /a team name!/i }));
  expect(await screen.findByRole("textbox", { name: "Team name" })).toHaveValue(
    "A team name!",
  );
  expect(screen.getByRole("button", { name: "Update" })).toBeInTheDocument();
});
