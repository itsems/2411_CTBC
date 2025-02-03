<template>
  <div class="flex flex-wrap items-baseline text-[#333] text-2xl font-semibold">{{ number }}
    <div class="ml-1 text-md" :class="isUpOrDownClass(change)">
      <Symbol :number="change" />
      <span>{{ change }}</span>
    </div>
  </div>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

defineProps({
  number: {
    type: [String, Number],
    default: undefined,
  },
  change: {
    type: [String, Number],
    default: undefined,
  },
})
</script>
