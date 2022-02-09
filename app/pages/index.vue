<template>
  <NuxtLayout name="wide-page">
    <template #page-title>All Teams</template>

    <ul class="grid gap-5 grid-cols-1 md:grid-cols-md" role="list">
      <li v-for="team in teams" :key="team.id"><TeamCard v-bind="team" /></li>
    </ul>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { getSdk } from "~~/generated";
import { Team } from "../lib/validators";

const { $graphQLClient } = useNuxtApp();

const {
  data: teams,
  pending,
  error,
} = await useAsyncData(
  "all-teams",
  async () => {
    console.log("fetching");
    const bla = await getSdk($graphQLClient).AllTeams();
    console.log("fetched");
    return bla;
  },
  {
    transform: data =>
      data.teams.edges?.map(function (team) {
        console.log(
          Team.safeParse({
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
        );
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
              types: member?.node?.pokemon.types.edges?.map(type => ({
                name: type?.node?.name,
                slug: type?.node?.slug,
                slot: type?.slot,
              })),
            },
          })),
        });
      }),
  },
);
</script>
