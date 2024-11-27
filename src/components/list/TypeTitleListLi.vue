<template>
  <li class="relative px-5 transition rounded-3xl lg:rounded-full group hover:bg-white hover:shadow-lg hover:font-medium">
    <a
      href="javascript:;"
      class="py-4 block lg:flex lg:items-center group-hover:border-b-transparent border-[#bababa] border-b border-solid"
    >
      <p class="block lg:inline">{{ item.type }}</p>
      <span class="hidden lg:mx-2 lg:inline-block">|</span>
      <p class="content">
        {{ item.title }}
      </p>
    </a>
  </li>
</template>
<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
li:hover::before {
  content: '';
  position: absolute;
  width: 100%;
  top: -1px;
  left: 0;
  height: 1px;
  background: #f4f4f4;
}
</style>