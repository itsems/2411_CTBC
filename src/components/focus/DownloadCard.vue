<template>
  <div class="p-4 overflow-hidden bg-white hover:shadow-xl rounded-3xl lg:flex lg:px-8">
    <div class="flex items-center w-full">
      <div class="border-r border-solid border-[#e3e3e3] pr-3 lg:flex-grow lg:pr-5">
        <p class="text-[13px] text-main mb-3 font-medium lg:mt-3">{{ post.date }}</p>
        <p class="mb-2 text-xl font-medium lg:mb-3 text-darkGreen title-ellipsis">{{ post.title }}</p>
        <p class="text-md lg:mb-3 content-ellipsis">{{ post.content }}</p>
      </div>
      <a :href="post.link" download class="pl-4 shrink-0 lg:w-24 lg:flex lg:justify-center">
        <img width="33" src="@/assets/images/icon/download.png" alt="" />
      </a>
    </div>
  </div>
</template>
<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>

.title-ellipsis {
  @include generateContentStyle(20px, 3);
  @media (min-width: 992px) {
    height: auto;
  }
}
.content-ellipsis {
  @include generateContentStyle(15px, 2);
  @media (min-width: 992px) {
    height: auto;
  }
}
</style>