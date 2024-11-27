<template>
  <div v-if="isCurrent" class="flex overflow-hidden text-white shadow-xl text-md rounded-2xl">
    <div class="w-full py-2 pl-4 pr-2 lg:py-4 bg-main">{{ title }}</div>
    <div class="flex items-center justify-center px-4 py-2 lg:py-4 bg-darkGreen shrink-0">目前頁面</div>
  </div>
  <div v-else class="px-4 py-2 bg-white shadow-xl cursor-pointer lg:py-4 rounded-2xl hover:bg-main hover:text-white transitions">
    <RouterLink :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
      {{ title }}
    </RouterLink>
  </div>
</template>
<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')
defineProps({
  title: String,
  isCurrent: Boolean,
})
</script>
