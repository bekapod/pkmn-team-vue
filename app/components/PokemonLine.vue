<template>
  <div
    class="pokemon-line-template relative flex items-center h-24"
    :style="{
      '--outdent': outdent,
      '--type-gradient': getTypeGradient(sortedTypes.map(t => t.slug)),
    } as any"
  >
    <img
      v-if="sprite"
      :src="imageBasePath + sprite"
      :alt="`${name} sprite`"
      width="72"
      height="72"
      lazy="true"
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
import { Type } from "../lib/validators";
import type { Type as TypeT } from "../lib/validators";
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
    type: Array as PropType<TypeT[]>,
    validator: (prop: TypeT[]) =>
      Array.isArray(prop) && prop.every(t => Type.safeParse(t).success),
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
const imageBasePath = config.cloudinaryBasePath.replace(
  "image/upload",
  "image/upload/t_pokemon_sprite",
);
</script>
