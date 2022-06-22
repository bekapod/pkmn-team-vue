import {
  charmanderFields,
  haunterFields,
  hoOhFields,
  jirachiFields,
  pichuFields,
  pikachuFields,
  teamAFields,
  teamBFields,
} from "@/data/mocks";
import cuid from "cuid";
import { graphql, rest } from "msw";
import type {
  TeamByIdQuery,
  TeamByIdQueryVariables,
  UpdateTeamMutation,
  UpdateTeamMutationVariables,
  AllTeamsQuery,
  AllTeamsQueryVariables,
  PokemonByIdQuery,
  PokemonByIdQueryVariables,
} from "../graphql";
import algoliaMock from "./algolia.json";

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
  allTeams: [
    graphql.query<AllTeamsQuery, AllTeamsQueryVariables>(
      "AllTeams",
      (_req, res, ctx) => {
        return res(
          ctx.data({
            teams: {
              edges: [{ node: teamAFields }, { node: teamBFields }],
            },
          })
        );
      }
    ),
  ],
  teamById: [
    graphql.query<TeamByIdQuery, TeamByIdQueryVariables>(
      "TeamById",
      (req, res, ctx) => {
        const teamFields =
          req.variables.id === teamBFields.id ? teamBFields : teamAFields;
        return res(
          ctx.data({
            team: { ...teamFields, id: req.variables.id },
          })
        );
      }
    ),
  ],
  pokemonById: [
    graphql.query<PokemonByIdQuery, PokemonByIdQueryVariables>(
      "PokemonById",
      (req, res, ctx) => {
        const pokemon = {
          [pikachuFields.id]: pikachuFields,
          [charmanderFields.id]: charmanderFields,
          [haunterFields.id]: haunterFields,
          [jirachiFields.id]: jirachiFields,
          [hoOhFields.id]: hoOhFields,
          [pichuFields.id]: pichuFields,
        };
        return res(
          ctx.data({
            pokemonOne: pokemon[req.variables.id],
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
        const teamFields =
          req.variables.input.id === teamBFields.id ? teamBFields : teamAFields;

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
              name: req.variables.input.name ?? teamFields.name,
              createdAt: new Date(Date.now()).toISOString(),
              createdBy: teamFields.createdBy,
              members: {
                edges: [
                  ...(!req.variables.input.members
                    ? teamFields.members.edges?.filter((member) =>
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
                            id: member.id ?? cuid(),
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
