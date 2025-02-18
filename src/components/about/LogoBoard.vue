<template>
  <div
    class="relative lg:h-[400px] overflow-hidden content-card"
  >
    <div class="lg:h-[90px] flex-center mb-6 lg:mb-0 px-6 pt-3 lg:p-0">
      <img
        :width="imgWidth"
        :src="imageUrl"
        :alt="name"
        class="block" 
      />
    </div>
    <Hr class="mb-4" />
    <div class="mb-6 text-lg font-medium text-center text-main">
      {{ name }}
    </div>
    <p :title="content" class="mb-4 content-ellipsis">{{ content }}</p>
    
    <a :href="link" target="_blank">
      <RoundButton class="block mx-auto" label="了解更多"  />
    </a>
  </div>
</template>
<script setup>
import Hr from '@/components/Hr.vue'
import RoundButton from '@/components/form/RoundButton.vue'


defineProps({
  imageUrl: {
    type: String,
    default: undefined
  },
  imgWidth: {
    type: Number,
    default: undefined
  },
  name: {
    type: String,
    default: undefined
  },
  content: {
    type: String,
    default: undefined
  },
  link: {
    type: String,
    default: undefined
  }
})
</script>
<style lang="scss" scoped>
.content-ellipsis {
  @include generateDesktopContentStyle(1.7, 16px, 5)
}
</style>
