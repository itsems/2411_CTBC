<template>
  <div class="overflow-hidden text-center bg-white shadow-lg rounded-2xl">
    <div class="py-3 text-white bg-main">{{ text }}</div>
    <div class="py-4 text-md">{{ value }}</div>
  </div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  value: {
    type: [Number, String],
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.text {
  border-color: #d1d1d1;
}
</style>