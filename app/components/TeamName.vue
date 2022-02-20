<template>
  <button
    v-if="mode === 'display'"
    ref="button"
    type="button"
    class="invisible-button inline-flex items-center"
    @click="() => (mode = 'update')"
  >
    {{ name }}
    <PencilIcon aria-label="Edit team name" class="fill-current w-8 h-8 ml-5" />
  </button>

  <FormKit
    v-if="mode === 'update'"
    :aria-busy="isSubmitting"
    type="form"
    :classes="{
      form: `inline-flex flex-row items-stretch relative self-center w-full max-w-3xl`,
      messages: 'sr-only',
    }"
    :actions="false"
    @submit="submitHandler"
  >
    <FormKit
      ref="input"
      type="text"
      name="team-name"
      label="Team name"
      placeholder="Team name"
      :value="name"
      validation="required"
      validation-visibility="dirty"
      outer-class="flex-1 mb-4 w-full sm:w-auto sm:mb-0 sm:mr-3"
      label-class="sr-only"
      message-class="sm:absolute invisible-input-message"
      :input-class="{
        'invisible-input': true,
        'md:max-w-3xl': false,
      }"
    />

    <FormKit
      type="submit"
      :config="{ disabled: isSubmitting }"
      input-class="relative invisible-input-action"
    >
      <span :class="{ invisible: isSlowLoading }">Update</span>
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
import { ref, computed, watch } from "vue";
import PencilIcon from "@/assets/icons/pencil.svg?component";
import { useToasts } from "@/stores";

const toasts = useToasts();
const mode = ref("display");
const input = ref<any | null>(null);
const button = ref<HTMLElement | null>(null);
const isSubmitting = ref(false);
const timeTaken = ref(0);
const isSlowLoading = computed(() => timeTaken.value > 1);
let timer;

defineProps({
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "team-renamed", name: string): void;
}>();

watch([input, button], async ([newInput, newButton]) => {
  if (newInput && !newButton) {
    // TODO: what is this
    newInput?.$el?.parentNode?.querySelector("input")?.focus();
  }

  if (!newInput && newButton) {
    newButton.focus();
  }
});

const submitHandler = async (formData: any) => {
  const errorToast = {
    type: "error",
    title: "Error",
    content: "An error happened while updating your team name.",
  } as const;
  const successToast = {
    type: "success",
    title: "Team name updated!",
    content: "Your team has been successfully renamed.",
  } as const;

  toasts.removeToast(errorToast);
  toasts.removeToast(successToast);
  isSubmitting.value = true;
  timer = window.setInterval(() => {
    timeTaken.value += 1;
  }, 1000);
  try {
    // const { createTeam: team } = await getSdk($graphQLClient).CreateTeam({
    //   name: formData["team-name"],
    // });
    toasts.addToast(successToast);
    mode.value = "display";
    emit("team-renamed", formData["team-name"]);
  } catch (err: any) {
    toasts.addToast(errorToast);
  } finally {
    window.clearInterval(timer);
    timeTaken.value = 0;
    isSubmitting.value = false;
  }
};
</script>
