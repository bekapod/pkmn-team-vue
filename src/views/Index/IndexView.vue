<template>
  <ul
    v-if="teams.list"
    class="grid grid-cols-1 gap-5 md:grid-cols-md"
    role="list"
  >
    <li v-for="team in teams.list" :key="team.id">
      <TeamCard v-bind="team" />
    </li>
  </ul>

  <div v-else-if="error" class="container mx-auto px-2 sm:px-4 lg:px-8">
    <Notification
      type="error"
      :action="{
        label: 'Try again',
        callback: refresh,
      }"
    >
      <template #title>Error</template>
      An error happened while fetching the team list.
    </Notification>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Notification from "@/components/Notification.vue";
import TeamCard from "@/components/TeamCard.vue";
import { useTeams } from "@/stores";

const teams = useTeams();

const fetchTeams = async () => {
  const res = await teams.get();
  if (res.error) {
    error.value = res.error;
  }
};

const error = ref<unknown | null>(null);
const refresh = ref(fetchTeams);

fetchTeams();
</script>
