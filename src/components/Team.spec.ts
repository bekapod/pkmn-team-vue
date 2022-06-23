import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/vue";
import Meta from "./Team.stories";
import Team from "./Team.vue";
import {
  charmander,
  pikachu,
  substitute,
  flash,
  haunter,
  explosion,
  rest,
} from "@/data/mocks";
import { MoveLearnMethod } from "@/graphql";
import { useTeam, useTrainer } from "@/stores";
import { globalPlugins } from "@/test-helpers";

const setup = (props = {}, trainerId?: string) => {
  const team = useTeam();
  team.id = "1";
  team.name = "A team name!";
  team.members = [
    {
      id: "1",
      slot: 1,
      pokemon: charmander,
    },
    {
      id: "2",
      slot: 2,
      pokemon: pikachu,
      moves: [
        {
          id: "1",
          slot: 1,
          learnMethod: MoveLearnMethod.LevelUp,
          levelLearnedAt: 0,
          move: substitute,
        },
        {
          id: "2",
          slot: 2,
          learnMethod: MoveLearnMethod.LevelUp,
          levelLearnedAt: 0,
          move: rest,
        },
        {
          id: "3",
          slot: 3,
          learnMethod: MoveLearnMethod.LevelUp,
          levelLearnedAt: 0,
          move: flash,
        },
      ],
    },
    {
      id: "3",
      slot: 3,
      pokemon: haunter,
      moves: [
        {
          id: "4",
          slot: 1,
          learnMethod: MoveLearnMethod.LevelUp,
          levelLearnedAt: 0,
          move: substitute,
        },
        {
          id: "5",
          slot: 2,
          learnMethod: MoveLearnMethod.LevelUp,
          levelLearnedAt: 0,
          move: rest,
        },
        {
          id: "6",
          slot: 3,
          learnMethod: MoveLearnMethod.LevelUp,
          levelLearnedAt: 0,
          move: explosion,
        },
      ],
    },
  ];
  team.createdBy = { id: trainerId as unknown as string, username: "" };
  const trainer = useTrainer();
  trainer.id = trainerId;
  return {
    team,
    ...render(Team, {
      props: { ...Meta.args, ...props },
      global: {
        plugins: globalPlugins,
      },
    }),
  };
};

test("renders the members", () => {
  setup();
  expect(screen.getByText(/#4 charmander/i)).toBeInTheDocument();
  expect(screen.getByText(/#25 alola cap pikachu/i)).toBeInTheDocument();
  expect(screen.getByText(/#93 haunter/i)).toBeInTheDocument();
});

test("renders the member's moves", () => {
  setup();
  expect(
    within(screen.getByTestId("team-member-2")).getByRole("listitem", {
      name: /substitute/i,
    })
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-2")).getByRole("listitem", {
      name: /flash/i,
    })
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-2")).getByRole("listitem", {
      name: /rest/i,
    })
  ).toBeInTheDocument();

  expect(
    within(screen.getByTestId("team-member-3")).getByRole("listitem", {
      name: /substitute/i,
    })
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-3")).getByRole("listitem", {
      name: /rest/i,
    })
  ).toBeInTheDocument();
  expect(
    within(screen.getByTestId("team-member-3")).getByRole("listitem", {
      name: /explosion/i,
    })
  ).toBeInTheDocument();
});

test("does not allow editing", async () => {
  setup();
  expect(
    screen.queryByRole("button", { name: "Open options" })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: "Add team member" })
  ).not.toBeInTheDocument();
});

test("emits remove-member event when remove button is clicked", async () => {
  const { emitted, team } = setup({}, "TRA-123");
  vitest.spyOn(team, "removeMember");
  expect(emitted()).not.toHaveProperty("remove-member");
  userEvent.click(screen.getAllByRole("button", { name: "Open options" })[1]);
  userEvent.click(
    await screen.findByRole("menuitem", { name: "Remove team member" })
  );
  expect(emitted()).toHaveProperty("remove-member", [["2"]]);
  expect(team.removeMember).toHaveBeenCalledWith("2");
});

test("emits find-member event when empty spot is clicked", async () => {
  const { emitted, team } = setup({}, "TRA-123");
  expect(emitted()).not.toHaveProperty("find-member");
  userEvent.click(
    screen.getAllByRole("button", { name: "Add team member" })[0]
  );
  expect(emitted()).toHaveProperty("find-member");
  expect(team.isFindingMember).toBe(true);
});

test("emits remove-move event when remove button on move is clicked", () => {
  const { emitted } = setup();
  expect(emitted()).not.toHaveProperty("remove-move");
  userEvent.click(
    within(screen.getByTestId("team-member-2")).getAllByRole("button", {
      name: "Remove move",
    })[2]
  );
  expect(emitted()).toHaveProperty("remove-move", [["2", "3"]]);
});
