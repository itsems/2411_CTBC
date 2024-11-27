<template>
  <div class="relative">
    <Swiper
      class="!px-2 !overflow-visible lg:!overflow-x-hidden"
      :slidesPerView="'auto'"
      :spaceBetween="20"
      :navigation="navigation"
      :breakpoints="{
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
          slidesPerGroup: 1
        }
      }"
      :loop="true"
      :modules="modules"
    >
      <SwiperSlide
        v-for="speaker in speakers"
        class="flex items-center justify-center overflow-hidden lg:mb-3 rounded-3xl lg:hover:shadow-xl"
        :key="speaker.id"
      >
        <SpeakerCard :speaker="speaker" />
      </SwiperSlide>
    </Swiper>

    <!-- arrows -->
    <div
      class="absolute w-[12%] z-[1] -left-[2%] top-[30%] cursor-pointer lg:block lg:-left-[65px] swiper-arrows lg:top-[35%] lg:w-11 fund-swiper-button swiper-button-prev"
    >
      <img class="block w-full" src="@/assets/images/icon/arr-l-solid-bg.png" alt="" />
    </div>
    <div
      class="absolute w-[12%] z-[1] -right-[2%] top-[30%] cursor-pointer lg:block lg:-right-[65px] swiper-arrows lg:top-[35%] lg:w-11 fund-swiper-button swiper-button-next"
    >
      <img class="block w-full" src="@/assets/images/icon/arr-r-solid-bg.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import SpeakerCard from './SpeakerCard.vue'

// Swiper Configurations
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
const modules = [Navigation]
const navigation = ref({
  nextEl: '.swiper-button-next.fund-swiper-button',
  prevEl: '.swiper-button-prev.fund-swiper-button'
})

defineProps({
  speakers: Array
})
</script>
