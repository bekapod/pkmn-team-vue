<template>
  <Card :to="`/team/${id}`" :types="allSortedTypes">
    <template #heading>{{ name }}</template>

    <slot>
      <dl class="flex my-4">
        <div
          class="relative flex flex-col flex-grow flex-shrink-0 items-center text-center"
        >
          <dt class="text-indigo-400 text-sm font-bold uppercase mb-1">Pkmn</dt>
          <dd class="m-0 text-indigo-800 text-lg font-bold">
            {{ members.length }}
          </dd>

          <div
            aria-hidden="true"
            class="block absolute -right-1 top-1/2 w-2 h-9 bg-indigo-100 -translate-y-1/2 rounded-xl"
          />
        </div>

        <div
          class="relative flex flex-col flex-grow flex-shrink-0 items-center text-center"
        >
          <dt class="text-indigo-400 text-sm font-bold uppercase mb-1">
            Created
          </dt>
          <dd class="m-0 text-indigo-800 text-lg font-bold">
            {{ formattedCreatedAt }}
          </dd>
        </div>
      </dl>

      <PokemonLine
        v-for="member in members"
        :key="member.id"
        outdent="var(--spacing-6)"
        v-bind="member.pokemon"
      />
    </slot>
  </Card>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { sortBySlug } from "@/lib";
import Card from "./Card.vue";
import PokemonLine from "./PokemonLine.vue";
import { TeamMember } from "@/data";

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
      prop.every(member => TeamMember.safeParse(member).success),
    required: false,
    default() {
      return [];
    },
  },
});

const allSortedTypes = sortBySlug(
  props.members.flatMap(m => m.pokemon.types),
).map(t => t.slug);

const formattedCreatedAt = new Intl.DateTimeFormat("en-GB", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
}).format(new Date(props.createdAt));
</script>
