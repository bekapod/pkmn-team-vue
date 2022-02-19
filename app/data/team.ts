import { z } from "zod";
import { TeamMember } from "./team-member";
import { Maybe, Team as TeamGQL } from "@/graphql";
import { Severity } from "@sentry/vue";

export const Team = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  members: z.array(TeamMember),
});
export type Team = z.infer<typeof Team>;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const parseTeam = (
  team: Maybe<DeepPartial<TeamGQL>> | undefined,
  { $sentry }: { $sentry: any },
) => {
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
