<template>
  <div v-if="!isShown || !system.isCurrentMobile" class="relative items-center justify-center text-sm text-center bg-white shadow-lg cursor-pointer select-none lg:flex slide-button text-main lg:absolute lg:right-3">
    <span>{{ system.isCurrentMobile && !isShown ? '展開公告' : openText + '公告' }}</span>
    <img :src="imageUrl" alt="">
  </div>
</template>
<script setup>
import IconArrLeftPath from '@/assets/images/icon/arrow-left.png' 
import IconArrRightPath from '@/assets/images/icon/arrow-right.png' 
import IconArrUpPath from '@/assets/images/icon/arrow-up.png' 
import IconArrDownPath from '@/assets/images/icon/arrow-down.png' 
const system = useSystemStore()

const props = defineProps({
  isShown: Boolean,
})

const openText = computed(() => props.isShown ? '收合' : '展開')
const imageUrl = computed(() => {
  if (system.isCurrentMobile) {
    return props.isShown ? IconArrRightPath : IconArrLeftPath
  } else {
    return props.isShown ? IconArrUpPath : IconArrDownPath
  }
})

</script>

<style lang="scss" scoped>
.slide-button {
  padding: 12px 14px;
  line-height: 1.3;
  z-index: 1;
  img {
    width: 9px;
    margin: 5px auto 0;
    @media (min-width: 1024px) {
      width: 13px;
      margin: 0 0 0 10px;
    }
  }
  @media (max-width: 1024px) {
    border-radius: 20px 0 0 20px;
  }
  @media (min-width: 1024px) {
    width: 122px;
    border-radius: 0 0 20px 20px;
  }
}
</style>