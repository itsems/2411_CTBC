<template>
  <GradientBackground :mobile-position="390" :desktop-position="371" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="申購買回清單" :size="25" :imagePath="PageTitleIcon" />

    <section class="lg:grid grid-cols-[140px_auto] lg:items-center mb-4">
      <p class="mb-3 text-lg lg:text-xl lg:mb-0">ETF名稱</p>
      <select class="w-full lg:max-w-[550px] selects">
        <option value="-1">請選擇ETF</option>
        <option>中信中國50</option>
        <option>中信中國50正2</option>
        <option>中信高評級公司債</option>
        <option>中信優先金融債</option>
        <option>中信美國公債20年</option>
        <option>中信美國市政債</option>
        <option>中信新興亞洲債</option>
        <option>中信EM主權債0</option>
        <option>中信投資級公司債</option>
        <option>中信全球電信債</option>
        <option>中信美國公債0</option>
        <option>中信中國高股息</option>
        <option>中信ESG投資級債</option>
        <option>中信低碳新興債</option>
        <option>中信關鍵半導體</option>
        <option>中信小資高價30</option>
        <option>中信綠能及電動車</option>
        <option>中信電池及儲能</option>
        <option>中信臺灣智慧50</option>
        <option>中信特選金融</option>
        <option>中信上櫃ESG30</option>
        <option>中信成長高股息</option>
      </select>
    </section>

    <section class="lg:grid grid-cols-[140px_max-content] lg:items-center mb-8">
      <p class="mb-3 text-lg lg:text-xl lg:mb-0">查詢日期</p>
      <div class="flex items-center gap-4">
        <div class="flex-grow px-4 py-1 bg-white shadow-2xl rounded-3xl">
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
              <div class="lg:items-center lg:gap-3 lg:flex">
                <div class="flex items-center justify-between gap-3">
                  <img class="self-center w-6" src="@/assets/images/icon/calendar.png" alt="" />
                  <input
                    :value="inputValue"
                    @click="togglePopover"
                    type="text"
                    class="w-full font-medium inputs lg:w-[250px] border-0"
                  />
                </div>
              </div>
            </template>
          </VDatePicker>
        </div>
        <RoundButton label="搜尋" class="shrink-0 !py-3" />
      </div>
    </section>

    <!-- 現金申購買回清單公告 -->
    <section class="pt-6 mb-10">
      <div class="items-center justify-between mb-6">
        <VerticalBarTitle title="現金申購買回清單公告" class="mb-6" textClass="!text-2xl" />

        <div class="mb-6 text-lg font-medium">
          <EtfName :fund="fund" />
        </div>

        <!-- 資料時間 -->
        <div class="flex items-center justify-between lg:gap-3 lg:justify-end">
          <p class="lg:mb-0">資料時間：yyyy/mm/dd</p>
          <RoundButton class="lg:!px-4 !px-3 !rounded-md lg:!rounded-3xl">
            <img class="w-[18px] lg:mr-2" src="@/assets/images/icon/download-w.png" alt="" />
            <span class="visible-desktop-block">下載EXCEL</span>
          </RoundButton>
        </div>
      </div>

      <Hr class="mb-6 lg:hidden" />

      <ul class="grid grid-cols-[1fr_1fr] lg:grid-cols-[max-content_auto_max-content_auto] two-col-to-four-table mb-8">
        <li class="flex items-center th">基金淨資產價值(元)</li>
        <li class="flex items-center td">NTD 2,015,376,823</li>
        <li class="flex items-center th">每現金申購/買回基數之受益權單位數</li>
        <li class="flex items-center td">500,000</li>
        <li class="flex items-center th">預收申購總價金(元)</li>
        <li class="flex items-center td">NTD 10,819,164</li>
        <li class="flex items-center th">每現金申購/買回基數約當淨值(元)</li>
        <li class="flex items-center td">NTD 9,821,237</li>
        <li class="flex items-center th">
          <div>
            <p class="text-xs">yyyy/mm/dd</p>
            <p>每受益權單位淨資產價值(元)</p>
          </div>
        </li>
        <li class="flex items-center td">NTD 19.64</li>
        <li class="flex items-center th">每現金申購/買回基數約當市值(元)</li>
        <li class="flex items-center td">NTD 9,821,237</li>
        <li class="flex items-center th">已發行受益權單位總數</li>
        <li class="flex items-center td">102,603,000</li>
        <li class="flex items-center th">每現金申購/買回基數估計現金差額(元)</li>
        <li class="flex items-center td">0</li>
        <li class="flex items-center th">與前日已發行單位差異數</li>
        <li class="flex items-center td">500,000</li>
        <li class="flex items-center th">
          <div>
            <p class="text-xs">yyyy/mm/dd</p>
            <p>每基數申購總價金差異額(元)</p>
          </div>
        </li>
        <li class="flex items-center td">NTD -1,220,635</li>
        <li class="flex items-center th">
          <div>
            <p class="text-xs">yyyy/mm/dd</p>
            <p>預估發行受益權單位數</p>
          </div>
        </li>
        <li class="flex items-center td">103,103,000</li>
        <li class="flex items-center th">
          <div>
            <p class="text-xs">yyyy/mm/dd</p>
            <p>每基數實際申購總價金(元)</p>
          </div>
        </li>
        <li class="flex items-center td">NTD 9,836,058</li>
        <li class="flex items-center th">
          <div>
            <p class="text-xs">yyyy/mm/dd</p>
            <p>受益人數</p>
          </div>
        </li>
        <li class="flex items-center td">17,414</li>
        <li class="th visible-desktop-block"></li>
        <li class="td visible-desktop-block"></li>
      </ul>
    </section>

    <!-- 股票 -->
    <section class="mb-10">
      <VerticalBarTitle title="股票" class="mb-6" textClass="!text-2xl" />
      <div class="lg:shadow-lg lg:rounded-2xl">
        <!-- Table -->
        <div class="mobile-th-row-table text-md border-b border-solid border-[#f4f4f4] lg:rounded-b-none lg:!shadow-none">
          <ul class="desktop-th lg:grid-cols-4">
            <li>股票代碼</li>
            <li>股票名稱</li>
            <li>股數</li>
            <li>權重(%)</li>
          </ul>

          <div class="lg:!hidden !mb-0 data-row !grid-cols-[1fr_1fr] !rounded-b-none !shadow-none">
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
      </div>
    </section>

    <!-- 期貨 -->
    <section class="mb-10">
      <VerticalBarTitle title="期貨" class="mb-6" textClass="!text-2xl" />
      <div class="lg:shadow-lg lg:rounded-2xl">
        <!-- Table -->
        <div class="mobile-th-row-table text-md border-b border-solid border-[#f4f4f4] lg:rounded-b-none">
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
          <span class="lg:col-start-3">股票合計</span>
          <span>XX.XX</span>
        </div>
      </div>
    </section>

    <!-- 附買回債券 -->
    <section class="mb-10">
      <VerticalBarTitle title="附買回債券" class="mb-6" textClass="!text-2xl" />
      <table class="shadow-xl normal-table">
        <thead>
          <tr>
            <th class="!pl-8 text-left lg:text-center">名稱</th>
            <th class="text-left lg:text-center">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in 4" :key="el">
            <td class="!pl-8 lg:text-center">XXXXXX</td>
            <td class="lg:text-center">XXXXXX</td>
          </tr>
        </tbody>
      </table>
    </section>
    
    <!-- 保證金 -->
    <section class="mb-10">
      <VerticalBarTitle title="保證金" class="mb-6" textClass="!text-2xl" />
      <table class="shadow-xl normal-table">
        <thead>
          <tr>
            <th class="!pl-8 text-left lg:text-center">金額</th>
            <th class="text-left lg:text-center">權重(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="!pl-8 lg:text-center">XXXXXX</td>
            <td class="lg:text-center">XXXXXX</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 現金 -->
    <section class="mb-10">
      <VerticalBarTitle title="現金" class="mb-6" textClass="!text-2xl" />
      <table class="shadow-xl normal-table">
        <thead>
          <tr>
            <th class="!pl-8 text-left lg:text-center">金額</th>
            <th class="text-left lg:text-center">權重(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="!pl-8 lg:text-center">XXXXXX</td>
            <td class="lg:text-center">XXXXXX</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 債券 -->
    <section class="mb-10">
      <VerticalBarTitle title="債券" class="mb-6" textClass="!text-2xl" />
      <div class="lg:shadow-lg lg:rounded-2xl">
        <!-- Table -->
        <div class="mobile-th-row-table text-md border-b border-solid border-[#f4f4f4] lg:rounded-b-none">
          <ul class="desktop-th lg:grid-cols-4">
            <li>債券代碼</li>
            <li>債券名稱</li>
            <li>市值</li>
            <li>面額</li>
            <li>權重(%)</li>
          </ul>

          <div class="lg:!hidden data-row !grid-cols-[1fr_1fr] !rounded-b-none !shadow-none">
            <template v-for="(fund, idx) in stockComposition" :key="fund.code">
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">債券代碼</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.code }}</div>
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">債券名稱</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.name }}</div>
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">市值</div>
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
          <span class="lg:col-start-3">股票合計</span>
          <span>XX.XX</span>
        </div>
      </div>
    </section>

    <!-- ETF -->
    <section class="mb-10">
      <VerticalBarTitle title="ETF" class="mb-6" textClass="!text-2xl" />
      <div class="lg:shadow-lg lg:rounded-2xl">
        <!-- Table -->
        <div class="mobile-th-row-table text-md border-b border-solid border-[#f4f4f4] lg:rounded-b-none">
          <ul class="desktop-th lg:grid-cols-4">
            <li>股票代碼</li>
            <li>股票名稱</li>
            <li>股數</li>
            <li>權重(%)</li>
          </ul>

          <div class="lg:!hidden data-row !grid-cols-[1fr_1fr] !rounded-b-none !shadow-none">
            <template v-for="(fund, idx) in stockComposition" :key="fund.code">
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股票代碼</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.code }}</div>
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股票名稱</div>
              <div class="td border-b border-solid border-[#f4f4f4] lg:text-center" :class="`row-td-${isRowOddOrEven(idx)}`">{{ fund.name }}</div>
              <div class="th" :class="`row-th-${isRowOddOrEven(idx)}`">股數</div>
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
          <span class="lg:col-start-3">股票合計</span>
          <span>XX.XX</span>
        </div>
      </div>
    </section>

  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/checklist.png'
import { isRowOddOrEven } from '@/utils/row-odd-even.js'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '申購買回清單', routeName: undefined },
]


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
  }
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
])

const { toggleData, isCollapsed } = useDataToggle()
const toggleStockDisplayedData = () => {
  toggleData(stockComposition, displayStockComposition)
}

const fund = ref({
  code: '00934',
  name: '中國信託臺灣優選成長高股息ETF基金',
  warning: '名稱後警語名稱後警語名稱後警語'
})

</script>
