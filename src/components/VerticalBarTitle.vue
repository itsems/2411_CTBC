<template>
  <div class="flex items-center text-lg lg:text-2xl text-main">
    <div
      :style="{ background: 'linear-gradient(180deg, #00625f 50%, #24a5a6 50%)' }"
      class="w-[10px] h-[40px] shrink-0 rounded-md bg-[#a6a6a6]"
    />
    <div class="ml-4" :class="textClass">
      {{ title }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  textClass: String
})
</script>