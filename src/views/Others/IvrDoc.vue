<template>
  <GradientBackground />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="語音查詢功能" :imagePath="PageTitleIcon" />
    <div class="py-8 mb-14 lg:px-14 content-card">
      <img src="@/assets/images/IVR.png" alt="語音查詢功能" />
    </div>

    <p class="mb-8 text-3xl text-main">ETF基金代碼</p>
    <div class="mb-10 normal-table-wrap fixed-head">
      <table class="table normal-table">
        <thead>
          <tr>
            <th class="th w-[10%]">語音代碼</th>
            <th class="th w-[10%]">股票代碼</th>
            <th class="th w-[30%]">ETF基金名稱</th>
            <th class="th w-[10%]">語音代碼</th>
            <th class="th w-[10%]">股票代碼</th>
            <th class="th w-[30%]">ETF基金名稱</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="fund in fakeData1" :key="fund.id">
            <td>{{ fund.voice1 }}</td>
            <td>
              {{ fund.code1 }}
            </td>
            <td>
              {{ fund.name1 }}
            </td>
            <td>
              {{ fund.voice2 }}
            </td>
            <td>
              {{ fund.code2 }}
            </td>
            <td>
              {{ fund.name2 }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="mb-8 text-3xl text-main">境內基金淨值代碼</p>
    <div class="normal-table-wrap fixed-head">
      <table class="table normal-table">
        <thead>
          <tr>
            <th class="th w-[10%]">基金語音代碼</th>
            <th class="th w-[30%]">基金名稱</th>
            <th class="th w-[10%]">基金語音代碼</th>
            <th class="th w-[30%]">ETF基金名稱</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="fund in fakeData2" :key="fund.id">
            <td>{{ fund.voice1 }}</td>
            <td>
              {{ fund.name1 }}
            </td>
            <td>
              {{ fund.voice2 }}
            </td>
            <td>
              {{ fund.name2 }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/icon-ivr.png'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '語音查詢功能', routeName: undefined }
]


const fakeData1 = []
for (let i = 1; i <= 10; i++) {
  fakeData1.push({
    id: i,
    voice1: '00772',
    code1: '00772B',
    name1: '中信高評級公司債',
    voice2: '00884',
    code2: '00884B',
    name2: '中信低碳新興債',
  })
}
const fakeData2 = []
for (let i = 1; i <= 16; i++) {
  fakeData2.push({
    id: i,
    voice1: '0012',
    name1: '中國信託華盈貨幣市場證券投資信託基金',
    voice2: '0098',
    name2: '中國信託科技趨勢多重資產證券投資信託基金-美元NB',
  })
}
</script>
<style lang="scss" scoped>
.table  {
  th, td {
    padding: 8px 4px;
    font-size: 10px;
    @media (min-width: 768px) {
     padding: 1rem;
     font-size: 15px;
    }
  }
}
</style>