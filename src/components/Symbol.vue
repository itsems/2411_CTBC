<template>
  <span v-if="value > 0">▲</span>
  <span v-else-if="value < 0">▼</span>
  <span v-else-if="value === 0">-</span>
</template>
<script setup>
const props = defineProps({
  number: [Number, String]
})
const value = computed(() => parseFloat(props.number))
</script>