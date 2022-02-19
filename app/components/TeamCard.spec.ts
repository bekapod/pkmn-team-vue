import { render, screen } from "@testing-library/vue";
import { charmander, haunter, pikachu } from "@/data/mocks";
import TeamCard from "./TeamCard.vue";

const setup = (props = {}) =>
  render(TeamCard, {
    props: {
      id: "123",
      createdAt: "2020-12-12T19:17:37Z",
      name: "My Super Team!",
      members: [
        {
          id: "1",
          pokemon: charmander,
        },
        {
          id: "2",
          pokemon: pikachu,
        },
        {
          id: "3",
          pokemon: haunter,
        },
      ],
      ...props,
    },
  });

test("renders a link to the team", () => {
  setup();
  expect(screen.getByRole("link", { name: "My Super Team!" })).toHaveAttribute(
    "href",
    "/team/123",
  );
});

test("renders the team name", () => {
  setup();
  expect(screen.getByText("My Super Team!")).toBeInTheDocument();
});

test("renders the team meta data", () => {
  setup();
  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getByText("12/12/20")).toBeInTheDocument();
});

test("renders the team members", () => {
  setup();
  expect(screen.getByText("#4 Charmander")).toBeInTheDocument();
  expect(screen.getByText("#25 Pikachu")).toBeInTheDocument();
  expect(screen.getByText("#93 Haunter")).toBeInTheDocument();
});
