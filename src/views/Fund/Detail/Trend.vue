<template>
  <!-- 基金淨值 -->
  <div class="content-card mb-9 lg:px-8">
    
    <!-- title -->
    <div class="flex items-center gap-2 mb-3">
      <img width="18" src="@/assets/images/icon/trend2.png" alt="" />
      <p class="text-lg font-medium lg:pb-0 lg:mb-0 text-[#333]">
        淨值走勢
      </p>
    </div>

    <div class="mb-4 lg:justify-start lg:items-center lg:flex lg:gap-28">
      <!-- DurationSelect -->
      <DurationSelect
        :current="currentDuration"
        class="hidden mb-5 lg:mb-0 lg:block lg:shrink-0"
        @duration-select="handleDurationSelect"
      />

      <select class="mb-5 selects lg:hidden">
        <option v-for="duration in DEFAULT_DURATIONS" :key="duration.value">
          {{ duration.label }}
        </option>
      </select>
    

      <!-- RangeCalendar -->
      <RangeCalendar :range="range" />
    </div>

    <!-- LineChart -->
    <div class="mb-10 chart-zone">
      <LineChart
        v-if="isDataLoaded"
        :chartData="fakeData"
        :label="fund.name"
        :time="chartTime"
      />
    </div>
    
    <!-- 淨值 -->
    <div class="grid mb-10 gap-7 lg:grid-cols-2">
      <div>
        <p class="mb-4 text-xl text-center text-main">
          查詢期間淨值
        </p>
        <SplitBox
          leftValue="133.36"
          leftDate="2024/11/10"
          rightValue="133.36"
          rightDate="2024/11/10"
        />
        
      </div>
      <div>
        <p class="mb-4 text-xl text-center text-main">
          成立以來淨值
        </p>
        <SplitBox
          leftValue="133.36"
          leftDate="2024/11/10"
          rightValue="6.48"
          rightDate="2021/04/01"
        />
      </div>
    </div>

    <!-- 歷史淨值 -->
    <div class="flex items-center gap-2 mb-3">
      <img width="27" src="@/assets/images/icon/history.png" alt="歷史淨值" />
      <p class="text-lg font-medium lg:pb-0 lg:mb-0 text-[#333]">
        歷史淨值
      </p>
    </div>

    <div class="items-center gap-4 mb-6 lg:flex">
      <RoundButton class="mb-4 lg:mb-0" label="近30筆" />
      <p class="mb-4 lg:mb-0">查詢期間</p>
      <RangeCalendar :range="range" />
    </div>

    <div class="mb-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <div class="mb-8 overflow-x-auto shadow-xl lg:mb-0 rounded-2xl">
        <table class="mb-5 normal-table lg:mb-0 break-keep">
          <tr>
            <th width="30%" class="text-center">日期</th>
            <th width="30%" class="text-center">淨值</th>
            <th class="text-left">帳跌幅</th>
            <th width="20%" class="text-left">淨值組成</th>
          </tr>
          <tr v-for="data in fakeThirtyDayValues" :key="data.date">
            <td class="text-center">{{ data.date }}</td>
            <td class="text-center">{{ data.value }}</td>
            <td>
              <p :class="isUpOrDownClass( data.amplitude )" class="min-w-max">
                <Symbol :number="data.amplitude" />
                {{ data.amplitude }}%
              </p>
            </td>
            <td>
              <RoundButton
                label="查看"
                text
                small
                class="!px-3 break-keep"
                @click="openModal"
              />
            </td>
          </tr>
        </table>
      </div>
      <div class="mb-8 overflow-x-auto shadow-xl lg:mb-0 rounded-2xl">
        <table class="mb-5 normal-table lg:mb-0 break-keep">
          <tr>
            <th width="30%" class="text-center">日期</th>
            <th width="30%" class="text-center">淨值</th>
            <th class="text-left">帳跌幅</th>
            <th width="20%" class="text-left">淨值組成</th>
          </tr>
          <tr v-for="data in fakeThirtyDayValues" :key="data.date">
            <td class="text-center">{{ data.date }}</td>
            <td class="text-center">{{ data.value }}</td>
            <td>
              <p :class="isUpOrDownClass( data.amplitude )" class="min-w-max">
                <Symbol :number="data.amplitude" />
                {{ data.amplitude }}%
              </p>
            </td>
            <td>
              <RoundButton
                label="查看"
                text
                small
                class="!px-3 break-keep"
                @click="openModal"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <RoutingButton
    class="block mx-auto mb-8"
    :arrow-direction="BUTTON_ARROW_DIRECTION.right"
    label="回基金列表"
    @click="router.push({ name: ROUTE_NAME.fund.index })" />

  <Teleport to="body">
    <Modal :show="shouldModalShow" header="淨值組成項目" @close="closeModal">
      <template #body>
        <p class="mb-5 text-lg font-bold text-center">(證券代碼) (基金名稱)(-基金級別)</p>
        <p class="mb-4">日期：YYYY/MM/DD</p>
        <p class="mb-8">本基金淨值主要由｢面額｣、｢收益平準金｣及｢資本利得｣所組成。其中｢收益平準金｣係指自本基金成立日起，凡受益憑證申購或買回價金中，計算日時屬於原受益人每受益權單位淨資產價值中所累積之收入，扣除費用部分屬之。為使本基金配息政策穩定，本基金之配息來源可能包含前述｢收益平準金｣，相關資訊如下：</p>

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
  </Teleport>

</template>
<script setup>
import { DURATION, DEFAULT_DURATIONS } from '@/constants/fund'
import { BUTTON_ARROW_DIRECTION } from '@/constants/layout'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

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

const currentDuration = ref(DURATION.oneMonth.value)
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
    amplitude: 0.89
  },
  {
    date: '2022/11/28',
    value: 15.58,
    amplitude: 0.25
  },
  {
    date: '2022/11/24',
    value: 15.55,
    amplitude: 0.90
  },
  {
    date: '2022/11/22',
    value: 15.38,
    amplitude: -0.45
  },
  {
    date: '2022/11/18',
    value: 15.47,
    amplitude: -1.08
  },
  {
    date: '2022/11/16',
    value: 15.46,
    amplitude: 0.52
  },
  {
    date: '2022/11/14',
    value: 15.25,
    amplitude: 0.66
  },
  {
    date: '2022/11/10',
    value: 14.98,
    amplitude: -0.79
  },
  {
    date: '2022/11/08',
    value: 14.97,
    amplitude: -0.06
  },
  {
    date: '2022/11/04',
    value: 14.90,
    amplitude: 0.81
  },
  {
    date: '2022/11/02',
    value: 14.73,
    amplitude: 0.89
  },
  {
    date: '2022/10/31',
    value: 14.41,
    amplitude: 1.12
  },
  {
    date: '2022/10/27',
    value: 14.41,
    amplitude: 3.14
  },
  {
    date: '2022/10/25',
    value: 14.11,
    amplitude: -1.87
  },
  {
    date: '2022/10/21',
    value: 14.26,
    amplitude: -0.76
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
.chart-zone {
  height: 325px;
  @media (min-width: 1024px) {
    height: 377px;
  }
}
.section-title {
  @apply pb-3 mb-3 text-2xl font-bold border-b border-solid lg:pb-0 lg:mb-0 lg:border-b-0 lg:mr-7 text-darkGreen border-grey
}
</style>