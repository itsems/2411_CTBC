<template>
  <div class="relative w-[820px] mx-auto navboard-slider">
    <!-- :autoplay="{
        delay: 12000,
        disableOnInteraction: false
      }" -->
    <Swiper
      class="!overflow-visible swiper-container"
      :slidesPerView="1"
      :loop="true"
      :pagination="pagination"
      :modules="modules"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
    >
      <SwiperSlide >
        <img src="@/assets/images/navboard/banner902.jpg" class="block w-full" alt="00902" />
      </SwiperSlide>
      <SwiperSlide >
        <img src="@/assets/images/navboard/banner902.jpg" class="block w-full" alt="00902" />
      </SwiperSlide>
      <SwiperSlide >
        <img src="@/assets/images/navboard/banner902.jpg" class="block w-full" alt="00902" />
      </SwiperSlide>
      <SwiperSlide >
        <img src="@/assets/images/navboard/banner902.jpg" class="block w-full" alt="00902" />
      </SwiperSlide>
      <SwiperSlide >
        <img src="@/assets/images/navboard/banner902.jpg" class="block w-full" alt="00902" />
      </SwiperSlide>
      <!-- <div class="swiper-pagination"></div> -->
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'

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
</script>
<style lang="scss">
.navboard-slider {

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -37px
  }
  .swiper-pagination-bullet {
    --swiper-pagination-bullet-size: 16px;
    --swiper-pagination-bullet-horizontal-gap: 8px;
    .inner-dot {
     width: 16px;
     height: 16px;
     box-shadow: 2px 2px 4px 3px #ccc;
   }
  }
  .swiper-pagination-bullet.active-white-bullet {
    border: 1px solid transparent;
    .inner-white-dot {
     background-color: $mainGreen;
   }
  }

}

</style>
