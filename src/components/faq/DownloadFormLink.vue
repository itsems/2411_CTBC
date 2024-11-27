<template>
  <a
    :href="file.link"
    class="flex items-center py-3 pl-3 pr-4 bg-white cursor-pointer lg:py-4 x-6 file group rounded-3xl file-list hover:shadow-xl hover:bg-main hover:text-white text-md"
  >
    <span class="text-center w-14 shrink-0">{{ file.type }}</span>
    <span class="flex items-center flex-grow h-full pl-3 pr-2 border-l border-solid">
      {{ file.name }}
    </span>
    <div class="img w-[33px] h-[36px] bg-contain bg-no-repeat ml-auto shrink-0" />
  </a>
</template>
<script setup>
defineProps({
  file: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.img {
  background-image: url('@/assets/images/icon/download.png');
}
.file:hover .img {
  background-image: url('@/assets/images/icon/download2-w.png');
}
</style>
