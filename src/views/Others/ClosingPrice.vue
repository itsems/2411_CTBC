<template>
  <GradientBackground />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="指數收盤行情" :imagePath="PageTitleIcon" />

    <!-- Table -->
    <div class="!overflow-auto lg:overflow-unset normal-table-wrap fixed-head mb-20">
      <table class="normal-table">
        <thead>
          <tr>
            <th class="rounded-tl-2xl text-left lg:sticky lg:top-[var(--nav-desktop-height)] min-w-[200px]">
              指數名稱
            </th>
            <th class="lg:sticky lg:top-[var(--nav-desktop-height)] min-w-16"></th>
            <th class="lg:sticky lg:top-[var(--nav-desktop-height)]">
              日期
            </th>
            <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
              收盤價格
            </th>
            <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep">
              日漲跌
            </th>
            <th class="lg:sticky lg:top-[var(--nav-desktop-height)] break-keep rounded-tr-2xl">
              帳跌幅
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in fakeData" :key="el.id">
            <td>
              {{ el.name}}
            </td>
            <td>
              <img
                class="block cursor-pointer w-9 shrink-0"
                src="@/assets/images/icon/chart.png"
                alt=""
                @click="openModal"
              />
            </td>
            <td class="text-center">
              {{ el.date }}
            </td>
            <td class="text-center">
              {{ el.price }}
            </td>
            <td class="text-center">
              <label class="font-medium" :class="isUpOrDownClass(el.fromPreviousDay)">
                {{ el.fromPreviousDay }}
                <Symbol :number="el.fromPreviousDay" />
              </label>
            </td>
            <td class="text-center">
              <label class="font-medium" :class="isUpOrDownClass(el.fromPreviousDayPercent)">
                {{ el.fromPreviousDayPercent }}
                <Symbol :number="el.fromPreviousDayPercent" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <Modal
      :show="shouldModalShow"
      no-style
      container-class="!p-0"
      @close="closeModal"
    >
      <template #body>
        <div class="lg:min-w-[600px] relative overflow-hidden rounded-2xl">
          <div class="relative px-2 py-8 lg:px-8 bg-gradient">
            <!-- Name -->
            <p class="mb-8 text-3xl font-bold text-center lg:px-16 text-darkGreen">
              MSCI 中國外資自由投資50不含A及B股指數
            </p>

            <!-- Info -->
            <ul class="grid justify-center grid-cols-2 overflow-hidden rounded-md lg:flex">
              <li class="py-4 text-center tab">
                <p class="text-center text-md">
                  收盤價格
                </p>
                <!-- 收盤價格 -->
                <p class="py-2 text-3xl font-bold text-black lg:py-3">
                  1396.31
                </p>
                <p class="mt-1 text-xs font-medium lg:mt-0 text-grey-999 lg:pl-2">
                  <!-- 日期 -->
                  2025/03/15
                </p>
              </li>
              <li class="py-4 text-center tab">
                <p class="text-md">
                  日漲跌
                </p>
                <!-- 日漲跌 -->
                <p :class="isUpOrDownClass(94.87)" class="py-2 text-3xl font-bold lg:py-3">
                  {{ 94.87 }}
                  <Symbol :number="94.87" />
                </p>
              </li>
              <li class="py-4 text-center tab">
                <p class="text-md">
                  漲跌幅
                </p>
                <!-- 漲跌幅 -->
                <p :class="isUpOrDownClass(1.05)" class="py-2 text-3xl font-bold lg:py-3">
                  {{ 1.05 }}
                  <Symbol :number="1.05" />
                </p>
              </li>
            </ul>
          </div>
          <!-- Charts -->
          <div class="px-4 pt-8 lg:px-8">
            <div class="lg:flex lg:items-center lg:justify-between lg:mb-4">
              <select class="mb-5 selects lg:hidden">
                <option v-for="duration in durations" :key="duration.value">
                  {{ duration.label }}
                </option>
              </select>
              <DurationSelect
                :durations="durations"
                :current="currentDuration"
                class="hidden lg:block lg:mb-4"
                @duration-select="handleDurationSelect"
              />
            </div>
            <div class="mb-16 h-96">
              <ClosingPriceChart
                :chartData="chartData"
                :label="'name'"
                :time="chartTime"
              />
            </div>
            <p class="mb-2 text-sm">
              註：
            </p>
            <ul class="mb-10 ml-4 text-sm list-decimal">
              <li>
                本頁所提供之任何指數數值僅限參考用，不作為任何投資人之邀約或建議；涉及投資人個別使用之網路連線情形或傳輸品質狀況，可能影響其更新頻率時間而有差異，請投資人注意以上報價資料並非唯一投資參考者，本公司不擔保其完全正確無誤。
              </li>
              <li>
                本公司有權隨時修改或刪除本頁所提供之資訊內容。若因任何資料之不正確、疏漏，或如遇網路斷線、股價報價延遲、系統延宕……等不可抗力之情事，所衍生之損害或損失，本公司均不負法律責任。
              </li>
              <li>
                自本頁取得之任何資料，應由投資人自行評估考量且自負風險責任，如因任何下載資料而導致其電腦系統或下載設備有任何損害或資料流失，應由投資人自負完全責任。
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/board.png'
import ClosingPriceChart from '@/components/charts/ClosingPriceChart.vue'
import DurationSelect from '@/components/DurationSelect.vue'
import GradientBackground from '@/components/GradientBackground.vue'
import Symbol from '@/components/Symbol.vue'
import { useModal } from '@/composables/useModal'
import { DURATION } from '@/constants/fund'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '交易資訊', routeName: undefined },
  { name: '指數收盤行情', routeName: undefined }
]

