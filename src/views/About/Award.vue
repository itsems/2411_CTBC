<template>
  <GradientBackground :mobile-position="728" :desktop-position="521" />
  <div
    class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="得獎紀錄" :imagePath="fundImageUrl" />
    <div class="mb-10 lg:flex lg:items-center">
      <div class="mb-6 text-center lg:mr-10">
        <p class="text-[115px] number mb-5 text-[#017f7b] leading-[100px]">66</p>
        <p class="inline-block px-12 py-1 border-solid text-main border-y border-main">得獎總數</p>
      </div>
      <div class="leading-7 lg:mb-8">
        <p>多年來，中國信託投信憑藉傑出的資產管理能力，屢獲國內外專業機構多項大獎肯定，也獲得投資人與媒體的一致認同，資產管理規模得以快速成長！</p>
        <p>我們將持續以優異的表現，贏得投資人的信賴與支持，也為投資人創造更多獲利機會！</p>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-7">
      <div class="flex items-center col-span-2 gap-4 lg:col-span-1 lg:order-3">
        <p class="font-medium text-main shrink-0">得獎年份</p>
        <select class="w-full text-2xl font-bold select selects text-main">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <TabWithBar
        :gradientPercentage="25"
        :is-active="currentTab === FUND_TAB.name"
        @click="handleTabClick( FUND_TAB.name )"
      >
        <template #text>
          <p class="mb-2 text-2xl lg:mb-0">{{ FUND_TAB.label }}</p>
        </template>
      </TabWithBar>
      <TabWithBar
        :gradientPercentage="25"
        :is-active="currentTab === TEAMS_TAB.name"
        @click="handleTabClick( TEAMS_TAB.name )"
      >
        <template #text>
          <p class="mb-2 text-2xl lg:mb-0">{{ TEAMS_TAB.label }}</p>
        </template>
      </TabWithBar>
    </div>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 pt-7 md:gap-8">
      <div class="mb-7 card">
        <div class="card-title">
          00882中國信託樂齡收益平衡基金
          <span class="strong-text">
            (本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)
          </span>
        </div>
        <div class="dark-bg card-bottom-block">
          <p class="mb-3 text-base">財資雜誌（The Asset）</p>
          <p class="mb-3 prize-text">
            台灣最佳ETF發行公司<span class="block prize-text lg:inline">高度評價獎</span>
          </p>

          <p class="text-sm">（Best ETF Provider / Highly Commended）</p>
        </div>
      </div>
      <div class="mb-7 card">
        <div class="card-title">
          00902中信電池及儲能<span class="strong-text">(本基金之配息來源可能為收益平準金)</span>
        </div>
        <div class="dark-bg card-bottom-block">
          <p class="w-full mb-3 text-base">亞洲資產管理雜誌（AAM）</p>
          <p class="w-full mb-3 prize-text">最佳新ETF</p>
          <p class="w-full text-sm">(Best New ETF)</p>
        </div>
      </div>
      <div class="mb-7 card">
        <div class="card-title">
          00882中國信託樂齡收益平衡基金
          <span class="strong-text">
            (本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)
          </span>
        </div>
        <div class="dark-bg card-bottom-block">
          <p class="mb-3 text-base">財資雜誌（The Asset）</p>
          <p class="mb-3 prize-text">最佳創新產品</p>
          <p class="text-sm">(Most Innovative Product)</p>
        </div>
      </div>
      <div class="mb-7 card">
        <div class="card-title">
          00882中國信託樂齡收益平衡基金
          <span class="strong-text">
            (本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)
          </span>
        </div>
        <div class="dark-bg card-bottom-block">
          <p class="mb-3 text-base">財資雜誌（The Asset）</p>
          <p class="mb-3 prize-text">
            台灣最佳ETF發行公司
            <span class="block lg:inline prize-text">高度評價獎</span>
          </p>

          <p class="text-sm">（Best ETF Provider / Highly Commended）</p>
        </div>
      </div>
      <div class="mb-7 card">
        <div class="card-title">
          00902中信電池及儲能
          <span class="strong-text">(本基金之配息來源可能為收益平準金)</span>
        </div>
        <div class="dark-bg card-bottom-block">
          <p class="mb-3 text-base">Smart智富</p>
          <p class="prize-text">Smart智富台灣基金奬之創新類之非債券指數股票型基金</p>
        </div>
      </div>
      <div class="mb-7 card">
        <div class="card-title">
          00882中國信託樂齡收益平衡基金
          <span class="strong-text">
            (本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)
          </span>
        </div>
        <div class="dark-bg card-bottom-block">
          <p class="mb-3 text-base">財資雜誌（The Asset）</p>
          <p class="mb-3 prize-text">最佳創新產品</p>
          <p class="text-sm">(Most Innovative Product)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import fundImageUrl from '@/assets/images/icon/award-s.png'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '關於我們', routeName: undefined },
  { name: '得獎紀錄', routeName: undefined }
]

// Tabs
const FUND_TAB = { name: 'fund', label: '基金得獎' }
const TEAMS_TAB = { name: 'team', label: '團隊得獎' }
const currentTab = ref(FUND_TAB.name)
const handleTabClick = tabName => {
  currentTab.value = tabName
}

</script>
<style lang="scss" scoped>
.number {
  font-family: Impact;
}
.select {
  font-family: Century Gothic;
}
.card {
  @apply overflow-hidden bg-white shadow-xl rounded-2xl lg:flex lg:flex-col;
}
.card-title {
  @apply p-6 text-md lg:h-[107px];
}
.card-bottom-block {
  @apply text-white text-center py-6 px-4 lg:flex-grow;
}
.strong-text {
  @apply text-[#ee1d23] font-bold;
}
.prize-text {
  @apply text-xl font-medium;
}
.dark-bg {
  @apply bg-[#017f7b] h-full;
}
</style>
