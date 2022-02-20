<template>
  <div class="bg-indigo-700 pb-32">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="bg-indigo-700 border-b border-indigo-400 border-opacity-25 lg:border-none"
    >
      <div class="container mx-auto px-2 sm:px-4 lg:px-8">
        <div
          class="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-500 lg:border-opacity-25"
        >
          <div class="px-2 flex items-center lg:px-0">
            <div class="flex-shrink-0">
              <PokeBall role="presentation" class="block w-10 h-10" />
            </div>
            <div class="hidden lg:block lg:ml-10">
              <div class="flex space-x-4">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    item.current
                      ? 'bg-indigo-800 text-white'
                      : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
                    'rounded-tl-md rounded-br-md py-2 px-3 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative text-cool-grey-400">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  <SearchAltIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  class="block w-full pl-10"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="bg-indigo-700 p-2 rounded-tl-md rounded-br-md inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-600 hover:bg-opacity-75"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="hidden lg:block lg:ml-4">
            <div class="flex items-center">
              <button
                type="button"
                class="bg-indigo-700 flex-shrink-0 rounded-full p-1 text-indigo-300 hover:text-white"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative flex-shrink-0">
                <div>
                  <MenuButton
                    class="bg-indigo-700 rounded-full flex text-sm text-white"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="rounded-full h-8 w-8"
                      :src="user.imageUrl"
                      alt=""
                      lazy="true"
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-tl-md rounded-br-md shadow-lg py-1 bg-white"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-yellow-vivid-100' : '',
                          'block py-2 px-4 text-sm text-cool-grey-700',
                        ]"
                      >
                        {{ item.name }}
                      </a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-indigo-800 text-white'
                : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
              'block rounded-tl-md rounded-br-md py-2 px-3 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
        <div class="pt-4 pb-3 border-t border-indigo-800">
          <div class="px-5 flex items-center">
            <div class="flex-shrink-0">
              <img class="rounded-full h-10 w-10" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-indigo-400">
                {{ user.email }}
              </div>
            </div>
            <button
              type="button"
              class="ml-auto bg-indigo-700 flex-shrink-0 rounded-full p-1 text-indigo-300 hover:text-white"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block rounded-tl-md rounded-br-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-600 hover:bg-opacity-75"
            >
              {{ item.name }}
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="py-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        <h1 class="text-3xl font-bold text-white">
          <slot>Page Title</slot>
        </h1>

        <slot name="action" />
      </div>
    </header>
  </div>

  <Teleport v-if="isMounted" to="#toast-teleport-target">
    <ToastContainer />
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import SearchAltIcon from "@/assets/icons/search-alt.svg?component";
import BellIcon from "@/assets/icons/bell.svg?component";
import MenuIcon from "@/assets/icons/menu.svg?component";
import XIcon from "@/assets/icons/x.svg?component";
import PokeBall from "./PokeBall.vue";
import ToastContainer from "./ToastContainer.vue";

const route = useRoute();
const isMounted = ref(false);

const user = {
  name: "Ash Ketchum",
  email: "ash@example.com",
  imageUrl:
    "https://img.search.brave.com/2PHuqlwRKOiydkzclVzCt8oinsuaTWtitP_tW68YeV0/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKekstckVp/bEltY1VOQ3FkS2NV/NjVjaTlBNzRwWmVO/Nzl5cjRRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
};

const navigation = [
  { name: "All Teams", href: "/", current: route.name === "index" },
  {
    name: "Team Builder",
    href: "/team-builder",
    current: route.name === "team-id",
  },
];

const userNavigation = [
  { name: "My Teams", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

onMounted(() => {
  isMounted.value = true;
});
</script>
