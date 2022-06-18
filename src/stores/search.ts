import * as Sentry from "@sentry/vue";
import { defineStore } from "pinia";
import { parsePokemon, parseTrainer, Pokemon, type Trainer } from "@/data";
import { getSdk, type Maybe } from "@/graphql";
import { client } from "@/lib";
import { useToasts } from "./toasts";

type SearchState = {
  selectedPokemon: Maybe<Pokemon>;
};

export const useSearch = defineStore("search", {
  state: (): SearchState => {
    return {
      selectedPokemon: null,
    };
  },
  actions: {
    async selectPokemon(id: string) {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while loading that pokemon.",
      } as const;

      toasts.removeToast(errorToast);

      try {
        const data = await getSdk(client).PokemonById({ id });
        const pokemon = parsePokemon(data.pokemonOne);
        this.selectedPokemon = pokemon;

        return { error: null, data: pokemon };
      } catch (error) {
        toasts.addToast(errorToast);
        Sentry.captureException(error, {
          level: "error",
        });
        return { error, data: null };
      }
    },
  },
});
