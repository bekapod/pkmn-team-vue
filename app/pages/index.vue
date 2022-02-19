<template>
  <NuxtLayout name="wide-page">
    <Html lang="en-gb">
      <Head>
        <Title>Pokémon Team Builder</Title>
        <Meta name="description" content="A WIP Pokémon team builder." />
      </Head>
    </Html>

    <template #page-title>All Teams</template>
    <template #header-action>
      <TeamCreator @team-created="({ id }) => router.push(`/team/${id}`)" />
    </template>

    <ul v-if="teams" class="grid gap-5 grid-cols-1 md:grid-cols-md" role="list">
      <li v-for="team in teams" :key="team.id"><TeamCard v-bind="team" /></li>
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
  </NuxtLayout>
</template>

<script setup lang="ts">
import { getSdk } from "@/graphql";
import { parseTeam } from "@/data";

const { $graphQLClient, $sentry } = useNuxtApp();
const router = useRouter();

const {
  data: teams,
  error,
  refresh,
} = await useAsyncData(
  "all-teams",
  async () => getSdk($graphQLClient).AllTeams(),
  {
    transform: data =>
      data.teams.edges?.map(team => parseTeam(team?.node, { $sentry })),
  },
);
</script>
