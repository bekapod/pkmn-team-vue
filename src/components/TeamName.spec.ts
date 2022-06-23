import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import TeamName from "./TeamName.vue";
import { useTeam, useTrainer } from "@/stores";
import { globalPlugins } from "@/test-helpers";

const setup = (
  { name = "", trainerId = "TRA123", ...props } = { name: "" }
) => {
  const trainer = useTrainer();
  trainer.id = trainerId;
  const team = useTeam();
  team.name = name;
  team.createdBy = { id: "TRA123", username: "Some trainer" };
  return render(TeamName, {
    props,
    global: {
      plugins: globalPlugins,
    },
  });
};

describe("can edit", () => {
  test("renders team name update button", () => {
    setup({ name: "A team name!" });
    expect(
      screen.getByRole("button", { name: /a team name!/i })
    ).toBeInTheDocument();
  });

  test("renders team name update form when button is clicked", async () => {
    setup({ name: "A team name!" });
    userEvent.click(screen.getByRole("button", { name: /a team name!/i }));
    expect(
      await screen.findByRole("textbox", { name: "Team name" })
    ).toHaveValue("A team name!");
    expect(screen.getByRole("button", { name: "Update" })).toBeInTheDocument();
  });
});

describe("cannot edit", () => {
  test("does not render team name update button", () => {
    setup({ name: "A team name!", trainerId: "" });
    expect(
      screen.queryByRole("button", { name: /a team name!/i })
    ).not.toBeInTheDocument();
  });

  test("does not render team name update button", () => {
    setup({ name: "A team name!", trainerId: "TRA456" });
    expect(
      screen.queryByRole("button", { name: /a team name!/i })
    ).not.toBeInTheDocument();
  });
});
