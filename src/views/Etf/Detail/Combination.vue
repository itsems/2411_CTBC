<template>
  <div>
    <div class="mb-12 lg:flex lg:items-center">
      <p class="mb-3 font-medium text-main lg:mb-0 lg:mr-4">查詢日期</p>

      <div class="flex items-center gap-3">
        <VDatePicker
          v-model="date"
          mode="date"
          color="teal"
          :update-on-input="false"
          :masks="masks"
          :popover="popover"
          @update:modelValue="handleCalendarUpdate"
        >
          <template #default="{ togglePopover, inputValue }">
            <div class="flex items-center justify-between w-full gap-3 px-4 py-3 bg-white shadow-xl rounded-3xl">
              <img class="self-center w-6" src="@/assets/images/icon/calendar.png" alt="" />
              <input
                :value="inputValue"
                @click="togglePopover"
                type="text"
                class="w-full font-medium"
              />
            </div>
          </template>
        </VDatePicker>
        
        <RoundButton class="lg:!px-4 !p-3 !rounded-full lg:!rounded-3xl lg:shrink-0">
          <img class="w-[18px] lg:mr-2" src="@/assets/images/icon/download-w.png" alt="" />
          <span class="visible-desktop-block">下載EXCEL</span>
        </RoundButton>
      </div>
      
    </div>

    <!-- 基金資產 -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="基金資產" />
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-5 lg:bg-white lg:py-6 lg:px-6 lg:rounded-2xl lg:shadow-2xl ">
        <RoiBlock class="mb-3 lg:mb-0" text="基金資產總淨值(新台幣)" value="NTD 261,661,848,306" />
        <RoiBlock class="mb-3 lg:mb-0" text="基金每單位淨值(新台幣)" value="NTD 22.35" />
        <RoiBlock class="mb-3 lg:mb-0" text="基金在外流通單位數" value="11,708,790,000" />
      </div>
    </section>

    <!-- 股票 -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="股票" />
        
      <!-- Table start -->
      <div class="mobile-th-row-table text-md border-b border-solid border-[#f4f4f4] lg:rounded-b-none lg:!shadow-none">
        <ul class="desktop-th lg:grid-cols-4">
          <li>股票代碼</li>
          <li>股票名稱</li>
          <li>股數</li>
          <li>權重(%)</li>
        </ul>

        <div class="lg:!hidden data-row !grid-cols-[1fr_1fr] !rounded-b-none !shadow-none">
          <TransitionGroup name="list">
            <template v-for="(fund, idx) in displayStockComposition" :key="fund.code">
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股票代碼</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.code }}</div>
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股票名稱</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.name }}</div>
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股數</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.shares }}</div>
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">權重(%)</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.percent }}</div>
            </template>
          </TransitionGroup>
        </div>
          
        <div class="visible-desktop-block">
          <TransitionGroup name="list">
            <div v-for="(fund, idx) in displayStockComposition" :key="idx" class="data-row lg:grid-cols-4">
              <div class="td lg:text-center">{{ fund.code }}</div>
              <div class="td lg:text-center">{{ fund.name }}</div>
              <div class="td lg:text-center">{{ fund.shares }}</div>
              <div class="td lg:text-center">{{ fund.percent }}</div>
            </div>
          </TransitionGroup>
        </div>
      </div>
      <div @click="toggleStockDisplayedData" class="bg-[#f4f4f4] flex justify-center cursor-pointer">
        <MoreButtonInTable :is-collapsed="isCollapsed"/>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 lg:text-center w-full px-4 py-3 font-medium text-[#333] bg-[#dfdfdf] rounded-b-2xl">
        <span class="lg:col-start-3">股票合計</span>
        <span>XX.XX</span>
      </div>
      <!-- Table end -->
      
    </section>
    
    

    <!-- 期貨 -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="期貨" />
        
      <!-- Table start -->
      <div class="mobile-th-row-table text-md border-b border-solid border-[#f4f4f4] lg:rounded-b-none lg:!shadow-none">
        <ul class="desktop-th lg:grid-cols-4">
          <li>期貨代碼</li>
          <li>期貨名稱</li>
          <li>口數</li>
          <li>權重(%)</li>
        </ul>

        <div class="lg:!hidden data-row !grid-cols-[1fr_1fr] !rounded-b-none !shadow-none">
          <template v-for="(fund, idx) in stockComposition" :key="fund.code">
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">期貨代碼</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.code }}</div>
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">期貨名稱</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.name }}</div>
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">口數</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.shares }}</div>
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">權重(%)</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.percent }}</div>
          </template>
        </div>
          
        <template class="visible-desktop-block">
          <div v-for="(fund, idx) in stockComposition" :key="idx" class="data-row lg:grid-cols-4">
            <div class="td lg:text-center">{{ fund.code }}</div>
            <div class="td lg:text-center">{{ fund.name }}</div>
            <div class="td lg:text-center">{{ fund.shares }}</div>
            <div class="td lg:text-center">{{ fund.percent }}</div>
          </div>
        </template>
      </div>
      <div class="bg-[#f4f4f4] text-main flex justify-center gap-2 items-center py-3 cursor-pointer">
        <span class="font-medium">看更多</span>
        <img class="w-3" src="@/assets/images/icon/arrow-down.png" alt="" />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 lg:text-center w-full px-4 py-3 font-medium text-[#333] bg-[#dfdfdf] rounded-b-2xl">
        <span class="lg:col-start-3">期貨合計</span>
        <span>XX.XX</span>
      </div>
      <!-- Table end -->
      
    </section>

    <!-- ETF -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="ETF" />
        
      <!-- Table start -->
      <div class="mobile-th-row-table text-md border-b border-solid border-[#f4f4f4] lg:rounded-b-none lg:!shadow-none">
        <ul class="desktop-th lg:grid-cols-4">
          <li>股票代碼</li>
          <li>股票名稱</li>
          <li>股數</li>
          <li>權重(%)</li>
        </ul>

        <div class="lg:!hidden data-row !grid-cols-[1fr_1fr] !rounded-b-none !shadow-none">
          <template v-for="(fund, idx) in 4" :key="idx">
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股票代碼</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">XXXX</div>
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股票名稱</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">XXXXXX</div>
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股數</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">XXX,XXX,XX</div>
            <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">權重(%)</div>
            <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">XX.XX</div>
          </template>
        </div>
          
        <template class="visible-desktop-block">
          <div v-for="(fund, idx) in 5" :key="idx" class="data-row lg:grid-cols-4">
            <div class="td lg:text-center">XXXX</div>
            <div class="td lg:text-center">XXXXXX</div>
            <div class="td lg:text-center">XXX,XXX,XX</div>
            <div class="td lg:text-center">XX.XX</div>
          </div>
        </template>
      </div>
      <div class="bg-[#f4f4f4] text-main flex justify-center gap-2 items-center py-3 cursor-pointer">
        <span class="font-medium">看更多</span>
        <img class="w-3" src="@/assets/images/icon/arrow-down.png" alt="" />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 lg:text-center w-full px-4 py-3 font-medium text-[#333] bg-[#dfdfdf] rounded-b-2xl">
        <span class="lg:col-start-3">ETF合計</span>
        <span>XX.XX</span>
      </div>
      <!-- Table end -->
      
    </section>

    <!-- 附買回債券 -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="附買回債券" />
      
      <!-- Table -->
      <table class="shadow-2xl normal-table">
        <thead>
          <tr>
            <th>名稱</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">XXXXXX</td>
            <td class="text-center">XXXXXX</td>
          </tr>
          <tr>
            <td class="text-center">XXXXXX</td>
            <td class="text-center">XXXXXX</td>
          </tr>
          <tr>
            <td class="text-center">XXXXXX</td>
            <td class="text-center">XXXXXX</td>
          </tr>
          <tr>
            <td class="text-center">XXXXXX</td>
            <td class="text-center">XXXXXX</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 保證金 -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="保證金" />
      
      <!-- Table -->
      <table class="shadow-2xl normal-table">
        <thead>
          <tr>
            <th>名稱</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">XXXXXX</td>
            <td class="text-center">XXXXXX</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 現金 -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="現金" />
      
      <!-- Table -->
      <table class="shadow-2xl normal-table">
        <thead>
          <tr>
            <th>名稱</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">XXXXXX</td>
            <td class="text-center">XXXXXX</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- ETF與指數比較表 -->
    <section class="mb-4">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="ETF與指數比較表" />
      
      <EtfIndexCompareTable />
      <p class="mt-2 text-sm">註：上表資訊係以含應計利息之持債比計算。</p>
    </section>

    <!-- 國家配置 -->
    <section class="mb-6">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="國家配置" />
      <div class="content-card">
        <div class="h-[380px] customized-height-for-sm-screen lg:h-[250px] lg:w-2/3 mx-auto">
          <PieChart :chartData="country" />
        </div>
      </div>
    </section>
    
    <!-- 產業配置 -->
    <section class="mb-14">
      <VerticalBarTitle class="mb-5" textClass="text-2xl" title="產業配置" />
      <div class="content-card">
        <div class="h-[380px] customized-height-for-sm-screen lg:h-[250px] lg:w-2/3 mx-auto">
          <PieChart :chartData="industry" />
        </div>
      </div>
    </section>
    
    
  </div>
</template>
<script setup>
import { isRowOddOrEven } from '@/utils/row-odd-even.js'

// Calendar Configurations
const date = ref(new Date())
const popover = ref({
  visibility: 'click',
  placement: 'bottom'
})
const masks = ref({
  modelValue: 'YYYY/MM/DD'
})

const handleCalendarUpdate = value => {
  console.log(value)
}

// 股票
const displayStockComposition = reactive([
  {
    code: '700 HK',
    name: '騰訊控股',
    shares: '1,228,300.00',
    percent: '21.21'
  },
  {
    code: '9988 HK',
    name: '阿里巴巴',
    shares: '2,983,832.00',
    percent: '12.20'
  },
  {
    code: 'PDD',
    name: 'UW拼多多公司',
    shares: '111,290.00',
    percent: '5.53'
  },
])
const stockComposition = reactive([
  {
    code: '700 HK',
    name: '騰訊控股',
    shares: '1,228,300.00',
    percent: '21.21'
  },
  {
    code: '9988 HK',
    name: '阿里巴巴',
    shares: '2,983,832.00',
    percent: '12.20'
  },
  {
    code: 'PDD',
    name: 'UW拼多多公司',
    shares: '111,290.00',
    percent: '5.53'
  },
  {
    code: '700 HK',
    name: '騰訊控股',
    shares: '1,228,300.00',
    percent: '21.21'
  },
  {
    code: '9988 HK',
    name: '阿里巴巴',
    shares: '2,983,832.00',
    percent: '12.20'
  },
  {
    code: 'PDD',
    name: 'UW拼多多公司',
    shares: '111,290.00',
    percent: '5.53'
  },
])

const { toggleData, isCollapsed } = useDataToggle()
const toggleStockDisplayedData = () => {
  toggleData(stockComposition, displayStockComposition)
}

// Pie data
const country = computed(() => ({
  labels: [
    '美國',
    '美國',
    '美國',
    '美國',
    '美國',
    '美國',
    '美國',
    '美國',
    '美國',
  ],
  datasets: [
    {
      data: [50.95, 12.95, 11.38, 6.06, 5.89, 5.75, 5.63, 5.25, 0.19, 0.11]
    }
  ]
}))
const industry = computed(() => ({
  labels: ['科技', '電子', '傳產', '媒體', '消費', '公用', '金融', '文化'],
  datasets: [
    {
      data: [10.61, 0.53, 13.01, 8.97, 18.54, 20.87, 26.72, 11.72]
    }
  ]
}))
</script>
<style lang="scss" scoped>
.customized-height-for-sm-screen {
  @media (max-width: 375px)  {
    height: 650px;
  }
}
</style>