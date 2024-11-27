<template>
  <GradientBackground :mobile-position="0" :desktop-position="0" />
  <Banner :mobile-image="mobileImageBn" :desktop-image="desktopImageBn">
    <span class="text-shadow">ESG基金</span>
  </Banner>
  <!-- ESG基金 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <p class="mb-10 lg:leading-8">中國信託投信善盡資產管理人之忠實義務，進行投資決策時考慮投資人及客戶的長期最佳收益，從責任投資的角度謹慎檢視、篩選每一個投資標的，因此投資分析決策不僅考量傳統財務面的因子，也涵蓋環境、社會與公司治理等會影響投資組合長期績效的項目，確保投資標的皆落實永續責任，讓投資人在實現投資報酬的同時，也對社會產生正面影響。</p>
    
    <VerticalBarTitle class="mb-4 lg:mb-8" title="中國信託投信發行環境、社會及治理相關主題基金(含ETF)定期揭露資訊" />

    <DownloadFileList :file="fakeData[0]" class="mb-5">
      <p>
        中國信託ESG金融收益多重資產基金
        <span class="font-bold text-red">
          (本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)
        </span>
      </p>
    </DownloadFileList>
    <DownloadFileList :file="fakeData[1]" class="mb-5">
      <p>
        中國信託ESG金融收益多重資產基金
        <span class="font-bold text-red">
          (本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)
        </span>
      </p>
    </DownloadFileList>
    <DownloadFileList :file="fakeData[2]" class="mb-5" />
    <DownloadFileList :file="fakeData[3]" class="mb-5" />
    <DownloadFileList :file="fakeData[4]" class="mb-5" />
  </div>
</template>
<script setup>
import mobileImageBn from '@/assets/images/esg/2-bn-m.png'
import desktopImageBn from '@/assets/images/esg/2-bn-d.jpg'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '永續責任', routeName: ROUTE_NAME.esg.index },
  { name: 'ESG基金', routeName: undefined }
]

// https://www.ctbcinvestments.com.tw/Home/ESG1
const fakeData = ref([
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    link: '#',
    fileName: 'ESG基金定期揭露事項下載'
  },
  {
    name: '中國信託ESG碳商機多重資產基金(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    link: '#',
    fileName: 'ESG基金定期揭露事項下載'
  },
  {
    name: '中國信託臺灣ESG永續關鍵半導體ETF基金(股票代號：00891)',
    link: '#',
    fileName: '00883B 中信ESG投資級債'
  },
  {
    name: '中國信託15年期以上已開發市場ESG投資級美元公司債券ETF基金(股票代號：00883B)',
    link: '#',
    fileName: '00891 中信關鍵半導體'
  },
  {
    name: '中國信託上櫃ESG 30 ETF基金(股票代號：00928)',
    link: '#',
    fileName: '00928 中信上櫃ESG 30 '
  }
])
</script>
