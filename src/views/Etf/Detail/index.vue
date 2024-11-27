<template>
  <GradientBackground :mobile-position="405" :desktop-position="410" />
  <div class="relative pt-4 page-layout">
    <Breadcrumb :list="breadCrumbList" class="!mb-4" />
    <RouterLink :to="{ name: ROUTE_NAME.etf.list.name }">
      <RoundButton class="!px-4 lg:!px-6 mb-2 ml-auto lg:absolute lg:right-0 lg:top-7" >
        切換 ETF
        <img
          width="9"
          class="ml-3"
          src="@/assets/images/icon/arrow-r2.png"
          alt="切換ETF"
        />
      </RoundButton>
    </RouterLink>
    <div class="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white border border-solid rounded-2xl border-main text-main">海外股票型</div>
    
    <!-- ETF -->
    <EtfName :fund="fakeData" class="mb-5 lg:mb-8 text-2xl lg:text-3xl text-[#333]" />
    
    <!-- 最新狀態 -->
    <EtfInfoBox :fund="fakeData" class="mb-6 lg:mb-10" />

    <!-- 內頁分頁下拉&tabs -->
    <select v-model="currentTab" class="mb-5 selects lg:hidden" @change="handleTabPageChange(currentTab)">
      <option v-for="tab in tabs" :value="tab.name" :key="tab.label">
        {{ tab.label }}
      </option>
    </select>
    
    <div class="hidden grid-cols-6 gap-8 mb-16 lg:grid">
      <RoundButton
        v-for="tab in tabs"
        :label="tab.label"
        :key="tab.name" 
        hover
        class="!py-3 !text-lg !rounded-full"
        :active="tab.name === currentTab"
        @click="handleTabPageChange(tab.name)"
      />
    </div>

    <RouterView :fund="fakeData" />
    
    <div class="flex justify-center pt-6 pb-10">
      <RouterLink :to="{ name: ROUTE_NAME.etf.list.name }">
        <RoutingButton :arrow-direction="BUTTON_ARROW_DIRECTION.right" label="回ETF總覽" />
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { BUTTON_ARROW_DIRECTION } from '@/constants/layout'

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

const breadCrumbList = [
  { name: 'ETF專區', routeName: ROUTE_NAME.etf.list.name },
  { name: 'ETF總覽', routeName: ROUTE_NAME.etf.list.name },
  { name: '00752 中國信託MSCI中國外資自由投資50不含A及B股ETF基金', routeName: undefined },
]

// tabs
const tabs = ref([
  {
    name: ROUTE_NAME.etfDetail.info.name,
    label: '基金資訊'
  },
  {
    name: ROUTE_NAME.etfDetail.indexIntro.name,
    label: '指數介紹'
  },
  {
    name: ROUTE_NAME.etfDetail.trend.name,
    label: '基金淨值'
  },
  {
    name: ROUTE_NAME.etfDetail.performance.name,
    label: '績效表現'
  },
  {
    name: ROUTE_NAME.etfDetail.combination.name,
    label: '投資組合'
  },
  {
    name: ROUTE_NAME.etfDetail.dividend.name,
    label: '配息紀錄'
  }
])
const currentRoute = computed(() => router.currentRoute.value.name)
const currentTab = ref(currentRoute.value)
const handleTabPageChange = tabName => {
  router.push({ name: tabName })
  currentTab.value = tabName
}

const fakeData = {
  id: 0,
  code: '00882',
  name: '中國信託恒生中國高股息ETF基金',
  netWorth: 10.41,
  date: '2024/03/15',
  fromPreviousDay: -0.13,
  fromPreviousDayPercent: -1.23,
  warning: '名稱後警語名稱後警語名稱後警語'
}


</script>
<style lang="scss">
.select-main-tab {
  .tab {
    cursor: pointer;
    &.active {
      background-color: $mainGreen;
      .label {
        color: white;
      }
    }
  }
}
  
</style>