<template>
  <article
    class="flex flex-col h-full relative transform-gpu motion-safe:hover:-translate-y-4 motion-safe:focus-within:-translate-y-4 transition-transform duration-300 ease-out"
  >
    <header
      class="overflow-hidden -mb-5 px-4 pb-5 text-white rounded-tl-xl shadow-text"
      :style="headerStyle"
    >
      <h2
        class="overflow-hidden py-7 text-2xl font-bold text-center overflow-ellipsis whitespace-nowrap leading-5"
      >
        <NuxtLink :to="to" class="text-current no-underline">
          <span class="absolute inset-0" aria-hidden="true" />
          <slot name="heading" />
        </NuxtLink>
      </h2>
    </header>

    <div
      class="flex flex-col flex-grow flex-shrink mx-3 mt-3 px-6 bg-white rounded-br-xl zig-zag-top-white"
    >
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { getTypeGradient } from "../lib/gradients";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  types: {
    type: Array as PropType<string[]>,
    validator: (prop: string[]) =>
      Array.isArray(prop) && prop.every(e => typeof e === "string"),
    required: false,
    default() {
      return [];
    },
  },
});

const typeGradient = getTypeGradient(props.types ?? []);
const headerStyle = typeGradient
  ? `background-image: ${typeGradient}`
  : undefined;
</script>
