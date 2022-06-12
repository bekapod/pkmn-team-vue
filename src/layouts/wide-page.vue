<template>
  <div>
    <AppHeader>
      <slot name="page-title" />
      <template #action><slot name="header-action" /></template>
    </AppHeader>

    <main class="-mt-32">
      <div class="px-4 pb-12 sm:px-6 lg:px-8">
        <slot>
          <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div
              class="h-96 rounded-lg border-4 border-dashed border-cool-grey-200"
            />
          </div>
        </slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>
