<template>
  <NuxtLayout name="wide-page">
    <Html lang="en-gb">
      <Head>
        <Title>{{ team?.name ?? "..." }} | Team | Pokémon Team Builder</Title>
        <Meta name="description" content="A WIP Pokémon team builder." />
      </Head>
    </Html>

    <template #page-title>{{ team?.name }}</template>
    <template #header-action>
      <div class="flex justify-center items-center gap-5">
        <button type="button" class="button button--secondary py-2">
          <SearchAltIcon class="button__icon" aria-hidden="true" />
          Find Pokemon
        </button>
        <button
          type="button"
          class="button button--destructive py-2"
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
            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12"
          />
        </button>
      </div>
    </template>

    <Team v-if="team" v-bind="team" />
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
  </NuxtLayout>
</template>

<script setup lang="ts">
import SearchAltIcon from "@/assets/icons/search-alt.svg?component";
import TrashIcon from "@/assets/icons/trash.svg?component";
import { getSdk } from "@/graphql";
import { parseTeam } from "@/data";
import { useToasts } from "@/stores";

const toasts = useToasts();
const { $graphQLClient, $sentry } = useNuxtApp();
const router = useRouter();
const route = useRoute();
const { id } = route.params;
const isSubmitting = ref(false);
const timeTaken = ref(0);
const isSlowLoading = computed(() => timeTaken.value > 1);
let timer;

const {
  data: team,
  error,
  refresh,
} = await useAsyncData(
  `team-${id}`,
  async () => getSdk($graphQLClient).TeamById({ id: id.toString() }),
  {
    transform: ({ teamById }) => parseTeam(teamById, { $sentry }),
  },
);

const deleteHandler = async () => {
  const errorToast = {
    type: "error",
    title: "Error",
    content: "An error happened while deleting your team.",
  } as const;
  const successToast = {
    type: "success",
    title: "Team deleted!",
    content: "Your team has been successfully deleted.",
  } as const;

  toasts.removeToast(errorToast);
  toasts.removeToast(successToast);
  isSubmitting.value = true;
  timer = window.setInterval(() => {
    timeTaken.value += 1;
  }, 1000);
  try {
    await getSdk($graphQLClient).DeleteTeams({
      ids: Array.isArray(id) ? id : [id],
    });
    toasts.addToast(successToast);
    router.replace("/");
  } catch (err: any) {
    toasts.addToast(errorToast);
  } finally {
    window.clearInterval(timer);
    timeTaken.value = 0;
    isSubmitting.value = false;
  }
};
</script>
