<template>
  <div
    class="rounded-md p-4"
    :class="{
      'bg-red-vivid-50': type === 'error',
      'bg-green-vivid-50': type === 'success',
    }"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon
          v-if="type === 'error'"
          class="h-5 w-5 text-red-vivid-400"
          aria-hidden="true"
        />
        <CheckCircleIcon
          v-if="type === 'success'"
          class="h-5 w-5 text-green-vivid-400"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3">
        <div
          class="text-sm font-medium"
          :class="{
            'text-red-vivid-800': type === 'error',
            'text-green-vivid-800': type === 'success',
          }"
        >
          <slot name="title" />
        </div>
        <div
          class="mt-2 text-sm"
          :class="{
            'text-red-vivid-700': type === 'error',
            'text-green-vivid-700': type === 'success',
          }"
        >
          <slot />
        </div>

        <div v-if="action" class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button
              type="button"
              class="px-2 py-1.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="{
                'bg-red-vivid-50 text-red-vivid-800 hover:bg-red-vivid-100  focus:ring-offset-red-vivid-50 focus:ring-red-vivid-600':
                  type === 'error',
                'bg-green-vivid-50 text-green-vivid-800 hover:bg-green-vivid-100  focus:ring-offset-green-vivid-50 focus:ring-green-vivid-600':
                  type === 'success',
              }"
              @click="action?.callback"
            >
              {{ action.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/vue/solid";

type NotificationType = "error" | "success";
type NotificationAction = { label: string; callback: () => void };

defineProps({
  type: {
    type: String as PropType<NotificationType>,
    required: true,
    validator: (val: NotificationType) => {
      return ["error", "success"].includes(val);
    },
  },
  action: {
    type: Object as PropType<NotificationAction>,
    required: false,
    default: undefined,
    validator: (val?: NotificationAction) => {
      return (
        val === undefined ||
        (typeof val.callback === "function" && typeof val.label === "string")
      );
    },
  },
});
</script>
