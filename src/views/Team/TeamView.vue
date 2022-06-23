<template>
  <template v-if="!error">
    <Team :members="team.members" />

    <TransitionRoot appear :show="team.isFindingMember" as="template">
      <Dialog
        as="div"
        @close="team.isFindingMember = false"
        class="relative z-10"
      >
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-cool-grey-900 bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="relative h-full w-full transform overflow-hidden align-middle shadow-xl transition-all"
              >
                <PokemonSearch
                  class="w-full rounded-br-xl rounded-tl-xl bg-cool-grey-100 p-4"
                >
                  <template #header-bar>
                    <div
                      class="-mx-4 -mt-4 mb-4 flex items-center justify-between rounded-tl-xl bg-indigo-600 py-2 px-4"
                    >
                      <h1 class="text-sm font-bold uppercase text-white">
                        Find a team member
                      </h1>
                      <button
                        type="button"
                        class="icon-button p-0 text-white"
                        @click="team.isFindingMember = false"
                      >
                        <span class="sr-only">Close search</span>
                        <XIcon class="h-7 w-7" />
                      </button>
                    </div>
                  </template>

                  <template #toolbar-end>
                    <ol v-if="team.members.length > 0" class="flex gap-3">
                      <li
                        v-for="member in team.members"
                        :key="member.id"
                        class="flex items-center rounded-tl-lg rounded-br-lg bg-white pr-2"
                      >
                        <span class="sr-only">{{
                          member.pokemon.defaultForm.name
                        }}</span>
                        <img
                          loading="lazy"
                          :src="imageBasePath + member.pokemon.defaultSprite"
                          :alt="`${member.pokemon.defaultForm.name} sprite`"
                          width="48"
                          height="56"
                        />
                        <button
                          type="button"
                          class="icon-button icon-button--destructive ml-2"
                          @click="team.removeMember(member.id)"
                        >
                          <span class="sr-only"
                            >Remove {{ member.pokemon.defaultForm.name }} from
                            team</span
                          >
                          <TrashIcon class="icon-button__icon" />
                        </button>
                      </li>
                    </ol>
                  </template>

                  <template #member-actions="{ pokemon }">
                    <button
                      type="button"
                      class="button button--primary"
                      @click="team.addMember({ pokemon })"
                    >
                      Add to team
                    </button>
                  </template>
                </PokemonSearch>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>

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
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { ref, defineAsyncComponent } from "vue";
import TrashIcon from "@/assets/icons/trash.svg";
import XIcon from "@/assets/icons/x.svg";
import Notification from "@/components/Notification.vue";
import Team from "@/components/Team.vue";
import { useTeam } from "@/stores";

const PokemonSearch = defineAsyncComponent(
  () => import("@/components/PokemonSearch.vue")
);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const team = useTeam();

const imageBasePath = import.meta.env.VITE_CLOUDINARY_BASE_PATH.replace(
  "image/upload",
  "image/upload/t_pokemon_sprite"
);

const fetch = async () => {
  const res = await team.get(props.id);
  if (res.error) {
    error.value = res.error;
  }
};

const error = ref<unknown | null>(null);
const refresh = ref(fetch);

fetch();
</script>
