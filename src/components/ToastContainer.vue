<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <Toast
      v-if="toasts.toast"
      :type="toasts.toast.type"
      class="w-full max-w-3xl"
      @close="() => toasts.toast && toasts.removeToast(toasts.toast)"
    >
      <template #title>{{ toasts.toast.title }}</template>
      {{ toasts.toast.content }}
    </Toast>
  </Transition>
</template>

<script setup lang="ts">
import Toast from "./Toast.vue";
import { useToasts } from "@/stores";

const toasts = useToasts();
</script>
