<template>
  <div
    class="pokemon-line-template relative flex items-center h-20"
    :style="{
      '--outdent': outdent,
      '--type-gradient': getTypeGradient(sortedTypes.map(t => t.slug)),
    } as any"
  >
    <img
      v-if="sprite"
      :src="config.cloudinaryBasePath + 'pokemon/' + sprite"
      :alt="`${name} sprite`"
      width="72"
      height="72"
    />
    <div class="ml-4">
      <div class="mb-2 font-bold text-md leading-none">
        #{{ pokedexId }} {{ name }}
      </div>
      <ul class="flex flex-wrap gap-3">
        <li v-for="type in sortedTypes" :key="type.slug">
          <TypeTag :name="type.name" :slug="type.slug" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { sortBySlot } from "../lib/general";
import { getTypeGradient } from "../lib/gradients";
import TypeTag from "./TypeTag.vue";

const config = useRuntimeConfig();

const props = defineProps({
  pokedexId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sprite: {
    type: String,
    required: false,
    default: undefined,
  },
  types: {
    type: Array as PropType<{ name: string; slug: string; slot: number }[]>,
    validator: (prop: { name: string; slug: string; slot: number }[]) =>
      Array.isArray(prop) &&
      prop.every(
        e =>
          typeof e.name === "string" &&
          typeof e.slug === "string" &&
          typeof e.slot === "number",
      ),
    required: false,
    default() {
      return [];
    },
  },
  outdent: {
    type: String,
    required: false,
    default: undefined,
  },
});

const sortedTypes = sortBySlot(props.types);
</script>
