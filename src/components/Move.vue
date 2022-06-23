<template>
  <component
    :is="as"
    class="with-type-gradient relative bg-white p-3"
    :style="{
      '--outdent': outdent,
      '--type-gradient': getTypeGradient(damageClass ? [type.slug, damageClass.toLowerCase()] : [type.slug]),
    } as any"
  >
    <div
      class="mb-2 flex flex-wrap items-center justify-between gap-2 font-bold"
    >
      <div>{{ name }}</div>
      <div class="flex gap-2">
        <TypeTag :name="type.name" :slug="type.slug" />
        <TypeTag
          v-if="damageClass"
          :name="damageClass"
          :slug="damageClass.toLowerCase()"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-between gap-2">
      <span
        v-if="learnMethod"
        class="badge bg-indigo-600 text-white"
        :class="{
          'pl-2': learnMethod === MoveLearnMethod.LevelUp,
          'px-2 py-1': learnMethod !== MoveLearnMethod.LevelUp,
        }"
      >
        {{ getMoveLearnMethodLabel(learnMethod) }}
        <span
          v-if="learnMethod === MoveLearnMethod.LevelUp"
          class="ml-2 block bg-cool-grey-50 py-1 px-2 text-indigo-900"
        >
          {{ levelLearnedAt }}
        </span>
      </span>

      <div class="flex gap-2">
        <span v-if="power" class="badge bg-indigo-50 pl-2 text-indigo-900">
          <abbr title="Power" class="cursor-help">P</abbr>
          <span class="ml-2 block bg-cool-grey-50 py-1 px-2">
            {{ power }}
          </span>
        </span>
        <span v-if="accuracy" class="badge bg-indigo-50 pl-2 text-indigo-900">
          <abbr title="Accuracy" class="cursor-help">A</abbr>
          <span class="ml-2 block rounded-br bg-cool-grey-50 py-1 px-2">
            {{ accuracy }}
          </span>
        </span>
      </div>
    </div>
    <p v-if="effect" class="mt-2 mb-0">
      <template v-if="effectChance">
        {{ effect.replace("$effect_chance", effectChance.toString()) }}
      </template>
      <template v-else>
        {{ effect }}
      </template>
    </p>
  </component>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import TypeTag from "@/components/TypeTag.vue";
import { Type } from "@/data";
import { DamageClass, MoveLearnMethod, MoveTarget } from "@/graphql";
import { getTypeGradient, getMoveLearnMethodLabel } from "@/lib";

defineProps({
  as: {
    type: [String, Object],
    required: false,
    default: "div",
  },
  name: {
    type: String,
    required: true,
  },
  effect: {
    type: String,
    required: false,
  },
  effectChance: {
    type: Number,
    required: false,
  },
  accuracy: {
    type: Number,
    required: false,
  },
  power: {
    type: Number,
    required: false,
  },
  damageClass: {
    type: String as PropType<DamageClass>,
    required: false,
    validator: (value) =>
      typeof value === "string" &&
      Object.values(DamageClass).includes(value as DamageClass),
  },
  target: {
    type: String as PropType<MoveTarget>,
    required: true,
    validator: (value) =>
      typeof value === "string" &&
      Object.values(MoveTarget).includes(value as MoveTarget),
  },
  learnMethod: {
    type: String as PropType<MoveLearnMethod>,
    required: false,
    validator: (value) =>
      typeof value === "string" &&
      Object.values(MoveLearnMethod).includes(value as MoveLearnMethod),
  },
  levelLearnedAt: {
    type: Number,
    required: false,
  },
  type: {
    type: Object as PropType<Omit<Type, "slot">>,
    required: true,
    validator: (value) => Type.safeParse(value).success,
  },
  outdent: {
    type: String,
    required: false,
    default: "0px",
  },
});
</script>

<style scoped>
.badge {
  @apply inline-flex items-center justify-center rounded-tl rounded-br text-center text-sm font-bold uppercase;
}
</style>
