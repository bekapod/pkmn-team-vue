<template>
  <div
    class="with-type-gradient relative flex h-24 items-center bg-white"
    :style="{
      '--outdent': outdent,
      '--type-gradient': getTypeGradient(sortedTypes.map(t => t.type.slug)),
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
      <component :is="nameAs" class="text-md mb-2 font-bold leading-none">
        #{{ pokedexId }} {{ name }}
      </component>
      <ul class="flex flex-wrap gap-3">
        <li v-for="t in sortedTypes" :key="t.type.slug">
          <TypeTag :name="t.type.name" :slug="t.type.slug" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import TypeTag from "./TypeTag.vue";
import { PokemonType } from "@/data";
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
  nameAs: {
    type: [String, Object],
    required: false,
    default: "div",
  },
  sprite: {
    type: String,
    required: false,
    default: undefined,
  },
  types: {
    type: Array as PropType<PokemonType[]>,
    validator: (prop: PokemonType[]) =>
      Array.isArray(prop) &&
      prop.every((t) => PokemonType.safeParse(t).success),
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
