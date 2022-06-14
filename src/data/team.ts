import { z } from "zod";
import { TeamMember } from "./team-member";
import type { Maybe, TeamFieldsFragment } from "@/graphql";
import { parseTrainer, Trainer } from "./trainer";

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
      pokemon: {
        pokedexId: member?.node?.pokemon.species.pokedexId,
        name: member?.node?.pokemon.species.name,
        sprite:
          member?.node?.pokemon?.forms.edges?.[0].node?.sprites.frontDefault?.path?.replace(
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/",
            ""
          ),
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
      // moves: member?.node?.moves?.edges?.map(move => ({
      //   id: move?.id,
      //   slot: move?.slot,
      //   learnMethod: move?.learnMethod,
      //   levelLearnedAt: move?.levelLearnedAt ?? undefined,
      //   move: {
      //     id: move?.node?.id,
      //     name: move?.node?.name,
      //     slug: move?.node?.slug,
      //     accuracy: move?.node?.accuracy ?? undefined,
      //     pp: move?.node?.pp,
      //     power: move?.node?.power ?? undefined,
      //     damageClass: move?.node?.damageClass,
      //     effect: move?.node?.effect ?? undefined,
      //     effectChance: move?.node?.effectChance ?? undefined,
      //     target: move?.node?.target,
      //     type: {
      //       name: move?.node?.type?.name,
      //       slug: move?.node?.type?.slug,
      //     },
      //   },
      // })),
    })),
  });
};
