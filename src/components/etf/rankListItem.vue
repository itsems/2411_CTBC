<template>
  <li class="flex-1 text-center">
    <p class="lg:hidden mb-2">{{ label }}</p>
    <p>{{ current }}</p>
    <p :class="isUpOrDownClass( from )">
      {{ from }}%
      <Symbol :number="from" />
    </p>
  </li>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
import Symbol from '@/components/Symbol.vue'

defineProps({
  label: {
    type: String,
    default: undefined,
  },
  current: {
    type: Number,
    default: undefined,
  },
  from: {
    type: Number,
    default: undefined,
  },
})
</script>
