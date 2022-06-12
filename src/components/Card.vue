<template>
  <article
    class="relative flex h-full transform-gpu flex-col transition-transform duration-300 ease-out motion-safe:focus-within:-translate-y-4 motion-safe:hover:-translate-y-4"
  >
    <header
      class="shadow-text type-gradient -mb-5 overflow-hidden rounded-tl-xl px-4 pb-5 text-white"
      :style="{
        '--type-gradient': getTypeGradient(types),
      } as any"
    >
      <h2
        class="overflow-hidden overflow-ellipsis whitespace-nowrap py-9 text-center text-2xl font-bold leading-5"
      >
        <RouterLink :to="to" class="text-current no-underline">
          <span class="absolute inset-0" aria-hidden="true" />
          <slot name="heading" />
        </RouterLink>
      </h2>
    </header>

    <div
      class="zig-zag-top-white mx-3 mt-3 flex flex-shrink flex-grow flex-col rounded-br-xl bg-white px-6"
    >
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { getTypeGradient } from "../lib/gradients";
import type { PropType } from "vue";

defineProps({
  to: {
    type: String,
    required: true,
  },
  types: {
    type: Array as PropType<string[]>,
    validator: (prop: string[]) =>
      Array.isArray(prop) && prop.every((e) => typeof e === "string"),
    required: false,
    default() {
      return [];
    },
  },
});
</script>
