<template>
  <section
    class="flex flex-col overflow-hidden rounded-tl-lg rounded-br-lg bg-white pt-1"
  >
    <PokemonLine
      name-as="h1"
      :pokedex-id="pokedexId"
      :name="name"
      :sprite="sprite"
      :types="types"
    />

    <div
      ref="container"
      class="flex-1 overflow-y-auto"
      :class="{
        'grid grid-cols-5 gap-3 overflow-hidden': isContainerColumns,
      }"
    >
      <div
        class="col-span-3 px-3 pb-3"
        :class="{ 'overflow-y-auto': isContainerColumns }"
      >
        <slot name="actions"></slot>
        <div
          ref="badges"
          class="grid gap-2"
          :class="{
            'grid-cols-3': isBadgesRoomy,
            'grid-cols-1': !isBadgesRoomy,
          }"
        >
          <span
            class="badge bg-indigo-50"
            :class="{
              'col-span-3': isBadgesRoomy,
              'col-span-1': !isBadgesRoomy,
            }"
          >
            {{ genus }}
          </span>
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

        <h2 class="mb-2 mt-6 text-lg font-bold">Abilities</h2>
        <ul class="mt-3 space-y-3" v-if="sortedAbilities.length > 0">
          <Ability
            as="li"
            v-for="ability in sortedAbilities"
            :key="ability.id"
            :name="ability.ability.name"
            :effect="ability.ability.effect"
            :is-hidden="ability.isHidden"
          />
        </ul>
      </div>

      <div
        class="col-span-2"
        :class="{ 'overflow-y-auto': isContainerColumns }"
      >
        <h2
          class="my-4 px-3 text-lg font-bold"
          :class="{ 'sr-only': isContainerColumns }"
        >
          Moves
        </h2>
        <ul :class="{ 'pt-1': isContainerColumns }">
          <Move
            as="li"
            v-for="{ id, move, learnMethod, levelLearnedAt } in moves"
            :key="id"
            :name="move.name"
            :effect="move.effect"
            :effect-chance="move.effectChance"
            :type="move.type"
            :damage-class="move.damageClass"
            :accuracy="move.accuracy"
            :power="move.power"
            :target="move.target"
            :learn-method="learnMethod"
            :level-learned-at="levelLearnedAt"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { computed, ref, type PropType } from "vue";
import CheckIcon from "@/assets/icons/check.svg";
import XIcon from "@/assets/icons/x.svg";
import Ability from "@/components/Ability.vue";
import Move from "@/components/Move.vue";
import PokemonLine from "@/components/PokemonLine.vue";
import PokemonStats from "@/components/PokemonStats.vue";
import { PokemonAbility, PokemonMove, PokemonType } from "@/data";
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
    type: Array as PropType<PokemonAbility[]>,
    validator: (prop: PokemonAbility[]) =>
      Array.isArray(prop) &&
      prop.every((a) => PokemonAbility.safeParse(a).success),
    required: false,
    default() {
      return [];
    },
  },
  moves: {
    type: Array as PropType<PokemonMove[]>,
    validator: (prop: PokemonMove[]) =>
      Array.isArray(prop) &&
      prop.every((m) => PokemonMove.safeParse(m).success),
    required: false,
    default() {
      return [];
    },
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
});

const sortedAbilities = computed(() => sortBySlot(props.abilities));

const container = ref(null);
const { width: containerWidth } = useElementSize(container);
const isContainerColumns = computed(() => containerWidth.value > 720);

const badges = ref(null);
const { width: badgesWidth } = useElementSize(badges);
const isBadgesRoomy = computed(() => badgesWidth.value >= 368);
</script>

<style scoped>
.badge {
  @apply inline-flex items-center justify-center rounded-tl rounded-br py-1 px-2 text-center text-sm font-bold uppercase;
}

.badge-icon {
  @apply mr-0.5 h-5 w-5 shrink-0;
}
</style>
