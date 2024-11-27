<template>
  <!-- 基金淨值 -->
  <div class="pt-3 mb-10 lg:pt-6 content-card">
    <div class="lg:flex lg:items-center lg:justify-between lg:mb-4">
      <select class="mb-5 selects lg:hidden">
        <option v-for="duration in DEFAULT_DURATIONS" :key="duration.value">
          {{ duration.label }}
        </option>
      </select>
      <DurationSelect
        :current="currentDuration"
        class="hidden mb-0 mr-3 lg:block shrink-0"
        @duration-select="handleDurationSelect"
      />

      <!-- RangeCalendar -->
      <div class="mb-4 lg:mb-0 lg:mr-2">
        <RangeCalendar :range="range" />
      </div>
    </div>
    
      
    <div class="h-96">
      <EtfLineChart
        v-if="isDataLoaded"
        :chartData="fakeData"
        :label="fund.name"
        :time="chartTime" />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-2 lg:gap-4">
    <div>
      <p class="mb-4 text-xl text-center text-main">
        查詢期間淨值
      </p>
      <SplitBox class="mb-6" />
    </div>
    <div>
      <p class="mb-4 text-xl text-center text-main">
        成立以來淨值
      </p>
      <SplitBox
        class="mb-6"
        leftValue="133.36"
        leftDate="2023/11/10"
        rightValue="6.48"
        rightDate="2021/05/01"
      />
    </div>
  </div>

  <!-- 歷史淨值 -->
  <section>
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="歷史淨值" />

    <div class="items-center gap-4 mb-6 lg:flex">
      <RoundButton class="mb-4 lg:mb-0" label="近30筆" />
      <p class="mb-4 lg:mb-0">查詢期間</p>
      <RangeCalendar
        :range="range"
        class="mb-4 lg:mb-0 lg:mr-2 lg:max-w-[340px]" 
      />
    </div>
    
    <div class="mb-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <!-- Table -->
      <div class="mb-4 lg:mb-0 mobile-th-row-table text-md">
        <ul class="desktop-th">
          <li>日期</li>
          <li>淨值</li>
          <li>日漲跌</li>
          <li>帳跌幅</li>
          <li>淨值組成</li>
        </ul>
        <div v-for="data in fakeThirtyDayValues" :key="data.date" class="data-row">
          <div class="th">日期</div>
          <div class="lg:text-center td">{{ data.date }}</div>
          <div class="th">淨值</div>
          <div class="lg:text-center td">{{ data.value }}</div>
          <div class="th">日漲跌</div>
          <div class="lg:text-center td">
            <p :class="isUpOrDownClass( data.day )" class="min-w-max">
              <Symbol :number="data.day" />
              {{ data.day }}
            </p>
          </div>
          <div class="th">帳跌幅</div>
          <div class="lg:text-center td">
            <p :class="isUpOrDownClass( data.amplitude )" class="min-w-max">
              <Symbol :number="data.amplitude" />
              {{ data.amplitude }}%
            </p>
          </div>
          <div class="th">淨值組成</div>
          <div class="td lg:flex lg:justify-center">
            <RoundButton
              label="查看"
              text
              small
              class="!px-3 break-keep"
              @click="openModal"
            />
          </div>
        </div>
      </div>
      <!-- Table -->
      <div class="mobile-th-row-table text-md">
        <ul class="desktop-th">
          <li>日期</li>
          <li>淨值</li>
          <li>日漲跌</li>
          <li>帳跌幅</li>
          <li>淨值組成</li>
        </ul>
        <div v-for="data in fakeThirtyDayValues" :key="data.date" class="data-row">
          <div class="th">日期</div>
          <div class="lg:text-center td">{{ data.date }}</div>
          <div class="th">淨值</div>
          <div class="lg:text-center td">{{ data.value }}</div>
          <div class="th">日漲跌</div>
          <div class="lg:text-center td">{{ data.value }}</div>
          <div class="th">帳跌幅</div>
          <div class="lg:text-center td">
            <p :class="isUpOrDownClass( data.amplitude )" class="min-w-max">
              <Symbol :number="data.amplitude" />
              {{ data.amplitude }}%
            </p>
          </div>
          <div class="th">淨值組成</div>
          <div class="td lg:flex lg:justify-center">
            <RoundButton
              label="查看"
              text
              small
              class="!px-3 break-keep"
              @click="openModal"
            />
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <Modal :show="shouldModalShow" header="淨值組成項目" @close="closeModal">
    <template #body>
      <p class="mb-5 text-lg font-bold text-center">(證券代碼) (基金名稱)(-基金級別)</p>
      <p class="mb-4 text-sm">日期：YYYY/MM/DD</p>
      <p class="mb-8 text-md">本基金淨值主要由｢面額｣、｢收益平準金｣及｢資本利得｣所組成。其中｢收益平準金｣係指自本基金成立日起，凡受益憑證申購或買回價金中，計算日時屬於原受益人每受益權單位淨資產價值中所累積之收入，扣除費用部分屬之。為使本基金配息政策穩定，本基金之配息來源可能包含前述｢收益平準金｣，相關資訊如下：</p>

      <ul class="mb-6">
        <li class="py-6 px-3 border-solid border-y border-[#a6a6a6]">
          <div class="flex justify-between">
            <p class="font-bold text-darkGreen">基金淨值組成項目</p>
            <p>(單位：元)</p>
          </div>
        </li>
        <li class="py-4 px-3 border-b border-solid border-[#a6a6a6]">
          <div class="flex justify-between">
            <p class="font-medium">(A)面額</p>
            <p>XX.XX</p>
          </div>
        </li>
        <li class="py-4 px-3 border-b border-solid border-[#a6a6a6] bg-[#f6f6f6]">
          <div class="flex justify-between">
            <p class="font-medium">(B)收益平準金*</p>
            <p>XX.XX</p>
          </div>
        </li>
        <li class="py-4 px-3 border-b border-solid border-[#a6a6a6]">
          <div class="flex justify-between">
            <p class="font-medium">(C)資本平準金**</p>
            <p>XX.XX</p>
          </div>
        </li>
        <li class="py-4 px-3 border-b border-solid border-[#a6a6a6] bg-[#f6f6f6]">
          <div class="flex justify-between">
            <p class="font-medium">基金淨值(A+B+C)</p>
            <p>XX.XX</p>
          </div>
        </li>
      </ul>
      <p class="text-[13px]">*係指本基金收入扣除應負擔之費用(可能為負值)，有關收益平準金之詳細說明(如:收益平準金定義、收益分配之原則)請詳閱本基金信託契約或公開說明書。</p>
      <p class="text-[13px]">**含已實現及未實現資本平準金，分配收益請詳閱本基金信託契約或公開說明書。</p>


    </template>
  </Modal>
    
