<template>
  <div class="relative pt-8 pb-16 pl-2 video-slider-wrap">
    <!-- 觀看更多 -->
    <div
      @click="redirect"
      class="flex items-center justify-end gap-2 pr-3 mb-3 cursor-pointer lg:mb-6 lg:pr-0"
    >
      <img class="ml-2 w-7" src="@/assets/images/icon/play.png" alt="" />
      <p class="text-sm font-medium text-center text-main">觀看更多</p>
      <img class="w-[14px]" src="@/assets/images/icon/bar-tab-active.png" alt="" />
    </div>
    <!-- Slider -->
    <div class="relative overflow-visible video-slider">
      <Swiper
        class="!px-2 !overflow-visible lg:!overflow-x-hidden lg:h-[300px]"
        :slidesPerView="'auto'"
        :spaceBetween="20"
        :navigation="navigation"
        :pagination="pagination"
        :breakpoints="{
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4
          }
        }"
        :modules="modules"
      >
        <SwiperSlide
          v-for="video in videos"
          :key="video.id"
          class="flex items-center justify-center lg:mb-3 lg:hover:shadow-xl"
        >
          <VideoCard :video="video" />
        </SwiperSlide>
      </Swiper>
      <!-- arrows -->
      <div
        class="absolute hidden cursor-pointer lg:block lg:-left-[65px] swiper-arrows top-[35%] w-11 video-swiper-button swiper-button-prev"
      >
        <img src="@/assets/images/icon/arr-l-solid-bg.png" alt="" />
      </div>
      <div
        class="absolute hidden cursor-pointer lg:block lg:-right-[65px] swiper-arrows top-[35%] w-11 video-swiper-button swiper-button-next"
      >
        <img src="@/assets/images/icon/arr-r-solid-bg.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

const emit = defineEmits(['video-watch-more'])
const redirect = () => {
  emit('video-watch-more')
}

defineProps({
  videos: Array
})

// Swiper Configurations
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const modules = [Navigation, Pagination]
const pagination = ref({
  clickable: true,
  bulletActiveClass: 'active-primary-bullet',
  renderBullet: () =>
    '<div class="swiper-pagination-bullet"><div class="inner-dot inner-primary-dot"></div></div>'
})
const navigation = ref({
  nextEl: '.swiper-button-next.video-swiper-button',
  prevEl: '.swiper-button-prev.video-swiper-button'
})
</script>

<style lang="scss">
.video-slider {
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -44px;
    @media (min-width: 992px) {
      bottom: 0;
    }
  }
  @media (max-width: 992px) {
    .swiper-slide {
      width: calc(100% / 4 * 3);
    }
    .swiper-slide-active {
      @apply shadow-lg;
    }
  }
}
</style>
