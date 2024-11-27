<template>
  <!-- 績效表現 -->
  <div class="content-card mb-9 lg:px-8">
    <div class="mb-4 lg:hidden">
      <table class="mb-6 shadow-xl normal-table">
        <thead>
          <tr>
            <th width="25%">3個月</th>
            <th width="25%">6個月</th>
            <th width="25%">1年</th>
            <th width="25%">2年</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="!bg-white !px-2 text-center">XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
          </tr>
        </tbody>
      </table>
      <table class="shadow-xl normal-table">
        <thead>
          <tr>
            <th>3年</th>
            <th>今年以來</th>
            <th>成立以來</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="!bg-white !px-2 text-center">XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="hidden lg:block">
      <table class="mb-6 shadow-xl normal-table">
        <thead>
          <tr>
            <th>3個月</th>
            <th>6個月</th>
            <th>1年</th>
            <th>2年</th>
            <th>3年</th>
            <th>今年以來</th>
            <th>成立以來</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="!bg-white !px-2 text-center">XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
            <td class="!bg-white !px-2 text-center">-XX.XX</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mb-10 text-sm">資料來源：Lipper、中國信託投信整理，資料日期：2022/10/31</p>
    
    <div class="lg:flex lg:mb-8 lg:gap-28 lg:items-center lg:justify-between">
      <!-- DurationSelect -->
      <DurationSelect
        :durations="durations"
        :current="currentDuration"
        class="mb-5 lg:mb-0 lg:shrink-0"
        @duration-select="handleDurationSelect"
      />

      <!-- RangeCalendar -->
      <RangeCalendar :range="range" />
    </div>

    <!-- LineChart -->
    <div class="mb-10 chart-zone h-[325px] lg:h-[377px]">
      <LineChart
        v-if="isDataLoaded"
        :chartData="fakeData"
        :label="fund.name"
        :time="chartTime"
      />
    </div>
  </div>
  <RoutingButton
    class="block mx-auto mb-8"
    :arrow-direction="BUTTON_ARROW_DIRECTION.right"
    label="回基金列表"
    @click="router.push({ name: ROUTE_NAME.fund.index })" />
</template>
<script setup>
import { DURATION } from '@/constants/fund'
import { BUTTON_ARROW_DIRECTION } from '@/constants/layout'

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

defineProps({
  fund: {
    type: Object,
    default: undefined
  }
})

