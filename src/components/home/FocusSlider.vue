<template>
  <div class="mx-auto focus-slider-wrap pb-[70px] max-w-[1500px]">
    <Swiper
      class="relative swiper-container"
      :slidesPerView="1"
      :navigation="navigation"
      :pagination="{
        type: 'fraction'
      }"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
      :loop="true"
      :spaceBetween="20"
      :modules="modules"
    >
      <SwiperSlide
        v-for="post in focusPosts"
        class="items-center justify-center pl-5 lg:pl-0 swiper-slide"
        :key="post.id"
      >
        <div class="block pb-10 focus-slide">
          
          <!-- 文章類型 type -->
          <div class="flex w-1/2 lg:right-[42%] xl:right-[46%] top-[26%] lg:top-[30.5%] lg:w-[573px] items-center post-type absolute text-xl z-[3] lg:text-xl text-main" >
            <p class="relative mr-5 text-xl font-medium break-keep">{{ postTitle(post.type) }}</p>
            <div class="hidden lg:block line bg-main h-[1px] w-fill-available"/>
          </div>
          <!-- date -->
          <p class="date absolute top-[35%] lg:top-[39%] lg:right-[42%] xl:right-[46%] lg:w-[573px] -mt-[10px] mb-[23px] text-main text-[13px]">
            {{ post.date }}
          </p>

          <div class="img-block mb-16 lg:mb-0 flex justify-end pl-[23%] lg:pl-0">
            <img class="rounded-md" src="@/assets/images/sample/invest.png" alt="" />
          </div>

          

          <!-- content -->
          <div
            @click="redirect( post )"
            class="pr-5 relative block cursor-pointer focus-card lg:p-0 lg:pr-[110px] pb-16 lg:w-[573px] lg:absolute lg:top-[43%] lg:right-[42%] xl:right-[46%]"
          >
            <div class="lg:w-[410px]">
              <!-- title -->
              <p
                class="font-bold lg:mb-4 title text-darker"
                :title="post.title"
              >
                {{ post.title }}
              </p>
              <p class="content" :title="post.content">{{ post.content }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="absolute cursor-pointer swiper-arrows focus-swiper-button swiper-button-prev w-9">
        <img src="@/assets/images/icon/arrow-l4.png" alt="" />
      </div>
      <div class="absolute cursor-pointer swiper-arrows focus-swiper-button swiper-button-next w-9">
        <img src="@/assets/images/icon/arrow-r4.png" alt="" />
      </div>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { FOCUS_TYPE } from '@/constants/focus'

const ROUTE_NAME = inject('ROUTE_NAME')

// Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
const modules = [Pagination, Navigation, EffectFade]
const navigation = ref({
  nextEl: '.swiper-button-next.focus-swiper-button',
  prevEl: '.swiper-button-prev.focus-swiper-button'
})

defineProps({
  focusPosts: Array
})


const postTitle = computed(() => type =>{
  if (type === FOCUS_TYPE.market) {
    return "市場展望"
  } else if (type === FOCUS_TYPE.perspective) {
    return '基金透視'
  }
  return '聚焦ETF'
})



// 依投資觀點文章類型轉址
const router = useRouter()
const redirect = post => {
  if (post.type === FOCUS_TYPE.market) {
    router.push({ name: ROUTE_NAME.focus.market.detail, params: { id: post.id } })
  } else if (post.type === FOCUS_TYPE.perspective) {
    router.push({ name: ROUTE_NAME.focus.perspective.detail, params: { id: post.id } })
  } else {
    router.push({ name: ROUTE_NAME.focus.ETF.detail, params: { id: post.id } })
  }
}
</script>
<style lang="scss">
.focus-slider-wrap {
  .img-block {
    img {
      clip-path: inset(0px round 15px 0px 0px 60%);
    }
  }
  .w-fill-available {
    width: -webkit-fill-available;
    height: 1px;
  }
  .focus-card {
    .title {
      display: -webkit-box;
      max-width: 100%;
      font-size: 24px;
      max-height: 24px * 1.5 * 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5;
      @media (min-width: 1024px) {
        font-size: 30px;
        height: 45px;
        max-height: 30px * 1.5 * 1;
        -webkit-line-clamp: 1;
      }
    }
    .content {
      color: #666;
      font-size: 16px;
      display: -webkit-box;
      max-width: 100%;
      height: 16px * 1.8 * 5;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.8;
      @media (min-width: 1024px) {
        height: 16px * 1.8 * 4;
        -webkit-line-clamp: 4;
      }
    }
  }
  .swiper-pagination {
    text-align: left;
    color: $mainGreen;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 1023px) {
      padding-left: calc(1.25rem + 50px);
      bottom: 10%;
    }
    @media (min-width: 1024px) {
      width: 60px;
      text-align: center;
      right: 77%;
      left: auto;
      top: 88%;
    }
  }
  .swiper-arrows {
    bottom: 9.5%;
    z-index: 11;
    @media (min-width: 1024px) {
      width: 37px;
      top: 87%;
    }
  }
  .swiper-button-prev {
    @media (max-width: 1023px) {
      left: 1.25rem;
    }
    @media (min-width: 1024px) {
      right: 82%;
    }
  }
  .swiper-button-next {
    @media (max-width: 1023px) {
      left: calc(1.25rem + 100px);
    }
    @media (min-width: 1024px) {
      right: 74%;
    }
  }
}
</style>
