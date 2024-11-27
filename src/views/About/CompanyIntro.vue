<template>
  <GradientBackground />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="公司簡介" :imagePath="PageTitleIcon" />

    <div class="items-center lg:grid lg:mb-[90px] lg:gap-10 lg:grid-cols-2 lg:justify-between">
      <img
        class="shadow-2xl lg:mb-0 mb-6 rounded-[34px]"
        src="@/assets/images/about/about.png"
        alt="公司簡介"
      />
      <div>
        <h3 class="mb-5 text-2xl font-bold title text-darkGreen">認識中國信託投信</h3>
        <p class="mb-5 leading-7 lg:mb-10">
          中國信託投信秉持「誠信經營、客戶至上」的理念，持續開發多元創新的基金產品及服務，整合豐富集團資源，並透過與境外策略聯盟夥伴密切合作，打造優秀的專業投資團隊，提供全方位的投資管理服務，深受投資人信賴。
        </p>
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 lg:gap-5 lg:mb-16">
      <div
        class="border-solid lg:py-0 py-7 border-b border-[#999] lg:border-r lg:border-b-0 lg:pr-9"
      >
        <div class="flex items-center mb-5">
          <img
            class="w-20 mr-7"
            src="@/assets/images/about/companyIntro1.png"
            alt="貫徹中國信託 核心價值"
          />
          <div>
            <p class="text-2xl font-bold text-main">貫徹中國信託</p>
            <p class="text-2xl font-bold text-main">核心價值</p>
          </div>
        </div>
        <p class="leading-7">
          中國信託投信秉持「誠信經營、客戶至上」的理念，持續開發多元創新的基金產品及服務，整合豐富集團資源，並透過與境外策略聯盟夥伴密切合作，打造優秀的專業投資團隊，提供全方位的投資管理服務，深受投資人信賴。
        </p>
      </div>
      <div
        class="border-solid lg:py-0 py-7 border-b border-[#999] lg:px-9 lg:border-b-0 lg:border-r"
      >
        <div class="flex items-center mb-5">
          <img
            class="w-20 mr-7"
            src="@/assets/images/about/companyIntro2.png"
            alt="卓越團隊 全方位投資專家"
          />
          <div>
            <p class="text-2xl font-bold text-main">卓越團隊</p>
            <p class="text-2xl font-bold text-main">全方位投資專家</p>
          </div>
        </div>
        <p class="leading-7">
          中國信託投信擁有傲人的投研團隊，涵蓋多項核心資產管理業務，囊括共同基金、ETF、全權委託、私募等；同時積極推廣多元服務，如投資講座、線上直播，滿足投資人各類理財需求。卓越能力屢獲國內外大獎肯定！
        </p>
      </div>
      <div class="py-7 lg:py-0 lg:px-9">
        <div class="flex items-center mb-5">
          <img
            class="w-20 mr-7"
            src="@/assets/images/about/companyIntro3.png"
            alt="永續經營 創造三贏"
          />
          <div>
            <p class="text-2xl font-bold text-main">永續經營</p>
            <p class="text-2xl font-bold text-main">創造三贏</p>
          </div>
        </div>
        <p class="leading-7">
          中國信託投信積極推動ESG投資，不僅關注全球ESG發展趨勢，更將ESG標準落實在投資管理流程中，持續研發綠色金融商品，讓投資人輕鬆實現永續發展投資，積極促成環境、公司、投資人三贏的目標。
        </p>
      </div>
    </div>
    <h3 class="mb-5 text-2xl font-bold title text-darkGreen">組織架構</h3>
    <img
      class="block lg:hidden mb-9"
      src="@/assets/images/about/companyIntroStructure-m.png"
      alt="組織架構"
    />
    <img
      class="hidden mx-auto lg:block lg:mb-20"
      src="@/assets/images/about/companyIntroStructure-d.png"
      alt="組織架構"
    />
    <h3 class="mb-5 text-2xl font-bold title text-darkGreen">經營團隊</h3>
    <!-- Table -->
    <div class="mb-10 mobile-th-row-table text-md stripped-on-mobile-row">
      <ul class="desktop-th">
        <li class="lg:text-left lg:!pl-16">姓名</li>
        <li class="lg:text-left lg:!pl-16">職稱</li>
        <li class="lg:text-left lg:!pl-16">主要學歷</li>
      </ul>
      <div v-for="person in teamData" :key="person.name" class="data-row">
        <div class="th">姓名</div>
        <div class="td lg:text-left lg:!pl-16">{{ person.name }}</div>
        <div class="th">職稱</div>
        <div class="td lg:text-left lg:!pl-16">{{ person.title }}</div>
        <div class="th">主要學歷</div>
        <div class="td lg:text-left lg:!pl-16">{{ person.education }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/write.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '關於我們', routeName: undefined },
  { name: '公司簡介', routeName: undefined }
]
const teamData = [
  {
    name: '陳金榮',
    title: '董事長',
    education: '中國文化大學經濟系'
  },
  {
    name: '陳正華',
    title: '總經理',
    education: '政治大學國際金融所碩士'
  },
  {
    name: '姚玉娟',
    title: '營運管理部主管',
    education: '中國市政工商專科財稅金融系'
  },
  {
    name: '賴仁輝',
    title: '法務暨法遵部主管',
    education: '東吳大學法律所碩士'
  },
  {
    name: '楊定國',
    title: '投資長/投資一部主管(兼任)',
    education: '交通大學資訊管理所碩士'
  },
  {
    name: '蘇詠智',
    title: '投資二部主管',
    education: '台灣大學財務金融所碩士'
  },
  {
    name: '黃伊芃',
    title: '企劃部主管',
    education: '美國紐約 Pace U. 行銷管理碩士'
  },
  {
    name: '張菁芬',
    title: '稽核主管',
    education: '密西根大學應用經濟系碩士'
  },
  {
    name: '詹美琴',
    title: '台中分公司主管',
    education: '中山大學高階經營管理碩士'
  }
]

</script>
