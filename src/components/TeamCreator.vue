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
      :config="{ disabled: isSubmitting || !me.id }"
      input-class="relative"
    >
      <span :class="{ invisible: isSlowLoading }">Create team</span>
      <img
        v-if="isSlowLoading"
        alt="Loading"
        :src="'/icons/three-dots.svg'"
        class="absolute top-1/2 left-1/2 w-12 -translate-y-1/2 -translate-x-1/2"
      />
    </FormKit>
  </FormKit>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { ref, computed, type PropType } from "vue";
import { useRouter } from "vue-router";
import type { Team } from "@/data";
import type { FormKitGroupValue } from "@formkit/core";
import { useTeam, useTrainer } from "@/stores";

const emit = defineEmits<{
  (e: "team-created", team: Team): void;
}>();
const props = defineProps({
  authTimeout: {
    type: Number as PropType<number>,
    required: false,
    default: 60,
  },
});

const router = useRouter();
const { getAccessTokenSilently } = useAuth0();
const me = useTrainer();
const team = useTeam();
const isSubmitting = ref(false);
const timeTaken = ref(0);
const isSlowLoading = computed(() => timeTaken.value > 1);
let timer;

const submitHandler = async (formData: FormKitGroupValue) => {
  isSubmitting.value = true;
  timer = window.setInterval(() => {
    timeTaken.value += 1;
  }, 1000);

  const token = await getAccessTokenSilently({
    timeoutInSeconds: props.authTimeout,
  }).catch(() => "");
  const { data } = await team.createTeam(
    formData["team-name"] as string,
    token
  );

  window.clearInterval(timer);
  timeTaken.value = 0;
  isSubmitting.value = false;

  if (data) {
    emit("team-created", data);
    router.push(`/team/${data.id}`);
  }
};
</script>
