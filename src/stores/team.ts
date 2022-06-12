import * as Sentry from "@sentry/vue";
import { defineStore } from "pinia";
import { useToasts } from "./toasts";
import type { Team } from "@/data";
import { parseTeam } from "@/data";
import { getSdk } from "@/graphql";
import { client } from "@/lib";

export const useTeam = defineStore("team", {
  state: () => {
    return {
      id: undefined,
      name: undefined,
      members: [],
      createdAt: undefined,
    } as Partial<Team>;
  },
  actions: {
    async getTeam(id: string) {
      if (this.id === id) return { error: null, data: this.$state };

      try {
        this.$reset();
        const data = await getSdk(client).TeamById({
          id,
        });
        const parsed = parseTeam(data.team);
        this.$state = parsed;

        return { error: null, data: parsed };
      } catch (error) {
        Sentry.captureException(error, {
          level: "error",
          extra: {
            id,
          },
        });
        return { error, data: null };
      }
    },
    async setTeamName(name: string) {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while updating your team name.",
      } as const;
      const successToast = {
        type: "success",
        title: "Team name updated!",
        content: "Your team has been successfully renamed.",
      } as const;

      toasts.removeToast(errorToast);
      toasts.removeToast(successToast);

      if (this.id) {
        try {
          const data = await getSdk(client).UpdateTeam({
            input: {
              id: this.id,
              name: name,
            },
          });
          const parsed = parseTeam(data.updateTeam);
          this.name = parsed.name;
          toasts.addToast(successToast);
          return { error: null, data: parsed.name };
        } catch (error) {
          Sentry.captureException(error, {
            level: "error",
            extra: {
              id: this.id,
              name,
            },
          });
          toasts.addToast(errorToast);
          return { error, data: null };
        }
      } else {
        Sentry.captureMessage("Tried to set team name without team being set", {
          level: "error",
          extra: {
            name,
          },
        });
        toasts.addToast(errorToast);
        return { error: "Team has not been set", data: null };
      }
    },
    async createTeam(name: string) {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while creating your team.",
      } as const;
      const successToast = {
        type: "success",
        title: "Team created!",
        content: "Your team has been successfully created.",
      } as const;

      toasts.removeToast(errorToast);
      toasts.removeToast(successToast);

      try {
        const data = await getSdk(client).CreateTeam({
          input: {
            name: name,
            members: [],
          },
        });
        const parsed = parseTeam(data.createTeam);
        this.$state = parsed;
        toasts.addToast(successToast);
        return { error: null, data: parsed };
      } catch (error) {
        Sentry.captureException(error, {
          level: "error",
          extra: {
            name,
          },
        });
        toasts.addToast(errorToast);
        return { error, data: null };
      }
    },
    async removeTeam() {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while deleting your team.",
      } as const;
      const successToast = {
        type: "success",
        title: "Team deleted!",
        content: "Your team has been successfully deleted.",
      } as const;

      toasts.removeToast(errorToast);
      toasts.removeToast(successToast);

      if (this.id) {
        try {
          const data = await getSdk(client).RemoveTeam({
            id: this.id,
          });
          const parsed = parseTeam(data.removeTeam);
          this.$state = parsed;
          toasts.addToast(successToast);
          return { error: null, data: parsed };
        } catch (error) {
          Sentry.captureException(error, {
            level: "error",
            extra: {
              id: this.id,
            },
          });
          toasts.addToast(errorToast);
          return { error, data: null };
        }
      } else {
        Sentry.captureMessage("Tried to set team name without team being set", {
          level: "error",
        });
        toasts.addToast(errorToast);
        return { error: "Team has not been set", data: null };
      }
    },
  },
});
