<template>
  <div class="flex items-center gap-3 mb-9 lg:mb-9">
    <div v-if="hasIcon" class="flex items-center justify-center w-10 h-10 img-box">
      <img
        :width="size"
        :src="imagePath"
        :alt="title" 
        class="self-center block"
      />
    </div>
    <h2 class="text-3xl text-main">{{ title }}</h2>
  </div>
</template>
<script setup>
defineProps({
  imagePath: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  size: {
    type: Number,
    default: 40
  },
  hasIcon: {
    type: Boolean,
    default: true
  }
})
</script>
