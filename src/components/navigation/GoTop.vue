<template>
  <Transition>
    <div class="fixed px-3 lg:px-0 lg:pb-0 text-xs text-main cursor-pointer select-none go-top w-full lg:w-[90px] lg:rounded-l-xl lg:shadow-xl lg:shadow-black/30 overflow-hidden lg:bg-white bottom-0 left-0 right-0 z-10 lg:left-auto lg:top-[260px] lg:bottom-auto">
      <div class="flex overflow-hidden border border-white border-solid bg-main lg:flex-wrap lg:border-0 rounded-t-2xl lg:rounded-none">
        <RouterLink :to="{ name: ROUTE_NAME.etf.latestDividend.name }" class="link" :target='shouldOpenNewTab'>
          <img 
            class="mb-1 lg:block"
            width="24"
            src="@/assets/images/icon/scope.png"
            alt="ETF最新配息公告" />
          <p class="w-full">
            ETF<br class="hidden break lg:block" />最新配息<br class="hidden break lg:block" />公告
          </p>
        </RouterLink>
        <a
          href="https://etrade.ctbcinvestments.com.tw/OpenOnline/"
          target="_blank"
          class="link"
        >
          <img
            width="22"
            class="mb-1 lg:block lg:w-5"
            src="@/assets/images/icon/click-s.png"
            alt="" />
          <p class="w-full">線上<br class="hidden break lg:block" />交易</p>
        </a>
        <a
          href="https://etrade.ctbcinvestments.com.tw/OpenOnline/"
          target="_blank"
          class="link"
        >
          <img
            width="22"
            class="mb-1 lg:block lg:w-5"
            src="@/assets/images/icon/user.png"
            alt="" />
          <p class="w-full">線上<br class="hidden break lg:block" />開戶</p>
        </a>
     
      </div>
    </div>
  </Transition>
  <Transition>
    <img
      width="51"
      src="@/assets/images/gotop.png"
      class="fixed z-10 cursor-pointer right-5 bottom-24 lg:bottom-5"
      alt="" 
      @click="goTop"
    />
  </Transition>
</template>
<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')
const goTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const route = useRoute()
const currenPath = ref()
watchEffect(() => currenPath.value = route.path)
const isCurrentETFPages = computed(() => currenPath.value.startsWith('/Etf'))
const shouldOpenNewTab = computed(() => !isCurrentETFPages.value && '_blank' )

</script>
<style lang="scss" scoped>
.go-top {
  .link {
    padding: 10px 10px;
    transition: all 0.3s;
    @apply px-2 py-3 lg:py-3 lg:px-0 flex text-xs lg:text-base lg:leading-5 hover:font-bold break-keep text-center flex-wrap items-center justify-center w-full border-r bg-white border-solid lg:border-b border-[#e8e8e8];
  }
  .break {
    @apply hidden lg:block;
  }
}
</style>
