import { z } from "zod";
import type { Maybe, PokemonFormFieldsFragment } from "@/graphql";

export const PokemonForm = z.object({
  id: z.string(),
  formName: z.string().optional(),
  isBattleOnly: z.boolean(),
  isDefault: z.boolean(),
  name: z.string(),
  slug: z.string(),
});
export type PokemonForm = z.infer<typeof PokemonForm>;

export const parsePokemonForm = (
  pokemonForm: Maybe<PokemonFormFieldsFragment> | undefined
) => {
  return PokemonForm.parse({
    id: pokemonForm?.id,
    formName: pokemonForm?.formName ?? undefined,
    isBattleOnly: pokemonForm?.isBattleOnly,
    isDefault: pokemonForm?.isDefault,
    name: pokemonForm?.name,
    slug: pokemonForm?.slug,
  });
};
