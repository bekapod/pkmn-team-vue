/* eslint-disable @typescript-eslint/ban-ts-comment */
import "@testing-library/jest-dom";
import { config } from "@vue/test-utils";
import PokeBall from "./app/components/PokeBall.vue";

// @ts-ignore
config.global.stubs["NuxtLink"] = {
  props: ["to"],
  template: `<a :href="to"><slot /></a>`,
};
// @ts-ignore
config.global.stubs["PokeBall"] = PokeBall;
