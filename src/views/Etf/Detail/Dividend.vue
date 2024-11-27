<template>
  <div class="content-card lg:px-8 mb-14">
    
    <div class="items-center gap-3 mb-6 lg:w-5/12 lg:flex lg:mb-9">
      <p class="mb-3 font-bold shrink-0 lg:mb-0 text-main">查詢日期</p>
      <!-- RangeCalendar -->
      <div class="flex-grow">
        <RangeCalendar :range="range" />
      </div>
    </div>
  
    <!-- Table -->
    <div class="mobile-th-row-table text-md">
      <ul class="desktop-th">
        <li>配息月份</li>
        <li>每單位配息(元)</li>
        <li>除息交易日</li>
        <li>配息發放日</li>
        <li>當期配息率</li>
        <li>當期含息報酬率</li>
        <li>配息頻率</li>
      </ul>
      <div
        v-for="( fund, idx ) in fakeData"
        :key="idx"
        class="lg:text-center data-row"
      >
        <div class="th">配息月份</div>
        <div class="td border-b border-solid border-[#f4f4f4] lg:border-0">{{ fund.month }}</div>
        <div class="th">每單位配息(元)</div>
        <div class="td border-b border-solid border-[#f4f4f4] lg:border-0">{{ fund.unitShare }}</div>
        <div class="th">除息交易日</div>
        <div class="td border-b border-solid border-[#f4f4f4] lg:border-0">{{ fund.evaluateDay }}</div>
        <div class="th">配息發放日</div>
        <div class="td border-b border-solid border-[#f4f4f4] lg:border-0">{{ fund.baseDay }}</div>
        <div class="th">當期配息率</div>
        <div class="td border-b border-solid border-[#f4f4f4] lg:border-0">{{ fund.rate }}</div>
        <div class="th">當期含息報酬率</div>
        <div class="td border-b border-solid border-[#f4f4f4] lg:border-0">{{ fund.fromProfit }}</div>
        <div class="th">配息頻率</div>
        <div class="td">{{ fund.frequency }}</div>
      </div>
    </div>

    <Hr class="mt-10 mb-8" />
  
    <p class="mb-2 text-sm">註：</p>
    <ul class="mb-10 ml-4 text-sm list-decimal">
      <li>當期配息率計算方式：每單位配息金額÷除息日前一日之淨值×100%。</li>
      <li>當期含息報酬率計算方式：[(當次除息日淨值+每單位配息金額)÷前次除息日淨值-1]×100%。基金成立未滿六個月者，依規定不得揭露績效。</li>
      <li>個別投資人之原始投入本金不同，上表之本金佔配息金額比率並非代表本次配息金額皆涉及每一投資人之原始投入本金，如配息後淨值仍高於個別投資人之原始投入本金，代表本次配息金額並未涉及該投資人之投入本金，而個別投資人投資本基金之盈虧仍應依累積配息金額加計出售價款減除原始投入本金而定。</li>
      <li>上述資料僅供參考，各基金相關配息時間，依本公司公告之實際配息日期為準，實際配息金額與時間將視狀況而可能調整；各基金配息原則請詳閱基金公開說明書。</li>
      <li class="text-red">基金配息率不代表基金報酬率，於獲配息時，宜一併注意基金淨值之變化，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。</li>
      <li class="text-red">基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。</li>
    </ul>
  </div>
</template>
<script setup>

// Calendar
const range = ref({
  start: new Date(),
  end: new Date().setMonth(new Date().getMonth() - 1)
})

const fakeData = ref([
  {
    month: '2024/02',
    frequency: '月配',
    unitShare: '0.120',
    evaluateDay: '2024/03/18',
    baseDay: '2024/04/20',
    exdDay: '2022/10/31',
    allotDay: '2022/10/31',
    fromProfit: '3.15%',
    rate: '0.80%',
    annual: '3.51%'
  },
  {
    month: '2024/02',
    frequency: '月配',
    unitShare: '0.120',
    evaluateDay: '2024/03/18',
    baseDay: '2024/04/20',
    exdDay: '2024/10/31',
    allotDay: '2024/10/31',
    fromProfit: '3.15%',
    rate: '0.80%',
    annual: '3.51%'
  },
  {
    month: '2024/02',
    frequency: '月配',
    unitShare: '0.120',
    evaluateDay: '2024/03/18',
    baseDay: '2024/04/20',
    exdDay: '2024/10/31',
    allotDay: '2024/10/31',
    fromProfit: '3.15%',
    rate: '0.80%',
    annual: '3.51%'
  },
  {
    month: '2024/02',
    frequency: '月配',
    unitShare: '0.120',
    evaluateDay: '2024/03/18',
    baseDay: '2024/04/20',
    exdDay: '2024/10/31',
    allotDay: '2024/10/31',
    fromProfit: '3.15%',
    rate: '0.80%',
    annual: '3.51%'
  },
])
</script>
