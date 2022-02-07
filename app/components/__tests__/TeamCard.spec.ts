import { render, screen } from "@testing-library/vue";
import TeamCard from "../TeamCard.vue";

const setup = (props = {}) =>
  render(TeamCard, {
    props: {
      id: "123",
      createdAt: "2020-12-12T19:17:37Z",
      name: "My Super Team!",
      members: [
        {
          id: "1",
          pokemon: {
            name: "Charmander",
            pokedexId: 4,
            sprite: "4.png",
            types: [{ name: "Fire", slug: "fire", slot: 1 }],
          },
        },
        {
          id: "2",
          pokemon: {
            name: "Pikachu",
            pokedexId: 25,
            sprite: "25.png",
            types: [{ name: "Electric", slug: "electric", slot: 1 }],
          },
        },
        {
          id: "3",
          pokemon: {
            name: "Haunter",
            pokedexId: 93,
            sprite: "93.png",
            types: [
              { name: "Poison", slug: "poison", slot: 2 },
              { name: "Ghost", slug: "ghost", slot: 1 },
            ],
          },
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
