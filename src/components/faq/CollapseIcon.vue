<template>
  <img
    v-show="!isExpanded"
    class="self-center w-4 ml-4 cursor-pointer select-none"
    src="@/assets/images/icon/plus-s.png"
    alt=""
  />
  <img
    v-show="isExpanded"
    class="self-center w-4 ml-4 cursor-pointer select-none"
    src="@/assets/images/icon/minus-s.png"
    alt=""
  />
</template>
<script setup>
defineProps({
  isExpanded: Boolean
})
</script>