// 燈箱
const { 
  shouldModalShow,
  closeModal,
  openModal
} = useModal()

const currentDuration = ref(DURATION.oneMonth.value)
const durations = ref([
  DURATION.oneMonth,
  DURATION.threeMonth,
  DURATION.sixMonth,
  DURATION.ytd,
  DURATION.oneYear,
])

const handleDurationSelect = duration => {
  currentDuration.value = duration
}

const fakeData = ref([
  {
    id: 1,
    name: 'MSCI 中國外資自由投資50不含A及B股指數',
    date: 'YYYY/MM/DD',
    price: '1,396.31',
    fromPreviousDay: '94.84',
    fromPreviousDayPercent: '1.05'
  },
  {
    id: 2,
    name: '彭博10年期以上高評級美元公司債指數 ',
    date: 'YYYY/MM/DD',
    price: '427.98',
    fromPreviousDay: '70.10',
    fromPreviousDayPercent: '2.10'
  },
  {
    id: 3,
    name: 'ICE 15年期以上已開發市場ESG美元投資級公司債券指數',
    date: 'YYYY/MM/DD',
    price: '125.08',
    fromPreviousDay: '0.67',
    fromPreviousDayPercent: '0.39'
  },
  {
    id: 4,
    name: '臺灣指數公司特選臺灣上市上櫃優選成長高股息指數',
    date: 'YYYY/MM/DD',
    price: '267.46',
    fromPreviousDay: '0.19',
    fromPreviousDayPercent: '.033'
  },
  {
    id: 5,
    name: '美國納斯達克100指數',
    date: 'YYYY/MM/DD',
    price: '125.08',
    fromPreviousDay: -42.29,
    fromPreviousDayPercent: -0.01
  },
  {
    id: 6,
    name: '臺灣指數公司特選小資高價30指數',
    date: 'YYYY/MM/DD',
    price: 267.46,
    fromPreviousDay: '-1.50',
    fromPreviousDayPercent: -0.48
  },
  {
    id: 7,
    name: 'MSCI 中國外資自由投資50不含A及B股指數',
    date: 'YYYY/MM/DD',
    price: '1,396.31',
    fromPreviousDay: '94.84',
    fromPreviousDayPercent: '1.05'
  },
  {
    id: 8,
    name: '彭博10年期以上高評級美元公司債指數 ',
    date: 'YYYY/MM/DD',
    price: '427.98',
    fromPreviousDay: '70.10',
    fromPreviousDayPercent: '2.10'
  },
  {
    id: 9,
    name: 'ICE 15年期以上已開發市場ESG美元投資級公司債券指數',
    date: 'YYYY/MM/DD',
    price: '125.08',
    fromPreviousDay: '0.67',
    fromPreviousDayPercent: '0.39'
  },
  {
    id: 10,
    name: '臺灣指數公司特選臺灣上市上櫃優選成長高股息指數',
    date: 'YYYY/MM/DD',
    price: '267.46',
    fromPreviousDay: '0.19',
    fromPreviousDayPercent: '.033'
  },
  {
    id: 11,
    name: '美國納斯達克100指數',
    date: 'YYYY/MM/DD',
    price: '125.08',
    fromPreviousDay: -42.29,
    fromPreviousDayPercent: -0.01
  },
  {
    id: 12,
    name: '臺灣指數公司特選小資高價30指數',
    date: 'YYYY/MM/DD',
    price: 267.46,
    fromPreviousDay: '-1.50',
    fromPreviousDayPercent: -0.48
  },
])

const chartTime = ref({
  start: '2025/05/01',
  end: '2025/06/30'
})

