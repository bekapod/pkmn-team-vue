<template>
  <Team v-if="!error" :members="team.members" />
  <div v-else-if="error" class="container mx-auto px-2 sm:px-4 lg:px-8">
    <Notification
      type="error"
      :action="{
        label: 'Try again',
        callback: refresh,
      }"
    >
      <template #title>Error</template>
      An error happened while fetching the team.
    </Notification>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Notification from "@/components/Notification.vue";
import Team from "@/components/Team.vue";
import { useTeam } from "@/stores";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const team = useTeam();

const fetch = async () => {
  const res = await team.getTeam(props.id);
  if (res.error) {
    error.value = res.error;
  }
};

const error = ref<unknown | null>(null);
const refresh = ref(fetch);

fetch();
</script>
