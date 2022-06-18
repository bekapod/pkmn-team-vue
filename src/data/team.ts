import { z } from "zod";
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
      pokemon: {
        id: member?.node?.pokemon.id,
        pokedexId: member?.node?.pokemon.species.pokedexId,
        name: member?.node?.pokemon.species.name,
        sprite: member?.node?.pokemon?.sprites.frontDefault?.path,
        hp: member?.node?.pokemon?.hp,
        attack: member?.node?.pokemon?.attack,
        defense: member?.node?.pokemon?.defense,
        specialAttack: member?.node?.pokemon?.specialAttack,
        specialDefense: member?.node?.pokemon?.specialDefense,
        speed: member?.node?.pokemon?.speed,
        types: member?.node?.pokemon?.forms?.edges?.[0].node.types?.edges?.map(
          (type) => ({
            name: type?.node?.name,
            slug: type?.node?.slug,
            slot: type?.slot,
          })
        ),
      },
    })),
  });
};