const chartData = ref([
  {
    x: '2025/05/01',
    y: 19.24,
  },
  {
    x: '2025/05/02',
    y: 19.64,
  },
  {
    x: '2025/05/03',
    y: 19.73,
  },
  {
    x: '2025/05/04',
    y: 19.9,
  },
  {
    x: '2025/05/05',
    y: 20.23,
  },
  {
    x: '2025/05/06',
    y: 20.26,
  },
  {
    x: '2025/05/07',
    y: 20.31,
  },
  {
    x: '2025/05/08',
    y: 20.11,
  },
  {
    x: '2025/05/09',
    y: 20.29,
  },
  {
    x: '2025/05/10',
    y: 20.47,
  },
  {
    x: '2025/05/11',
    y: 20.53,
  },
  {
    x: '2025/05/12',
    y: 20.61,
  },
  {
    x: '2025/05/13',
    y: 20.46,
  },
  {
    x: '2025/05/14',
    y: 20.54,
  },
  {
    x: '2025/05/15',
    y: 20.86,
  },
  {
    x: '2025/05/16',
    y: 20.38,
  },
  {
    x: '2025/05/17',
    y: 20.26,
  },
  {
    x: '2025/05/18',
    y: 19.66,
  },
  {
    x: '2025/05/19',
    y: 19.87,
  },
  {
    x: '2025/05/20',
    y: 20.3,
  },
  {
    x: '2025/05/21',
    y: 20.12,
  },
  {
    x: '2025/05/22',
    y: 19.99,
  },
  {
    x: '2025/05/23',
    y: 19.17,
  },
  {
    x: '2025/05/24',
    y: 19.24,
  },
  {
    x: '2025/05/25',
    y: 18.93,
  },
  {
    x: '2025/05/26',
    y: 19.34,
  },
  {
    x: '2025/05/27',
    y: 19.62,
  },
  {
    x: '2025/05/28',
    y: 19.93,
  },
  {
    x: '2025/05/29',
    y: 19.56,
  },
  {
    x: '2025/05/30',
    y: 19.8,
  },
  {
    x: '2025/05/31',
    y: 20.01,
  },
  {
    x: '2025/06/01',
    y: 20.23,
  },
  {
    x: '2025/06/02',
    y: 20.5,
  },
  {
    x: '2025/06/03',
    y: 20.05,
  },
  {
    x: '2025/06/04',
    y: 19.77,
  },
  {
    x: '2025/06/05',
    y: 19.99,
  },
  {
    x: '2025/06/06',
    y: 20.09,
  },
  {
    x: '2025/06/07',
    y: 20.13,
  },
  {
    x: '2025/06/08',
    y: 19.91,
  },
  {
    x: '2025/06/09',
    y: 20.1,
  },
  {
    x: '2025/06/10',
    y: 20.36,
  },
  {
    x: '2025/06/11',
    y: 20.47,
  },
  {
    x: '2025/06/12',
    y: 20.33,
  },
  {
    x: '2025/06/13',
    y: 20.33,
  },
  {
    x: '2025/06/14',
    y: 19.78,
  },
  {
    x: '2025/06/15',
    y: 19.85,
  },
  {
    x: '2025/06/16',
    y: 19.84,
  },
  {
    x: '2025/06/17',
    y: 20.26,
  },
  {
    x: '2025/06/18',
    y: 20.43,
  },
  {
    x: '2025/06/19',
    y: 20.13,
  },
  {
    x: '2025/06/20',
    y: 19.83,
  },
  {
    x: '2025/06/21',
    y: 19.68,
  },
  {
    x: '2025/06/22',
    y: 19.31,
  },
  {
    x: '2025/06/23',
    y: 19.6,
  },
  {
    x: '2025/06/24',
    y: 19.84,
  },
  {
    x: '2025/06/25',
    y: 19.71,
  },
  {
    x: '2025/06/26',
    y: 19.78,
  },
  {
    x: '2025/06/27',
    y: 19.6,
  },
  {
    x: '2025/06/28',
    y: 19.84,
  },
  {
    x: '2025/06/29',
    y: 19.71,
  },
  {
    x: '2025/06/30',
    y: 19.78,
  },
])
</script>

<style lang="scss" scoped>
  .tab {
    @apply relative lg:w-auto lg:px-8;
    @media (max-width: 1024px) {
      &:nth-child(odd) {
        &:after {
          content: '';
          display: inline-block;
          position: absolute;
          height: 55%;
          width: 2px;
          background-color: $grey;
          right: 0;
          top: 20%;
        }
      }
    }
    @media (min-width: 1024px) {
      &:not(:last-of-type):after {
        content: '';
        display: inline-block;
        position: absolute;
        height: 50%;
        width: 1px;
        background-color: $grey;
        right: 0;
        top: 23%;
      }
    }
  }
</style>
