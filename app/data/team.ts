import { z } from "zod";
import { TeamMember } from "./team-member";

export const Team = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  members: z.array(TeamMember),
});
export type Team = z.infer<typeof Team>;