// Charts
const isDataLoaded = ref(false)
const chartTime = ref({
  start: '2023/04/01',
  end: '2023/06/26'
})
// fake Data
const fakeData = ref([
  {
    x: '2023/04/01',
    y: 18.36,
  },
  {
    x: '2023/04/02',
    y: 18.34,
  },
  {
    x: '2023/04/03',
    y: 18.54,
  },
  {
    x: '2023/04/04',
    y: 18.39,
  },
  {
    x: '2023/04/05',
    y: 18.47,
  },
  {
    x: '2023/04/06',
    y: 18.61,
  },
  {
    x: '2023/04/07',
    y: 18.7,
  },
  {
    x: '2023/04/08',
    y: 18.84,
  },
  {
    x: '2023/04/09',
    y: 18.8,
  },
  {
    x: '2023/04/10',
    y: 19.12,
  },
  {
    x: '2023/04/11',
    y: 18.8,
  },
  {
    x: '2023/04/12',
    y: 19.09,
  },
  {
    x: '2023/04/13',
    y: 18.97,
  },
  {
    x: '2023/04/14',
    y: 19.23,
  },
  {
    x: '2023/04/15',
    y: 19.2,
  },
  {
    x: '2023/04/16',
    y: 19.6,
  },
  {
    x: '2023/04/17',
    y: 19.56,
  },
  {
    x: '2023/04/18',
    y: 19.55,
  },
  {
    x: '2023/04/19',
    y: 19.49,
  },
  {
    x: '2023/04/20',
    y: 19.4,
  },
  {
    x: '2023/04/21',
    y: 19.12,
  },
  {
    x: '2023/04/22',
    y: 18.8,
  },
  {
    x: '2023/04/23',
    y: 18.92,
  },
  {
    x: '2023/04/24',
    y: 19.16,
  },
  {
    x: '2023/04/25',
    y: 19.21,
  },
  {
    x: '2023/04/26',
    y: 19.53,
  },
  {
    x: '2023/04/27',
    y: 19.67,
  },
  {
    x: '2023/04/28',
    y: 19.47,
  },
  {
    x: '2023/04/29',
    y: 19.27,
  },
  {
    x: '2023/04/30',
    y: 19.08,
  },
  {
    x: '2023/05/01',
    y: 19.24,
  },
  {
    x: '2023/05/02',
    y: 19.64,
  },
  {
    x: '2023/05/03',
    y: 19.73,
  },
  {
    x: '2023/05/04',
    y: 19.9,
  },
  {
    x: '2023/05/05',
    y: 20.23,
  },
  {
    x: '2023/05/06',
    y: 20.26,
  },
  {
    x: '2023/05/07',
    y: 20.31,
  },
  {
    x: '2023/05/08',
    y: 20.11,
  },
  {
    x: '2023/05/09',
    y: 20.29,
  },
  {
    x: '2023/05/10',
    y: 20.47,
  },
  {
    x: '2023/05/11',
    y: 20.53,
  },
  {
    x: '2023/05/12',
    y: 20.61,
  },
  {
    x: '2023/05/13',
    y: 20.46,
  },
  {
    x: '2023/05/14',
    y: 20.54,
  },
  {
    x: '2023/05/15',
    y: 20.86,
  },
  {
    x: '2023/05/16',
    y: 20.38,
  },
  {
    x: '2023/05/17',
    y: 20.26,
  },
  {
    x: '2023/05/18',
    y: 19.66,
  },
  {
    x: '2023/05/19',
    y: 19.87,
  },
  {
    x: '2023/05/20',
    y: 20.3,
  },
  {
    x: '2023/05/21',
    y: 20.12,
  },
  {
    x: '2023/05/22',
    y: 19.99,
  },
  {
    x: '2023/05/23',
    y: 19.17,
  },
  {
    x: '2023/05/24',
    y: 19.24,
  },
  {
    x: '2023/05/25',
    y: 18.93,
  },
  {
    x: '2023/05/26',
    y: 19.34,
  },
  {
    x: '2023/05/27',
    y: 19.62,
  },
  {
    x: '2023/05/28',
    y: 19.93,
  },
  {
    x: '2023/05/29',
    y: 19.56,
  },
  {
    x: '2023/05/30',
    y: 19.8,
  },
  {
    x: '2023/05/31',
    y: 20.01,
  },
  {
    x: '2023/06/01',
    y: 20.23,
  },
  {
    x: '2023/06/02',
    y: 20.5,
  },
  {
    x: '2023/06/03',
    y: 20.05,
  },
  {
    x: '2023/06/04',
    y: 19.77,
  },
  {
    x: '2023/06/05',
    y: 19.99,
  },
  {
    x: '2023/06/06',
    y: 20.09,
  },
  {
    x: '2023/06/07',
    y: 20.13,
  },
  {
    x: '2023/06/08',
    y: 19.91,
  },
  {
    x: '2023/06/09',
    y: 20.1,
  },
  {
    x: '2023/06/10',
    y: 20.36,
  },
  {
    x: '2023/06/11',
    y: 20.47,
  },
  {
    x: '2023/06/12',
    y: 20.33,
  },
  {
    x: '2023/06/13',
    y: 20.33,
  },
  {
    x: '2023/06/14',
    y: 19.78,
  },
  {
    x: '2023/06/15',
    y: 19.85,
  },
  {
    x: '2023/06/16',
    y: 19.84,
  },
  {
    x: '2023/06/17',
    y: 20.26,
  },
  {
    x: '2023/06/18',
    y: 20.43,
  },
  {
    x: '2023/06/19',
    y: 20.13,
  },
  {
    x: '2023/06/20',
    y: 19.83,
  },
  {
    x: '2023/06/21',
    y: 19.68,
  },
  {
    x: '2023/06/22',
    y: 19.31,
  },
  {
    x: '2023/06/23',
    y: 19.6,
  },
  {
    x: '2023/06/24',
    y: 19.84,
  },
  {
    x: '2023/06/25',
    y: 19.71,
  },
  {
    x: '2023/06/26',
    y: 19.78,
  },
  {
    x: '2023/06/27',
    y: 19.78,
  },
  {
    x: '2023/06/28',
    y: 19.78,
  },
  {
    x: '2023/06/29',
    y: 19.78,
  },
  {
    x: '2023/06/30',
    y: 19.78,
  },
])

const fetchData = () => {
  isDataLoaded.value = true
}
onMounted(() => {
  fetchData()  
})

const currentDuration = ref(DURATION.threeMonth.value)
const durations = ref([
  DURATION.threeMonth,
  DURATION.sixMonth,
  DURATION.oneYear,
  DURATION.twoYear,
  DURATION.threeYear,
  DURATION.ytd,
  DURATION.fromStart,
])
// Calendar
const range = ref({
  start: new Date(),
  end: new Date().setMonth(new Date().getMonth() - 1)
})
const {
  handleDurationSelect,
} = useDateRange(currentDuration, range)

</script>