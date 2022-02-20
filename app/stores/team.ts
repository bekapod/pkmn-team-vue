import { defineStore } from "pinia";
import { getSdk } from "@/graphql";
import { parseTeam } from "@/data";
import { Team } from "../data";

export const useTeam = defineStore("team", {
  state: () => {
    return {} as Team;
  },
  actions: {
    async getTeam(id: string) {
      const data = await getSdk(this.$nuxt.$graphQLClient).TeamById({
        id,
      });
      const parsed = parseTeam(data.teamById, { $sentry: this.$nuxt.$sentry });
      this.$state = parsed;
      this.id = parsed.id;
      this.name = parsed.name;
      this.members = parsed.members;
      this.createdAt = parsed.createdAt;
    },
    async setTeamName(name: string) {
      const data = await getSdk(this.$nuxt.$graphQLClient).UpdateTeam({
        id: this.id,
        name: name,
        membersToDelete: [],
      });
      const parsed = parseTeam(data.updateTeam, {
        $sentry: this.$nuxt.$sentry,
      });
      this.name = parsed.name;
      return parsed.name;
    },
  },
});
