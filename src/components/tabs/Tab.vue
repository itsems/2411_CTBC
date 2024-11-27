<template>
  <div
    :class="{ active: isActive }"
    class="flex justify-center flex-auto bg-white cursor-pointer select-none lg:shadow-xl lg:rounded tab lg:items-center text-main text-md"
    @click="handleTabClick"
  >
    <div class="flex items-center justify-center leading-none tab-content">
      <img class="mr-2 icon lg:mr-5" :src="imageSrc" />
      <p class="lg:text-xl">{{ name.label }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: Object,
    required: true
  },
  isActive: Boolean,
  imageUrl: {
    type: String,
    default: undefined
  },
  activeImageUrl: {
    type: String,
    default: undefined
  },
})
const emit = defineEmits(['tab-click'])

const imageSrc = computed(() => props.isActive ? props.activeImageUrl : props.imageUrl)

const handleTabClick = () => {
  emit('tab-click', props.name.name)
}


</script>
<style lang="scss" scoped>
.tab {
  padding: 14px 0;
  transition: all .3s;
  @media (min-width: 1024px) {
    padding: 19px 0;
  }
  .icon {
    width: 25px;
    @media (min-width: 1024px) {
      width: 38px;
    }
  }
  &.active {
    background-color: $mainGreen;
    color: #fff;
  }
}
</style>