import { z } from "zod";
import { DamageClass, MoveLearnMethod, MoveTarget } from "~~/generated";

export const Type = z.object({
  name: z.string(),
  slug: z.string(),
  slot: z.number().optional().default(0),
});
export type Type = z.infer<typeof Type>;

export const Pokemon = z.object({
  pokedexId: z.number(),
  name: z.string(),
  sprite: z.string(),
  types: z.array(Type),
  hp: z.number(),
  attack: z.number(),
  defense: z.number(),
  specialAttack: z.number(),
  specialDefense: z.number(),
  speed: z.number(),
});
export type Pokemon = z.infer<typeof Pokemon>;

export const Move = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  accuracy: z.number().optional(),
  pp: z.number().optional(),
  power: z.number().optional(),
  damageClass: z.nativeEnum(DamageClass),
  effect: z.string().optional(),
  effectChance: z.number().optional(),
  target: z.nativeEnum(MoveTarget),
  type: Type,
});
export type Move = z.infer<typeof Move>;

export const TeamMemberMove = z.object({
  id: z.string(),
  slot: z.number(),
  levelLearnedAt: z.number(),
  learnMethod: z.nativeEnum(MoveLearnMethod),
  move: Move,
});
export type TeamMemberMove = z.infer<typeof TeamMemberMove>;

export const TeamMember = z.object({
  id: z.string(),
  pokemon: Pokemon,
  moves: z.array(TeamMemberMove).optional(),
});
export type TeamMember = z.infer<typeof TeamMember>;

export const Team = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  members: z.array(TeamMember),
});
export type Team = z.infer<typeof Team>;
