<template>
  <div class="relative etf-slider">
    <Swiper
      class="!p-2 !overflow-visible lg:!overflow-x-hidden"
      :slidesPerView="'auto'"
      :spaceBetween="20"
      :navigation="navigation"
      :breakpoints="{
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }"
      :modules="modules"
    >
      <SwiperSlide
        v-for="fund in funds"
        class="flex items-stretch justify-center overflow-hidden rounded-3xl hover:shadow-xl"
        :key="fund.code"
      >
        <div class="w-full h-full px-5 pt-5 pb-48 bg-white" :title="fund.name">
          <!-- ETF 類型 -->
          <div class="inline-block px-3 py-[3px] mb-4 text-sm border border-solid rounded-3xl border-main text-main">
            {{ fund.tag }}
          </div>
          <!-- 基金名稱 -->
          <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 } }">
            <EtfName :fund="fund" class="font-medium lg:text-base text-ellipsis hover:underline" />
          </RouterLink>
          
          <!-- Bottom contents wrapper -->
          <div class="absolute bottom-5 w-[calc(100%-2.5rem)]">
            <!-- 基金淨值 -->
            <div class="flex items-end justify-between mb-2 net-worth text-md">
              <label class="text-[#999]">基金淨值</label>
              <label class="text-3xl font-black text-[#333]">
                {{ fund.netWorth }}
              </label>
            </div>
          
            <div class="flex justify-between mb-1 text-md text-[#999]">
              <label>日期</label>
              <label class="font-medium">{{ fund.date }}</label>
            </div>
            <div class="flex justify-between mb-1 text-md text-[#999]">
              <label>日漲跌</label>
              <label class="font-medium" :class="isUpOrDownClass(fund.fromPreviousDay)">
                {{ fund.fromPreviousDay }}
                <Symbol :number="fund.fromPreviousDay" />
              </label>
            </div>
            <div class="flex justify-between text-md text-[#999] mb-6">
              <label>漲跌幅}</label>
              <label class="font-medium" :class="isUpOrDownClass(fund.fromPreviousDayPercent)">
                {{ fund.fromPreviousDayPercent }}%
                <Symbol :number="fund.fromPreviousDayPercent" />
              </label>
            </div>
            <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: fund.id } }" class="w-full">
              <RoundButton label="詳細介紹" class="w-full" />
            </RouterLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    
    <!-- arrows -->
    <div
      class="absolute hidden cursor-pointer lg:block lg:-left-[65px] swiper-arrows top-[44%] w-11 etf-swiper-button swiper-button-prev"
    >
      <img src="@/assets/images/icon/arr-l-solid-bg.png" alt="" />
    </div>
    <div
      class="absolute hidden cursor-pointer lg:block lg:-right-[65px] swiper-arrows top-[44%] w-11 etf-swiper-button swiper-button-next"
    >
      <img src="@/assets/images/icon/arr-r-solid-bg.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

// Swiper Configurations
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
const ROUTE_NAME = inject('ROUTE_NAME')

const modules = [Navigation]
const navigation = ref({
  nextEl: '.swiper-button-next.etf-swiper-button',
  prevEl: '.swiper-button-prev.etf-swiper-button'
})

defineProps({
  funds: Array
})
</script>
<style lang="scss">
.etf-slider {
  @media (max-width: 992px) {
    .swiper-slide {
      width: calc(100% / 4 * 3);
    }
    .swiper-slide-active {
      @apply shadow-lg;
    }
  }
  .swiper-slide {
    height: auto;
    align-self: stretch;
  }
}
</style>
