<template>
  <div class="group hover:shadow-2xl cursor-pointer relative lg:h-[234px] rounded-3xl lg:rounded-3xl overflow-hidden bg-cover" :style="{ 'background-image': 'url(' + desktopImage + ')' }">
    <img class="block w-full lg:hidden" :src="mobileImage" :alt="title">
    <div class="absolute top-0 bottom-0 left-0 w-[70%] opacity-0 mask transitions bg-main group-hover:opacity-100" />
    <div class="absolute left-[4%] top-[37%] lg:top-[114px] lg:left-[38px]">
      <p class="group-hover:text-white text-[5.5vw] font-medium text-main mb-3 lg:text-3xl lg:mb-6">
        {{ title }}
      </p>
      <div class="flex max-w-fit items-center px-[14px] py-1 ml-1 lg:ml-0 border border-solid group-hover:border-white rounded-full border-main text-main group-hover:text-white">
        <img class="w-[18px] group-hover:hidden" src="@/assets/images/icon/scope-plus-s.png" alt="" />
        <img class="w-[18px] hidden group-hover:block" src="@/assets/images/icon/scope-plus.png" alt="" />
        <span class="text-md">了解更多</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  desktopImage: String,
  mobileImage: String
})
</script>
<style lang="scss" scoped>
.mask {
  background: linear-gradient(90deg, rgba(36,165,166,1) 35%, rgba(0,0,0,0) 100%);
}
</style>