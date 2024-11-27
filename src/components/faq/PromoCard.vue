<template>
  <div
    @click="handleRedirect( post )"
    class="card lg:shadow-md rounded-2xl overflow-hidden hover:bg-[#e9f8f8] cursor-pointer bg-white group"
  >
    <!-- Image -->
    <div
      :class="[
        'z-[1] relative bg-cover bg-no-repeat bg-center',
        'w-full pb-[59%] mb-5',
        'lg:pb-[54%] opacity-80',
        'img transitions'
      ]"
      :style="{ 'background-image': 'url(' + post.imageUrl + ')' }"
    />

    <!-- Content  -->
    <div class="px-6 pb-4">
      <!-- title -->
      <p
        :title="post.title"
        class="mb-3 text-lg font-bold tracking-wide cursor-pointer lg:truncate lg:mb-2 title lg:tracking-normal text-darkGreen"
      >
        {{ post.title }}
      </p>

      <!-- content -->
      <div
        class="mb-3 leading-6 text-justify desktop-text-ellipsis content text-md lg:text-base"
        :title="post.content"
      >
        {{ post.content }}
      </div>
      <div
        class="w-full transitions bg-[#f4f4f4] text-grey-999 py-2 flex justify-center rounded-3xl group-hover:bg-main group-hover:text-white"
      >
        瞭解詳情 →
      </div>
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

const emit = defineEmits(['redirect'])
const handleRedirect = () => {
  emit('redirect')
}
</script>
<style lang="scss">
.card:hover .img {
  opacity: 1;
}
.desktop-text-ellipsis {
  @include generateDesktopContentStyle(1.7, 16px, 2);
}
</style>
