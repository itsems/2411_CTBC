<template>
  <GradientBackground :mobile-position="133" :desktop-position="201" />
  <!-- 基金總覽 列表-->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle
      title="基金總覽"
      :imagePath="PageTitleIcon"
      :size="27"
    />
    <div class="grid grid-cols-2 gap-3 mb-10 lg:gap-6">
      <TabWithBar
        name="境內基金"
        @click="currenTab = FUND_MAIN_TABS.onshore"
        :isActive="isCurrentOnshore"
        :gradientPercentage="21"
      />
      <TabWithBar
        name="境外基金"
        @click="currenTab = FUND_MAIN_TABS.overseas"
        :isActive="isCurrentOverseas"
        :gradientPercentage="21"
      />
    </div>

    <!-- 搜尋基金 -->
    <section class="mb-8 lg:grid lg:grid-cols-[85px_1fr_1fr] items-center">
      <div class="flex items-center justify-between mb-3 lg:mb-0">
        <p>
          搜尋基金
        </p>
        <div class="flex gap-2 lg:hidden" @click="openModal">
          <img
            width="18"
            class="self-center"
            src="@/assets/images/icon/filter2.png"
            alt=""
          />
          <p class="text-main">
            篩選
          </p>
        </div>
      </div>
      <inputButtonGroup
        class="mb-4 lg:mb-0 lg:mr-5"
        placeholder="搜尋基金名稱 / 證券代碼"
        button-text="送出"
        @button-click="handleSearchBtnClick"
      />
        
      <div class="hidden lg:flex">
        <p class="shrink-0">
          熱門關鍵字：
        </p>
        
        <div v-if="isCurrentOnshore" class="flex flex-wrap gap-3">
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>00934</span>
          </RouterLink>
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>00773B</span>
          </RouterLink>
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>00795B</span>
          </RouterLink>
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>00772B</span>
          </RouterLink>
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>00941</span>
          </RouterLink>
        </div>
        <div v-else class="flex flex-wrap gap-3">
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>AI</span>
          </RouterLink>
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>美國成長</span>
          </RouterLink>
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>投資等級債</span>
          </RouterLink>
          <RouterLink class="code-link" :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: 0 } }" >
            <span>非投資等級債</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 搜尋類型 tags -->
    <section class="hidden lg:block mb-7 lg:mb-10">
      <SearchTags
        v-if="isCurrentOnshore"
        class="mb-3"
        :type="fundType"
        @tab-click="selectTag"
      />
      <SearchTags
        v-if="isCurrentOnshore"
        class="mb-3"
        :type="investRegion"
        @tab-click="selectTag"
      />
      <SearchTags
        class="mb-3"
        :type="riskType"
        @tab-click="selectTag"
      />
      <template v-if="shouldShowAdvancedFilters || isCurrentOverseas">
        <SearchTags
          class="mb-3"
          :type="currency"
          @tab-click="selectTag"
        />
        <SearchTags
          class="mb-3"
          :type="frequency"
          @tab-click="selectTag"
        />
      </template>
      
      <div v-if="isCurrentOnshore" class="flex items-center gap-2 pt-8">
        <div class="h-[1px] bg-[#ababab] line" />
        <p @click="shouldShowAdvancedFilters = !shouldShowAdvancedFilters" class="flex items-center gap-2 mr-4 cursor-pointer break-keep">
          {{ filterStatusText }}
          <img
            :class="{ 'rotate-180': shouldShowAdvancedFilters } "
            src="@/assets/images/icon/arrow-down-grey.png"
            alt=""
          />
        </p>
        <div class="h-[1px] bg-[#ababab] line" />
      </div>
    </section>
    
    <div class="flex items-center justify-end gap-3 mb-4">
      <p class="hidden lg:block">
        顯示模式
      </p>
      <div @click="currentViewType = VIEW_TYPE.list">
        <img
          v-show="currentViewType === VIEW_TYPE.graph"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-list.png"
          alt=""
        />
        <img
          v-show="currentViewType === VIEW_TYPE.list"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-list-active.png"
          alt=""
        />
      </div>
      <div @click="currentViewType = VIEW_TYPE.graph">
        <img
          v-show="currentViewType === VIEW_TYPE.list"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-graph.png"
          alt=""
        />
        <img
          v-show="currentViewType === VIEW_TYPE.graph"
          class="w-5 cursor-pointer"
          src="@/assets/images/icon/view-graph-active.png"
          alt=""
        />
      </div>
    </div>

    <!-- 基金 -->
    <section>
      <!-- 卡片顯示 -->
      <div v-if="currentViewType === VIEW_TYPE.graph" class="lg:grid lg:grid-cols-3 lg:gap-8">
        <FundCard
          v-for="fund in fakeData"
          :key="fund.id"
          :fund="fund"
          class="mb-6 lg:mb-0"
        >
          <template #buttons>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <RouterLink :to="{ name: ROUTE_NAME.fund.trend.name, params: { id: fund.id } }">
                <RoundButton text class="group">
                  <div class="flex items-center justify-center ">
                    <img
                      class="w-5 mr-2 group-hover:hidden "
                      :src="buttonValueImage"
                      alt=""
                    />
                    <img
                      class="hidden w-5 mr-2 group-hover:block"
                      :src="buttonValueHoverImage"
                      alt=""
                    />
                    <p class="font-medium select-none break-keep text-md group-hover:text-white">
                      淨值走勢
                    </p>
                  </div>
                </RoundButton>
              </RouterLink>
              <RouterLink :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: fund.id } }">
                <RoundButton text class="group">
                  <div class="flex items-center justify-center">
                    <img
                      class="w-5 mr-2 group-hover:hidden "
                      :src="buttonMoreImage"
                      alt=""
                    />
                    <img
                      class="hidden w-5 mr-2 group-hover:block"
                      :src="buttonMoreHoverImage"
                      alt=""
                    />
                    <p class="font-medium select-none break-keep text-md group-hover:text-white">
                      了解更多
                    </p>
                  </div>
                </RoundButton>
              </RouterLink>
            </div>
          </template>
        </FundCard>
      </div>

      <!-- 列表顯示 -->
      <div v-else class="!overflow-auto lg:overflow-unset normal-table-wrap fixed-head has-fix-first-col">
        <table class="normal-table">
          <thead>
            <tr>
              <th class="text-left fix-first-col lg:sticky lg:top-[var(--nav-desktop-height)] rounded-tl-2xl">
                基金名稱
              </th>
              <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
                最新淨值
              </th>
              <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
                日漲跌
              </th>
              <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
                漲跌幅(%)
              </th>
              <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
                風險等級
              </th>
              <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
                公開說明書
              </th>
              <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
                月報
              </th>
              <th class="lg:sticky lg:top-[var(--nav-desktop-height)] rounded-tr-2xl"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fund in fakeData" :key="fund.id">
              <td class="lg:min-w-[273px] lg:max-w-[273px] min-w-[130px] fix-first-col">
                <RouterLink :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: fund.id } }" >
                  <p class="hover:underline">
                    {{ fund.name }}
                  </p>
                </RouterLink>
              </td>
              <td>
                <div class="text-center">
                  <p>
                    {{ fund.netWorth }}
                  </p>
                  <p>
                    ({{ fund.date}})
                  </p>
                </div>
              </td>
              <td class="min-w-[100px]">
                <p class="text-center" :class="isUpOrDownClass(fund.fromPreviousDay)">
                  {{ fund.fromPreviousDay }}
                  <Symbol :number="fund.fromPreviousDay" />
                </p>
              </td>
              <td class="min-w-[100px]">
                <p class="text-center" :class="isUpOrDownClass(fund.fromPreviousDayPercent)">
                  {{ fund.fromPreviousDayPercent }}
                  <Symbol :number="fund.fromPreviousDayPercent" />
                </p>
              </td>
              <td>
                <p class="text-center">
                  {{ fund.riskLevel }}
                </p>
              </td>
              <td>
                <a class="flex justify-center" href="#">
                  <img src="@/assets/images/icon/download3.png" alt="" />
                </a>
              </td>
              <td>
                <a class="flex justify-center" href="#">
                  <img src="@/assets/images/icon/download3.png" alt="" />
                </a>
              </td>
              <td>
                <a
                  v-if="fund.onlineApply"
                  :href="fund.onlineApply"
                  class="break-keep"
                >
                  <RoundButton label="線上申購" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <RoutingButton class="block mx-auto my-10" />
    </section>
  </div>

  <!-- 篩選條件 -->
  <Teleport to="body">
    <Modal :show="shouldModalShow" @close="closeModal">
      <template #header>
        <p class="mb-6 text-2xl font-bold text-center text-darkGreen">
          篩選條件
        </p>
        <div class="w-full h-[1px] bg-[#ababab]" />
      </template>
      <template #body>
        <SearchTags
          v-if="isCurrentOnshore"
          class="mb-3"
          :type="fundType"
          @tab-click="selectTag"
        />
        <SearchTags
          v-if="isCurrentOnshore"
          class="mb-3"
          :type="investRegion"
          @tab-click="selectTag"
        />
        <SearchTags
          class="mb-3"
          :type="riskType"
          @tab-click="selectTag"
        />
        <template v-if="shouldShowAdvancedFilters || isCurrentOverseas">
          <SearchTags
            class="mb-3"
            :type="currency"
            @tab-click="selectTag"
          />
          <SearchTags
            class="mb-3"
            :type="frequency"
            @tab-click="selectTag"
          />
        </template>
      </template>
      <template #footer>
        <div class="w-full h-[1px] bg-[#ababab]" />
        <div class="flex items-center justify-center gap-10 pt-4">
          <p class="underline underline-offset-4 text-[#333] font-medium">
            清除所有條件
          </p>
          <RoundButton label="確定" />
        </div>
      </template>
    </Modal>
  </Teleport>
