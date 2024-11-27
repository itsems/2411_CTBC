<template>
  <!-- ETF最新配息公告 -->
  <GradientBackground :mobile-position="365" :desktop-position="410" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" class="hidden lg:flex" />
    <PageTitle :hasIcon="false" title="ETF最新配息公告" :imagePath="PageTitleIcon" />
      
    <div class="mb-8 leading-8 lg:mb-14">
      <p class="font-medium text-main">第一階段公告時間</p>
      <p>債券型及台股型ETF基金：評價日次一個營業日公告</p>
      <p class="lg:mb-2">海外股票型ETF：評價日次二個營業日公告</p>
      <p class="font-medium text-main">第二階段公告時間</p>
      <p>全系列ETF：除息交易日前二個營業日公告</p>
    </div>

    <!-- ETF -->
    <section>
      <!-- mobile table -->
      <div class="mb-10 lg:hidden mobile-th-row-table text-md">
        <div
          v-for="fund in fakeData"
          :key="fund.id"
          class="data-row"
        >
          <div class="th">證券代碼</div>
          <div class="td">{{ fund.code }}</div>
          <div class="th">證券簡稱</div>
          <div class="td">
            <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: fund.id } }" >
              <div class="hover:underline">
                <EtfName :fund="fund" :showFundCode="false" />
              </div>
            </RouterLink>
          </div>
          <div class="th">ETF類型</div>
          <div class="td">{{ fund.tag }}</div>
          <div class="th">配息頻率</div>
          <div class="td">{{ fund.frequency }}</div>
          <div class="th">最新公告</div>
          <div class="td">
            <RoundButton class="!px-3 !rounded-md">
              <a href="#">
                <img class="w-[18px]" src="@/assets/images/icon/download-w.png" alt="" />
              </a>
            </RoundButton>
          </div>
        </div>
      </div>
      
      <!-- desktop table -->
      <div class="mb-16 overflow-auto shadow-xl visible-desktop-block fix-head-table-wrap rounded-xl">
        <table class="normal-table fix-head-table">
          <thead>
            <tr>
              <th width="10%"><p class="pl-5 text-left">證券代碼</p></th>
              <th width="55%" class="text-left">證券簡稱</th>
              <th width="15%">ETF類型</th>
              <th width="10%">配息頻率</th>
              <th width="10%">最新公告</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fund in fakeData" :key="fund.id">
              <td>
                <p class="pl-5">{{ fund.code }}</p>
              </td>
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
                  {{ fund.frequency }}
                </p>
              </td>
              <td>
                <RoundButton class="!px-3 mx-auto !rounded-md">
                  <a href="#">
                    <img class="w-[18px]" src="@/assets/images/icon/download-w.png" alt="" />
                  </a>
                </RoundButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>

  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/scope.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '配息專區', routeName: undefined },
  { name: 'ETF最新配息公告', routeName: undefined },
]

const fakeData = [
 {
   id: 0,
   code: '00XXX',
   name: '中信XXXXXX',
   tag: 'XXETF',
   warning: '警語',
   frequency: 'X配',
 },
 {
   id: 1,
   code: '00882',
   name: '中信中國高股息',
   tag: '海外ETF',
   warning: '基金之配息來源可能為收益平準金',
   frequency: '半年配',
 },
 {
   id: 2,
   code: '00795B',
   name: '中信美國公債20年',
   tag: '債券ETF',
   warning: '基金之配息來源可能為收益平準金',
   frequency: '季配',
 },
 {
   id: 3,
   code: '00934',
   name: '中信成長高股息',
   tag: '國內ETF',
   warning: '基金之配息來源可能為收益平準金',
   frequency: '月配',
 }
]

</script>
