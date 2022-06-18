import { z } from "zod";
import { Pokemon } from "./pokemon";
import { TeamMemberMove } from "./team-member-move";

export const TeamMember = z.object({
  id: z.string(),
  slot: z.number(),
  pokemon: z.union([
    Pokemon,
    z.object({ pokedexId: z.string(), name: z.string() }),
  ]),
  moves: z.array(TeamMemberMove).optional(),
});
export type TeamMember = z.infer<typeof TeamMember>;
