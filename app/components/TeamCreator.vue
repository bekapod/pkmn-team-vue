<template>
  <FormKit
    :aria-busy="isSubmitting"
    type="form"
    :classes="{
      form: `inline-flex flex-col items-stretch relative self-center w-full max-w-3xl sm:items-center sm:flex-row sm:mb-8`,
      messages: 'sr-only',
    }"
    :actions="false"
    @submit="submitHandler"
  >
    <FormKit
      type="text"
      name="team-name"
      label="Team name"
      placeholder="Team name"
      validation="required"
      validation-visibility="dirty"
      outer-class="flex-1 mb-4 w-full sm:w-auto sm:mb-0 sm:mr-3"
      label-class="sr-only"
      message-class="sm:absolute"
      :input-class="{
        'text-center sm:text-left px-4 text-lg font-bold': true,
        'md:max-w-3xl': false,
      }"
    />

    <FormKit
      type="submit"
      :config="{ disabled: isSubmitting }"
      input-class="relative"
    >
      <span :class="{ invisible: isSlowLoading }">Create team</span>
      <img
        v-if="isSlowLoading"
        alt="Loading"
        :src="'/icons/three-dots.svg'"
        class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12"
      />
    </FormKit>
  </FormKit>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { CreateTeamMutation, getSdk } from "@/graphql";
import { useToasts } from "@/stores";

const emit = defineEmits<{
  (e: "team-created", team: CreateTeamMutation["createTeam"]): void;
}>();

const toasts = useToasts();
const isSubmitting = ref(false);
const timeTaken = ref(0);
const isSlowLoading = computed(() => timeTaken.value > 1);
let timer;

const { $graphQLClient } = useNuxtApp();

const submitHandler = async (formData: any) => {
  const errorToast = {
    type: "error",
    title: "Error",
    content: "An error happened while creating your team.",
  } as const;
  const successToast = {
    type: "success",
    title: "Team created!",
    content: "Your team has been successfully created.",
  } as const;

  toasts.removeToast(errorToast);
  toasts.removeToast(successToast);
  isSubmitting.value = true;
  timer = window.setInterval(() => {
    timeTaken.value += 1;
  }, 1000);
  try {
    const { createTeam: team } = await getSdk($graphQLClient).CreateTeam({
      name: formData["team-name"],
    });
    toasts.addToast(successToast);
    emit("team-created", team);
  } catch (err: any) {
    toasts.addToast(errorToast);
  } finally {
    window.clearInterval(timer);
    timeTaken.value = 0;
    isSubmitting.value = false;
  }
};
</script>
