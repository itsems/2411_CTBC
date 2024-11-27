<template>
  <div class="flex gap-3">
    <div class="px-3 py-[3px] text-white rounded-lg bg-main cursor-default">{{ type }}</div>
    |
    <span>{{ date }}</span>
  </div>
</template>
<script setup>
defineProps({
  type: String,
  date: String
})
</script>
