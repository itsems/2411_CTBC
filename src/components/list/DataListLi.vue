<template>
  <li
    class="relative px-5 transition rounded-3xl lg:rounded-full group hover:bg-white hover:shadow-lg hover:text-secondary"
  >
    <a
      href="javascript:;"
      class="py-4 block lg:flex lg:items-center group-hover:border-b-transparent border-[#bababa] border-b border-solid"
    >
      <span class="block shrink-0 lg:w-[160px] lg:inline-block">{{ item.date }}</span>
      <p class="content group-hover:font-bold">
        {{ item.content }}
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