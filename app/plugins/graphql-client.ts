import { defineNuxtPlugin } from "#app";
import { client } from "@/lib";

export default defineNuxtPlugin(_nuxtApp => {
  return {
    provide: {
      graphQLClient: client,
    },
  };
});
