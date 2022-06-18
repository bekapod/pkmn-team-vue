<template>
  <Card :to="`/team/${id}`" :types="allSortedTypes">
    <template #heading>{{ name }}</template>

    <slot>
      <dl class="my-4 flex">
        <div
          class="relative flex flex-shrink-0 flex-grow flex-col items-center text-center"
        >
          <dt class="mb-1 text-sm font-bold uppercase text-indigo-400">Pkmn</dt>
          <dd class="m-0 text-lg font-bold text-indigo-800">
            {{ members.length }}
          </dd>

          <div
            aria-hidden="true"
            class="absolute -right-1 top-1/2 block h-9 w-2 -translate-y-1/2 rounded-xl bg-indigo-100"
          />
        </div>

        <div
          class="relative flex flex-shrink-0 flex-grow flex-col items-center text-center"
        >
          <dt class="mb-1 text-sm font-bold uppercase text-indigo-400">
            Created
          </dt>
          <dd class="m-0 text-lg font-bold text-indigo-800">
            {{ formattedCreatedAt }}
          </dd>
        </div>
      </dl>

      <PokemonLine
        v-for="member in members"
        :key="member.id"
        outdent="var(--spacing-6)"
        :pokedex-id="member.pokemon.species.pokedexId"
        :name="member.pokemon.defaultForm.name"
        :sprite="member.pokemon.defaultSprite"
        :types="member.pokemon.types"
      />
    </slot>
  </Card>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import PokemonLine from "./PokemonLine.vue";
import type { PropType } from "vue";
import { TeamMember } from "@/data";
import { sortBySlug } from "@/lib";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  members: {
    type: Array as PropType<TeamMember[]>,
    validator: (prop: TeamMember[]) =>
      Array.isArray(prop) &&
      prop.every((member) => TeamMember.safeParse(member).success),
    required: false,
    default() {
      return [];
    },
  },
});

const allSortedTypes = sortBySlug(
  props.members.flatMap((m) => m.pokemon.types)
).map((t) => t.slug);

const formattedCreatedAt = new Intl.DateTimeFormat("en-GB", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
}).format(new Date(props.createdAt));
</script>
