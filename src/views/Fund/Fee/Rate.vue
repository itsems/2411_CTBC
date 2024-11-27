<template>
  <!-- 手續費率表 -->
  <div>
    <p class="my-5 text-2xl font-bold text-darkGreen">手續費率表</p>
    <div class="content-card">
      <div class="lg:flex lg:gap-8 lg:mb-3">
        <select class="w-full mb-3 lg:mb-0 grey-selects">
          <option selected value="-1">依交易方式查詢</option>
          <option value="00000">書面/傳真交易</option>
          <option value="00001">電子交易</option>
        </select>
        <select class="w-full mb-3 lg:mb-0 grey-selects">
          <option selected value="-1">依基金類型查詢</option>
          <option value="00000">股票型</option>
          <option value="00001">債券型</option>
          <option value="00002">平衡型</option>
          <option value="00003">ETF</option>
          <option value="00004">貨幣市場型</option>
          <option value="00005">不動產證券型</option>
          <option value="00006">多重資產型</option>
        </select>
      </div>
      <p class="text-sm">申購本公司發行之基金，請參考以下申購手續費率表</p>
      <p class="text-sm">若您是本公司電子交易戶，可透過線上交易平台 <a class="hover:text-main" href="https://etrade.ctbcinvestments.com.tw/CTBC.EC/" target="_blank">https://etrade.ctbcinvestments.com.tw/CTBC.EC/</a> 申購，手續費較優惠喔!</p>
    </div>
    
    <!-- Table -->
    <div class="my-10 mobile-th-row-table text-md stripped-on-mobile-row">
      <ul class="desktop-th lg:grid-cols-[15%_13%_auto_12%_15%]">
        <li>交易方式</li>
        <li>基金類型</li>
        <li class="lg:text-left">基金名稱</li>
        <li>單筆申購手續費</li>
        <li>定期定額申購手續費</li>
      </ul>
      
      <div
        v-for="( fund, idx ) in fakeData"
        :key="idx"
        class="data-row lg:grid-cols-[15%_13%_auto_12%_15%]"
      >
        <div class="th">交易方式</div>
        <div class="td"><p class="lg:pl-5">{{ fund.method }}</p></div>
        <div class="th">基金類型</div>
        <div class="td"><p class="lg:pl-5">{{ fund.type }}</p></div>
        <div class="th">基金名稱</div>
        <div class="td">{{ fund.name }}</div>
        <div class="th">單筆<br class="lg-hidden">申購手續費</div>
        <div class="td">{{ fund.lumpSum }}</div>
        <div class="th">定期定額<br class="lg-hidden">申購手續費</div>
        <div class="td">{{ fund.dollarCostAveraging || 'NA' }}</div>
        
      </div>
    </div>

    
  </div>
</template>
<script setup>
const fakeData = ref([
  {
    method: '書面/傳真交易',
    type: '海外ETF',
    name: '中國信託恒生中國高股息ETF基金(股票代號：00882)',
    lumpSum: '1%',
    dollarCostAveraging: undefined,
  },
  {
    method: '書面/傳真交易',
    type: '債券型ETF',
    name: '中國信託15年期以上已開發市場ESG投資級美元公司債券ETF基金(股票代號：00883B)',
    lumpSum: '1%',
    dollarCostAveraging: undefined,
  },
  {
    method: '書面/傳真交易',
    type: '債券型ETF',
    name: '中國信託15年期以上新興市場美元主權低碳債券ETF基金(本基金非屬環境、社會及治理相關主題基金)(股票代號：00884B)',
    lumpSum: '1%',
    dollarCostAveraging: undefined,
  },
  {
    method: '電子交易',
    type: '股票型',
    name: '中國信託越南機會基金',
    lumpSum: '1.8%',
    dollarCostAveraging: '1.8%',
  },
  {
    method: '書面/傳真交易',
    type: '股票型',
    name: '中國信託越南機會基金',
    lumpSum: '3%',
    dollarCostAveraging: '3%',
  },
])
</script>