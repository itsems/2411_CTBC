<template>
  <GradientBackground :mobile-position="140" :desktop-position="210" />
  <!-- 表單下載 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="表單下載" :size="27" :imagePath="PageTitleIcon" />
  </div>
  <div class="px-9 max-w-[943px] mx-auto pb-24 lg:pt-10 pt-4">
    <div class="grid md:grid-cols-2 gap-14">
      <DownloadBlock title="ETF現金申購申請書" link="https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=36">
        <img src="@/assets/images/etf/download1.png" alt="" />
      </DownloadBlock>
      <DownloadBlock title="ETF現金買回申請書" link="https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=37">
        <img src="@/assets/images/etf/download2.png" alt="" />
      </DownloadBlock>
      <DownloadBlock link="https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=38">
        <img src="@/assets/images/etf/download3.png" alt="" />
        <template #title>
          <p>ETF現金申購買回</p>
          <p>撤銷申請書</p>
        </template>
      </DownloadBlock>
      <DownloadBlock link="https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=50">
        <img src="@/assets/images/etf/download4.png" alt="" />
        <template #title>
          <p>ETF基金收益分配</p>
          <p>資料異動申請書</p>
        </template>
      </DownloadBlock>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/download.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '表單下載', routeName: undefined }
]
</script>
