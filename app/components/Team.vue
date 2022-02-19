<template>
  <ol class="grid grid-cols-3 grid-rows-2 gap-5">
    <TeamMember
      v-for="member in members"
      :key="member.id"
      v-bind="member"
      :data-testid="`team-member-${member.id}`"
      @remove="id => $emit('remove-member', id)"
      @remove-move="(id, moveId) => $emit('remove-move', id, moveId)"
    />
  </ol>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
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
