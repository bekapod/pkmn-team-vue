<template>
  <dl class="grid grid-cols-3 grid-rows-2 gap-2">
    <div
      v-for="stat in [
        { label: 'HP', value: hp },
        { label: 'Atk', value: attack },
        { label: 'Def', value: defense },
        { label: 'Sp. Atk', value: specialAttack },
        { label: 'Sp. Def', value: specialDefense },
        { label: 'Spd', value: speed },
      ]"
      :key="stat.label"
      class="flex items-center rounded-tl rounded-br py-2 px-3"
      :class="{
        'bg-green-vivid-200':
          highestStat === stat.value && highestStat !== lowestStat,
        'bg-red-vivid-100':
          lowestStat === stat.value && highestStat !== lowestStat,
      }"
    >
      <dt
        class="text-sm font-bold uppercase text-indigo-500"
        :class="{
          'text-indigo-700':
            (highestStat === stat.value && highestStat !== lowestStat) ||
            (lowestStat === stat.value && highestStat !== lowestStat),
        }"
      >
        {{ stat.label }}
      </dt>
      <dd class="ml-auto text-lg font-bold text-indigo-800">
        {{ stat.value }}
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
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
});

const stats = computed(() => [
  props.hp,
  props.attack,
  props.defense,
  props.specialAttack,
  props.specialDefense,
  props.speed,
]);
const highestStat = computed(() => Math.max(...stats.value));
const lowestStat = computed(() => Math.min(...stats.value));
</script>
