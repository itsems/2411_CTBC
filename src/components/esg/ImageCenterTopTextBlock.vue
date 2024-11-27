<template>
  <div class="relative">
    <img class="block absolute mx-auto max-w-[41%] left-1/2 -translate-x-1/2 sm:w-20" :src="image" :alt="text" />
    <div class="px-2 pb-3 bg-white rounded-2xl mt-[20%] pt-[25%] sm:pt-14 sm:mt-8 text-center lg:h-[130px]">
      <span class="text-sm tracking-tighter md:tracking-normal lg:text-base"><slot>{{ text }}</slot></span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  text: String,
  image: String,
})
</script>
