<template>
  <ol
    class="grid grid-cols-1 grid-rows-6 gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2"
  >
    <TeamMember
      v-for="member in members"
      :key="member.id"
      v-bind="member"
      :data-testid="`team-member-${member.id}`"
      @remove="(id) => $emit('remove-member', id)"
      @remove-move="(id, moveId) => $emit('remove-move', id, moveId)"
      class="h-[22rem]"
    />

    <li
      v-for="i in members.length < 6 ? new Array(6 - members.length) : []"
      :key="i"
      class="h-[22rem]"
    >
      <button
        type="button"
        class="flex h-full w-full cursor-pointer items-center justify-center rounded-br-xl border-4 border-dashed border-cool-grey-200 bg-cool-grey-100"
      >
        <span class="sr-only">Add team member</span>
        <MehBlankIcon class="h-10 w-10 text-cool-grey-300" />
      </button>
    </li>
  </ol>
</template>

<script setup lang="ts">
import TeamMember from "./TeamMember.vue";
import type { PropType } from "vue";
import MehBlankIcon from "@/assets/icons/meh-blank.svg";
import { TeamMember as TeamMemberT } from "@/data";

defineProps({
  members: {
    type: Array as PropType<TeamMemberT[]>,
    default: () => [],
    validator: (val: unknown) => {
      return (
        Array.isArray(val) &&
        val.every((member) => {
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
