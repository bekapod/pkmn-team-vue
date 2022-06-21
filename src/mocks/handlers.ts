import { charmanderFields, haunterFields, pikachuFields } from "@/data/mocks";
import { graphql, rest } from "msw";
import type {
  TeamByIdQuery,
  TeamByIdQueryVariables,
  UpdateTeamMutation,
  UpdateTeamMutationVariables,
  TeamFieldsFragment,
} from "../graphql";
import algoliaMock from "./algolia.json";

const team: TeamFieldsFragment = {
  __typename: "Team" as const,
  id: "1",
  name: "A team name!",
  createdAt: new Date(Date.now()).toISOString(),
  createdBy: {
    __typename: "Trainer" as const,
    id: "TRA123",
    username: "A user",
    picture: "https://placey.bekapod.codes/g/120/120/ffffff/000000",
  },
  members: {
    edges: [
      {
        node: {
          id: "1",
          slot: 1,
          pokemon: pikachuFields,
        },
      },
      {
        node: {
          id: "2",
          slot: 2,
          pokemon: haunterFields,
        },
      },
    ],
  },
};

export const handlers = {
  me: [
    graphql.query("Me", (req, res, ctx) => {
      return res(
        ctx.data({
          me: {
            __typename: "Trainer",
            id: "TRA123",
            username: "A user",
            picture: "https://placey.bekapod.codes/g/120/120/ffffff/000000",
          },
        })
      );
    }),
  ],
  teamById: [
    graphql.query<TeamByIdQuery, TeamByIdQueryVariables>(
      "TeamById",
      (req, res, ctx) => {
        return res(
          ctx.data({
            team: { ...team, id: req.variables.id },
          })
        );
      }
    ),
  ],
  createTeam: [
    graphql.mutation("CreateTeam", (req, res, ctx) => {
      return res(
        ctx.data({
          createTeam: {
            __typename: "Team",
            id: "ckzomjy5z00004kvg5ux6fy0c",
            name: req.variables.input.name,
            createdAt: new Date(Date.now()).toISOString(),
            updatedAt: new Date(Date.now()).toISOString(),
            members: {
              edges: [],
            },
            createdBy: {
              __typename: "Trainer",
              id: "TRA123",
              username: "A user",
              picture: "https://placey.bekapod.codes/g/120/120/ffffff/000000",
            },
          },
        })
      );
    }),
  ],
  updateTeam: [
    graphql.mutation<UpdateTeamMutation, UpdateTeamMutationVariables>(
      "UpdateTeam",
      (req, res, ctx) => {
        return res(
          ctx.data({
            removeTeamMembers: Array.isArray(req.variables.removedIds)
              ? req.variables.removedIds.map((id) => ({ id }))
              : req.variables.removedIds
              ? [{ id: req.variables.removedIds }]
              : [],
            updateTeam: {
              __typename: "Team",
              id: req.variables.input.id,
              name: req.variables.input.name ?? team.name,
              createdAt: new Date(Date.now()).toISOString(),
              createdBy: team.createdBy,
              members: {
                edges: [
                  ...(!req.variables.input.members
                    ? team.members.edges?.filter((member) =>
                        Array.isArray(req.variables.removedIds)
                          ? !req.variables.removedIds.find(
                              (id) => id === member.node.id
                            )
                          : true
                      ) ?? []
                    : []),
                  ...(Array.isArray(req.variables.input.members)
                    ? req.variables.input.members.map((member) => {
                        const pokemon = [
                          pikachuFields,
                          haunterFields,
                          charmanderFields,
                        ].find(({ id }) => id === member.pokemonId)!;
                        return {
                          node: {
                            id: member.id!,
                            slot: member.slot!,
                            pokemon: pokemon,
                          },
                        };
                      })
                    : []),
                ],
              },
            },
          })
        );
      }
    ),
  ],
  algolia: [
    rest.post("https://*.algolia*", (req, res, ctx) => {
      return res(ctx.json(algoliaMock));
    }),
  ],
};
