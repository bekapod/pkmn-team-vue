<template>
  <ol
    class="grid grid-cols-1 grid-rows-6 gap-5 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2"
  >
    <TeamMember
      v-for="member in team.members"
      :key="member.id"
      v-bind="member"
      :data-testid="`team-member-${member.id}`"
      @remove="handleRemoveMember"
      @remove-move="(id, moveId) => $emit('remove-move', id, moveId)"
      class="h-[21.25rem]"
    />

    <li
      v-for="i in team.members.length < 6
        ? new Array(6 - team.members.length)
        : []"
      :key="i"
      class="h-[21.25rem]"
    >
      <button
        type="button"
        class="flex h-full w-full cursor-pointer items-center justify-center rounded-br-xl border-4 border-dashed border-cool-grey-200 bg-cool-grey-100"
        @click="$emit('find-member')"
      >
        <span class="sr-only">Add team member</span>
        <MehBlankIcon class="h-10 w-10 text-cool-grey-300" />
      </button>
    </li>
  </ol>
</template>

<script setup lang="ts">
import TeamMember from "./TeamMember.vue";
import MehBlankIcon from "@/assets/icons/meh-blank.svg";
import { useTeam } from "@/stores";

const team = useTeam();

const emit = defineEmits<{
  (e: "remove-member", id: string): void;
  (e: "remove-move", id: string, moveId: string): void;
  (e: "find-member"): void;
}>();

const handleRemoveMember = (id: string) => {
  team.removeMember(id);
  emit("remove-member", id);
};
</script>
