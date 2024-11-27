<template>
  <div class="pt-0 page-layout">
    <!-- 公司治理 -->
    <p class="mb-10">
      中信投信致力於建立公司治理相關架構、落實內部管理、保障股東權益、強化董事會職能、發揮監察人功能、保障保戶權益及尊重利害關係人權益、維持清償能力、提昇資訊透明度，並隨時觀察、考量外在局勢及環境變革對本公司整體營運影響，即時提出因應策略面對挑戰。此外，善盡專業投資機構之責，中國信託投信於2016年率先響應政府推動之「機構投資人盡職治理守則」，成為簽署遵循聲明並揭露遵循內容之投信業領導者。
    </p>
  
    <div class="mb-10 lg:grid lg:grid-cols-2 lg:gap-10">
      <!-- 公司治理及檢舉制度 -->
      <div>
        <p class="mb-5 overflow-hidden text-xl font-medium title text-main">公司治理及檢舉制度</p>
        <File
          v-for="file in fakeData"
          :key="file.name"
          :file="file"
          class="mb-4" />
      </div>
      <!-- 防制洗錢及打擊資恐 -->
      <div>
        <p class="mb-5 overflow-hidden text-xl font-medium title text-main">防制洗錢及打擊資恐</p>
        <File
          v-for="file in fakeData2"
          :key="file.name"
          :file="file"
          class="mb-4" />
      </div>
    </div>
  </div>
</template>

<script setup>

const fakeData = ref([
  {
    name: '公司治理與董事會架構',
    link: 'https://www.ctbcinvestments.com.tw/fund/corporategovernance/%e5%85%ac%e5%8f%b8%e6%b2%bb%e7%90%86%e8%88%87%e8%91%a3%e4%ba%8b%e6%9c%83%e6%9e%b6%e6%a7%8b.pdf'
  },
  {
    name: '董事會及經理人職責',
    link: 'https://www.ctbcinvestments.com.tw/fund/corporategovernance/%E8%91%A3%E4%BA%8B%E6%9C%83%E5%8F%8A%E7%B6%93%E7%90%86%E4%BA%BA%E8%81%B7%E8%B2%AC.pdf'
  },
  {
    name: '董事會議事規範',
    link: 'https://www.ctbcinvestments.com.tw/fund/corporategovernance/%E8%91%A3%E4%BA%8B%E6%9C%83%E8%AD%B0%E4%BA%8B%E8%A6%8F%E7%AF%84.pdf'
  },
  {
    name: '誠信經營守則',
    link: 'https://www.ctbcinvestments.com.tw/fund/corporategovernance/%E8%AA%A0%E4%BF%A1%E7%B6%93%E7%87%9F%E5%AE%88%E5%89%87.pdf'
  },
  {
    name: '道德行為準則',
    link: 'https://www.ctbcinvestments.com.tw/fund/corporategovernance/%E9%81%93%E5%BE%B7%E8%A1%8C%E7%82%BA%E6%BA%96%E5%89%87.pdf'
  },
  {
    name: '受理檢舉管道',
    link: 'https://www.ctbcinvestments.com/act/ESG/%E5%8F%97%E7%90%86%E6%AA%A2%E8%88%89%E7%AE%A1%E9%81%93.PDF'
  }
])
const fakeData2 = ref([
  {
    date: '2022/12/07',
    name: '防制洗錢宣導(2022.11.23)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsLaunderingOnlineT2?LaunderingNo=10'
  },
  {
    date: '2019/07/30',
    name: '中國信託證券投資信託(股)有限公司防制洗錢及打擊資恐作業問答集',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsLaunderingOnlineT2?LaunderingNo=8'
  },
  {
    date: '2019/01/15',
    name: '「企業誠信治理暨反貪腐、反洗錢」短片宣導(2019.01.15)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsLaunderingOnlineT2?LaunderingNo=7'
  },
  {
    date: '2018/10/23',
    name: '防制洗錢宣導(2018.10.23)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsLaunderingOnlineT2?LaunderingNo=6'
  },
  {
    date: '2018/10/17',
    name: '防制洗錢宣導(2018.10.17)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsLaunderingOnlineT2?LaunderingNo=5'
  },
  {
    date: '2018/10/09',
    name: '防制洗錢宣導(2018.10.09)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsLaunderingOnlineT2?LaunderingNo=4'
  }
])
</script>

<style lang="scss" scoped>
.title {
  &:after {
    width: 100%;
    height: 1px;
    content: '';
    display: inline-block;
    background-color: $mainGreen;
    position: relative;
    vertical-align: middle;
    left: 20px;
    margin-right: -100%;
  }
}
</style>