</template>
<script setup>
import { DEFAULT_DURATIONS } from '@/constants/fund'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

defineProps({
  fund: {
    type: Object,
    default: undefined
  }
})

// Charts
const isDataLoaded = ref(false)
const chartTime = ref({
  start: '2024/05/01',
  end: '2024/06/30'
})

// fake Data
const fakeData = ref([
  {
    x: '2024/05/01',
    y: 19.24,
  },
  {
    x: '2024/05/02',
    y: 19.64,
  },
  {
    x: '2024/05/03',
    y: 19.73,
  },
  {
    x: '2024/05/04',
    y: 19.9,
  },
  {
    x: '2024/05/05',
    y: 20.23,
  },
  {
    x: '2024/05/06',
    y: 20.26,
  },
  {
    x: '2024/05/07',
    y: 20.31,
  },
  {
    x: '2024/05/08',
    y: 20.11,
  },
  {
    x: '2024/05/09',
    y: 20.29,
  },
  {
    x: '2024/05/10',
    y: 20.47,
  },
  {
    x: '2024/05/11',
    y: 20.53,
  },
  {
    x: '2024/05/12',
    y: 20.61,
  },
  {
    x: '2024/05/13',
    y: 20.46,
  },
  {
    x: '2024/05/14',
    y: 20.54,
  },
  {
    x: '2024/05/15',
    y: 20.86,
  },
  {
    x: '2024/05/16',
    y: 20.38,
  },
  {
    x: '2024/05/17',
    y: 20.26,
  },
  {
    x: '2024/05/18',
    y: 19.66,
  },
  {
    x: '2024/05/19',
    y: 19.87,
  },
  {
    x: '2024/05/20',
    y: 20.3,
  },
  {
    x: '2024/05/21',
    y: 20.12,
  },
  {
    x: '2024/05/22',
    y: 19.99,
  },
  {
    x: '2024/05/23',
    y: 19.17,
  },
  {
    x: '2024/05/24',
    y: 19.24,
  },
  {
    x: '2024/05/25',
    y: 18.93,
  },
  {
    x: '2024/05/26',
    y: 19.34,
  },
  {
    x: '2024/05/27',
    y: 19.62,
  },
  {
    x: '2024/05/28',
    y: 19.93,
  },
  {
    x: '2024/05/29',
    y: 19.56,
  },
  {
    x: '2024/05/30',
    y: 19.8,
  },
  {
    x: '2024/05/31',
    y: 20.01,
  },
  {
    x: '2024/06/01',
    y: 20.23,
  },
  {
    x: '2024/06/02',
    y: 20.5,
  },
  {
    x: '2024/06/03',
    y: 20.05,
  },
  {
    x: '2024/06/04',
    y: 19.77,
  },
  {
    x: '2024/06/05',
    y: 19.99,
  },
  {
    x: '2024/06/06',
    y: 20.09,
  },
  {
    x: '2024/06/07',
    y: 20.13,
  },
  {
    x: '2024/06/08',
    y: 19.91,
  },
  {
    x: '2024/06/09',
    y: 20.1,
  },
  {
    x: '2024/06/10',
    y: 20.36,
  },
  {
    x: '2024/06/11',
    y: 20.47,
  },
  {
    x: '2024/06/12',
    y: 20.33,
  },
  {
    x: '2024/06/13',
    y: 20.33,
  },
  {
    x: '2024/06/14',
    y: 19.78,
  },
  {
    x: '2024/06/15',
    y: 19.85,
  },
  {
    x: '2024/06/16',
    y: 19.84,
  },
  {
    x: '2024/06/17',
    y: 20.26,
  },
  {
    x: '2024/06/18',
    y: 20.43,
  },
  {
    x: '2024/06/19',
    y: 20.13,
  },
  {
    x: '2024/06/20',
    y: 19.83,
  },
  {
    x: '2024/06/21',
    y: 19.68,
  },
  {
    x: '2024/06/22',
    y: 19.31,
  },
  {
    x: '2024/06/23',
    y: 19.6,
  },
  {
    x: '2024/06/24',
    y: 19.84,
  },
  {
    x: '2024/06/25',
    y: 19.71,
  },
  {
    x: '2024/06/26',
    y: 19.78,
  },
  {
    x: '2024/06/27',
    y: 19.6,
  },
  {
    x: '2024/06/28',
    y: 19.84,
  },
  {
    x: '2024/06/29',
    y: 19.71,
  },
  {
    x: '2024/06/30',
    y: 19.78,
  },
])

