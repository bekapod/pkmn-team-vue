import { z } from "zod";

export const Type = z.object({
  name: z.string(),
  slug: z.string(),
  slot: z.number(),
});
export type Type = z.infer<typeof Type>;

export const Pokemon = z.object({
  pokedexId: z.number(),
  name: z.string(),
  sprite: z.string(),
  types: z.array(Type),
});
export type Pokemon = z.infer<typeof Pokemon>;

export const TeamMember = z.object({
  id: z.string(),
  pokemon: Pokemon,
});
export type TeamMember = z.infer<typeof TeamMember>;

export const Team = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  members: z.array(TeamMember),
});
export type Team = z.infer<typeof Team>;
