<template>
  <li class="relative list-none" :aria-labelledby="`team-member-move-${id}`">
    <span
      :id="`team-member-move-${id}`"
      class="block relative p-4 text-indigo-900 bg-cool-grey-50 leading-none text-sm font-bold uppercase rounded-br-lg team-member-move-template cursor-grab active:cursor-grabbing"
      :style="{
        '--type-gradient': getTypeGradient(
          damageClass
            ? [damageClass.toLowerCase(), type.slug]
            : [type.slug]
        ),
      } as any"
    >
      {{ name }}
    </span>

    <button
      class="absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md text-indigo-900 hover:text-red-vivid-400 focus-visible:outline-red-vivid-400"
      @click="$emit('remove', id)"
    >
      <span class="sr-only">Remove move</span>
      <TrashIcon aria-hidden="true" class="h-5 w-5" />
    </button>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import TrashIcon from "@/assets/icons/trash.svg?component";
import { DamageClass } from "@/graphql";
import { getTypeGradient } from "@/lib";
import { Type } from "@/data";

defineProps({
  id: {
    type: String,
    required: true,
  },
  damageClass: {
    type: String as PropType<DamageClass>,
    required: true,
    validator: (val: DamageClass) => {
      return Object.values(DamageClass).includes(val);
    },
  },
  type: {
    type: Object as PropType<Omit<Type, "slot">>,
    required: true,
    validator: (val: unknown) => {
      return Type.omit({ slot: true }).safeParse(val).success;
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
