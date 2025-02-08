<template>
  <GradientBackground class="customized-height" :mobile-position="490" :desktop-position="433" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" class="hidden lg:flex" />
    <PageTitle title="ETF總覽" :imagePath="PageTitleIcon" />
      
    <!-- ETF總覽 -->
    <section class="mb-6 lg:mb-10">
      <div class="items-center mb-4 lg:flex">
        <p class="mb-3 lg:mb-0 lg:whitespace-nowrap lg:mr-6">ETF總覽</p>
        <div class="lg:flex lg:flex-grow lg:items-center">
          <inputButtonGroup
            class="mb-4 lg:mb-0 lg:w-1/2 lg:mr-5"
            placeholder="搜尋證券簡稱 / 證券代碼"
            button-text="送出"
          />
          <!-- 熱門關鍵字 Start -->
          <div class="hidden lg:flex lg:w-1/2">
            <p class="shrink-0">熱門關鍵字：</p>
            <div class="flex flex-wrap gap-3">
              <RouterLink class="code-link" :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 }, query: route.query }" >
                <span>00934</span>
              </RouterLink>
              <RouterLink class="code-link" :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 }, query: route.query }" >
                <span>00773B</span>
              </RouterLink>
              <RouterLink class="code-link" :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 }, query: route.query }" >
                <span>00795B</span>
              </RouterLink>
              <RouterLink class="code-link" :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 }, query: route.query }" >
                <span>日本</span>
              </RouterLink>
            </div>
          </div>
        <!-- 熱門關鍵字 End -->
        </div>

      </div>

      <div class="items-center mb-4 lg:flex lg:w-[60%]">
        <p class="mb-3 lg:mb-0 lg:whitespace-nowrap lg:mr-6">ETF名稱</p>
        <select class="selects">
          <option>請選擇ETF</option>
          <option value="E0001">中信中國50ETF基金</option>
          <option value="E0014">中信中國高股息ETF基金</option>
          <option value="E0020">中信電池及儲能ETF基金</option>
          <option value="E0022">中信特選金融ETF基金</option>
          <option value="E0025">中信上游半導體ETF基金</option>
        </select>
      </div>

      <div class="items-center lg:flex">
        <SearchTags class="col-span-2 mb-3" :type="tags" @tab-click="selectTag" />
      </div>
    </section>

    <div class="items-center justify-end hidden gap-4 mb-4 lg:flex">
      <p class="hidden lg:block">顯示模式</p>
      <div @click="currentViewType = VIEW_TYPE.list">
        <img
          v-show="currentViewType === VIEW_TYPE.graph"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-list.png"
          alt="" />
        <img
          v-show="currentViewType === VIEW_TYPE.list"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-list-active.png"
          alt="" />
      </div>
      <div @click="currentViewType = VIEW_TYPE.graph">
        <img
          v-show="currentViewType === VIEW_TYPE.list"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-graph.png"
          alt="" />
        <img
          v-show="currentViewType === VIEW_TYPE.graph"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-graph-active.png"
          alt="" />
      </div>
    </div>

    <!-- ETF -->
    <section>
    
      <!-- 卡片顯示 -->
      <div v-if="shouldShowCard" class="grid gap-6 mb-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:mb-3 lg:h-auto">
        <EtfCard
          v-for="fund in fakeData"
          class="shadow-xl"
          :key="fund.id"
          :fund="fund"
        />
      </div>

      <!-- 列表顯示 -->
      <div v-else class="normal-table-wrap fixed-head">
        <table class="normal-table">
          <thead>
            <tr>
              <th class="th">證券代碼</th>
              <th class="th">證券簡稱</th>
              <th class="th">ETF類型</th>
              <th class="th">淨值日期</th>
              <th class="th">淨值</th>
              <th class="th">日漲跌</th>
              <th class="th">漲跌幅</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fund in fakeData" :key="fund.id">
              <td>{{ fund.code }}</td>
              <td class="min-w-[273px] max-w-[273px]">
                <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: fund.id } }" >
                  <div class="hover:underline">
                    <EtfName :fund="fund" :showFundCode="false" />
                  </div>
                </RouterLink>
              </td>
              <td>
                <p class="text-center">
                  {{ fund.tag }}
                </p>
              </td>
              <td>
                <p class="text-center">
                  {{ fund.date }}
                </p>
              </td>
              <td>
                <p class="text-center">
                  {{ fund.netWorth }}
                </p>
              </td>
              <td>
                <p class="font-medium text-center" :class="isUpOrDownClass(fund.fromPreviousDay)">
                  {{ fund.fromPreviousDay }}%
                  <Symbol :number="fund.fromPreviousDay" />
                </p>
              </td>
              <td>
                <p class="font-medium text-center" :class="isUpOrDownClass(fund.fromPreviousDayPercent)">
                  {{ fund.fromPreviousDayPercent }}%
                  <Symbol :number="fund.fromPreviousDayPercent" />
                </p>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
      <RoutingButton class="block mx-auto my-16" />

    </section>



  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/scope.png'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
const route = useRoute()
const systemStore = useSystemStore()

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: 'ETF總覽', routeName: undefined },
]


// 顯示模式
const VIEW_TYPE = {
  list: 'list',
  graph: 'graph'
}
const currentViewType = ref(VIEW_TYPE.list)
const shouldShowCard = computed(() => 
  systemStore.isCurrentMobile || 
  currentViewType.value === VIEW_TYPE.graph
)

// 搜尋 tags
const tags = ref({
  label: 'ETF類型',
  tags: [
  { label: '不限', selected: true },
  { label: '國內ETF', selected: false },
  { label: '海外ETF', selected: false },
  { label: '債券ETF', selected: false },
  { label: '槓/反ETF', selected: false },
  ]
})
const { selectTag } = useTags()

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
   warning: '名稱後警語名稱後警語名稱後警語'
 },
 {
   id: 1,
   code: '00772B',
   name: '中國信託10年期以上高評級美元公司債券ETF基金',
   date: '2022/10/05',
   netWorth: 35.31,
   fromPreviousDay: 0.28,
   fromPreviousDayPercent: 0.34,
   tag: '債券ETF',
   warning: '名稱後警語名稱後警語名稱後警語'
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
   warning: '名稱後警語名稱後警語名稱後警語'
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

</script>

<style lang="scss" scoped>
.badge {
  &.active {
    background-color: $mainGreen;
    color: #fff;
    border-color: $mainGreen;
  }
}

.name {
  display: -webkit-box;
  max-width: 1000px;
  height: 16px*1.5*3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.customized-height {
  @media (min-width: 500px) and (max-width: 1024px)  {
    top: 445px;
  }
}
</style>