</template>
<script setup>
import { FUND_MAIN_TABS } from '@/constants/home'
import buttonValueHoverImage from '@/assets/images/icon/money.png'
import buttonValueImage from '@/assets/images/icon/money-s.png'
import buttonMoreImage from '@/assets/images/icon/scope-plus-s.png'
import buttonMoreHoverImage from '@/assets/images/icon/scope-plus.png'
import PageTitleIcon from '@/assets/images/icon/scope.png'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '基金資訊', routeName: undefined },
  { name: '基金總覽', routeName: undefined }
]

// 境內/境外
const currenTab = ref(FUND_MAIN_TABS.onshore)
const isCurrentOnshore = computed(() => currenTab.value === FUND_MAIN_TABS.onshore)
const isCurrentOverseas = computed(() => currenTab.value === FUND_MAIN_TABS.overseas)

// 搜尋基金 Click 送出
const handleSearchBtnClick = () => {}

// 搜尋類型
const fundType = ref({
  label: '基金類型',
  tags: [
    { label: '不限', selected: true },
    { label: '國內股票', selected: false },
    { label: '海外股票', selected: false },
    { label: '海外債券', selected: false },
    { label: '平衡型', selected: false },
    { label: '多重資產', selected: false },
    { label: '組合型', selected: false },
    { label: '貨幣型', selected: false },
    { label: 'ETF', selected: false },
  ]
})
const investRegion = ref({
  label: '投資區域',
  tags: [
    { label: '不限', selected: true },
    { label: '臺灣', selected: false },
    { label: '中國，亞太地區', selected: false },
    { label: '美洲地區', selected: false },
    { label: '新興市場', selected: false },
    { label: '全球', selected: false },
    { label: '歐洲地區', selected: false },
  ]
})
const riskType = ref({
  label: '風險等級',
  tags: [
    { label: '不限', selected: true },
    { label: 'RR1', selected: false },
    { label: 'RR2', selected: false },
    { label: 'RR3', selected: false },
    { label: 'RR4', selected: false },
    { label: 'RR5', selected: false },
  ]
})
const currency = ref({
  label: '計價幣別',
  tags: [
    { label: '不限', selected: true },
    { label: '新台幣', selected: false },
    { label: '美元', selected: false },
    { label: '人民幣', selected: false },
    { label: '澳幣', selected: false },
    { label: '南非幣', selected: false },
  ]
})
const frequency = ref({
  label: '配息頻率',
  tags: [
    { label: '不限', selected: true },
    { label: '月配', selected: false },
    { label: '季配', selected: false },
    { label: '半年配', selected: false },
    { label: '年配', selected: false },
    { label: '不配息', selected: false },
  ]
})
const { selectTag } = useTags()
// 更多/篩選條件
const shouldShowAdvancedFilters = ref(false)
const filterStatusText = computed(() => shouldShowAdvancedFilters.value
  ? '收合篩選條件'
  : '更多篩選條件'
)

