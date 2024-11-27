<template>
  <ul class="flex-wrap items-center justify-start hidden mb-5 text-xs lg:flex breadcrumb lg:text-sm lg:mb-6">
    <li v-for="page in list" :key="page.name" class="mb-2">
      <RouterLink
        :to="{ name: page.routeName }"
        class="border-solid link"
        :class="page.routeName ? 'hover:underline cursor-pointer' : 'cursor-default text-black'"
      >
        {{ page.name }}
      </RouterLink>
    </li>
  </ul>
</template>
<script setup>
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  color: $mainFontColor;
  li {
    &:not(:last-of-type) {
      &:after {
        content: '>';
        display: inline-block;
        margin: 0 16px;
      }
    }
  }
}
</style>
