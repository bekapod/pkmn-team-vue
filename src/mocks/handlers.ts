import { graphql } from "msw";
import { pikachu, charmander, haunter } from "@/data/mocks";
import type {
  CreateTeamMutation,
  CreateTeamMutationVariables,
  TeamByIdQuery,
  TeamByIdQueryVariables,
  UpdateTeamMutation,
  UpdateTeamMutationVariables,
  TeamFieldsFragment,
  PokemonFieldsFragment,
} from "../graphql";

const allMockedPokemon: PokemonFieldsFragment[] = [
  {
    ...pikachu,
    forms: {
      edges: [
        {
          node: {
            sprites: {
              frontDefault: {
                path: "/pikachu.png",
              },
            },
            types: {
              edges: pikachu.types.map(({ slot, name, slug }) => ({
                slot,
                node: { id: slug, slug, name },
              })),
            },
          },
        },
      ],
    },
    moves: {
      edges: [],
    },
  },
  {
    ...charmander,
    forms: {
      edges: [
        {
          node: {
            sprites: {
              frontDefault: {
                path: "/charmander.png",
              },
            },
            types: {
              edges: charmander.types.map(({ slot, name, slug }) => ({
                slot,
                node: { id: slug, slug, name },
              })),
            },
          },
        },
      ],
    },
    moves: {
      edges: [],
    },
  },
  {
    ...haunter,
    forms: {
      edges: [
        {
          node: {
            sprites: {
              frontDefault: {
                path: "/haunter.png",
              },
            },
            types: {
              edges: haunter.types.map(({ slot, name, slug }) => ({
                slot,
                node: { id: slug, slug, name },
              })),
            },
          },
        },
      ],
    },
    moves: {
      edges: [],
    },
  },
];

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
          pokemon: {
            ...allMockedPokemon[0],
            species: {
              pokedexId: pikachu.pokedexId,
              name: pikachu.name,
            },
          },
        },
      },
      {
        node: {
          id: "2",
          slot: 2,
          pokemon: {
            ...allMockedPokemon[0],
            species: {
              pokedexId: pikachu.pokedexId,
              name: pikachu.name,
            },
          },
        },
      },
    ],
  },
};

export const handlers = [
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
  graphql.mutation<UpdateTeamMutation, UpdateTeamMutationVariables>(
    "UpdateTeam",
    (req, res, ctx) => {
      return res(
        ctx.data({
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
                      // @ts-expect-error
                      Array.isArray(req.variables.membersToDelete)
                        ? // @ts-expect-error
                          !req.variables.membersToDelete.find(
                            (deleted: string) => deleted === member.node.id
                          )
                        : true
                    ) ?? []
                  : []),
                ...(Array.isArray(req.variables.input.members)
                  ? req.variables.input.members.map((member) => {
                      const pokemon = allMockedPokemon.find(
                        ({ id }) => id === member.pokemonId
                      )!;
                      return {
                        node: {
                          id: member.id!,
                          slot: member.slot!,
                          pokemon: {
                            ...pokemon,
                            species: {
                              pokedexId: pikachu.pokedexId,
                              name: pikachu.name,
                            },
                          },
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
];
