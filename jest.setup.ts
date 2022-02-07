/* eslint-disable @typescript-eslint/ban-ts-comment */
import "@testing-library/jest-dom";
import { config } from "@vue/test-utils";
import { publicRuntimeConfig } from "./config";

// @ts-ignore
window.useRuntimeConfig = () => ({
  ...publicRuntimeConfig,
});

// @ts-ignore
config.global.stubs["NuxtLink"] = {
  props: ["to"],
  template: `<a :href="to"><slot /></a>`,
};
