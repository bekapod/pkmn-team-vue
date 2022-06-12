<template>
  <li class="relative flex list-none flex-col rounded-br-xl bg-white">
    <PokemonLine v-bind="pokemon" class="cursor-grab active:cursor-grabbing" />

    <button
      class="absolute top-4 right-4 rounded-md text-indigo-900 hover:text-red-vivid-400 focus-visible:outline-red-vivid-400"
      @click="$emit('remove', id)"
    >
      <span class="sr-only">Remove team member</span>
      <TrashIcon aria-hidden="true" class="h-5 w-5" />
    </button>

    <dl class="mb-2 grid grid-cols-3 grid-rows-2 gap-2 p-3">
      <div
        v-for="stat in [
          { label: 'HP', value: pokemon.hp },
          { label: 'Atk', value: pokemon.attack },
          { label: 'Def', value: pokemon.defense },
          { label: 'Sp. Atk', value: pokemon.specialAttack },
          { label: 'Sp. Def', value: pokemon.specialDefense },
          { label: 'Spd', value: pokemon.speed },
        ]"
        :key="stat.label"
        class="flex items-center py-2 px-3"
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

    <ol class="grid flex-grow grid-cols-2 grid-rows-2 gap-3 p-3">
      <TeamMemberMove
        v-for="move in moves"
        :id="move.id"
        :key="move.id"
        :name="move.move.name"
        :damage-class="move.move.damageClass"
        :type="move.move.type"
        @remove="(moveId) => $emit('remove-move', id, moveId)"
      />

      <li v-for="i in 4 - moves.length" :key="i">
        <button
          type="button"
          class="flex h-full w-full cursor-pointer items-center justify-center rounded-br-lg border-2 border-dashed border-cool-grey-100"
        >
          <span class="sr-only">Add move</span>
          <MehBlankIcon class="h-5 w-5 text-cool-grey-200" />
        </button>
      </li>
    </ol>
  </li>
</template>

<script setup lang="ts">
import PokemonLine from "./PokemonLine.vue";
import TeamMemberMove from "./TeamMemberMove.vue";
import type { PropType } from "vue";
import MehBlankIcon from "@/assets/icons/meh-blank.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { Pokemon, TeamMemberMove as TeamMemberMoveT } from "@/data";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true,
    validator: (val: unknown) => {
      return Pokemon.safeParse(val).success;
    },
  },
  moves: {
    type: Array as PropType<TeamMemberMoveT[]>,
    default: () => [],
    validator: (val: unknown) => {
      return (
        Array.isArray(val) &&
        val.every((move) => TeamMemberMoveT.safeParse(move).success)
      );
    },
  },
});

defineEmits<{
  (e: "remove", id: string): void;
  (e: "remove-move", id: string, moveId: string): void;
}>();

const stats = [
  props.pokemon.hp,
  props.pokemon.attack,
  props.pokemon.defense,
  props.pokemon.specialAttack,
  props.pokemon.specialDefense,
  props.pokemon.speed,
];
const highestStat = Math.max(...stats);
const lowestStat = Math.min(...stats);
</script>
