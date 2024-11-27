<template>
  <GradientBackground :mobile-position="125" :desktop-position="205" />    
  <!-- 公告內頁 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />

    <TabWithBar isActive class="mb-8">
      <template #text>
        <img src="@/assets/images/icon/bulletin-s.png" class="w-5 mr-3 lg:w-8" alt="一般公告" />
        <p>一般公告</p>
      </template>
    </TabWithBar>

    <!-- Date -->
    <p class="text-[13px] text-main mb-3 lg:mb-6 font-medium">公告日期：2022/10/02</p>

    <!-- Content -->
    <div class="mb-5 text-xl font-bold lg:text-2xl text-darkGreen">
      <p>
        接獲國泰投信通知，其經理之 &lt;00743&gt;
        國泰新中國傘型證券投資信託基金之富時中國A150ETF證券投資
      </p>
      <p>信託基金」(標的代碼：00119752)業經金管會金管證投字第1110352401號函核准終止信託契約。</p>
    </div>
    <div class="pt-5 content text-md lg:text-base">
      <p>
        美股因聯準會(Fed放鷹及經濟展望欠佳連跌數周·上周出現技術性反彈·拉抬新興股回穩·其中泰國印度上周別上漲2%與1.7%·越股下跌2.5·觀上周資金流入最多的前三新興亞股為印度印尼及菲律賓·金額分別為
        6.2億美元、3 億美元及2千萬美元·台股連6周淨流出、越南也3周流出。
      </p>
      <br />
      <p>
        台股加權指數上周收在1458.4點周幅0.6中信智慧50E00912經理人張圭慧表示美股上週技術性彈、但仍有通膨、升息等不確定性主導依據芝易所CE)數據.預美國聯準會月升息幅度以3碼為主.股市基本面表現、仍利率政策與經濟前景為驅動引擎。月台目前電子類股修正.半導體與航運類價格調整.在上週蘋果舉辦秋季發表會後.預購熱潮湧入.針對受惠蘋果新品光環的半導體、光學類.以及政策支持性產業.如能、電動車類仍待。
      </p>
      <br />
      <p>
        越指上周處於震盪格局,中國信託越南機會基金經理人張晨瑋指出·越南在上半年疫情穩定後復甦趨勢仍不變.國際貨幣基金組織(IMF近期報告將越南今年經濟長率從6%上調至7%仍為亞洲唯一大幅上的經濟體另依據越南計劃投資部(MPI統計總局月公饰經濟數據顯示今年月份越南商品零售額和消費服務收額比上月增長0.6%,比去年同期增長50.2%增長規模和速度高於疫情前歷年同期另8月份業生產指數比增長15.6%年初至今·越南新註冊與恢復營業之企業約15萬家.年增31.1%。
      </p>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-center gap-6 my-20">
      <span class="cursor-pointer select-none hover:text-main hover:underline hover:underline-offset-4 text-grey-999">&lt; 上一篇</span>
      <RouterLink
        class="round-button"
        :to="{ name: ROUTE_NAME.news.list.name }"
        v-slot="{ navigate }"
      >
        <button @click="navigate" role="link">回列表頁</button>
      </RouterLink>
      <span class="cursor-pointer select-none hover:text-main hover:underline hover:underline-offset-4 text-grey-999">下一篇 &gt;</span>
    </div>
  </div>
</template>

<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '最新公告', routeName: ROUTE_NAME.news.list.name }
]
</script>
