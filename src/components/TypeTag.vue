<template>
  <span class="type-tag" :style="'--type-color:' + getTypeColor(slug)">{{
    name
  }}</span>
</template>

<script setup lang="ts">
import { getTypeColor } from "@/lib";

defineProps({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});
</script>
