<template>
  <div class="lg:h-[274px] relative bg-center bg-cover" :style="{ 'background-image': 'url(' + desktopImage + ')' }">
    <img class="block w-full lg:hidden" :src="mobileImage" :alt="title">
    <p class="absolute text-3xl font-bold text-white -translate-x-1/2 lg:text-[40px] -translate-y-1/2 left-1/2 top-1/2">
      <slot>{{ title }}</slot>
    </p>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  desktopImage: String,
  mobileImage: String
})
</script>
