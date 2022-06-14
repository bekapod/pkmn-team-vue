<template>
  <template v-if="team.canEdit">
    <button
      v-if="mode === 'display'"
      ref="button"
      type="button"
      class="invisible-button inline-flex items-center"
      @click="() => (mode = 'update')"
    >
      {{ team.name }}
      <PencilIcon
        aria-label="Edit team name"
        class="fill-current ml-5 h-8 w-8"
      />
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
        :value="team.name"
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
          class="absolute top-1/2 left-1/2 w-12 -translate-y-1/2 -translate-x-1/2"
        />
      </FormKit>
    </FormKit>
  </template>

  <template v-else>
    {{ team.name }}
  </template>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { ref, computed, watch, type PropType } from "vue";
import type { FormKitGroupValue } from "@formkit/core";
import PencilIcon from "@/assets/icons/pencil.svg";
import { useTeam } from "@/stores";

const { getAccessTokenSilently } = useAuth0();
const team = useTeam();
const mode = ref("display");
const input = ref<{ $el: HTMLInputElement } | null>(null);
const button = ref<HTMLElement | null>(null);
const isSubmitting = ref(false);
const timeTaken = ref(0);
const isSlowLoading = computed(() => timeTaken.value > 1);
let timer;

const emit = defineEmits<{
  (e: "team-renamed", name: string): void;
}>();
const props = defineProps({
  authTimeout: {
    type: Number as PropType<number>,
    required: false,
    default: 60,
  },
});

watch([input, button], async ([newInput, newButton], [oldInput, oldButton]) => {
  if (newInput && !newButton && oldButton) {
    newInput?.$el?.parentNode?.querySelector("input")?.focus();
  }

  if (newButton && !newInput && oldInput) {
    newButton.focus();
  }
});

const submitHandler = async (formData: FormKitGroupValue) => {
  isSubmitting.value = true;
  timer = window.setInterval(() => {
    timeTaken.value += 1;
  }, 1000);
  const token = await getAccessTokenSilently({
    timeoutInSeconds: props.authTimeout,
  }).catch(() => "");
  const { data } = await team.setTeamName(
    formData["team-name"] as string,
    token
  );
  if (data) {
    mode.value = "display";
    emit("team-renamed", data);
  }
  window.clearInterval(timer);
  timeTaken.value = 0;
  isSubmitting.value = false;
};
</script>
