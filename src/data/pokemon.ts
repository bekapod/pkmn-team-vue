import type { Maybe, PokemonFieldsFragment } from "@/graphql";
import { z } from "zod";
import { Ability } from "./ability";
import { parsePokemonForm, PokemonForm } from "./pokemon-form";
import { parsePokemonSpecies, PokemonSpecies } from "./pokemon-species";
import { Type } from "./type";

export const Pokemon = z.object({
  id: z.string(),
  attack: z.number(),
  defense: z.number(),
  defaultForm: PokemonForm,
  forms: z.array(PokemonForm),
  hp: z.number(),
  isDefault: z.boolean(),
  slug: z.string(),
  specialAttack: z.number(),
  specialDefense: z.number(),
  species: PokemonSpecies,
  speed: z.number(),
  defaultSprite: z.string(),
  types: z.array(Type),
  abilities: z.array(Ability),
});
export type Pokemon = z.infer<typeof Pokemon>;

export const parsePokemon = (
  pokemon: Maybe<PokemonFieldsFragment> | undefined
) => {
  return Pokemon.parse({
    id: pokemon?.id,
    attack: pokemon?.attack,
    defense: pokemon?.defense,
    defaultForm: parsePokemonForm(
      pokemon?.forms.edges?.find((form) => form.node.isDefault)?.node
    ),
    forms: pokemon?.forms.edges?.map((form) => parsePokemonForm(form.node)),
    hp: pokemon?.hp,
    isDefault: pokemon?.isDefault,
    slug: pokemon?.slug,
    specialAttack: pokemon?.specialAttack,
    specialDefense: pokemon?.specialDefense,
    species: parsePokemonSpecies(pokemon?.species),
    speed: pokemon?.speed,
    defaultSprite: pokemon?.sprites.frontDefault?.path,
    types: pokemon?.types.edges?.map((type) => ({
      id: type.node.id,
      name: type.node.name,
      slug: type.node.slug,
      slot: type.slot,
    })),
    abilities:
      pokemon?.abilities?.edges?.map((ability) => ({
        id: ability.node.id,
        name: ability.node.name,
        slug: ability.node.slug,
        effect: ability.node.effect,
        slot: ability.slot,
        isHidden: ability.isHidden,
      })) ?? [],
  });
};
