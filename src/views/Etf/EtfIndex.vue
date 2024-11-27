<template>
  <section class="overflow-hidden">
    <!-- 輪播 -->
    <section class="mx-auto section-kv-slider">
      <EtfKvSlider />
    </section>

    <!-- 搜尋基金/證券 -->
    <div class="relative z-[2] px-5 xl:px-0 flex justify-center -mt-[39px] lg:-mt-[25px] mx-auto section-content-limit-width">
      <SearchInput
        placeholder="輸入基金名稱 / 證券代碼"
        class="xl:w-[445px] max-w-[645px]"
        btnClass="!px-4 lg:!px-7"
        @search-apply="handleSearchApply"
      />
    </div>

    <!-- 精選推薦 -->
    <section class="pl-6 pt-11 pb-11 lg:py-14">
      <div class="mx-auto section-content-limit-width">
        <div class="flex items-end justify-between mb-6">
          <SectionTitle title="精選推薦" class="!items-start !mb-0">
            <img width="34px" src="@/assets/images/icon/scope.png" />
          </SectionTitle>
          
          <RouterLink :to="{ name: ROUTE_NAME.etf.list.name }">
            <p class="flex items-center self-end pr-5 text-lg font-medium text-main hover:underline underline-offset-4">
              ETF總覽
              <img
                class="w-[14px] ml-[18px]"
                src="@/assets/images/icon/bar-tab-active.png"
                alt=""
              />
            </p>
          </RouterLink>
        </div>
        <div class="flex gap-5 lg:grid lg:grid-cols-3 lg:gap-6 mb-7">
          <RecommendTabs @tab-click="handleRecommendTabClick" :currentRecommendTab="currentRecommendTab" />
        </div>
        
        <ETFSlider :funds="fakeData" />
      </div>
    </section>

    <!-- 即時預估淨值 -->
    <section class="px-6 mx-auto section-content-limit-width">
      <div class="flex items-end justify-between w-full mb-3 lg:mb-6">
        <div class="text-and-date lg:flex lg:gap-5 lg:items-end">
          <SectionTitle title="即時預估淨值" class="!mb-0">
            <img class="w-7 lg:w-8" src="@/assets/images/icon/clock2.png" />
          </SectionTitle>
          <p class="font-medium visible-desktop-block">資料時間：YYYY/MM/DD hh:mm:ss</p>
        </div>
          
        <RouterLink :to="{ name: ROUTE_NAME.etf.realTime.name }">
          <MoreButton />
        </RouterLink>
      </div>
      <p class="mb-4 font-medium lg:hidden">資料時間：YYYY/MM/DD hh:mm:ss</p>
          
      <div class="grid grid-cols-3 gap-4 mb-8 lg:gap-8">
        <TabWithBar
          v-for="tab in HOME_ESTIMATE_TABS"
          :key="tab.name"
          :name="tab.label"
          :is-active="currentEstimateTab === tab.name"
          :gradient-percentage="25"
          @click="currentEstimateTab = tab.name"
        />
      </div>
      <ul class="mb-9">
        <li class="hidden px-5 py-2 text-lg lg:block">
          <div class="w-full grid content grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center">
            <p>基金名稱</p>
            <p class="text-center">最新市價</p>
            <p class="text-center">預估淨值</p>
            <p class="text-center">折溢價</p>
            <p class="text-center">追蹤差距</p>
          </div>
        </li>
        <EstimateListLi
          v-for="etf in fakeData2"
          :etf="etf"
          :key="etf.id"
          class="mb-6"
        />
      </ul>
    </section>


    <!-- 最新公告 -->
    <section class="px-6 pt-12 pb-20 mx-auto section-events section-content-limit-width lg:px-0 lg:pb-32">
      <EventTab
        name="最新公告"
        is-active
        showMoreButton
        class="w-full"
        :link="ROUTE_NAME.etf.news.index"
      >
        <img width="28" class="mr-3" src="@/assets/images/icon/speaker-s.png" />
      </EventTab>

      <div class="pt-5 lg:pt-7">
        <ul>
          <DataListLi
            v-for="item in fakeNewsList"
            :item="item"
            :key="item.id"
            @click="gotoNewsDetail(item.id)"
          />
        </ul>
      </div>
    </section>
  </section>

  <!-- 首頁燈箱 -->
  <Teleport to="body">
    <Modal
      :show="shouldModalShow"
      header="重要公告"
      bodyClass="!m-0"
      @close="closeModal">
      <template #body>
        <div class="max-h-[400px] overflow-y-auto customized-scrollbar pr-3 lg:pr-6">
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
        </div>
        
        <Hr class="my-5" />

        <RoundButton class="mx-auto" label="關閉" @click="closeModal" />

      </template>
    </Modal>
  </Teleport>
