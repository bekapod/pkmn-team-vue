<template>
  <div
    class="max-w-sm w-full bg-white shadow-lg rounded-tl-lg rounded-br-lg pointer-events-auto ring-1 ring-cool-grey-900 ring-opacity-5 overflow-hidden"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <HappyBeamingIcon
            v-if="type === 'success'"
            class="h-6 w-6 text-green-vivid-400"
            aria-hidden="true"
          />
          <SadIcon
            v-if="type === 'error'"
            class="h-6 w-6 text-red-vivid-400"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="my-0 text-sm font-medium text-cool-grey-900">
            <slot name="title" />
          </p>
          <p class="mt-1 mb-0 text-sm text-cool-grey-500">
            <slot />
          </p>
        </div>
        <div class="ml-4 flex-shrink-0 flex">
          <button
            class="bg-white rounded-md inline-flex text-cool-grey-400 hover:text-cool-grey-500"
            @click="$emit('close')"
          >
            <span class="sr-only">Close</span>
            <XIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import SadIcon from "@/assets/icons/sad.svg?component";
import HappyBeamingIcon from "@/assets/icons/happy-beaming.svg?component";
import XIcon from "@/assets/icons/x.svg?component";

type ToastType = "error" | "success";

defineProps({
  type: {
    type: String as PropType<ToastType>,
    required: true,
    validator: (val: ToastType) => {
      return ["error", "success"].includes(val);
    },
  },
});

defineEmits(["close"]);
</script>
