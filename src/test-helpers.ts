import { plugin as formkitPlugin, defaultConfig } from "@formkit/vue";
import { createTestingPinia } from "@pinia/testing";
import type { Plugin } from "vue";
import formkitConfig from "@/formkit.config";
import router from "@/router";

export const globalPlugins = [
  [formkitPlugin, defaultConfig({ config: formkitConfig })] as [Plugin, any],
  createTestingPinia(),
  router,
];
