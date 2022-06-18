<template>
  <AisInstantSearch
    index-name="local_pokemon"
    :search-client="searchClient"
    class="absolute flex h-full w-full flex-col"
  >
    <AisConfigure filters="node.forms.totalCount > 0" />
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
        <ul class="-mx-2 flex gap-2 overflow-x-auto px-2 py-4">
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

    <div class="relative flex-1 md:grid md:grid-cols-2 md:gap-4">
      <AisInfiniteHits
        :transformItems="transformPokemonItems"
        class="overflow-hidden rounded-tl-lg rounded-br-lg bg-white md:relative"
      >
        <template v-slot="{ items, refineNext, isLastPage }">
          <ul>
            <RecycleScroller
              class="scroller"
              :items="items"
              :item-size="96"
              key-field="id"
            >
              <template v-slot="{ item }">
                <PokemonLine
                  role="button"
                  :key="item.id"
                  :name="item.defaultForm.name"
                  :pokedex-id="item.species.pokedexId"
                  :sprite="item.defaultSprite"
                  :types="item.types"
                  tabindex="0"
                  class="focus-visible:manual-focus relative top-1 focus-visible:outline-offset-[-8px]"
                  @click="search.selectPokemon(item.id)"
                />
              </template>

              <template #after v-if="!isLastPage">
                <button
                  v-intersection-observer="refineNext"
                  @click="refineNext"
                >
                  Show more results
                </button>
              </template>
            </RecycleScroller>
          </ul>
        </template>
      </AisInfiniteHits>

      <div v-if="search.selectedPokemon">
        {{ search.selectedPokemon.species.name }}
      </div>
    </div>
  </AisInstantSearch>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";
import algoliasearch from "algoliasearch/lite";
import {
  AisInstantSearch,
  AisSearchBox,
  AisInfiniteHits,
  AisRefinementList,
  AisConfigure,
} from "vue-instantsearch/vue3/es";
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import PokemonLine from "./PokemonLine.vue";
import TypeTag from "./TypeTag.vue";
import CheckIcon from "@/assets/icons/check.svg";
import { parsePokemon } from "@/data";
import { useSearch } from "@/stores";
import { nextTick, onUpdated } from "vue";

const searchClient = algoliasearch(
  "VKYNMD4NA5",
  "1c91614f37171fde89fef019bd5dddd0"
);

const transformPokemonItems = (items: any[]) => {
  return items.map(({ objectID, ...item }) =>
    parsePokemon({ id: objectID, ...item.node })
  );
};

const search = useSearch();

onUpdated(() => {
  nextTick(() => {
    console.log("updated");
  });
});
</script>

<style scoped>
.scroller {
  @apply absolute h-full w-full;
}
.count-tag {
  text-shadow: none;
}
</style>
