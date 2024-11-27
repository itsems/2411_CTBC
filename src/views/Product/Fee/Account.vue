<template>
  <!-- 基金匯款帳號暨手續費率表 -->
  <div>
    <p class="my-5 text-2xl font-bold text-darkGreen">基金匯款帳號</p>
    <div class="content-card lg:py-2 lg:px-6">
      <div class="lg:flex lg:items-center lg:mb-3">
        <p class="mb-2 font-medium text-main lg:mb-0 lg:mr-5">基金名稱</p>
        <select class="w-full mb-2 grey-selects lg:mb-0 lg:w-auto lg:flex-auto">
          <option selected disabled>請選擇基金名稱</option>
          <option value="88346529">中國信託ESG金融收益多重資產證券投資信託基金</option>
          <option value="88281188">中國信託ESG碳商機多重資產基金</option>
          <option value="48893417">中國信託台灣活力基金</option>
          <option value="93108097">中國信託成長轉機多重資產證券投資信託基金</option>
          <option value="77553985">中國信託亞太實質收息多重資產基金</option>
          <option value="88253351">中國信託科技趨勢多重資產基金</option>
          <option value="72964670">中國信託智慧城市建設基金</option>
          <option value="80907786">中國信託華盈貨幣市場基金</option>
          <option value="88095895">中國信託越南機會基金</option>
          <option value="42443702">中國信託樂齡收益平衡基金</option>
        </select>
      </div>
      <p class="text-sm">若您要透過臨櫃或傳真方式申購本公司所發行之基金，基金款項之繳費請依據各基金之匯款銀行、戶名、帳號與最低申購金額辦理</p>
      <p class="text-sm">若您是本公司電子交易戶，可透過線上交易平台 <a class="hover:text-main" href="https://etrade.ctbcinvestments.com.tw/CTBC.EC/" target="_blank"> https://etrade.ctbcinvestments.com.tw/CTBC.EC/</a> 申購</p>
    </div>

    <!-- Table -->
    <div class="mt-10 mobile-th-row-table text-md stripped-on-mobile-row">
      <ul class="desktop-th lg:grid-cols-[30%_9%_15%_15%_13%_8%_10%]">
        <li>基金名稱</li>
        <li>級別</li>
        <li>匯款銀行</li>
        <li>匯款戶名</li>
        <li>匯款帳號</li>
        <li>單筆申購<br>最低金額</li>
        <li>定期定額申購<br>每次最低金額</li>
      </ul>
      <div
        v-for="( fund, idx ) in fakeData"
        :key="idx"
        class="data-row lg:grid-cols-[30%_9%_15%_15%_13%_8%_10%]"
      >
        <div class="th">基金名稱</div>
        <div class="text-left td">{{ fund.name }}</div>
        <div class="th">級別</div>
        <div class="td">{{ fund.level }}</div>
        <div class="th">匯款銀行</div>
        <div class="text-left td">
          <p class="w-full" v-for="bankName in fund.bank" :key="bankName">{{ bankName }}</p>
        </div>
        <div class="th">匯款戶名</div>
        <div class="text-left td">{{ fund.accountName }}</div>
        <div class="th">匯款帳號</div>
        <div class="td">{{ fund.account }}</div>
        <div class="th">單筆申購<br>最低金額</div>
        <div class="td">{{ fund.lowest }}</div>
        <div class="th">定期定額申購<br>每次最低金額</div>
        <div class="td">{{ fund.lowestPerTime }}</div>
      </div>
    </div>
    <p class="mt-5 mb-10 font-medium text-md">資料日期：2022-10</p>


  </div>
</template>
<script setup>

const fakeData = ref([
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'A. 累積型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託成長轉機多重資產基金專戶',
    account: '9013-5001-9125	',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'B. 月配息型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託成長轉機多重資產基金專戶',
    account: '9013-5001-9125',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-美金(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'A. 累積型',
    bank: ['CTBC BANK Co.,Ltd', 'SWIFT CODE：CTCBTWTPXXX'],
    accountName: 'CTBC Growth Opportunities Multi-Asset Fund',
    account: '9011-3132-0907',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-美金(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'B. 月配息型',
    bank: ['CTBC BANK Co.,Ltd', 'SWIFT CODE：CTCBTWTPXXX'],
    accountName: '中國信託ESG碳商機多重資產基金專戶',
    account: '9013-5001-8498',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'A. 累積型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託ESG金融收益多重資產基金專戶	',
    account: '9013-5001-8838',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'B. 月配息型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託ESG碳商機多重資產基金專戶',
    account: '9013-5001-8838',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
])


</script>
<style lang="scss" scoped>
.list {
  text-indent: -20px;
}
</style>