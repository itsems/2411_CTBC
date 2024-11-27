<template>
  <div class="flex w-full overflow-hidden shadow-md rounded-3xl">
    <input
      :placeholder="placeholder"
      class="w-full py-[13px] pl-8 pr-3 bg-white"
      type="text"
      @keyup.enter="searchApply"
    >
    <div
      :class="btnClass"
      class="flex items-center justify-center text-lg text-white cursor-pointer px-7 shrink-0 rounded-r-3xl bg-main border-main hover:bg-darkGreen transitions"
      @click="searchApply"
    >
      搜尋
    </div>
  </div>
</template>
<script setup>
defineProps({
  placeholder: {
    type: String,
    default: undefined,
  },
  btnClass: {
    type: String,
    default: undefined,
  },
})
const emit = defineEmits(['search-apply'])
const searchApply = () => {
  emit('search-apply')
}
</script>
