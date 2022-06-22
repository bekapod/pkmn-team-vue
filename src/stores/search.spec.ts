import { pikachu } from "@/data/mocks";
import { setActivePinia, createPinia, type PiniaPluginContext } from "pinia";
import { createApp } from "vue";
import { useSearch } from "./search";
import { useTeams } from "./teams";

vitest.useFakeTimers();

describe("useSearch", () => {
  beforeEach(() => {
    const app = createApp({});
    const pinia = createPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });

  test("setting selected Pokemon", async () => {
    const search = useSearch();
    await search.selectPokemon(pikachu.id);
    expect(search.selectedPokemon).toEqual(pikachu);
  });

  test("clearing selected Pokemon", () => {
    const search = useSearch();
    search.selectedPokemon = pikachu;
    search.clearSelectedPokemon();
    expect(search.selectedPokemon).toBeNull();
  });
});
