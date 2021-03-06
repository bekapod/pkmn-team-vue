import { render, screen } from "@testing-library/vue";
import PokemonLine from "./PokemonLine.vue";
import { haunter } from "@/data/mocks";

const setup = (props = {}) =>
  render(PokemonLine, {
    props: {
      pokedexId: haunter.species.pokedexId,
      name: haunter.defaultForm.name,
      sprite: haunter.defaultSprite,
      types: haunter.types,
      ...props,
    },
  });

test("renders pokemon information", () => {
  setup();
  expect(screen.getByText(`#93 Haunter`)).toBeInTheDocument();
  expect(screen.getByAltText(`Haunter sprite`)).toHaveAttribute(
    "src",
    "https://res.cloudinary.com/difh5qveq/image/upload/t_pokemon_sprite/f_auto/v1644257162/pokemon/93.png"
  );
  expect(screen.getByText("Ghost")).toBeInTheDocument();
  expect(screen.getByText("Poison")).toBeInTheDocument();
});

test("adds type gradient", () => {
  const { container } = setup();
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveStyle({
    "--type-gradient":
      "linear-gradient(90deg, var(--colors-ghost) 0%, var(--colors-ghost) 50%, var(--colors-poison) 50%, var(--colors-poison) 100%)",
  });
});

test("adds outdent", () => {
  const { container } = setup({ outdent: "1rem" });
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveStyle({ "--outdent": "1rem" });
});

test("can render name as alternative element", () => {
  setup({ nameAs: "h1" });
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
