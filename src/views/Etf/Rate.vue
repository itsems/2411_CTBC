<template>
  <GradientBackground :mobile-position="145" :desktop-position="210" />
  <!-- 交易費率 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="交易費率" :size="32" :imagePath="PageTitleIcon" />

    <!-- Mobile -->
    <div class="px-0 mb-6 content-card lg:hidden" v-for="fund in fakeData" :key="fund.code">
      <p class="px-6 mb-4">
        <EtfName :fund="fund" />
      </p>
      <Hr />
      <div class="flex justify-between px-6 py-2">
        <p class="text-grey-999">申購交易費率(%)</p>
        <p>{{ fund.applyBuyRate }}</p>
      </div>
      <Hr />
      <div class="flex justify-between px-6 py-2">
        <p class="text-grey-999">買回交易費率(%)</p>
        <p>{{ fund.buyBackRate }}</p>
      </div>
      <Hr />
      <div class="flex justify-between px-6 py-2">
        <p class="text-grey-999">每基數申購買回手續費(元)</p>
        <p>{{ fund.fee }}</p>
      </div>
      <Hr />
      <div class="flex justify-between px-6 py-2">
        <p class="text-grey-999">預收申購金額(%)</p>
        <p>{{ fund.buyBackPrice }}</p>
      </div>
      <Hr />
      <div class="flex justify-between px-6 pt-2">
        <p class="text-grey-999">申購買回截止時間</p>
        <p>{{ fund.time }}</p>
      </div>
    </div>
    
    <!-- Desktop -->
    <div class="mobile-th-row-table text-md visible-desktop-block stripped-on-mobile-row">
      <ul class="desktop-th lg:grid-cols-[2fr_1fr_1fr_1.5fr_1fr_1fr]">
        <li class="!pl-4 text-left">ETF名稱</li>
        <li>申購交易費率(%)</li>
        <li>買回交易費率(%)</li>
        <li class="min-w-fit">每基數申購買回手續費(元)</li>
        <li>預收申購金額(%)</li>
        <li>申購買回截止時間</li>
      </ul>
      <div v-for="fund in fakeData" :key="fund.code" class="data-row !grid-cols-[170px_1fr] lg:!grid-cols-[2fr_1fr_1fr_1.5fr_1fr_1fr]">
        <div class="th">ETF名稱</div>
        <div class="td lg:!pl-4">
          <EtfName :fund="fund" />
        </div>
        <div class="th">申購交易費率(%)</div>
        <div class="flex-center td">{{ fund.applyBuyRate }}</div>
        <div class="th">買回交易費率(%)</div>
        <div class="flex-center td">{{ fund.buyBackRate }}</div>
        <div class="th">每基數申購買回手續費(元)</div>
        <div class="flex-center td">{{ fund.fee }}</div>
        <div class="th">預收申購金額(%)</div>
        <div class="flex-center td">{{ fund.buyBackPrice }}</div>
        <div class="th">申購買回截止時間</div>
        <div class="flex-center td">{{ fund.time }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/hands-with-money.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '交易費率', routeName: undefined },
]


// 股票
const fakeData = ref([
  {
    code: '00882',
    name: '中信中國高股息',
    applyBuyRate: '0.3',
    buyBackRate: '0.3',
    buyBackPrice: '120',
    fee: '5,000',
    warning: '基金之配息來源可能為收益平準金',
    time: '12:00'
  },
  {
    code: '00882',
    name: '中信中國高股息',
    applyBuyRate: '0.3',
    buyBackRate: '0.3',
    buyBackPrice: '120',
    fee: '5,000',
    warning: '基金之配息來源可能為收益平準金',
    time: '12:00'
  },
  {
    code: '00882',
    name: '中信中國高股息',
    applyBuyRate: '0.3',
    buyBackRate: '0.3',
    buyBackPrice: '120',
    fee: '5,000',
    warning: '基金之配息來源可能為收益平準金',
    time: '12:00'
  },
  {
    code: '00882',
    name: '中信中國高股息',
    applyBuyRate: '0.3',
    buyBackRate: '0.3',
    buyBackPrice: '120',
    fee: '5,000',
    warning: '基金之配息來源可能為收益平準金',
    time: '12:00'
  },
  {
    code: '00882',
    name: '中信中國高股息',
    applyBuyRate: '0.3',
    buyBackRate: '0.3',
    buyBackPrice: '120',
    fee: '5,000',
    warning: '基金之配息來源可能為收益平準金',
    time: '12:00'
  },
])
</script>
