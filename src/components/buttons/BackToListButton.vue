<template>
  <div class="flex items-center cursor-pointer group text-main">
    <span class="text-lg hover:underline hover:underline-offset-4">{{ label }}</span>
    <img
      class="w-[14px] ml-2"
      src="@/assets/images/icon/bar-tab-active.png"
      alt=""
    />    
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: '回列表頁',
  },
})
</script>