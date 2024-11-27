<template>
  <a :href="url" download class="flex items-center justify-between px-6 py-4 bg-white shadow-xl cursor-pointer group rounded-2xl hover:shadow-xl">
    <p class="text-md group-hover:text-main">{{ name }}</p>
    <img class="w-8" :src="FileIcon" :alt="name">
  </a>
</template>
<script setup>
import FileIcon from '@/assets/images/icon/download.png'
defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>
