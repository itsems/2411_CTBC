<template>
  <div class="flex px-1 py-6 lg:py-8 content-card">
    <div class="w-1/2 text-center border-r border-solid border-[#b0b0b0]">
      <p class="text-md lg:text-base">{{ leftLabel }}</p>
      <p class="mb-1 text-2xl font-bold lg:mb-2 lg:text-4xl">{{ leftValue }}</p>
      <p class="text-sm text-grey-999">({{ leftDate }})</p>
    </div>
    <div class="w-1/2 text-center">
      <p class="text-md lg:text-base">{{ rightLabel }}</p>
      <p class="mb-1 text-2xl font-bold lg:mb-2 lg:text-4xl">{{ rightValue }}</p>
      <p class="text-sm text-grey-999">({{ rightDate }})</p>
    </div>
          
  </div>
</template>
<script setup>
defineProps({
  leftLabel: {
    type: String,
    default: '最高',
  },
  leftValue: {
    type: [String, Number],
    default: 'XX.XX',
  },
  leftDate: {
    type: String,
    default: 'YYYY/MM/DD',
  },
  rightLabel: {
    type: String,
    default: '最低',
  },
  rightValue: {
    type: [String, Number],
    default: 'XX.XX',
  },
  rightDate: {
    type: String,
    default: 'YYYY/MM/DD',
  },
})
</script>
