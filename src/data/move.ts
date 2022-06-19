import { z } from "zod";
import { parseType, Type } from "./type";
import {
  DamageClass,
  MoveLearnMethod,
  MoveTarget,
  type MoveFieldsFragment,
} from "@/graphql";

export const Move = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  accuracy: z.number().optional(),
  pp: z.number().optional(),
  power: z.number().optional(),
  damageClass: z.nativeEnum(DamageClass).optional(),
  effect: z.string().optional(),
  effectChance: z.number().optional(),
  target: z.nativeEnum(MoveTarget),
  type: Type,
});
export type Move = z.infer<typeof Move>;

export const parseMove = (move: MoveFieldsFragment) => {
  return Move.parse({
    id: move.id,
    name: move.name,
    slug: move.slug,
    accuracy: move.accuracy ?? undefined,
    pp: move.pp ?? undefined,
    power: move.power ?? undefined,
    damageClass: move.damageClass ?? undefined,
    effect: move.effect ?? undefined,
    effectChance: move.effectChance ?? undefined,
    target: move.target,
    type: parseType(move.type),
  });
};
