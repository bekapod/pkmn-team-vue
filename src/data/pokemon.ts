import { z } from "zod";
import { Type } from "./type";

export const Pokemon = z.object({
  id: z.string(),
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
