<template>
  <div class="flex items-center justify-center gap-5" v-if="team.canEdit">
    <button
      type="button"
      class="button button--secondary py-2"
      :disabled="!team.id"
    >
      <SearchAltIcon class="button__icon" aria-hidden="true" />
      Find Pokemon
    </button>
    <button
      type="button"
      class="button button--destructive py-2"
      :disabled="!team.id"
      @click="deleteHandler"
    >
      <TrashIcon
        class="button__icon"
        :class="{ invisible: isSlowLoading }"
        aria-hidden="true"
      />
      <span :class="{ invisible: isSlowLoading }">Delete team</span>
      <img
        v-if="isSlowLoading"
        alt="Loading"
        :src="'/icons/three-dots.svg'"
        class="absolute top-1/2 left-1/2 w-12 -translate-y-1/2 -translate-x-1/2"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import SearchAltIcon from "@/assets/icons/search-alt.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { useTeam } from "@/stores";

const router = useRouter();
const { getAccessTokenSilently } = useAuth0();
const team = useTeam();

const isSubmitting = ref(false);
const timeTaken = ref(0);
const isSlowLoading = computed(() => timeTaken.value > 1);
let timer;

const deleteHandler = async () => {
  isSubmitting.value = true;
  timer = window.setInterval(() => {
    timeTaken.value += 1;
  }, 1000);
  const token = await getAccessTokenSilently().catch(() => "");
  await team.remove(token);
  window.clearInterval(timer);
  timeTaken.value = 0;
  isSubmitting.value = false;
  router.replace("/");
};
</script>
