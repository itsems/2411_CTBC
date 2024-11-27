<template>
  <a href="javascript:;" class="flex overflow-hidden bg-white rounded-full shadow-xl cursor-pointer hover:text-main">
    <div class="flex items-center justify-center pl-5 pr-3 bg-main">
      <img width="24" src="@/assets/images/icon/download3-w.png" alt="" />
    </div>
    <p class="px-4 py-4">{{ title }}</p>
  </a>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>
