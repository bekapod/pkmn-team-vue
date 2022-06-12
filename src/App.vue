<script setup lang="ts">
import { RouterView } from "vue-router";
import WidePage from "@/layouts/wide-page.vue";
</script>

<template>
  <WidePage>
    <template #page-title>
      <RouterView name="PageTitle" />
    </template>
    <template #header-action>
      <RouterView name="HeaderAction" />
    </template>
    <RouterView v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </WidePage>
</template>

<style>
@import "@/assets/base.css";
</style>
