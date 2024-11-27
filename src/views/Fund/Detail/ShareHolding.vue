<template>
  <!-- 投資組合 -->
  <div class="content-card mb-9 lg:px-8">

    <!-- title -->
    <div class="flex items-center gap-2 mb-3 lg:mb-6">
      <img width="19" src="@/assets/images/icon/pie.png" alt="" />
      <p class="text-lg font-medium lg:pb-0 lg:mb-0 text-[#333]">
        前10大持股
      </p>
    </div>
    
    <div class="mb-8 overflow-x-auto shadow-xl lg:mb-16 rounded-2xl">
      <table class="normal-table break-keep">
        <thead>
          <tr>
            <th>排序</th>
            <th class="text-left">標的名稱</th>
            <th class="text-left">產業類別</th>
            <th class="min-w-[100px]">比重(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(company, index) in fakeData" :key="company.name">
            <td class="text-center">{{ index + 1 }}</td>
            <td>{{ company.name }}</td>
            <td>{{ company.industry }}</td>
            <td class="text-center">{{ company.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- title -->
    <div class="flex items-center gap-2 mb-8">
      <img width="17" src="@/assets/images/icon/pie2.png" alt="" />
      <p class="text-lg font-medium lg:pb-0 lg:mb-0 text-[#333]">
        資產/產業配置
      </p>
    </div>

    <!-- DonutChart -->
    <div class="py-3 chart-wrap lg:w-2/3 lg:mx-auto">
      <PieChart :chartData="chartData" />
    </div>

  </div>
  <RoutingButton
    class="block mx-auto"
    :arrow-direction="BUTTON_ARROW_DIRECTION.right"
    label="回基金列表"
    @click="router.push({ name: ROUTE_NAME.fund.index })" />
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
const fakeData = reactive([
  {
    name: '川湖',
    industry: '電子零組件業',
    value: '5.79'
  },
  {
    name: '台半',
    industry: '半導體業',
    value: '5.52'
  },
  {
    name: '昇陽半導體',
    industry: '半導體業',
    value: '5.17'
  },
  {
    name: '良維',
    industry: '電子零組件業',
    value: '5.12'
  },
  {
    name: '鈺齊-KY',
    industry: '其他',
    value: '4.86'
  },
  {
    name: '上緯投控',
    industry: '化學工業',
    value: '4.28'
  },
  {
    name: '卜蜂',
    industry: '食品工業',
    value: '4.17'
  },
  {
    name: '鉅祥',
    industry: '電子零組件業',
    value: '4.03'
  },
  {
    name: '拓凱',
    industry: '其他',
    value: '3.75'
  },
  {
    name: '國產',
    industry: '建材營造',
    value: '3.35'
  }
])

// Chart data
const chartData = computed(() => ({
  labels: ['電子零組件業', '半導體業', '其他', '化學工業', '食品工業', '建材營造'],
  datasets: [
    {
      data: [14.94, 10.69, 8.61, 4.28, 4.17, 3.35]
    }
  ]
}))
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .chart-wrap {
    height: 340px;
  }
}
</style>
