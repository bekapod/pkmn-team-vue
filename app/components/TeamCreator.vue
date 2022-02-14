<template>
  <FormKit
    type="form"
    submit-label="Create team"
    :classes="{
      form: 'inline-flex flex-col items-stretch relative self-center w-full max-w-3xl sm:items-center sm:flex-row',
      messages: 'sr-only',
    }"
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
  </FormKit>
</template>

<script setup>
const submitHandler = async formData => {
  console.log({ formData });
  await new Promise(r => setTimeout(r, 1000));
};
</script>
