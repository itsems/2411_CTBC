<template>
  <span
    class="rounded-2xl text-[14px] lg:text-base font-medium bg-main text-white border-main px-3 shrink-0 py-1 select-none lg:mr-2"
  >
    #{{ title }}
  </span>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
