<template>
  <div class="flex items-center gap-2">
    <span class="inline-block w-4 h-4 rounded-full dot" :class="bgClass" />
    <span>{{ label }}</span>
  </div>
</template>
<script setup>
defineProps({
  label: String,
  bgClass: String
})
</script>
