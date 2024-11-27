<template>
  <div class="pl-9 lg:pl-0 lg:text-center">
    <p class="mb-1 lg:hidden text-md">{{ label }}</p>
    <div class="flex items-end gap-2 lg:block">
      <slot>
        <p>{{ value }}</p>
        <label class="text-[13px] lg:text-base" :class="isUpOrDownClass(valueChange)">
          {{ valueChange }}%
          <Symbol :number="valueChange" />
        </label>
      </slot>
    </div>
  </div>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
defineProps({
  label: String,
  value: [String, Number],
  valueChange: [String, Number],
})
</script>
