<template>
  <AisInstantSearch
    index-name="local_pokemon"
    :search-client="searchClient"
    class="absolute flex h-full w-full flex-col"
  >
    <AisConfigure :hits-per-page.camel="100" :filters="filters" />

    <slot name="header-bar"></slot>

    <AisSearchBox>
      <template v-slot="{ currentRefinement, refine }">
        <input
          type="search"
          :value="currentRefinement"
          placeholder="Search for a Pokemon&hellip;"
          class="w-full rounded-tl-lg rounded-br-lg p-4 text-center text-lg font-bold sm:text-left"
          @input="refine(($event.currentTarget as HTMLInputElement).value)"
        />
      </template>
    </AisSearchBox>

    <div class="flex items-center justify-between">
      <Listbox v-model="selectedTypes" multiple>
        <div class="relative">
          <ListboxButton class="button button--secondary button--small my-2">
            Filter by type
            <span
              v-if="selectedTypes.length > 0"
              class="ml-2 h-6 min-w-6 rounded-full bg-indigo-500 px-2 text-sm leading-6"
            >
              {{ selectedTypes.length }}
            </span>
            <ChevronDownIcon class="button__icon button__icon--right" />
          </ListboxButton>
          <AisRefinementList
            attribute="node.types.edges.node.name"
            operator="and"
            :limit="20"
          >
            <template v-slot="{ items }">
              <Transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="focus-visible:manual-focus absolute left-0 z-10 max-h-52 w-full max-w-xs overflow-y-auto rounded-br-lg bg-white shadow-lg"
                >
                  <ListboxOption
                    v-for="item in items"
                    :key="item.value"
                    :value="item.value"
                  >
                    <template v-slot="{ active, selected }">
                      <span
                        class="flex justify-between py-2 px-3 font-medium"
                        :class="{
                          [`bg-${item.value.toLowerCase()}`]:
                            active || selected,
                          [`text-${item.value.toLowerCase()}-contrast`]: active,
                          'bg-opacity-50': selected && !active,
                        }"
                      >
                        <span>{{ item.label }}</span>
                        <CheckIcon
                          v-if="selected"
                          aria-hidden="true"
                          class="h-6 w-6"
                        />
                        <span v-else>
                          {{ item.count.toLocaleString() }}
                        </span>
                      </span>
                    </template>
                  </ListboxOption>
                </ListboxOptions>
              </Transition>
            </template>
          </AisRefinementList>
        </div>
      </Listbox>

      <slot name="toolbar-end"></slot>
    </div>

    <div
      class="relative flex-1 overflow-hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3"
    >
      <AisInfiniteHits
        :transformItems="transformPokemonItems"
        class="relative h-full overflow-hidden rounded-tl-lg rounded-br-lg bg-white md:rounded-br-none"
      >
        <template v-slot="{ items, refineNext, isLastPage }">
          <RecycleScroller
            class="scroller"
            :items="items"
            :item-size="96"
            key-field="id"
          >
            <template v-slot="{ item, index }">
              <PokemonLine
                role="button"
                :ref="`item_${index}`"
                :id="item.id"
                :name="item.defaultForm.name"
                :pokedex-id="item.species.pokedexId"
                :sprite="item.defaultSprite"
                :types="item.types"
                tabindex="0"
                class="focus-visible:manual-focus relative pt-1.5 before:top-0 focus-visible:outline-offset-[-8px]"
                @click="search.selectPokemon(item.id)"
              />
            </template>
            <template #after v-if="!isLastPage">
              <button
                type="button"
                class="button button--secondary w-full justify-center rounded-tl-none"
                v-intersection-observer="
                  ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                      refineNext();
                    }
                  }
                "
                @click="refineNext"
              >
                Load more
              </button>
            </template>
          </RecycleScroller>
        </template>
      </AisInfiniteHits>

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
            :moves="search.selectedPokemon.moves"
            :hp="search.selectedPokemon.hp"
            :attack="search.selectedPokemon.attack"
            :defense="search.selectedPokemon.defense"
            :special-attack="search.selectedPokemon.specialAttack"
            :special-defense="search.selectedPokemon.specialDefense"
            :speed="search.selectedPokemon.speed"
            @click="search.clearSelectedPokemon()"
          >
            <template #actions>
              <slot
                name="member-actions"
                :pokemon="search.selectedPokemon"
              ></slot>
            </template>
          </PokemonDetail>
        </Transition>
      </div>
    </div>
  </AisInstantSearch>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { vIntersectionObserver } from "@vueuse/components";
import algoliasearch from "algoliasearch/lite";
import { computed, ref } from "vue";
import {
  AisInstantSearch,
  AisSearchBox,
  AisInfiniteHits,
  AisRefinementList,
  AisConfigure,
} from "vue-instantsearch/vue3/es";
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import CheckIcon from "@/assets/icons/check.svg";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import PokemonDetail from "@/components/PokemonDetail.vue";
import PokemonLine from "@/components/PokemonLine.vue";
import { parsePokemon } from "@/data";
import { useSearch } from "@/stores";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const searchClient = algoliasearch(
  "VKYNMD4NA5",
  "1c91614f37171fde89fef019bd5dddd0"
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformPokemonItems = (items: any[]) => {
  const transformed = items.map(({ objectID, ...item }) =>
    parsePokemon({ id: objectID, ...item.node })
  );
  return transformed;
};

const search = useSearch();

const selectedTypes = ref<string[]>([]);

const filters = computed(() =>
  [
    "(node.forms.totalCount > 0)",
    selectedTypes.value.length > 0
      ? `(${selectedTypes.value
          .map((value) => `node.types.edges.node.name:${value}`)
          .join(" AND ")})`
      : null,
  ]
    .filter((filter) => !!filter)
    .join(" AND ")
);
</script>

<style scoped>
.scroller {
  @apply absolute h-full w-full overflow-y-scroll;
}
</style>
