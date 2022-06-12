import * as Sentry from "@sentry/vue";
import { defineStore } from "pinia";
import type { Team } from "@/data";
import { parseTeam } from "@/data";
import { getSdk } from "@/graphql";
import { client } from "@/lib";

export const useTeams = defineStore("teams", {
  state: () => {
    return { list: [] as Team[] };
  },
  actions: {
    async getTeams() {
      try {
        const data = await getSdk(client).AllTeams();
        const parsedTeams =
          data.teams.edges?.map((team) => parseTeam(team.node)) ?? [];
        this.$state.list = parsedTeams;
        this.list = parsedTeams;

        return { error: null, data: parsedTeams };
      } catch (error) {
        Sentry.captureException(error, {
          level: "error",
          extra: {
            name,
          },
        });
        return { error, data: null };
      }
    },
  },
});
