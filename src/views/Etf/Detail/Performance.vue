<template>
  <!-- 績效表現 -->
  <div class="mb-4 lg:hidden">
    <table class="mb-6 shadow-xl normal-table">
      <thead>
        <tr>
          <th width="25%">
            3個月
          </th>
          <th width="25%">
            6個月
          </th>
          <th width="25%">
            1年
          </th>
          <th width="25%">
            2年
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="!bg-white !px-2 text-center">
            XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
        </tr>
      </tbody>
    </table>
    <table class="shadow-xl normal-table">
      <thead>
        <tr>
          <th>
            3年
          </th>
          <th>
            今年以來
          </th>
          <th>
            成立以來
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="!bg-white !px-2 text-center">
            XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="hidden lg:block">
    <table class="mb-6 shadow-xl normal-table">
      <thead>
        <tr>
          <th>
            3個月
          </th>
          <th>
            6個月
          </th>
          <th>
            1年
          </th>
          <th>
            2年
          </th>
          <th>
            3年
          </th>
          <th>
            今年以來
          </th>
          <th>
            成立以來
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="!bg-white !px-2 text-center">
            XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
          <td class="!bg-white !px-2 text-center">
            -XX.XX
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm">
    資料來源：Lipper、中國信託投信整理
  </p>
  <p class="mb-10 text-sm">
    資料日期：2022/10/31
  </p>

  <!-- LineChart -->
  <div class="mb-10 content-card">
    <div class="lg:flex lg:items-center lg:justify-between lg:mb-4">
      <select class="mb-5 selects lg:hidden">
        <option v-for="duration in durations" :key="duration.value">
          {{ duration.label }}
        </option>
      </select>
      <DurationSelect
        :durations="durations"
        :current="currentDuration.value"
        class="hidden mb-0 mr-3 lg:block shrink-0"
        @duration-select="handleDurationSelect"
      />

      <!-- RangeCalendar -->
      <div class="mb-4 lg:mb-0 lg:mr-2">
        <RangeCalendar :range="range" />
      </div>
    </div>
    
      
    <div class="h-96">
      <EtfPerformanceLineChart
        v-if="isDataLoaded"
        :chartData="fakeData"
        :label="fund.name"
        :time="chartTime"
      />
    </div>
  </div>

  <p class="mt-10">
    註：
  </p>
  <ul class="mb-10 ml-5 text-sm font-medium list -indent-5">
    <li>
      (1)基金績效以該基金計價幣別表示；表格所示為含息報酬率，走勢圖為不含息之績效
    </li>
    <li>
      (2)依投信投顧公會之廣告及營業活動行為規範之規定，基金成立滿半年以上者，方得揭露基金績效
    </li>
  </ul>
</template>
<script setup>
import { DURATION } from '@/constants/fund'

defineProps({
  fund: {
    type: Object,
    default: undefined,
  },
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
const currentDuration = ref(DURATION.threeMonth)
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