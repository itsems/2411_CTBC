<template>
  <div
    class="relative flex items-center justify-center lg:h-[250px] mb-5 overflow-hidden bg-white shadow-xl rounded-xl logo-board"
  >
    <img :src="imageUrl" :alt="name" />
    <a
      href="#"
      class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center px-8 py-10 text-white brand"
    >
      <div>
        <div class="pb-2 text-lg break-all border-b border-white border-solid lg:text-center">
          {{ name }}
        </div>
        <span class="block pt-2 leading-6 tracking-wide content text-md">{{ content }}</span>
      </div>
    </a>
  </div>
</template>
<script setup>
defineProps({
  imageUrl: {
    type: String,
    default: undefined
  },
  name: {
    type: String,
    default: undefined
  },
  content: {
    type: String,
    default: undefined
  }
})
</script>
<style lang="scss" scoped>
.logo-board {
  .brand {
    opacity: 0;
    visibility: hidden;
    background-color: $mainGreen;
    transition: all 0.3s;
  }
  &:hover {
    .brand {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
