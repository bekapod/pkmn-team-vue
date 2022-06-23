import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import PokemonSearch from "./PokemonSearch.vue";
import { pikachu } from "@/data/mocks";
import { useSearch } from "@/stores";
import { globalPlugins } from "@/test-helpers";

const setup = () => {
  return render(PokemonSearch, {
    global: {
      plugins: globalPlugins,
    },
  });
};

test("displays search results", async () => {
  setup();
  expect(await screen.findByText("#25 Alola Cap Pikachu")).toBeInTheDocument();
});

test("displays type filter", async () => {
  setup();
  userEvent.click(screen.getByRole("button", { name: /filter by type/i }));
  expect(await screen.findByRole("listbox")).toBeInTheDocument();
  expect(
    screen.getByRole("option", { name: /water 115/i })
  ).toBeInTheDocument();
});

test("displays details of selected pokemon", async () => {
  const search = useSearch();
  search.selectedPokemon = pikachu;
  search.selectPokemon = vitest.fn();
  setup();
  userEvent.click(
    await screen.findByRole("button", { name: /Alola Cap Pikachu/ })
  );
  expect(search.selectPokemon).toHaveBeenCalledWith(pikachu.id);
  expect(screen.getByText(pikachu.species.genus)).toBeInTheDocument();
});
