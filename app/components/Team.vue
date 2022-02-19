<template>
  <ol
    class="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-5"
  >
    <TeamMember
      v-for="member in members"
      :key="member.id"
      v-bind="member"
      :data-testid="`team-member-${member.id}`"
      @remove="id => $emit('remove-member', id)"
      @remove-move="(id, moveId) => $emit('remove-move', id, moveId)"
    />

    <li v-for="i in 6 - members.length" :key="i">
      <button
        type="button"
        class="w-full h-full rounded-br-xl border-4 border-dashed border-cool-grey-200 flex items-center justify-center cursor-pointer"
      >
        <span class="sr-only">Add team member</span>
        <PlusIcon class="w-10 h-10 text-cool-grey-300" />
      </button>
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { PlusIcon } from "@heroicons/vue/outline";
import { TeamMember as TeamMemberT } from "@/data";
import TeamMember from "./TeamMember.vue";

defineProps({
  members: {
    type: Array as PropType<TeamMemberT[]>,
    default: () => [],
    validator: (val: unknown) => {
      return (
        Array.isArray(val) &&
        val.every(member => {
          const parsed = TeamMemberT.safeParse(member);
          if (parsed.success) return true;
          if (parsed.error) {
            console.warn(parsed.error.message);
            return false;
          }
        })
      );
    },
  },
});

defineEmits<{
  (e: "remove-member", id: string): void;
  (e: "remove-move", id: string, moveId: string): void;
}>();
</script>
