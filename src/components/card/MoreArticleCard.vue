<template>
  <div
    class="flex overflow-hidden bg-white shadow-xl cursor-pointer rounded-3xl group"
    @click="handleCardClick"
  >
    <!-- Image -->
    <div class="flex-grow overflow-hidden">
      <slot name="image">
        <div
          class="w-full pb-[49%] h-full bg-cover bg-no-repeat bg-center scale-110 group-hover:scale-100 transitions duration-1000"
          :style="{ 'background-image': 'url(' + post.imageUrl + ')' }"
        />
      </slot>
    </div>

    <!-- Content -->
    <div class="px-4 py-4 lg:pb-11 w-1/2 lg:w-[480px] lg:px-10 lg:pt-7 relative"  :class="contentClass" >
      <p v-if="$slots['sub-title']" class="text-[13px] text-main mb-3">
        <slot name="sub-title" />
      </p>
      <p class="text-lg font-medium text-darkGreen lg:text-2xl">
        <slot name="title" />
      </p>
      <p class="text-md">
        <slot name="content" />
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  post: {
    type: Object,
    default: () => {}
  },
  contentClass: {
    type: [Array, String],
    default: () => []
  }
})
const emit = defineEmits(['card-click'])
const handleCardClick = () => {
  emit('card-click')
}
</script>
