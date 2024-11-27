<template>
  <div
    class="relative px-6 pt-12 pb-5 break-all bg-white shadow-xl rounded-3xl lg:pl-12 lg:pr-7 lg:pt-11"
  >
    <div class="absolute w-20 left-[50%] -translate-x-1/2 -top-10 lg:-left-1 lg:-top-6">
      <slot name="img" />
    </div>

    <p
      class="mb-2 text-base font-medium tracking-wider text-center text-main lg:text-left lg:text-xl"
    >
      {{ title }}
    </p>
    <slot name="text" />
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: undefined
  }
})
</script>