const fetchData = () => {
  isDataLoaded.value = true
}
onMounted(() => {
  fetchData()
})

const currentDuration = ref()
// Calendar
const range = ref({
  start: new Date(),
  end: new Date().setMonth(new Date().getMonth() - 1)
})
const {
  handleDurationSelect,
} = useDateRange(currentDuration, range)

// 近30日淨值
const fakeThirtyDayValues = [
  {
    date: '2022/11/30',
    value: 15.72,
    day: 0.28,
    amplitude: 0.89
  },
  {
    date: '2022/11/30',
    value: 15.72,
    day: 0.28,
    amplitude: 0.89
  },
  {
    date: '2022/11/30',
    value: 15.72,
    day: 0.28,
    amplitude: 0.89
  },
  {
    date: '2022/11/30',
    value: 15.72,
    day: 0.28,
    amplitude: 0.89
  },
  {
    date: '2022/11/30',
    value: 15.72,
    day: 0.28,
    amplitude: 0.89
  },
  
]

// 燈箱
const { shouldModalShow, closeModal, openModal } = useModal()

</script>
<style lang="scss" scoped>
.buttons {
  @media (min-width: 1024px) {
    max-width: 126px;
  }
}
.grey-selects {
  @media (min-width: 1024px) {
    max-width: 273px;
  }
}
</style>
