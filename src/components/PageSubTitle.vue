<template>
  <p class="title lg:text-lg font-medium text-darkGreen lg:mb-1">{{ title }}</p>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: undefined
  }
})
</script>
