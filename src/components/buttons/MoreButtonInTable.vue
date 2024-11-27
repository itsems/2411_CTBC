<template>
  <div class="flex items-center gap-2 py-3 cursor-pointer text-main">
    <span class="font-medium">{{ text }}</span>
    <img
      v-if="isCollapsed"
      class="w-3"
      src="@/assets/images/icon/arrow-down.png"
      alt="" />
    <img
      v-else
      class="w-3"
      src="@/assets/images/icon/arrow-up.png"
      alt="" />
  </div>
</template>
<script setup>
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    required: true
  },
})

const text = computed(() => props.isCollapsed ? '看更多' : '顯示更少')
</script>
