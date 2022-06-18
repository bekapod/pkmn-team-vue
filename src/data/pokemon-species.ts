import {
  Color,
  Habitat,
  Shape,
  type Maybe,
  type PokemonSpeciesFieldsFragment,
} from "@/graphql";
import { z } from "zod";

export const PokemonSpecies = z.object({
  id: z.string(),
  color: z.nativeEnum(Color),
  description: z.string(),
  genus: z.string(),
  habitat: z.nativeEnum(Habitat).optional(),
  isBaby: z.boolean(),
  isLegendary: z.boolean(),
  isMythical: z.boolean(),
  name: z.string(),
  pokedexId: z.number(),
  shape: z.nativeEnum(Shape).optional(),
  slug: z.string(),
});
export type PokemonSpecies = z.infer<typeof PokemonSpecies>;

export const parsePokemonSpecies = (
  species: Maybe<PokemonSpeciesFieldsFragment> | undefined
) => {
  return PokemonSpecies.parse({
    id: species?.id,
    color: species?.color,
    description: species?.description,
    genus: species?.genus,
    habitat: species?.habitat ?? undefined,
    isBaby: species?.isBaby,
    isLegendary: species?.isLegendary,
    isMythical: species?.isMythical,
    name: species?.name,
    pokedexId: species?.pokedexId,
    shape: species?.shape ?? undefined,
    slug: species?.slug,
  });
};
