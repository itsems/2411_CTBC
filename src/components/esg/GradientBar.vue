<template>
  <div class="py-3 gradient lg:py-[10px] text-xl tracking-wider lg:tracking-tight text-center text-white rounded-[1.25rem] lg:text-2xl" >
    {{ title }}
  </div>
</template>
<script setup>
defineProps({
  title: String,
})
</script>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(120deg, rgb(0, 98, 95) 20%, rgb(36, 165, 166) 20%);
  @media (min-width: 992px) {
    background: linear-gradient(120deg, rgb(0, 98, 95) 15%, rgb(36, 165, 166) 15%);
  }
}
</style>