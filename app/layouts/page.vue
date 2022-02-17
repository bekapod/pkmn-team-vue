<template>
  <AppHeader>
    <slot name="page-title" />
    <template #action><slot name="header-action" /></template>
  </AppHeader>

  <main class="-mt-32">
    <div class="container mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        <slot>
          <div
            class="h-96 border-4 border-dashed border-cool-grey-200 rounded-lg"
          />
        </slot>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>
