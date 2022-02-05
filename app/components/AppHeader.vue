<template>
  <div class="bg-indigo-700 pb-32">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="bg-indigo-700 border-b border-indigo-400 border-opacity-25 lg:border-none"
    >
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
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
                    'rounded-md py-2 px-3 text-sm font-medium',
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
              <div
                class="relative text-cool-grey-400 focus-within:text-cool-grey-600"
              >
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  class="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-cool-grey-900 placeholder-cool-grey-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:text-sm"
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
              class="bg-indigo-700 p-2 rounded-md inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-600 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
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
                class="bg-indigo-700 flex-shrink-0 rounded-full p-1 text-indigo-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative flex-shrink-0">
                <div>
                  <MenuButton
                    class="bg-indigo-700 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="rounded-full h-8 w-8"
                      :src="user.imageUrl"
                      alt=""
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
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              'block rounded-md py-2 px-3 text-base font-medium',
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
              class="ml-auto bg-indigo-700 flex-shrink-0 rounded-full p-1 text-indigo-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
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
              class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-600 hover:bg-opacity-75"
            >
              {{ item.name }}
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">
          <slot>Page Title</slot>
        </h1>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

const user = {
  name: "Ash Ketchum",
  email: "ash@example.com",
  imageUrl:
    "https://img.search.brave.com/2PHuqlwRKOiydkzclVzCt8oinsuaTWtitP_tW68YeV0/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKekstckVp/bEltY1VOQ3FkS2NV/NjVjaTlBNzRwWmVO/Nzl5cjRRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
};

const navigation = [
  { name: "All Teams", href: "#", current: true },
  { name: "Team Builder", href: "#", current: false },
];

const userNavigation = [
  { name: "My Teams", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>
