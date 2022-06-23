<template>
  <li
    class="with-type-gradient relative flex list-none items-center justify-between overflow-hidden rounded-tl-lg rounded-br-lg bg-cool-grey-50 px-3 pb-1 pt-3"
    :aria-labelledby="`team-member-move-${id}`"
    :style="{
        '--type-gradient': getTypeGradient(
          damageClass
            ? [damageClass.toLowerCase(), type.slug]
            : [type.slug]
        ),
      } as any"
  >
    <span
      :id="`team-member-move-${id}`"
      class="block cursor-grab text-sm font-bold text-indigo-900 active:cursor-grabbing"
    >
      {{ name }}
    </span>

    <button
      class="icon-button icon-button--destructive bg-[transparent] hover:bg-red-vivid-50"
      @click="$emit('remove', id)"
    >
      <span class="sr-only">Remove move</span>
      <TrashIcon aria-hidden="true" class="icon-button__icon" />
    </button>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import TrashIcon from "@/assets/icons/trash.svg";
import { Type } from "@/data";
import { DamageClass } from "@/graphql";
import { getTypeGradient } from "@/lib";

defineProps({
  id: {
    type: String,
    required: true,
  },
  damageClass: {
    type: String as PropType<DamageClass>,
    required: false,
    validator: (val: DamageClass) => {
      return Object.values(DamageClass).includes(val);
    },
  },
  type: {
    type: Object as PropType<Type>,
    required: true,
    validator: (val: unknown) => {
      return Type.safeParse(val).success;
    },
  },
  name: {
    type: String,
    required: true,
  },
});

defineEmits<{
  (e: "remove", id: string): void;
}>();
</script>

<style scoped>
.with-type-gradient::before {
  top: 0;
}
</style>
