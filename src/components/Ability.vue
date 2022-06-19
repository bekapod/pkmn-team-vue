<template>
  <component
    :is="as"
    class="rounded-tl-md rounded-br-md border-2 p-3"
    :class="{
      'border-yellow-vivid-100 bg-yellow-vivid-50 text-yellow-vivid-900 ':
        isHidden,
      'border-indigo-50 bg-white text-indigo-700': !isHidden,
    }"
  >
    <div class="flex items-center font-bold">
      <HideIcon v-if="isHidden" class="mr-2 h-6 w-6" />
      <ShowIcon v-else class="mr-2 h-6 w-6" />
      {{ name }}
    </div>
    <p class="mt-2 mb-0">{{ effect }}</p>
  </component>
</template>

<script setup lang="ts">
import HideIcon from "@/assets/icons/hide.svg";
import ShowIcon from "@/assets/icons/show.svg";

defineProps({
  as: {
    type: [String, Object],
    required: false,
    default: "div",
  },
  name: {
    type: String,
    required: true,
  },
  effect: {
    type: String,
    required: true,
  },
  isHidden: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
