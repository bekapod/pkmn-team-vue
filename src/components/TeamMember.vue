<template>
  <li class="relative flex list-none flex-col rounded-br-xl bg-white">
    <PokemonLine
      :pokedex-id="pokemon.species.pokedexId"
      :name="pokemon.defaultForm.name"
      :sprite="pokemon.defaultSprite"
      :types="pokemon.types"
      class="cursor-grab active:cursor-grabbing"
    />

    <button
      class="absolute top-4 right-4 rounded-md text-indigo-900 hover:text-red-vivid-400 focus-visible:outline-red-vivid-400"
      @click="$emit('remove', id)"
    >
      <span class="sr-only">Remove team member</span>
      <TrashIcon aria-hidden="true" class="h-5 w-5" />
    </button>

    <PokemonStats
      class="mb-2 p-3"
      :hp="pokemon.hp"
      :attack="pokemon.attack"
      :defense="pokemon.defense"
      :special-attack="pokemon.specialAttack"
      :special-defense="pokemon.specialDefense"
      :speed="pokemon.speed"
    />

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
import TeamMemberMove from "./TeamMemberMove.vue";
import type { PropType } from "vue";
import MehBlankIcon from "@/assets/icons/meh-blank.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import PokemonLine from "@/components/PokemonLine.vue";
import PokemonStats from "@/components/PokemonStats.vue";
import { Pokemon, TeamMemberMove as TeamMemberMoveT } from "@/data";
undefined;

defineProps({
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
</script>
