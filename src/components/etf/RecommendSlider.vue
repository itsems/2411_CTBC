<template>
  <div class="relative recommend-fund-slider">
    <Swiper
      class="swiper-container"
      :slidesPerView="1"
      :navigation="navigation"
      :spaceBetween="20"
      :breakpoints="{
        992: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3
        }
      }"
      :modules="modules"
    >
      <SwiperSlide
        v-for="fund in funds"
        class="items-center justify-center px-8 swiper-slide lg:px-2 lg:mb-3"
        :key="fund.id"
      >
        <RouterLink
          :to="{ name: ROUTE_NAME.etfDetail.info.name,  params: { id: fund.id }}"
          class="w-full px-5 py-5 bg-white border-2 border-solid rounded-md shadow-lg fund-card"
          :title="fund.name"
        >
          <div class="mb-1 name">{{ fund.name }}</div>
          <div class="flex items-end justify-between net-worth text-md">
            <label>收盤價</label>
            <label :class="isUpOrDownClass( fund.fromPreviousDay )" class="text-3xl font-black">
              {{ fund.netWorth }}
            </label>
          </div>
          <div class="w-full my-3 hr h-[1px] bg-grey"/>
          <div class="flex justify-between mb-1 text-md text-[#999999]">
            <label>日期</label>
            <label>{{ fund.date }}</label>
          </div>
          <div class="flex justify-between mb-1 text-md text-[#999999]">
            <label>折溢價</label>
            <label :class="isUpOrDownClass( fund.fromPreviousDay )">
              {{ fund.fromPreviousDay }}
              <Symbol :number="fund.fromPreviousDay" />
            </label>
          </div>
          <div class="flex justify-between mb-1 text-md text-[#999999]">
            <label>日漲跌</label>
            <label :class="isUpOrDownClass( fund.fromPreviousDay )">
              {{ fund.fromPreviousDay }}%
              <Symbol :number="fund.fromPreviousDay" />
            </label>
          </div>
          <div class="flex justify-between mb-1 text-md text-[#999999]">
            <label>漲跌幅</label>
            <label :class="isUpOrDownClass( fund.fromPreviousDay )">
              {{ fund.fromPreviousDay }}%
              <Symbol :number="fund.fromPreviousDay" />
            </label>
          </div>
        </RouterLink>
      </SwiperSlide>
    </Swiper>
    <div class="absolute cursor-pointer swiper-arrows fund-nav-swiper-button swiper-button-prev">
      <img src="@/assets/images/icon/arrow-l3.png" alt="" />
    </div>
    <div class="absolute cursor-pointer swiper-arrows fund-nav-swiper-button swiper-button-next">
      <img src="@/assets/images/icon/arrow-r3.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Navigation } from 'swiper/modules'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
const ROUTE_NAME = inject('ROUTE_NAME')

// Swiper Configurations
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
const modules = [Grid, Navigation]
const navigation = ref({
  nextEl: '.swiper-button-next.fund-nav-swiper-button',
  prevEl: '.swiper-button-prev.fund-nav-swiper-button'
})

defineProps({
  funds: Array
})

</script>
<style lang="scss">
.recommend-fund-slider {
  @media (min-width: 1024px) {
    /* height: 545px; */
  }
  .swiper-arrows {
    width: 12px;
    top: 47%;
    z-index: 1;
    @media (min-width: 1024px) {
      width: 16px;
      top: 44%;
    }
  }
  .swiper-button-disabled {
    opacity: .3;
  }
  .swiper-button-prev {
    left: 0;
    @media (min-width: 1024px) {
      left: -25px;
    }
  }
  .swiper-button-next {
    right: 0;
    @media (min-width: 1024px) {
      right: -25px;
    }
  }
  .swiper-container {
    height: 100%;
    overflow-y: visible;
  }
  .swiper-slide {
    display: flex;
    /* height: calc((100% - 20px) / 2); */
    /* @media (min-width: 1024px) {
      height: auto;
    } */
    .fund-card {
      border-color: $grey;
      &:hover {
        border-color: $mainGreen;
      }
    }
    .name {
      color: $darkGreen;
      display: -webkit-box;
      max-width: 1000px;
      height: 16px*1.5*3;
      margin: 0 auto;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .net-worth {
      border-color: $grey;
    }
    .color-light-green {
      color: $lightGreen;
    }
  }
}
</style>
