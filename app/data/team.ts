import { z } from "zod";
import { TeamMember } from "./team-member";
import { Maybe, TeamFieldsFragment } from "@/graphql";
import { Severity } from "@sentry/vue";

export const Team = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  members: z.array(TeamMember),
});
export type Team = z.infer<typeof Team>;

export const parseTeam = (
  team: Maybe<TeamFieldsFragment> | undefined,
  { $sentry }: { $sentry: any },
): Team => {
  try {
    return Team.parse({
      id: team?.id,
      name: team?.name ?? "",
      createdAt: team?.createdAt ?? "",
      members: team?.members?.edges?.map(member => ({
        id: member?.node?.id,
        pokemon: {
          pokedexId: member?.node?.pokemon?.pokedexId,
          name: member?.node?.pokemon?.name,
          sprite: member?.node?.pokemon?.sprite?.replace(
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/",
            "",
          ),
          hp: member?.node?.pokemon?.hp,
          attack: member?.node?.pokemon?.attack,
          defense: member?.node?.pokemon?.defense,
          specialAttack: member?.node?.pokemon?.specialAttack,
          specialDefense: member?.node?.pokemon?.specialDefense,
          speed: member?.node?.pokemon?.speed,
          types: member?.node?.pokemon?.types?.edges?.map(type => ({
            name: type?.node?.name,
            slug: type?.node?.slug,
            slot: type?.slot,
          })),
        },
        moves: member?.node?.moves?.edges?.map(move => ({
          id: move?.id,
          slot: move?.slot,
          learnMethod: move?.learnMethod,
          levelLearnedAt: move?.levelLearnedAt ?? undefined,
          move: {
            id: move?.node?.id,
            name: move?.node?.name,
            slug: move?.node?.slug,
            accuracy: move?.node?.accuracy ?? undefined,
            pp: move?.node?.pp,
            power: move?.node?.power ?? undefined,
            damageClass: move?.node?.damageClass,
            effect: move?.node?.effect ?? undefined,
            effectChance: move?.node?.effectChance ?? undefined,
            target: move?.node?.target,
            type: {
              name: move?.node?.type?.name,
              slug: move?.node?.type?.slug,
            },
          },
        })),
      })),
    });
  } catch (err) {
    $sentry.captureException(err, {
      level: Severity.Error,
      extra: {
        team,
      },
    });
    throw err;
  }
};
