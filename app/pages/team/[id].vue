<template>
  <NuxtLayout name="wide-page">
    <Html lang="en-gb">
      <Head>
        <Title>Pokémon Team Builder</Title>
        <Meta name="description" content="A WIP Pokémon team builder." />
      </Head>
    </Html>

    <template #page-title>{{ team?.name }}</template>

    <div v-if="error" class="container mx-auto px-2 sm:px-4 lg:px-8">
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

<script setup>
import { getSdk } from "@/graphql";
import { parseTeam } from "@/data";

const { $graphQLClient, $sentry } = useNuxtApp();
const route = useRoute();
const { id } = route.params;

const {
  data: team,
  error,
  refresh,
} = await useAsyncData(
  `team-${id}`,
  async () => getSdk($graphQLClient).TeamById({ id }),
  {
    transform: ({ teamById }) => parseTeam(teamById, { $sentry }),
  },
);
</script>
