<template>
  <!-- 手續費率表 -->
  <!-- Selects -->
  <div class="lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
    <select v-model="query.tradeType" name="TradeType" class="mb-6 selects lg:mb-0">
      <option selected value="-1">依交易方式查詢</option>
      <option value="00000">書面/傳真</option>
      <option value="00001">電子交易</option>
    </select>
    <select v-model="query.fundType" name="FundType" class="selects">
      <option selected value="-1">依基金類型查詢</option>
      <option value="00000">股票型</option>
      <option value="00001">債券型</option>
      <option value="00002">平衡型</option>
      <option value="00003">ETF</option>
      <option value="00004">貨幣市場型</option>
      <option value="00005">不動產證券型</option>
      <option value="00006">多重資產型</option>
    </select>
    <div class="col-span-2 pt-6 lg:pt-0">
      <p>申購本公司發行之基金，請參考以下申購手續費率表，若您是本公司電子交易戶，可透過線上交易平台
        <a class="text-main hover:underline" href="https://etrade.ctbcinvestments.com.tw/CTBC.EC/" target="_blank">https://etrade.ctbcinvestments.com.tw/CTBC.EC/</a>
        申購，手續費較優惠喔!
      </p>
    </div>
  </div>

  <hr class="my-8">


  <!-- Table -->
  <div class="lg:px-8">
    <div class="mb-10 mobile-th-row-table stripped-on-mobile-row desktop-fixed-head">
      <ul>
        <li class="thead">
          <div class="grid grid-cols-[2fr_2fr_5fr_3fr_3fr] fixed-th">
            <div>交易方式</div>
            <div>基金類型</div>
            <div>基金名稱</div>
            <div>單筆申購手續費</div>
            <div>定期定額申購手續費</div>
          </div>
        </li>
        <div
          v-for="fund in fakeData"
          :key="fund.fundName"
          class="data-row lg:grid-cols-[2fr_2fr_5fr_3fr_3fr]"
        >
          <div class="th">交易方式</div>
          <div class="td lg:text-center">
            {{ fund.tradeType }}
          </div>
          <div class="th">基金類型</div>
          <div class="td lg:text-center">
            {{ fund.fundType }}
          </div>
          <div class="th">基金名稱</div>
          <div class="td">
            {{ fund.fundName }}
          </div>
          <div class="th">單筆申購<br />手續費</div>
          <div class="td lg:text-center">
            {{ fund.feeRate }}
          </div>
          <div class="th">定期定額<br />申購手續費</div>
          <div class="td lg:text-center">
            {{ fund.routineFeeRate }}
          </div>
        </div>
      </ul>
    </div>
  </div>

  <!-- Pagination -->
  <Pagination
    class="my-14"
    :totalItems="65"
    @prev="navigate"
    @next="navigate"
    @page="handlePageClick"
  />
</template>
<script setup>
// Query
const query = ref({
  tradeType: -1,
  fundType: -1
})

const fakeData = ref([
  {
    tradeType: '書面/傳真',
    fundType: '海外ETF',
    fundName: '中國信託科技趨勢多重資產基金',
    feeRate: '3%',
    routineFeeRate: '1%'
  },
  {
    tradeType: '電子交易',
    fundType: '多重資產型',
    fundName: '中國信託科技趨勢多重資產基金',
    feeRate: '1.5%',
    routineFeeRate: '0.5%'
  },
  {
    tradeType: '書面/傳真',
    fundType: '債券型ETF',
    fundName: '中國信託ESG碳商機多重資產基金',
    feeRate: '3%',
    routineFeeRate: '1%'
  },
  {
    tradeType: '電子交易',
    fundType: '多重資產型',
    fundName: '中國信託ESG碳商機多重資產基金',
    feeRate: '1.5%',
    routineFeeRate: '0.5%'
  },
  {
    tradeType: '書面/傳真',
    fundType: '多重資產型',
    fundName: '中國信託ESG金融收益多重資產證券投資信託基金',
    feeRate: '3%',
    routineFeeRate: '1%'
  },
  {
    tradeType: '電子交易',
    fundType: '多重資產型',
    fundName: '中國信託ESG金融收益多重資產證券投資信託基金',
    feeRate: '1.5%',
    routineFeeRate: '0.5%'
  }
])

// Pagination
const navigate = () => {}
const handlePageClick = number => {
  console.log(number)
}
</script>
