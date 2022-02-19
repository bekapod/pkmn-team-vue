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
import { getSdk } from "@/graphql";
import { Team } from "@/data";
import { Severity } from "@sentry/vue";

const { $graphQLClient, $sentry } = useNuxtApp();

const {
  data: teams,
  error,
  refresh,
} = await useAsyncData(
  "all-teams",
  async () => getSdk($graphQLClient).AllTeams(),
  {
    transform: data =>
      data.teams.edges?.map(team => {
        try {
          return Team.parse({
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
                hp: member?.node?.pokemon.hp,
                attack: member?.node?.pokemon.attack,
                defense: member?.node?.pokemon.defense,
                specialAttack: member?.node?.pokemon.specialAttack,
                specialDefense: member?.node?.pokemon.specialDefense,
                speed: member?.node?.pokemon.speed,
                types: member?.node?.pokemon.types.edges?.map(type => ({
                  name: type?.node?.name,
                  slug: type?.node?.slug,
                  slot: type?.slot,
                })),
              },
            })),
          });
        } catch (err) {
          $sentry.captureException(err, {
            level: Severity.Error,
            extra: {
              data,
            },
          });
          throw err;
        }
      }),
  },
);
</script>
