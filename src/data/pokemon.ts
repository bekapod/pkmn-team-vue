import {
  MoveLearnMethod,
  type Maybe,
  type PokemonFieldsFragment,
} from "@/graphql";
import { z } from "zod";
import { Ability, parseAbility } from "./ability";
import { Move, parseMove } from "./move";
import { parsePokemonForm, PokemonForm } from "./pokemon-form";
import { parsePokemonSpecies, PokemonSpecies } from "./pokemon-species";
import { parseType, Type } from "./type";

export const PokemonMove = z.object({
  id: z.string(),
  move: Move,
  learnMethod: z.nativeEnum(MoveLearnMethod),
  levelLearnedAt: z.number(),
});
export type PokemonMove = z.infer<typeof PokemonMove>;

export const PokemonAbility = z.object({
  id: z.string(),
  slot: z.number(),
  isHidden: z.boolean(),
  ability: Ability,
});
export type PokemonAbility = z.infer<typeof PokemonAbility>;

export const PokemonType = z.object({
  id: z.string(),
  slot: z.number(),
  type: Type,
});
export type PokemonType = z.infer<typeof PokemonType>;

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
  defaultSprite: z.string().optional(),
  types: z.array(PokemonType),
  abilities: z.array(PokemonAbility),
  moves: z.array(PokemonMove),
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
    defaultSprite: pokemon?.sprites.frontDefault?.path ?? undefined,
    types: pokemon?.types.edges?.map((type) => ({
      id: type.id,
      slot: type.slot,
      type: parseType(type.node),
    })),
    abilities:
      pokemon?.abilities?.edges?.map((ability) => ({
        id: ability.id,
        slot: ability.slot,
        isHidden: ability.isHidden,
        ability: parseAbility(ability.node),
      })) ?? [],
    moves:
      pokemon?.moves?.edges?.map((move) => ({
        id: move.id,
        learnMethod: move.learnMethod,
        levelLearnedAt: move.levelLearnedAt,
        move: parseMove(move.node),
      })) ?? [],
  });
};
