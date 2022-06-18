import { z } from "zod";
import { Type } from "./type";
import { DamageClass, MoveLearnMethod, MoveTarget } from "@/graphql";

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
  type: Type.omit({ slot: true }),
  learnMethod: z.nativeEnum(MoveLearnMethod),
  levelLearnedAt: z.number(),
});
export type Move = z.infer<typeof Move>;
