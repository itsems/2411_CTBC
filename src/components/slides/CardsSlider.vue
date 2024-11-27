<template>
  <div class="relative mx-auto card-slider-wrap">
    <Swiper
      class="swiper-container"
      :slidesPerView="1"
      :navigation="navigation"
      :pagination="{
        type: 'fraction',
      }"
      :autoHeight="true"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
      :loop="true"
      :spaceBetween="20"
      :modules="modules"
    >
      <SwiperSlide
        v-for="post in slideData"
        class="items-center justify-center swiper-slide"
        :key="post.id"
      >
        <Card :data="post" @redirect="handleRedirect" />
       
      </SwiperSlide>
    </Swiper>
    <div @click="swiperPrev" class="absolute cursor-pointer swiper-arrows card-swiper-button swiper-button-prev w-7">
      <img src="@/assets/images/icon/arrow-l4.png" alt="" />
    </div>
    <div class="absolute cursor-pointer swiper-arrows card-swiper-button swiper-button-next w-7">
      <img src="@/assets/images/icon/arrow-r4.png" alt="" />
    </div>

  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, EffectFade } from 'swiper/modules'

// Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
const modules = [Pagination, Navigation, EffectFade]
const navigation = ref({
  nextEl: '.swiper-button-next.card-swiper-button',
  prevEl: '.swiper-button-prev.card-swiper-button'
})

defineProps({
  slideData: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['redirect'])
const handleRedirect = data => {
  emit('redirect', data)
  // console.log(data)

}


</script>

<style lang="scss">
.card-slider-wrap {
  max-width: 1110px;
  .swiper-container {
    overflow-y: visible;
    position: relative;
  }
  .swiper-pagination {
    bottom: 4%;
    color: $mainGreen;
    font-size: 18px;
    @media (min-width: 1024px) {
      width: auto;
      left: 298px;
      top: 378px;
      bottom: auto;
      min-width: 56px;
      text-align: center;
    }
  }
  .swiper-arrows {
    width: 37px;
    bottom: 3%;
    z-index: 11;
  }
  .swiper-button-prev {
    @media (max-width: 1024px) {
      left: 28%;
    }
    @media (min-width: 1024px) {
      left: 247px;
    }
  }
  .swiper-button-next {
    @media (max-width: 1024px) {
      right: 28%;
    }
    @media (min-width: 1024px) {
      left: 363px;
    }
  }
}

</style>