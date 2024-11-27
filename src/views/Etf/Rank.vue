<template>
  <!-- 精選推薦 -->
  <div class="relative flex items-center justify-between mb-4 lg:justify-center">
    <div class="flex">
      <img class="mr-3" src="@/assets/images/icon/scope.png" alt="">
      <p class="text-2xl font-bold text-darkGreen">精選推薦</p>
    </div>
    <RouterLink :to="{ name: ROUTE_NAME.etf.list.name }">
      <p class="border-solid text-darkGreen lg:absolute lg:right-0 hover:border-b border-darkGreen">ETF總覽 >></p>
    </RouterLink>
     
  </div>

  <RecommendSlider :funds="fakeFunds" class="mb-10" />

  <!-- 即時預估淨值 -->
  <div class="relative mb-4 lg:flex lg:items-center lg:justify-center">
    <div class="flex">
      <img class="mr-3 w-[21px] self-center" src="@/assets/images/icon/clock2.png" alt="">
      <p class="text-2xl font-bold text-darkGreen">即時預估淨值</p>
    </div>
    <p class="pl-8 mt-3 text-darkGreen lg:mt-0 lg:pl-0 lg:absolute lg:right-0">資料時間：
      <span class="text-black">YYYY/MM/DD hh:mm:ss</span>
    </p>
  </div>

  <!-- TODO: update auto import usage -->
  <!-- 即時預估淨值 Tab -->
  <MultiMainTab
    :tabs="REAL_TIME_TABS"
    :currentTab="currentRealtimeTab"
    @tab-click="handleRealTimeTabClick"
    class="mb-8"
  />

  <!-- 即時預估淨值 Tab contents -->
  <component :is="tabs[currentRealtimeTab]"></component>


 
</template>
<script setup>

const ROUTE_NAME = inject('ROUTE_NAME')

// 基金淨值
const fakeFunds = [
 {
   id: 0,
   name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
   netWorth: 15.74,
   date: '2022/10/05',
   fromPreviousDay: -0.02,
   fromPreviousDayPercent: -0.13
 },
 {
   id: 1,
   name: '中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣',
   netWorth: 11.64,
   date: '2022/10/05',
   fromPreviousDay: 0.25,
   fromPreviousDayPercent: 2.19
 },
 {
   id: 2,
   name: '中國信託智慧城市建設證券投資信基金-美元',
   netWorth: 19.0,
   date: '2022/10/05',
   fromPreviousDay: -0.05,
   fromPreviousDayPercent: 1.34
 },
 {
   id: 3,
   name: '中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣',
   netWorth: 217.82,
   date: '2022/11/05',
   fromPreviousDay: 0,
   fromPreviousDayPercent: 0
 },
 {
   id: 4,
   name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
   netWorth: 15.74,
   date: '2022/10/05',
   fromPreviousDay: 0.25,
   fromPreviousDayPercent: -0.13
 },
 {
   id: 5,
   name: '中國信託智慧城市建設證券投資信託基金-新台幣',
   netWorth: 11.64,
   date: '2022/10/05',
   fromPreviousDay: -0.05,
   fromPreviousDayPercent: 2.19
 },
 {
   id: 6,
   name: '中國信託智慧城市建設證券投資信基金-美元',
   netWorth: 19.0,
   date: '2022/10/05',
   fromPreviousDay: 0.25,
   fromPreviousDayPercent: 2.19
 },
 {
   id: 7,
   name: '中國信託智慧城市建設證券投資信託基金-新台幣',
   netWorth: 217.82,
   date: '2022/10/05',
   fromPreviousDay: -0.02,
   fromPreviousDayPercent: -0.13
 },
 {
   id: 8,
   name: '中國信託智慧城市建設證券投資信基金-美元',
   netWorth: 19.0,
   date: '2022/10/05',
   fromPreviousDay: 0.25,
   fromPreviousDayPercent: 2.19
 },
 {
   id: 9,
   name: '中國信託智慧城市建設證券投資信託基金-新台幣',
   netWorth: 217.82,
   date: '2022/10/05',
   fromPreviousDay: -0.02,
   fromPreviousDayPercent: -0.13
 }
]


// 即時預估淨值 Tabs
const REAL_TIME_TABS = ref([
 {
   name: 'RankEtf',
   label: '人氣ETF'
 },
 {
   name: 'Increase',
   label: '市價漲幅'
 },
 {
   name: 'Decline',
   label: '市價跌幅'
 }
])
// const tabs = {
//  RankEtf,
//  Increase,
//  Decline
// }
const currentRealtimeTab = ref(REAL_TIME_TABS.value[0].name)
const handleRealTimeTabClick = tab => {
 currentRealtimeTab.value = tab
}


</script>