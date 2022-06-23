import { z } from "zod";
import { parsePokemon } from "./pokemon";
import { TeamMember } from "./team-member";
import { parseTrainer, Trainer } from "./trainer";
import type { Maybe, TeamFieldsFragment } from "@/graphql";

export const Team = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  createdBy: Trainer,
  members: z.array(TeamMember),
});
export type Team = z.infer<typeof Team>;

export const parseTeam = (
  team: Maybe<TeamFieldsFragment> | undefined
): Team => {
  return Team.parse({
    id: team?.id,
    name: team?.name ?? "",
    createdAt: team?.createdAt ?? "",
    createdBy: parseTrainer(team?.createdBy),
    members: team?.members?.edges?.map((member) => ({
      id: member?.node?.id,
      slot: member?.node?.slot,
      pokemon: parsePokemon(member.node.pokemon),
    })),
  });
};
