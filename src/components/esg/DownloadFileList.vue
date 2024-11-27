<template>
  <a
    :href="file.link"
    target="_blank"
    class="flex bg-white cursor-pointer group rounded-3xl file-list hover:shadow-xl"
    :key="file.name"
  >
    <div
      class="flex items-center w-full p-5 border-r border-solid text text-md lg:flex-1 lg:px-5 lg:border-r lg:border-b-0 border-grey"
    >
      <slot>{{ file.fileName }}</slot>
    </div>
    <div class="w-[60px] shrink-0 lg:w-[104px] text-md py-4 flex justify-center items-center">
      <div class="file-img bg-contain w-[39px] h-[42px]"/>
      <!-- <p class="text-main">
        {{ file.fileName }}
      </p> -->
    </div>
  </a>
</template>
<script setup>
defineProps({
  file: {
    type: Object,
    default: undefined
  }
})
</script>
<style lang="scss" scoped>
.file-img {
  background-image: url('@/assets/images/icon/pdf.png');
}
</style>
