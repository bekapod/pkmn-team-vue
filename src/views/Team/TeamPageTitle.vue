<template>
  <TeamName v-if="team.id" />
  <span class="opacity-50" v-else>Loading team&hellip;</span>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import TeamName from "@/components/TeamName.vue";
import { useTeam } from "@/stores";

const team = useTeam();
</script>
