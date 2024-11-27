<template>
  <div class="flex items-center justify-start mb-6 section-title lg:mb-9">
    <slot />
    <p class="ml-3 text-3xl font-normal" :class="textColor">{{ title }}</p>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  textColor: {
    type: String,
    default: 'text-main'
  }
})
</script>
