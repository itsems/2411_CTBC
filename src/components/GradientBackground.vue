<template>
  <div class="absolute bottom-0 left-0 right-0 z-0 bg-gradient responsive-top" />
</template>

<script setup>
const props = defineProps({
  mobilePosition: {
    type: Number,
    default: 202
  },
  desktopPosition: {
    type: Number,
    default: 275
  }
})

const mobilePos = computed(() =>  typeof props.mobilePosition === 'number' ? `${props.mobilePosition}px` : props.mobilePosition)
const desktopPos = computed(() =>  typeof props.desktopPosition === 'number' ? `${props.desktopPosition}px` : props.desktopPosition)

</script>

<style lang="scss" scoped>
.responsive-top {
  top: v-bind('mobilePos');
  @media (min-width: 1024px) {
    top: v-bind('desktopPos');
  }
}
</style>
