<template>
  <!-- 配息紀錄 -->
  <div class="content-card mb-9 lg:px-10 lg:py-10">
    
    <div class="items-center gap-3 mb-6 lg:w-5/12 lg:flex lg:mb-9">
      <p class="mb-3 font-bold shrink-0 lg:mb-0 text-main">查詢日期</p>
      <!-- RangeCalendar -->
      <div class="flex-grow">
        <RangeCalendar :range="range" />
      </div>
    </div>

    
    <div class="relative mb-10 overflow-x-auto shadow-xl rounded-2xl">
      <table class="normal-table break-keep lg:w-full lg:break-all">
        <thead>
          <tr>
            <th class="lg:!px-1">配息月份</th>
            <th class="lg:!px-1">每單位配息(元)</th>
            <th class="lg:!px-1">基準日</th>
            <th class="lg:!px-1">除息日</th>
            <th class="lg:!px-1">發放日</th>
            <th class="lg:!px-1">配息來自淨利</th>
            <th class="lg:!px-1">配息來自本金</th>
            <th class="lg:!px-1">當期配息率</th>
            <th class="lg:!px-1">當期含息報酬率</th>
            <th class="lg:!px-1">配息頻率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="( fund, idx ) in fakeData" :key="idx">
            <td class="lg:text-center">{{ fund.month }}</td>
            <td class="lg:text-center">{{ fund.unitShare }}</td>
            <td >{{ fund.baseDay }}</td>
            <td >{{ fund.exdDay }}</td>
            <td >{{ fund.allotDay }}</td>
            <td class="lg:text-center">{{ fund.fromProfit }}</td>
            <td class="lg:text-center">{{ fund.fromCapital }}</td>
            <td class="lg:text-center">{{ fund.annual }}</td>
            <td class="lg:text-center">{{ fund.fromCapital }}</td>
            <td class="lg:text-center">{{ fund.frequency }}</td>
          </tr>
        </tbody>
      
      </table>
    </div>

    <hr class="mb-8">

    <p class="font-bold text-md">註：</p>
    <ul class="ml-4 text-sm list-decimal">
      <li>當期配息率計算方式：每單位配息金額÷除息日前一日之淨值×100%。</li>
      <li>當期含息報酬率計算方式：[(當次除息日淨值+每單位配息金額)÷前次除息日淨值-1]×100%。基金成立未滿六個月者，依規定不得揭露績效。</li>
      <li>個別投資人之原始投入本金不同，上表之本金佔配息金額比率並非代表本次配息金額皆涉及每一投資人之原始投入本金，如配息後淨值仍高於個別投資人之原始投入本金，代表本次配息金額並未涉及該投資人之投入本金，而個別投資人投資本基金之盈虧仍應依累積配息金額加計出售價款減除原始投入本金而定。</li>
      <li>上述資料僅供參考，各基金相關配息時間，依本公司公告之實際配息日期為準，實際配息金額與時間將視狀況而可能調整；各基金配息原則請詳閱基金公開說明書。</li>
      <li class="text-red">基金配息率不代表基金報酬率，於獲配息時，宜一併注意基金淨值之變化，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。</li>
      <li class="text-red">基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。</li>

    </ul>
    
  </div>
  
  <RoutingButton
    class="block mx-auto mb-8"
    :arrow-direction="BUTTON_ARROW_DIRECTION.right"
    label="回基金列表"
    @click="router.push({ name: ROUTE_NAME.fund.index })"
  />
</template>
<script setup>
import { BUTTON_ARROW_DIRECTION } from '@/constants/layout'

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

defineProps({
  fund: {
    type: Object,
    default: undefined
  }
})

// fakeData
const fakeData = ref([
  {
    month: '2022.10',
    frequency: '月配',
    unitShare: '0.230',
    evaluateDay: '2022/10/31',
    baseDay: '2022/10/31',
    exdDay: '2022/10/31',
    allotDay: '2022/10/31',
    fromProfit: '100.00%',
    fromCapital: '0.00%',
    annual: '3.51%'
  },
  {
    month: '2022.09',
    frequency: '月配',
    unitShare: '0.230',
    evaluateDay: '2022/10/31',
    baseDay: '2022/10/31',
    exdDay: '2022/10/31',
    allotDay: '2022/10/31',
    fromProfit: '100.00%',
    fromCapital: '0.00%',
    annual: '3.51%'
  },
  {
    month: '2022.08',
    frequency: '月配',
    unitShare: '0.230',
    evaluateDay: '2022/10/31',
    baseDay: '2022/10/31',
    exdDay: '2022/10/31',
    allotDay: '2022/10/31',
    fromProfit: '100.00%',
    fromCapital: '0.00%',
    annual: '3.51%'
  },
  {
    month: '2022.08',
    frequency: '月配',
    unitShare: '0.230',
    evaluateDay: '2022/10/31',
    baseDay: '2022/10/31',
    exdDay: '2022/10/31',
    allotDay: '2022/10/31',
    fromProfit: '100.00%',
    fromCapital: '0.00%',
    annual: '3.51%'
  }
])

// Calendar
const range = ref({
  start: new Date(),
  end: new Date().setMonth(new Date().getMonth() - 1)
})
</script>
