<template>
  <div class="relative kv-slider xl:h-[450px]">
    <Swiper
      class="swiper-container"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :slidesPerView="1"
      :loop="true"
      :pagination="pagination"
      :navigation="navigation"
      :modules="modules"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
    >
      <template v-for="el in 2" :key="el">
        <SwiperSlide >
          <div class="relative xl:h-[450px]">
            <div
              :style="{ 'background-image': 'url(' + bannerMask + ')' }"
              class="absolute hidden bottom-0 w-full h-[106px] bg-bottom bg-no-repeat bg-[length:100%_106px] xl:block"
            />
            <div
              :style="{ 'background-image': 'url(' + kv1Image + ')' }"
              class="hidden xl:h-[450px] bg-center bg-no-repeat bg-cover xl:block"
            />
            <img src="@/assets/images/sample/kv1-m.png" class="block w-full xl:hidden" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div class="relative xl:h-[450px]">
            <div
              :style="{ 'background-image': 'url(' + bannerMask + ')' }"
              class="absolute hidden bottom-0 w-full h-[106px] bg-bottom bg-no-repeat bg-[length:100%_106px] xl:block"
            />
            <div
              :style="{ 'background-image': 'url(' + kv2Image + ')' }"
              class="hidden xl:h-[450px] bg-center bg-no-repeat bg-cover xl:block"
            />
            <img src="@/assets/images/sample/kv2-m.png" class="block w-full xl:hidden" alt="" />
          </div>
        </SwiperSlide>
      </template>  

      <div class="w-[30px] top-[36%] xl:top-[175px] cursor-pointer z-10 absolute xl:w-[45px] kv-swiper-button swiper-button-prev left-[1%] xl:left-[5vw]">
        <img src="@/assets/images/icon/arrow-l.png" alt="" />
      </div>
      <div class="w-[30px] top-[36%] xl:top-[175px] cursor-pointer z-10 absolute xl:w-[45px] kv-swiper-button swiper-button-next right-[1%] xl:right-[5vw]">
        <img src="@/assets/images/icon/arrow-r.png" alt="" />
      </div>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'
import kv1Image from '@/assets/images/sample/kv1-d.jpg'
import kv2Image from '@/assets/images/sample/edf-index-kv-d.jpg'
import bannerMask from '@/assets/images/index/bn-bottom.png'

// Swiper Configurations
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const modules = [Navigation, Pagination, EffectFade, Autoplay]
const pagination = ref({
  clickable: true,
  bulletActiveClass: 'active-white-bullet',
  renderBullet: () => '<span class="swiper-pagination-bullet"><div class="inner-dot inner-white-dot"></div></span>'
})
const navigation = ref({
  nextEl: '.swiper-button-next.kv-swiper-button',
  prevEl: '.swiper-button-prev.kv-swiper-button'
})
</script>
<style lang="scss">
.kv-slider .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 23%;
  @media (min-width: 1280px) {
    top: 320px;
    bottom: auto;
    max-width: 1000px;
    left: 15.5%;
    text-align: left;
  }
  .swiper-pagination-bullet-active {
    border: 1px solid #fff;
  }
}
</style>
