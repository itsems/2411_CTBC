<template>
  <a
    :href="file.link"
    target="_blank"
    :class="[
      'file flex items-center gap-4 py-3 pr-3',
      'shadow-xl rounded-2xl',
      'text-md bg-white cursor-pointer',
      'hover:bg-main hover:text-white hover:shadow-xl',
      'lg:shadow-none',
      {
        'justify-between pl-4': iconPosition === 'right',
        'justify-start pl-6': iconPosition === 'left',
        [fileClass]: fileClass
      }
    ]"
  >
    <div
      class="file-img-bg shrink-0 bg-contain w-[39px] h-[42px]"
      :class="{ 'order-2': iconPosition === 'right' }"
    />
    <div class="lg:flex lg:items-center" :class="{ 'order-1': iconPosition === 'right' }">
      <p v-if="slots.date || file.date" class="lg:w-[102px] lg:shrink-0">
        <slot name="date">{{ file.date }}</slot>
      </p>
      <p>
        <slot name="default">{{ file.name }}</slot>
      </p>
    </div>
  </a>
</template>
<script setup>
const slots = useSlots()

defineProps({
  file: {
    type: Object,
    default: undefined
  },
  iconPosition: {
    type: String,
    default: 'left'
  },
  fileClass: {
    type: String,
    default: undefined
  }
})
</script>

<style lang="scss" scoped>
.file:hover .file-img-bg {
  background-image: url('@/assets/images/icon/pdf-w.png');
}
.file-img-bg {
  background-image: url('@/assets/images/icon/pdf.png');
}
</style>
