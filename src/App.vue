<template>
  <div class="relative">
    
    <!-- <TheHeader /> -->
    <ETFHeader v-if="isCurrentETFPages" />
    <TheHeader v-else />

    <!-- 公告 -->
    <div v-if="isCurrentPageHome" class="relative w-full z-[3] top-[66px] lg:top-[75px]">
      <PinAnnounce>
        <template #default>
          <p class="mb-1 text-sm font-medium text-[#017f7b] leading-[1.8]">敬請投資人特別注意ETF溢價狀況及買賣風險
            <span class="font-normal text-font-color">【中信上游半導體(00941)】目前溢價率超過3%，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</span>
          </p>
          
          <p class="mb-1 text-sm font-medium text-[#017f7b] leading-[1.8]">敬請投資人特別注意ETF溢價狀況及買賣風險
            <span class="font-normal text-font-color">【中信上游半導體(00941)】目前溢價率超過3%，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</span>
          </p>
          
          <p class="mb-1 text-sm font-medium text-[#017f7b] leading-[1.8]">敬請投資人特別注意ETF溢價狀況及買賣風險
            <span class="font-normal text-font-color">【中信上游半導體(00941)】目前溢價率超過3%，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</span>
          </p>
          
          <p class="mb-1 text-sm font-medium text-[#017f7b] leading-[1.8]">敬請投資人特別注意ETF溢價狀況及買賣風險
            <span class="font-normal text-font-color">【中信上游半導體(00941)】目前溢價率超過3%，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</span>
          </p>
        </template>
      </PinAnnounce>
    </div>
    <main class="relative main bg-gray-base">
      <RouterView />
    </main>
    <TheFooter />
  </div>
  <RouterLink  v-if="isCurrentETFPages" :to="{ name: ROUTE_NAME.etf.index }" >
    <img
      width="51"
      src="@/assets/images/icon/home.png"
      class="fixed z-10 cursor-pointer right-5 bottom-40 lg:bottom-20"
      alt="" 
      @click="goTop"
    />
  </RouterLink>
</template>

<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()
const route = useRoute()
const system = useSystemStore()

const currenPath = ref()
watchEffect(() => currenPath.value = route.path)
const isCurrentETFPages = computed(() => currenPath.value.startsWith('/Etf'))


const isCurrentPageHome = computed(
  () => router.currentRoute.value.name === ROUTE_NAME.home.name || router.currentRoute.value.name === ROUTE_NAME.etf.index
)

let resizeTimeout
const handleResize = () => {
  system.setCurrentResolution(window.innerWidth)
}
handleResize()

const debounceResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    handleResize()
  }, 300)
}

onMounted(() => {
  window.addEventListener('resize', debounceResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', debounceResize)
})

</script>
