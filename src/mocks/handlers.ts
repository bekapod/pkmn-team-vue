import { graphql } from "msw";

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
];
