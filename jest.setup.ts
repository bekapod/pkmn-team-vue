import "@testing-library/jest-dom";
import { config } from "@vue/test-utils";
import PokeBall from "./app/components/PokeBall.vue";

config.global.stubs["NuxtLink"] = {
  props: ["to"],
  template: `<a :href="to"><slot /></a>`,
};
config.global.stubs["PokeBall"] = PokeBall;
