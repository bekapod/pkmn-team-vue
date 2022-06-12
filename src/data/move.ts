import { z } from "zod";
import { Type } from "./type";
import { DamageClass, MoveTarget } from "@/graphql";

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
  type: Type.omit({ slot: true }),
});
export type Move = z.infer<typeof Move>;
