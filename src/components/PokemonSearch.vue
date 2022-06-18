<template>
  <AisInstantSearch
    index-name="local_pokemon"
    :search-client="searchClient"
    class="absolute flex h-full w-full flex-col"
  >
    <AisConfigure
      :hits-per-page.camel="100"
      filters="node.forms.totalCount > 0"
    />
    <AisSearchBox>
      <template v-slot="{ currentRefinement, isSearchStalled, refine }">
        <FormKit
          :aria-busy="isSearchStalled"
          type="form"
          :classes="{
            form: `flex flex-col items-stretch relative self-center w-full sm:items-center sm:flex-row`,
            messages: 'sr-only',
          }"
          :actions="false"
          :model-value="{ search: currentRefinement }"
          @submit="(data) => refine(data.search)"
        >
          <FormKit
            type="search"
            name="search"
            label="Search"
            placeholder="Search for a Pokemon&hellip;"
            outer-class="flex-1 w-full sm:w-auto sm:mb-0"
            label-class="sr-only"
            :input-class="{
              'text-center sm:text-left px-4 text-lg font-bold': true,
              'md:max-w-3xl': false,
            }"
          />

          <FormKit type="submit" outer-class="sr-only">Search</FormKit>
        </FormKit>
      </template>
    </AisSearchBox>
    <AisRefinementList
      attribute="node.types.edges.node.name"
      operator="and"
      :limit="20"
    >
      <template v-slot="{ items, refine }">
        <ul class="-mx-2 flex gap-2 overflow-x-auto px-2 py-5">
          <li v-for="item in items" :key="item.value">
            <input
              :key="item.value"
              :id="item.value"
              type="checkbox"
              class="peer sr-only"
              :value="item.value"
              :checked="item.isRefined"
              @change="() => refine(item.value)"
            />
            <label
              :for="item.value"
              class="peer-focus:manual-focus inline-flex"
            >
              <TypeTag
                :name="item.value"
                :slug="item.value.toLowerCase()"
                class="rounded-br-none"
              />
              <span
                class="type-tag count-tag rounded-tl-none bg-cool-grey-50 text-cool-grey-700"
                :class="{ 'px-1': item.isRefined }"
              >
                <CheckIcon
                  v-if="item.isRefined"
                  aria-hidden="true"
                  class="h-5 w-5"
                />
                <template v-else>{{ item.count.toLocaleString() }}</template>
              </span>
            </label>
          </li>
        </ul>
      </template>
    </AisRefinementList>

    <div
      class="relative flex-1 overflow-hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3"
    >
      <AisHits
        :transformItems="transformPokemonItems"
        class="relative h-full overflow-hidden rounded-tl-lg rounded-br-lg bg-white md:rounded-br-none"
      >
        <template v-slot="{ items }">
          <ul class="scroller">
            <li v-for="item of items" :key="item.id">
              <PokemonLine
                role="button"
                :id="item.id"
                :name="item.defaultForm.name"
                :pokedex-id="item.species.pokedexId"
                :sprite="item.defaultSprite"
                :types="item.types"
                tabindex="0"
                class="focus-visible:manual-focus relative top-1 focus-visible:outline-offset-[-8px]"
                @click="search.selectPokemon(item.id)"
              />
            </li>
          </ul>
        </template>
      </AisHits>

      <div
        class="absolute top-0 left-0 h-full overflow-hidden md:static lg:col-span-2"
      >
        <Transition
          enter-active-class="transform transition ease-in-out duration-500 sm:duration-700 motion-reduce:transition-none"
          enter-from-class="-translate-y-full md:translate-y-0 md:opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transform transition ease-in-out duration-500 sm:duration-700 motion-reduce:transition-none"
          leave-from-class="translate-y-0  opacity-100"
          leave-to-class="-translate-y-full md:translate-y-0 md:opacity-0"
        >
          <PokemonDetail
            v-if="search.selectedPokemon"
            class="h-full md:rounded-tl-none"
            :pokedex-id="search.selectedPokemon.species.pokedexId"
            :name="search.selectedPokemon.defaultForm.name"
            :description="search.selectedPokemon.species.description"
            :genus="search.selectedPokemon.species.genus"
            :is-baby="search.selectedPokemon.species.isBaby"
            :is-legendary="search.selectedPokemon.species.isLegendary"
            :is-mythical="search.selectedPokemon.species.isMythical"
            :sprite="search.selectedPokemon.defaultSprite"
            :abilities="search.selectedPokemon.abilities"
            :types="search.selectedPokemon.types"
            :hp="search.selectedPokemon.hp"
            :attack="search.selectedPokemon.attack"
            :defense="search.selectedPokemon.defense"
            :special-attack="search.selectedPokemon.specialAttack"
            :special-defense="search.selectedPokemon.specialDefense"
            :speed="search.selectedPokemon.speed"
            @click="search.clearSelectedPokemon()"
          />
        </Transition>
      </div>
    </div>

    <AisPagination hidden />
  </AisInstantSearch>
</template>

<script setup lang="ts">
import algoliasearch from "algoliasearch/lite";
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisRefinementList,
  AisConfigure,
  AisPagination,
} from "vue-instantsearch/vue3/es";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import CheckIcon from "@/assets/icons/check.svg";
import PokemonDetail from "@/components/PokemonDetail.vue";
import PokemonLine from "@/components/PokemonLine.vue";
import TypeTag from "@/components/TypeTag.vue";
import { parsePokemon } from "@/data";
import { useSearch } from "@/stores";

const searchClient = algoliasearch(
  "VKYNMD4NA5",
  "1c91614f37171fde89fef019bd5dddd0"
);

const transformPokemonItems = (items: any[]) => {
  const transformed = items.map(({ objectID, ...item }) =>
    parsePokemon({ id: objectID, ...item.node })
  );
  return transformed;
};

const search = useSearch();
</script>

<style scoped>
.scroller {
  @apply absolute h-full w-full overflow-y-scroll;
}
.count-tag {
  text-shadow: none;
}
</style>
