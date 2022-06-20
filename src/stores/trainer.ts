import * as Sentry from "@sentry/vue";
import { defineStore } from "pinia";
import { parseTrainer, type Trainer } from "@/data";
import { getSdk } from "@/graphql";
import { authInstance, client } from "@/lib";

export const useTrainer = defineStore("trainer", {
  state: () => {
    return {
      id: undefined,
      picture: undefined,
      username: undefined,
    } as Partial<Trainer>;
  },
  actions: {
    async getMe() {
      try {
        const token = await authInstance.getAccessTokenSilently();
        const data = await getSdk(client).Me({}, { token });
        const parsedMe = parseTrainer(data.me);
        this.$state = parsedMe;

        return { error: null, data: parsedMe };
      } catch (error) {
        Sentry.captureException(error, {
          level: "error",
        });
        return { error, data: null };
      }
    },
  },
});
