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
        <p class="text-grey-999">日期</p>
        <p>2025-02-07</p>
      </div>
    </div>
    
    <!-- Desktop -->
    <div class="mb-10 visible-desktop-block mobile-th-row-table stripped-on-mobile-row desktop-fixed-head">
      <ul>
        <li class="thead">
          <div class="grid grid-cols-[2fr_1fr_1fr_1.5fr_150px] fixed-th">
            <div class="flex justify-start pl-3">ETF名稱</div>
            <div>申購交易費率(%)</div>
            <div>買回交易費率(%)</div>
            <div class="min-w-fit">每基數申購買回手續費(元)</div>
            <div>日期</div>
          </div>
        </li>
        <div v-for="fund in fakeData" :key="fund.code" class="data-row !grid-cols-[170px_1fr] lg:!grid-cols-[2fr_1fr_1fr_1.5fr_150px]">
          <div class=" th">ETF名稱</div>
          <div class="td lg:!pl-4">
            <EtfName :fund="fund" />
          </div>
          <div class="th">申購交易費率(%)</div>
          <div class="flex-center td">{{ fund.applyBuyRate }}</div>
          <div class="th">買回交易費率(%)</div>
          <div class="flex-center td">{{ fund.buyBackRate }}</div>
          <div class="th">每基數申購買回手續費(元)</div>
          <div class="flex-center td">{{ fund.fee }}</div>
          <div class="th">日期</div>
          <div class="flex-center td">2025-02-07</div>
        </div>
      </ul>
    </div>
    <p class="mt-10 mb-2">註：</p>
    <div>
      <ul class="mb-2 ml-5 text-sm list-decimal">
        <li>上述申購/買回手續費，係包含集保事務處理費及券商事務處理費等。</li>
        <li>各基金上市(櫃)日(含當日)後之申購/買回的交易費，會依信託契約或公開說明書的規定而有所變動。申購人/受益人如未依公開說明書規定繳足應付之實際申購總價金，將導致交易失敗者，經理公司得向申請人/受益人收取行政處理費。</li>
        <li>債券ETF若採實際交易費率收取，投資人申贖當日之交易費率可能因證券市場現況(如:債券市場流動性及交易對手報價等)、投資組合交易部位(如:最佳化管理、現金管理、淨申贖之變動等)而與參考費率有差異，經理公司得依需要調整之。</li>
      </ul>
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
