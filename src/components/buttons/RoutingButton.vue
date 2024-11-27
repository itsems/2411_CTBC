<template>
  <button class="h-[45px] bg-white rounded-3xl shadow-xl">
    <div class="flex items-center gap-3 px-6">
      <slot>
        <p class="font-medium text-main">{{ label }}</p>
        <img
          v-if="arrowDirection === 'down'"
          class="w-4"
          src="@/assets/images/icon/arrow-down.png"
          alt="" />
        <img
          v-else
          class="w-3"
          src="@/assets/images/icon/bar-tab-active.png"
          alt="" />
      </slot>
    </div>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '顯示更多',
  },
  arrowDirection: {
    type: String,
    default: 'down'
  }
})
</script>