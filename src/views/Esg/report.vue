<template>
  <Banner title="永續報告" :mobile-image="mobileImageBn" :desktop-image="desktopImageBn" />
  <GradientBackground :mobile-position="543" :desktop-position="605" />
  <div>
    <!-- 永續報告 -->
    <div class="page-layout">
      <Breadcrumb :list="breadCrumbList" />
      <p class="mb-10 lg:leading-8">中國信託投信積極推動永續發展，尊重投資人及利害關係人之權益，在追求永續經營與獲利的同時，亦重視環境、社會與公司治理之因素，並將其納入公司管理方針與營運活動。同時，本公司致力推行環境與能源管理，實踐能源有效利用，減少溫室氣體排放，落實環境保護，並依據相關法令規定，編制「永續報告書」、「氣候變遷資訊」及「ESG投資作業程序及管理措施」等文件。</p>
      
      <div class="grid gap-3 pt-5 mb-10 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
        <div class="mb-2" v-for="kind in allFiles" :key="kind.label">
          <GradientBar :title="kind.label" class="mb-4 lg:mb-5" />
          <File
            iconPosition="right"
            v-for="file in kind.files"
            :key="file.name"
            :file="file"
            class="mb-3 lg:mb-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import mobileImageBn from '@/assets/images/esg/4-bn-m.png'
import desktopImageBn from '@/assets/images/esg/4-bn-d.jpg'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '永續責任', routeName: ROUTE_NAME.esg.index },
  { name: '永續報告', routeName: undefined }
]

const allFiles = reactive({
  declaration: {
    label: '永續報告書',
    files: [
      {
        name: '2024年度永續報告書',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
      {
        name: '2023年度永續報告書',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
      {
        name: '2022年度永續報告書',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
    ]
  },
  report: {
    label: '氣候變遷資訊',
    files: [
      {
        name: '2024年度氣候變遷資訊',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
      {
        name: '2023年度氣候變遷資訊',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
      {
        name: '2022年度氣候變遷資訊',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
    ]
  },
  votePolicy: {
    label: 'ESG投資管理',
    files: [
    {
        name: '2024年度ESG投資作業程序及管理措施',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
      {
        name: '2023年度ESG投資作業程序及管理措施',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
      {
        name: '2022年度ESG投資作業程序及管理措施',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      },
    ]
  },
})

// const fakeData = ref([
//   {
//     name: 'declaration',
//     files: [
//       {
//         name: '2024年度永續報告書',
//         link: ''
//       },
//       {
//         name: '2023年度永續報告書',
//         link: ''
//       },
//       {
//         name: '2022年度永續報告書',
//         link: ''
//       }
//     ]
//   },
//   {
//     name: 'report',
//     files: [
//       {
//         name: '2024年度氣候變遷資訊',
//         link: ''
//       },
//       {
//         name: '2023年度氣候變遷資訊',
//         link: ''
//       },
//       {
//         name: '2022年度氣候變遷資訊',
//         link: ''
//       }
//     ]
//   },
//   {
//     name: 'votePolicy',
//     files: [
//       {
//         name: '2024年ESG投資作業程序及管理措施',
//         link: ''
//       },
//       {
//         name: '2023年ESG投資作業程序及管理措施',
//         link: ''
//       },
//       {
//         name: '2022年ESG投資作業程序及管理措施',
//         link: ''
//       }
//     ]
//   }
// ])
</script>
