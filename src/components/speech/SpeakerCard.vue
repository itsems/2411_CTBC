<template>
  <div class="px-2 mb-7 lg:mb-0 lg:px-0">
    <div class="mb-5 bg-white rounded-2xl">
      <div
        :class="[
          'z-[1] relative bg-cover bg-no-repeat bg-top rounded-2xl shadow-md shadow-gray-400',
          'w-full pb-[83%]',
          'lg:pb-[100%]'
        ]"
        :style="{ 'background-image': `url(${speaker.imagePath})` }"
      />
    </div>
    <p class="mb-1 text-2xl font-bold text-center text-darkGreen">{{ speaker.name }}</p>
    <p class="text-center">{{ speaker.title }}</p>
  </div>
</template>
<script setup>
defineProps({
  speaker: {
    type: Object,
    default: undefined
  }
})
</script>