</template>
<script setup>
import { HOME_RECOMMEND_TABS, HOME_ESTIMATE_TABS } from '@/constants/etf'

const ROUTE_NAME = inject('ROUTE_NAME')

// 燈箱
const { 
  shouldModalShow,
  closeModal,
  openModal
} = useModal()
openModal()

// 搜尋基金代碼/證券代碼
const handleSearchApply = () => {}

// 熱門推薦
const currentRecommendTab = ref(HOME_RECOMMEND_TABS[0].name)
const handleRecommendTabClick = tabName => {
  currentRecommendTab.value = tabName
}

// 即時預估淨值
const currentEstimateTab = ref(HOME_ESTIMATE_TABS[0].name)

const router = useRouter()
const gotoNewsDetail = id => {
  router.push({ name: ROUTE_NAME.etf.news.detail.name, params: { id } })
}

// Fake data

// 基金淨值
const fakeData = [
 {
   id: 0,
   code: '00934',
   name: '中國信託臺灣優選成長高股息ETF基金',
   netWorth: 18.07,
   date: '2022/10/05',
   fromPreviousDay: 0.25,
   fromPreviousDayPercent: 1.34,
   tag: '國內股票ETF',
   warning: ''
 },
 {
   id: 1,
   code: '00772B',
   name: '中國信託10年期以上高評級美元公司債券ETF基金',
   netWorth: 35.31,
   date: '2022/10/05',
   fromPreviousDay: 0.28,
   fromPreviousDayPercent: 0.34,
   tag: '債券ETF',
   warning: ''
 },
 {
   id: 2,
   code: '00773B',
   name: '中國信託10年期以上優先順位金融債券ETF基金',
   netWorth: 36.29,
   date: '2022/10/05',
   fromPreviousDay: 0.11,
   fromPreviousDayPercent: '1.30',
   tag: '債券ETF',
   warning: ''
 },
 {
   id: 3,
   code: '00934',
   name: '中國信託臺灣優選成長高股息ETF基金',
   netWorth: 18.07,
   date: '2022/11/05',
   fromPreviousDay: 0.25,
   fromPreviousDayPercent: 1.34,
   tag: '國內股票ETF',
   warning: '名稱後警語名稱後警語名稱後警語'
 },
 {
   id: 4,
   code: '00772B',
   name: '中國信託10年期以上高評級美元公司債券ETF基金',
   netWorth: 35.31,
   date: '2022/10/05',
   fromPreviousDay: 0.28,
   fromPreviousDayPercent: 0.34,
   tag: '債券ETF',
   warning: '名稱後警語名稱後警語名稱後警語'
 },
 {
   id: 5,
   code: '00773B',
   name: '中國信託10年期以上優先順位金融債券ETF基金',
   netWorth: 36.29,
   date: '2022/10/05',
   fromPreviousDay: 0.11,
   fromPreviousDayPercent: 1.30,
   tag: '債券ETF',
   warning: '名稱後警語名稱後警語名稱後警語'
 },
 {
   id: 6,
   code: '00934',
   name: '中國信託臺灣優選成長高股息ETF基金',
   netWorth: 18.07,
   date: '2022/10/05',
   fromPreviousDay: 0.25,
   fromPreviousDayPercent: 1.34,
   tag: '國內股票ETF',
   warning: '名稱後警語名稱後警語名稱後警語'
 },
 {
   id: 7,
   code: '00772B',
   name: '中國信託10年期以上高評級美元公司債券ETF基金',
   netWorth: 35.31,
   date: '2022/10/05',
   fromPreviousDay: 0.28,
   fromPreviousDayPercent: 0.34,
   tag: '債券ETF',
   warning: '名稱後警語名稱後警語名稱後警語'
 },
 {
   id: 8,
   code: '00773B',
   name: '中國信託10年期以上優先順位金融債券ETF基金',
   netWorth: 36.29,
   date: '2022/10/05',
   fromPreviousDay: 0.11,
   fromPreviousDayPercent: '1.30',
   tag: '債券ETF',
   warning: '名稱後警語名稱後警語名稱後警語'
 }
]
const fakeData2 = [
 {
   id: 0,
   code: '00752',
   name: '中信臺灣智慧50',
   currentValue: 18.23,
   fromPreviousDayPercent: 0.16,
   expectedValue: '18.30',
   expectValueChange: 0.44,
   discount: -0.08,
   discountChange: -0.27,
   track: 0.07,
   warning: '',
 },
 {
   id: 1,
   code: '00753L',
   name: '中國信託智慧城市建設證券投資信託基金-新台幣',
   currentValue: 18.23,
   fromPreviousDayPercent: 0.16,
   expectedValue: '18.30',
   expectValueChange: 0.44,
   discount: -0.08,
   discountChange: -0.27,
   track: 0.07,
   warning: ''
 },
 {
   id: 2,
   code: '00753L',
   name: '中信中國50正2',
   currentValue: 18.23,
   fromPreviousDayPercent: 0.16,
   expectedValue: '18.30',
   expectValueChange: 0.44,
   discount: -0.08,
   discountChange: -0.27,
   track: 0.07,
   warning: ''
 },
 {
   id: 3,
   code: '00753L',
   name: '中國信託智慧城市建設證券投資信託基金-新台幣',
   currentValue: 18.23,
   fromPreviousDayPercent: 0.16,
   expectedValue: '18.30',
   expectValueChange: 0.44,
   discount: -0.08,
   discountChange: -0.27,
   track: 0.07,
   warning: ''
 },
 {
   id: 4,
   code: '00753L',
   name: '中信中國50正2',
   currentValue: 18.23,
   fromPreviousDayPercent: 0.16,
   expectedValue: '18.30',
   expectValueChange: 0.44,
   discount: -0.08,
   discountChange: -0.27,
   track: 0.07,
   warning: ''
 }
]


