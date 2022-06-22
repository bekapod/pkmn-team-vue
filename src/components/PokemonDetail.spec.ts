import { render, screen, within } from "@testing-library/vue";
import PokemonDetail from "./PokemonDetail.vue";
import { haunter } from "@/data/mocks";

const setup = (props = {}) =>
  render(PokemonDetail, {
    props: {
      pokedexId: haunter.species.pokedexId,
      name: haunter.defaultForm.name,
      description: haunter.species.description,
      genus: haunter.species.genus,
      isBaby: haunter.species.isBaby,
      isLegendary: haunter.species.isLegendary,
      isMythical: haunter.species.isMythical,
      hp: haunter.hp,
      attack: haunter.attack,
      defense: haunter.defense,
      specialAttack: haunter.specialAttack,
      specialDefense: haunter.specialDefense,
      speed: haunter.speed,
      sprite: haunter.defaultSprite,
      abilities: haunter.abilities,
      moves: haunter.moves,
      types: haunter.types,
      ...props,
    },
  });

test("displays summary", () => {
  setup();
  expect(
    screen.getByRole("heading", { name: "#93 Haunter" })
  ).toBeInTheDocument();
});

test("displays genus", () => {
  setup();
  expect(screen.getByText(haunter.species.genus)).toBeInTheDocument();
});

test("displays description", () => {
  setup();
  expect(screen.getByText(/Its tongue is made of gas./)).toBeInTheDocument();
  expect(
    screen.getByText(/If you get the feeling of being watched/)
  ).toBeInTheDocument();
});

test("displays stats", () => {
  setup();
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByText(/^hp/i).nextSibling).toHaveTextContent(
    haunter.hp.toString()
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByText(/^sp\. atk/i).nextSibling).toHaveTextContent(
    haunter.specialAttack.toString()
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByText(/^sp\. def/i).nextSibling).toHaveTextContent(
    haunter.specialDefense.toString()
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByText(/^atk/i).nextSibling).toHaveTextContent(
    haunter.attack.toString()
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByText(/^def/i).nextSibling).toHaveTextContent(
    haunter.defense.toString()
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByText(/^spd/i).nextSibling).toHaveTextContent(
    haunter.speed.toString()
  );
});

test("displays abilities", () => {
  setup();
  expect(
    screen.getByRole("heading", { name: "Abilities" })
  ).toBeInTheDocument();
  expect(
    within(
      screen.getByRole("heading", { name: "Abilities" })
        .nextElementSibling as HTMLElement // eslint-disable-line testing-library/no-node-access
    ).getAllByRole("listitem")
  ).toHaveLength(haunter.abilities.length);
  expect(
    screen.getByText(haunter.abilities[0].ability.name)
  ).toBeInTheDocument();
});

test("displays moves", () => {
  setup();
  expect(screen.getByRole("heading", { name: "Moves" })).toBeInTheDocument();
  expect(
    within(
      screen.getByRole("heading", { name: "Moves" })
        .nextElementSibling as HTMLElement // eslint-disable-line testing-library/no-node-access
    ).getAllByRole("listitem")
  ).toHaveLength(haunter.moves.length);
  expect(screen.getByText(haunter.moves[0].move.name)).toBeInTheDocument();
});
