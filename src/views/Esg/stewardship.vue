<template>
  <Banner title="盡職治理揭露" :mobile-image="mobileImageBn" :desktop-image="desktopImageBn" />
  <GradientBackground :mobile-position="450" :desktop-position="560" />
  <div>
    <!-- 盡職治理揭露 -->
    <div class="page-layout">
      <Breadcrumb :list="breadCrumbList" />
      <p class="mb-6 lg:leading-8">中國信託投信秉持責任投資的核心原則，將被投資公司之ESG風險與績效整合於投資流程與決策中，並與被投資公司進行建設性之溝通及互動，除改善公司治理品質外，亦能促進被投資公司之永續發展，促進產業、經濟及社會淨零轉型，推動整體向上發展。</p>
      
      <div class="grid gap-5 pt-5 mb-10 md:grid-cols-3 lg:grid-cols-5">
        <div v-for="kind in allFiles" :key="kind.label">
          <GradientBar :title="kind.label" class="mb-4" />
          <File
            iconPosition="right"
            v-for="file in kind.files"
            :key="file.name"
            :file="file"
            class="mb-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import mobileImageBn from '@/assets/images/esg/3-bn-m.png'
import desktopImageBn from '@/assets/images/esg/3-bn-d.jpg'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '永續責任', routeName: ROUTE_NAME.esg.index },
  { name: '盡職治理揭露', routeName: undefined }
]

const allFiles = reactive({
  declaration: {
    label: '遵循聲明',
    files: [
      {
        name: '機構投資人盡職治理守則遵循聲明',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=10'
      }
    ]
  },
  report: {
    label: '盡職治理報告',
    files: [
      {
        name: '2022年度機構投資人盡職治理報告',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=28'
      },
      {
        name: '2021年度機構投資人盡職治理報告',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=14'
      },
      {
        name: '2020年度機構投資人盡職治理報告',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=12'
      },
      {
        name: '2019年度機構投資人盡職治理報告',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=8'
      }
    ]
  },
  votePolicy: {
    label: '投票政策',
    files: [
      {
        name: '投票政策',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=23'
      }
    ]
  },
  vote: {
    label: '投票情形',
    files: [
      {
        name: '2022年度股東會投票紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=25'
      },
      {
        name: '2021年度股東會投票紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=19'
      },
      {
        name: '2020年度股東會投票紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=17'
      },
      {
        name: '2019年度股東會投票紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=15'
      }
    ]
  },
  meeting: {
    label: '議合紀錄',
    files: [
      {
        name: '2022年度議合紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=27'
      },
      {
        name: '2021年度議合紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=20'
      },
      {
        name: '2020年度議合紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=18'
      },
      {
        name: '2019年度議合紀錄',
        link: 'https://www.ctbcinvestments.com.tw/Home/GetPsInvestorsOnlineT2?InvestorsNo=16'
      }
    ]
  }
})
</script>
