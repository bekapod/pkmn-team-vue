<template>
  <div
    class="flex flex-col overflow-hidden rounded-tl-lg rounded-br-lg bg-white pt-1"
  >
    <PokemonLine
      :pokedex-id="pokedexId"
      :name="name"
      :sprite="sprite"
      :types="types"
    />

    <div
      class="flex-1 overflow-y-auto xl:grid xl:grid-cols-5 xl:gap-3 xl:overflow-hidden"
    >
      <div class="col-span-3 px-3 pb-3 xl:overflow-y-auto xl:pr-0">
        <div class="grid grid-cols-3 gap-2 md:grid-cols-1 lg:grid-cols-3">
          <span
            class="badge col-span-3 bg-indigo-50 md:col-span-1 lg:col-span-3"
            >{{ genus }}</span
          >
          <span
            class="badge bg-yellow-vivid-100"
            :class="{
              'bg-yellow-vivid-100': isBaby,
              'bg-cool-grey-50 text-cool-grey-400 line-through': !isBaby,
            }"
          >
            <CheckIcon class="badge-icon" v-if="isBaby" />
            <XIcon class="badge-icon" v-else />
            Baby
          </span>
          <span
            class="badge"
            :class="{
              'bg-cyan-vivid-100': isLegendary,
              'bg-cool-grey-50 text-cool-grey-400 line-through': !isLegendary,
            }"
          >
            <CheckIcon class="badge-icon" v-if="isLegendary" />
            <XIcon class="badge-icon" v-else />
            Legendary
          </span>
          <span
            class="badge"
            :class="{
              'bg-cyan-vivid-100': isMythical,
              'bg-cool-grey-50 text-cool-grey-400 line-through': !isMythical,
            }"
          >
            <CheckIcon class="badge-icon" v-if="isMythical" />
            <XIcon class="badge-icon" v-else />
            Mythical
          </span>
        </div>

        <template v-if="description">
          <p v-for="line in description.split('\n\n')" :key="line">
            {{ line }}
          </p>
        </template>

        <PokemonStats
          :hp="hp"
          :attack="attack"
          :defense="defense"
          :special-attack="specialAttack"
          :special-defense="specialDefense"
          :speed="speed"
        />

        <ul class="mt-3 space-y-3" v-if="sortedAbilities.length > 0">
          <Ability
            as="li"
            v-for="ability in sortedAbilities"
            :key="ability.slug"
            :name="ability.name"
            :effect="ability.effect"
            :is-hidden="ability.isHidden"
          />
        </ul>
      </div>

      <ul>
        <li v-for="move in moves" :key="move.id">
          {{ move.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import CheckIcon from "@/assets/icons/check.svg";
import XIcon from "@/assets/icons/x.svg";
import Ability from "@/components/Ability.vue";
import PokemonLine from "@/components/PokemonLine.vue";
import PokemonStats from "@/components/PokemonStats.vue";
import { Ability as AbilityT, Move, Type } from "@/data";
import { sortBySlot } from "@/lib";

const props = defineProps({
  pokedexId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genus: {
    type: String,
    required: true,
  },
  isBaby: {
    type: Boolean,
    default: false,
  },
  isLegendary: {
    type: Boolean,
    default: false,
  },
  isMythical: {
    type: Boolean,
    default: false,
  },
  hp: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
  specialAttack: {
    type: Number,
    required: true,
  },
  specialDefense: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  sprite: {
    type: String,
    required: false,
    default: undefined,
  },
  abilities: {
    type: Array as PropType<AbilityT[]>,
    validator: (prop: AbilityT[]) =>
      Array.isArray(prop) && prop.every((a) => AbilityT.safeParse(a).success),
    required: false,
    default() {
      return [];
    },
  },
  moves: {
    type: Array as PropType<Move[]>,
    validator: (prop: Move[]) =>
      Array.isArray(prop) && prop.every((m) => Move.safeParse(m).success),
    required: false,
    default() {
      return [];
    },
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
});

const sortedAbilities = computed(() => sortBySlot(props.abilities));
</script>

<style scoped>
.badge {
  @apply inline-flex items-center justify-center py-1 px-2 text-center text-sm font-bold uppercase;
}

.badge-icon {
  @apply mr-1 h-5 w-5;
}
</style>
