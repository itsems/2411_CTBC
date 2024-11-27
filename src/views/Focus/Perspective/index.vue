<template>
  <!-- 基金透視 列表-->
  <GradientBackground :mobile-position="260" :desktop-position="300" />

  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="基金透視" :imagePath="PageTitleIcon" />
    <div class="lg:flex lg:gap-6">
      <!-- Contents -->
      <div class="mb-8">
        <DownloadCard 
          class="mb-5"
          v-for="post in fakeData"
          :key="post.id"
          :post="post"
        />
        <!-- Pagination -->
        <Pagination
          class="mt-10"
          :totalItems="65"
          @prev="navigate"
          @next="navigate"
          @page="handlePageClick"
        />
      </div>
      <!-- Ads -->
      <div class="lg:w-[255px] shrink-0">
        <SubscribeBlock class="mb-5" />
        <div class="hidden gap-6 lg:block lg:grid-cols-1">
          <img class="cursor-pointer" src="@/assets/images/ad1.png" alt="" />
          <img class="cursor-pointer" src="@/assets/images/ad2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitleIcon from '@/assets/images/icon/scope-money.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '投資觀點', routeName: undefined },
  { name: '基金透視', routeName: undefined }
]

// https://www.ctbcinvestments.com.tw/Home/FundPerpective
const fakeData = ref([
  {
    id: 0,
    date: '2023/12/02',
    title: '中國信託電池及儲能科技ETF基金中國信託電池及儲能科技ETF基金中國信託電池及儲能科技ETF基金中國信託電池及儲能科技ETF基金',
    content:
      '本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 1,
    date: '2023/12/02',
    title: '中國信託臺灣優選成長高股息ETF基金',
    content: '龍頭大廠法說釋出訊息，消費性電子庫存去化近乎完成',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 2,
    date: '2023/12/02',
    title: '中國信託臺灣優選成長高股息ETF基金',
    content: '20231201_00902市場評論',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 3,
    date: '2023/12/02',
    title: '中國信託成長轉機多重資產證券投資信託基金',
    content: '20231110_00902市場評論',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 4,
    date: '2023/12/02',
    title: '中國信託電池及儲能科技ETF基金',
    content: '基金透視升息邁入尾聲，精準投資第四季經濟脈動',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 5,
    date: '2023/12/02',
    title: '中國信託電池及儲能科技ETF基金',
    content: '基金透視市場紛擾下，投資有更簡單的方式',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 6,
    date: '2023/12/02',
    title: '中國信託臺灣優選成長高股息ETF基金',
    content: '20231201_00902市場評論',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 7,
    date: '2023/12/02',
    title: '中國信託成長轉機多重資產證券投資信託基金',
    content: '20231110_00902市場評論',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 8,
    date: '2023/12/02',
    title: '中國信託電池及儲能科技ETF基金',
    content: '基金透視升息邁入尾聲，精準投資第四季經濟脈動',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
  {
    id: 9,
    date: '2023/12/02',
    title: '中國信託電池及儲能科技ETF基金',
    content: '基金透視市場紛擾下，投資有更簡單的方式',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsArtOnlineT2?ArtNo=1790'
  },
])

// Pagination
const navigate = () => {}
const handlePageClick = number => {
  console.log(number)
}
</script>
<style scoped>
@import '@/assets/scss/pages/focus.scss';
</style>
