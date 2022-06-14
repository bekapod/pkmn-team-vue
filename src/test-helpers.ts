import { plugin as formkitPlugin, defaultConfig } from "@formkit/vue";
import { createTestingPinia } from "@pinia/testing";
import type { Plugin } from "vue";
import formkitConfig from "@/formkit.config";
import router from "@/router";

export const globalPlugins = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [formkitPlugin, defaultConfig({ config: formkitConfig })] as [Plugin, any],
  createTestingPinia(),
  router,
];
