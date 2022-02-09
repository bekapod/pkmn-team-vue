<template>
  <AppHeader>
    <slot name="page-title" />
  </AppHeader>

  <main class="-mt-32">
    <div class="pb-12 px-4 sm:px-6 lg:px-8">
      <slot>
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div
            class="h-96 border-4 border-dashed border-cool-grey-200 rounded-lg"
          />
        </div>
      </slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>
