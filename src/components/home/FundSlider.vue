<template>
  <div class="relative fund-slider">
    <Swiper
      ref="swiperRef"
      class="!p-2 !overflow-visible lg:!overflow-x-hidden"
      :slidesPerView="'auto'"
      :spaceBetween="20"
      :navigation="navigation"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4
        }
      }"
      :modules="modules"
      @swiper="onSwiperInit"
    >
      <SwiperSlide
        v-for="fund in funds"
        class="flex items-center justify-center overflow-hidden rounded-3xl hover:shadow-xl"
        :key="fund.id"
      >
        <div class="w-full h-full px-5 pt-5 pb-56 bg-white" :title="fund.name">
          <div class="inline-block px-3 py-[3px] mb-3 text-sm border border-solid rounded-3xl border-main text-main">
            ETF 類型
          </div>
          <!-- 基金名稱 -->
          <RouterLink :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }">
            <div class="mb-5 font-medium hover:underline">{{ fund.name }}</div>
          </RouterLink>

          <!-- Bottom contents wrapper -->
          <div class="absolute bottom-5 w-[calc(100%-2.5rem)]">
            <!-- 基金淨值 -->
            <div class="flex items-end justify-between mb-5 net-worth text-md">
              <label class="text-[#999]">基金淨值</label>
              <label class="text-3xl font-black text-black">
                {{ fund.netWorth }}
              </label>
            </div>
          
            <div class="flex justify-between mb-1 text-md text-[#999]">
              <label>日期</label>
              <label>{{ fund.date }}</label>
            </div>
            <div class="flex justify-between mb-1 text-md text-[#999]">
              <label>日漲跌</label>
              <label :class="isUpOrDownClass( fund.fromPreviousDay )">
                {{ fund.fromPreviousDay }}
                <Symbol :number="fund.fromPreviousDay" />
              </label>
            </div>
            <div class="flex justify-between mb-1 text-md text-[#999]">
              <label>漲跌幅</label>
              <label :class="isUpOrDownClass( fund.fromPreviousDay )">
                {{ fund.fromPreviousDay }}%
                <Symbol :number="fund.fromPreviousDay" />
              </label>
            </div>
            <div class="flex justify-between gap-3 mt-6">
              <RouterLink :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" class="flex justify-center flex-1" >
                <RoundButton class="!px-0 w-full" label="詳細介紹" text />
              </RouterLink>
              <RouterLink v-if="fund.isBuyable" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" class="flex justify-center flex-1" >
                <RoundButton class="!px-0 w-full" label="線上申購" text />
              </RouterLink>
            </div>
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
    <!-- arrows -->
    <div
      class="absolute hidden cursor-pointer lg:block lg:-left-[65px] swiper-arrows top-[44%] w-11 fund-swiper-button swiper-button-prev"
    >
      <img src="@/assets/images/icon/arr-l-solid-bg.png" alt="" />
    </div>
    <div
      class="absolute hidden cursor-pointer lg:block lg:-right-[65px] swiper-arrows top-[44%] w-11 fund-swiper-button swiper-button-next"
    >
      <img src="@/assets/images/icon/arr-r-solid-bg.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

const ROUTE_NAME = inject('ROUTE_NAME')

// Swiper Configurations
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

const modules = [Navigation]
const navigation = ref({
  nextEl: '.swiper-button-next.fund-swiper-button',
  prevEl: '.swiper-button-prev.fund-swiper-button'
})

const props = defineProps({
  funds: Array
})
const { swiperRef, onSwiperInit } = useSwiperAutoReset(() => props.funds)
</script>
<style lang="scss">
.fund-slider {
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