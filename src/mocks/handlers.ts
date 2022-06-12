import { graphql } from "msw";

export const handlers = [
  graphql.query("TeamById", (req, res, ctx) => {
    return res(
      ctx.data({
        team: {
          __typename: "Team",
          id: req.variables.id,
          name: "A team name!",
          createdAt: new Date(Date.now()).toISOString(),
          updatedAt: new Date(Date.now()).toISOString(),
          members: {
            edges: [],
          },
        },
      })
    );
  }),
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
        },
      })
    );
  }),
  graphql.mutation("UpdateTeam", (req, res, ctx) => {
    return res(
      ctx.data({
        updateTeam: {
          __typename: "Team",
          id: req.variables.input.id,
          name: req.variables.input.name,
          createdAt: new Date(Date.now()).toISOString(),
          updatedAt: new Date(Date.now()).toISOString(),
          members: {
            edges: [],
          },
        },
      })
    );
  }),
];
