import {
  charmanderFields,
  haunterFields,
  hoOhFields,
  jirachiFields,
  pichuFields,
  pikachuFields,
} from "./pokemon";
import type { TeamFieldsFragment } from "@/graphql";

export const teamAFields: TeamFieldsFragment = {
  id: "1",
  name: "Team A",
  createdAt: new Date(Date.now()).toISOString(),
  createdBy: {
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

export const teamBFields: TeamFieldsFragment = {
  id: "2",
  name: "Team B",
  createdAt: new Date(Date.now()).toISOString(),
  createdBy: {
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
          pokemon: jirachiFields,
        },
      },
      {
        node: {
          id: "3",
          slot: 2,
          pokemon: haunterFields,
        },
      },
      {
        node: {
          id: "4",
          slot: 2,
          pokemon: hoOhFields,
        },
      },
      {
        node: {
          id: "5",
          slot: 2,
          pokemon: charmanderFields,
        },
      },
      {
        node: {
          id: "6",
          slot: 2,
          pokemon: pichuFields,
        },
      },
    ],
  },
};
