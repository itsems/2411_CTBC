import { ref, watch, nextTick } from 'vue'

export function useSwiperAutoReset(targetProp) {
  const swiperRef = ref(null)

  const onSwiperInit = swiper => {
    if (swiperRef.value) {
      swiperRef.value.swiper = swiper
    }
  }

  watch(
    targetProp,
    async () => {
      await nextTick()
      if (swiperRef.value?.swiper) {
        swiperRef.value.swiper.slideTo(0)
      }
    },
    { deep: true }
  )

  return { swiperRef, onSwiperInit }
}
