import { z } from "zod";
import { Pokemon } from "./pokemon";
import { TeamMemberMove } from "./team-member-move";

export const TeamMember = z.object({
  id: z.string(),
  slot: z.number(),
  pokemon: Pokemon,
  moves: z.array(TeamMemberMove).optional(),
});
export type TeamMember = z.infer<typeof TeamMember>;