// 燈箱
// 燈箱
const { 
  shouldModalShow,
  closeModal,
  openModal
} = useModal()


// 基金淨值
const fakeData = [
  {
    id: 0,
    name: '中國信託台灣活力證券投資信託基金',
    netWorth: 15.74,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: -0.02,
    fromPreviousDayPercent: -0.13,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 1,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: 18.64,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 6.25,
    fromPreviousDayPercent: 7.19,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 2,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 19.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: -0.05,
    fromPreviousDayPercent: -1.34,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 3,
    name: '中國信託智慧城市建設證券投資信託基金',
    netWorth: 217.82,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/11/05',
    fromPreviousDay: 0,
    fromPreviousDayPercent: 0,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 4,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: 111.74,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 0.13,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 5,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: 11.64,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.05,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 6,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 35.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 7,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: 217.82,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: -0.02,
    fromPreviousDayPercent: -0.13,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 8,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 77.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 9,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 35.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 10,
    name: '中國信託台灣活力證券投資信託基金',
    netWorth: 15.74,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: -0.02,
    fromPreviousDayPercent: -0.13,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 11,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: 18.64,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 6.25,
    fromPreviousDayPercent: 7.19,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 12,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 19.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: -0.05,
    fromPreviousDayPercent: -1.34,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 13,
    name: '中國信託智慧城市建設證券投資信託基金',
    netWorth: 217.82,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/11/05',
    fromPreviousDay: 0,
    fromPreviousDayPercent: 0,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 14,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: 111.74,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 0.13,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 15,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: 11.64,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.05,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 16,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 35.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 17,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: 217.82,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: -0.02,
    fromPreviousDayPercent: -0.13,
    riskLevel: 'RR5',
    onlineApply: null,
  },
  {
    id: 18,
    name: '中國信託ESG金融收益多重資產證券投資信託基金-新台幣NB',
    netWorth: 77.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
  {
    id: 19,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 35.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    riskLevel: 'RR5',
    onlineApply: 'javascript:;',
  },
]

// 顯示模式
const VIEW_TYPE = {
  list: 'list',
  graph: 'graph'
}
const currentViewType = ref(VIEW_TYPE.list)

</script>

<style lang="scss" scoped>
.line {
  width: -webkit-fill-available;
  height: 1px;
}
.code-link {
  @apply hover:text-main;
  &:not(:last-of-type) {
    &::after {
      content: '|';
      display: inline-block;
      position: relative;
      margin-left: 10px;
      top: -1px;
    }
  }
}
</style>
