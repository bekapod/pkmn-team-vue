<template>
  <div
    :role="type === 'error' ? 'alert' : 'status'"
    :aria-labelledby="id"
    class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-tl-lg rounded-br-lg bg-white shadow-lg ring-1 ring-cool-grey-900 ring-opacity-5"
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
          <LoadingAltIcon
            v-if="type === 'loading'"
            class="h-6 w-6 animate-spin text-cool-grey-200"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="my-0 text-sm font-medium text-cool-grey-900" :id="id">
            <slot name="title" />
          </p>
          <p class="mt-1 mb-0 text-sm text-cool-grey-500">
            <slot />
          </p>
        </div>
        <div class="ml-4 flex flex-shrink-0">
          <button
            class="inline-flex rounded-md bg-white text-cool-grey-400 hover:text-cool-grey-500"
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
import uniqueId from "lodash/fp/uniqueId";
import type { Toast } from "@/stores";
import type { PropType } from "vue";
import HappyBeamingIcon from "@/assets/icons/happy-beaming.svg";
import LoadingAltIcon from "@/assets/icons/loading-alt.svg";
import SadIcon from "@/assets/icons/sad.svg";
import XIcon from "@/assets/icons/x.svg";

defineProps({
  type: {
    type: String as PropType<Toast["type"]>,
    required: true,
    validator: (val: Toast["type"]) => {
      return ["error", "success", "loading"].includes(val);
    },
  },
});

defineEmits(["close"]);

const id = uniqueId("toast-");
</script>
