<template>
  <div
    class="pokemon-line-template relative flex h-24 items-center"
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
      <div class="text-md mb-2 font-bold leading-none">
        #{{ pokedexId }} {{ name }}
      </div>
      <ul class="flex flex-wrap gap-3">
        <li v-for="t in sortedTypes" :key="t.slug">
          <TypeTag :name="t.name" :slug="t.slug" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import TypeTag from "./TypeTag.vue";
import { Type } from "@/data";
import { sortBySlot, getTypeGradient } from "@/lib";

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
    type: Array as PropType<Type[]>,
    validator: (prop: Type[]) =>
      Array.isArray(prop) && prop.every((t) => Type.safeParse(t).success),
    required: false,
    default() {
      return [];
    },
  },
  outdent: {
    type: String,
    required: false,
    default: "0px",
  },
});

const sortedTypes = computed(() => sortBySlot(props.types));
const imageBasePath = import.meta.env.VITE_CLOUDINARY_BASE_PATH.replace(
  "image/upload",
  "image/upload/t_pokemon_sprite"
);
</script>
