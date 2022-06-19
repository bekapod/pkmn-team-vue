<template>
  <li
    ref="container"
    class="relative flex list-none flex-col rounded-br-xl bg-white"
  >
    <div class="relative flex items-center justify-between pr-3">
      <PokemonLine
        :pokedex-id="pokemon.species.pokedexId"
        :name="pokemon.defaultForm.name"
        :sprite="pokemon.defaultSprite"
        :types="pokemon.types"
        class="pokemon cursor-grab active:cursor-grabbing"
      />

      <Menu as="div" class="relative inline-block text-left">
        <MenuButton class="icon-button icon-button--primary">
          <span class="sr-only">Open options</span>
          <DotsVerticalRoundedIcon
            class="icon-button__icon"
            aria-hidden="true"
          />
        </MenuButton>

        <Transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems class="menu">
            <MenuItem v-slot="{ active }">
              <button
                type="button"
                class="menu-button menu-button--primary"
                :class="{ 'menu-button--active': active }"
                disabled
              >
                <CogIcon aria-hidden="true" class="menu-button__icon" />
                <span>More configuration</span>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                type="button"
                class="menu-button menu-button--destructive"
                :class="{ 'menu-button--active': active }"
                @click="$emit('remove', id)"
              >
                <TrashIcon aria-hidden="true" class="menu-button__icon" />
                <span>Remove team member</span>
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>

    <PokemonStats
      class="mb-2 px-3"
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
          class="flex h-full w-full cursor-pointer items-center justify-center rounded-tl-lg rounded-br-lg border-2 border-dashed border-cool-grey-100"
        >
          <span class="sr-only">Add move</span>
          <MehBlankIcon class="h-5 w-5 text-cool-grey-200" />
        </button>
      </li>
    </ol>
  </li>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import TeamMemberMove from "./TeamMemberMove.vue";
import type { PropType } from "vue";
import CogIcon from "@/assets/icons/cog.svg";
import DotsVerticalRoundedIcon from "@/assets/icons/dots-vertical-rounded.svg";
import MehBlankIcon from "@/assets/icons/meh-blank.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import PokemonLine from "@/components/PokemonLine.vue";
import PokemonStats from "@/components/PokemonStats.vue";
import { Pokemon, TeamMemberMove as TeamMemberMoveT } from "@/data";

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

<style scoped>
.pokemon {
  position: static;
}
</style>