// 最新公告參考格式
const fakeNewsList = [
  {
    id: 1,
    date: '2022/10/04',
    isNew: true,
    content: '公告中國信託臺灣智慧50ETF證券投資信託基金民國111年9月30日收益分配評價結果。'
  },
  {
    id: 2,
    isNew: true,
    date: '2022/10/04',
    content: '公告中國信託ETF系列基金民國111年9月收益分配評價結果。'
  },
  {
    id: 3,
    isNew: false,
    date: '2022/09/25',
    content: '本公司總代理之「（盧森堡）法盛國際基金I」基金公開說明書之變更事項通知。'
  },
  {
    id: 4,
    isNew: false,
    date: '2022/09/21',
    content: '中國信託全系列月配息型基金收益分配期前公告'
  },
  {
    id: 4,
    isNew: false,
    date: '2022/09/05',
    content: '新增「陽信商業銀行股份有限公司」為本公司所經理「中國信託亞太實質收息多重資產證券投資信託基金」。'
  },
  {
    id: 4,
    isNew: false,
    date: '2022/09/25',
    content: '本公司總代理之「（盧森堡）法盛國際基金I」基金公開說明書之變更事項通知。'
  }
]



</script>
<style lang="scss" scoped>
.section-content-limit-width {
  max-width: 1110px;
}
</style>
