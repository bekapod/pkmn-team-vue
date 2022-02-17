<template>
  <Html lang="en-gb">
    <Head>
      <Title>Pokémon Team Builder</Title>
      <Meta name="description" content="A WIP Pokémon team builder." />
    </Head>
  </Html>

  <NuxtLayout name="wide-page">
    <template #page-title>All Teams</template>
    <template #header-action>
      <TeamCreator @team-created="() => refresh()" />
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
import { getSdk } from "~~/generated";
import { Team } from "../lib/validators";

const { $graphQLClient } = useNuxtApp();

const {
  data: teams,
  error,
  refresh,
} = await useAsyncData(
  "all-teams",
  async () => getSdk($graphQLClient).AllTeams(),
  {
    transform: data =>
      data.teams.edges?.map(team =>
        Team.parse({
          id: team?.node?.id,
          name: team?.node?.name ?? "",
          createdAt: team?.node?.createdAt ?? "",
          members: team?.node?.members.edges?.map(member => ({
            id: member?.node?.id,
            pokemon: {
              pokedexId: member?.node?.pokemon.pokedexId,
              name: member?.node?.pokemon.name,
              sprite: member?.node?.pokemon.sprite.replace(
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/",
                "",
              ),
              types: member?.node?.pokemon.types.edges?.map(type => ({
                name: type?.node?.name,
                slug: type?.node?.slug,
                slot: type?.slot,
              })),
            },
          })),
        }),
      ),
  },
);
</script>
