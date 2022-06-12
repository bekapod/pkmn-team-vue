<template>
  <div class="bg-indigo-700 pb-32">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="border-b border-indigo-400 border-opacity-25 bg-indigo-700 lg:border-none"
    >
      <div class="container mx-auto px-2 sm:px-4 lg:px-8">
        <div
          class="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-500 lg:border-opacity-25"
        >
          <div class="flex items-center px-2 lg:px-0">
            <div class="flex-shrink-0">
              <PokeBall role="presentation" class="block h-10 w-10" />
            </div>
            <div class="hidden lg:ml-10 lg:block">
              <div class="flex space-x-4">
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  active-class="bg-indigo-800"
                  class="rounded-tl-md rounded-br-md py-2 px-3 text-sm font-medium text-white hover:bg-indigo-600 hover:bg-opacity-75"
                  aria-current-value="page"
                >
                  {{ item.name }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative text-cool-grey-400">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
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
              class="inline-flex items-center justify-center rounded-tl-md rounded-br-md bg-indigo-700 p-2 text-indigo-300 hover:bg-indigo-600 hover:bg-opacity-75 hover:text-white"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="hidden lg:ml-4 lg:block">
            <div class="flex items-center">
              <button
                type="button"
                class="flex-shrink-0 rounded-full bg-indigo-700 p-1 text-indigo-300 hover:text-white"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3 flex-shrink-0">
                <div>
                  <MenuButton
                    class="flex rounded-full bg-indigo-700 text-sm text-indigo-300 hover:text-white"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      v-if="me.id"
                      class="h-8 w-8 rounded-full"
                      :src="me.picture"
                      alt=""
                      lazy="true"
                    />
                    <UserCircleIcon class="h-8 w-8" v-else />
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
                    class="absolute right-0 mt-2 w-48 origin-top-right rounded-tl-md rounded-br-md bg-white py-1 shadow-lg"
                  >
                    <MenuItem v-if="!me.id" v-slot="{ active }">
                      <button
                        type="button"
                        :class="[
                          active ? 'bg-yellow-vivid-100' : '',
                          'block w-full py-2 px-4 text-left text-sm text-cool-grey-700',
                        ]"
                        @click="login"
                      >
                        Login
                      </button>
                    </MenuItem>
                    <MenuItem v-if="me.id" v-slot="{ active }">
                      <button
                        type="button"
                        :class="[
                          active ? 'bg-yellow-vivid-100' : '',
                          'block w-full py-2 px-4 text-left text-sm text-cool-grey-700',
                        ]"
                        @click="logout"
                      >
                        Logout
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            active-class="bg-indigo-800"
            class="block rounded-tl-md rounded-br-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-600 hover:bg-opacity-75"
            aria-current-value="page"
          >
            {{ item.name }}
          </RouterLink>
        </div>
        <div class="border-t border-indigo-800 pt-4 pb-3">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                v-if="me.id"
                class="h-10 w-10 rounded-full"
                :src="me.picture"
                alt=""
              />
              <UserCircleIcon class="h-10 w-10 text-white" v-else />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">
                {{ me.username ?? "Anonymous" }}
              </div>
              <div class="text-sm font-medium text-indigo-400">
                {{ me.id ? "Trainer" : "Visiting trainer" }}
              </div>
            </div>
            <button
              type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-indigo-700 p-1 text-indigo-300 hover:text-white"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              v-if="!me.id"
              as="button"
              type="button"
              class="block w-full rounded-tl-md rounded-br-md py-2 px-3 text-left text-base font-medium text-white hover:bg-indigo-600 hover:bg-opacity-75"
              @click="login"
            >
              Login
            </DisclosureButton>
            <DisclosureButton
              v-if="me.id"
              as="button"
              type="button"
              class="block w-full rounded-tl-md rounded-br-md py-2 px-3 text-left text-base font-medium text-white hover:bg-indigo-600 hover:bg-opacity-75"
              @click="logout"
            >
              Logout
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="py-10">
      <div class="container mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">
          <slot>Page Title</slot>
        </h1>

        <slot name="action" />
      </div>
    </header>
  </div>

  <Teleport to="#toast-teleport-target">
    <ToastContainer />
  </Teleport>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import PokeBall from "./PokeBall.vue";
import ToastContainer from "./ToastContainer.vue";
import BellIcon from "@/assets/icons/bell.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import SearchAltIcon from "@/assets/icons/search-alt.svg";
import UserCircleIcon from "@/assets/icons/user-circle.svg";
import XIcon from "@/assets/icons/x.svg";
import { useToasts, useTrainer } from "@/stores";

const toasts = useToasts();

const {
  error,
  loginWithRedirect: login,
  logout: originalLogout,
  isAuthenticated,
  getAccessTokenSilently,
} = useAuth0();

const me = useTrainer();

watch(
  isAuthenticated,
  async (value) => {
    console.log({ value });
    if (value) {
      const token = await getAccessTokenSilently();
      me.getMe(token);
    }
  },
  { immediate: true }
);

if (error.value) {
  toasts.addToast({
    type: "error",
    title: "Error",
    content: "An unexpected error happened. Please try logging in/out again.",
  });
}

const logout = () => {
  originalLogout({ returnTo: window.location.origin });
};

const navigation = ref([
  { name: "All Teams", href: "/" },
  {
    name: "Team Builder",
    href: "/team/123",
  },
]);
</script>
