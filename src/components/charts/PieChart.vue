<template>
  <Pie v-if="isLoaded" :data="chartData" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import autocolors from 'chartjs-plugin-autocolors'

const systemStore = useSystemStore()
const legendPositionByDevice = computed(() => 
  systemStore.isCurrentDesktop 
  ? 'right'
  : 'bottom'
)

ChartJS.register(ArcElement, Tooltip, Legend, autocolors)

defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

const isLoaded = ref(false)

const options = computed(() => (
  {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: legendPositionByDevice.value,
        // align: 'start',
        labels: {
          font: {
            size: 14
          },
          usePointStyle: true,
          padding: 20,
          generateLabels: function (chart) {
            var data = chart.data
            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function (label, i) {
                const meta = chart.getDatasetMeta(0)
                const style = meta.controller.getStyle(i)
                return {
                  text: `${label} ${data.datasets[0].data[i] + '%'}`,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                }
              })
            }
            return []
          }
        }
      },
      autocolors: {
        enabled: true,
        mode: 'data',
        offset: 2
      },
      tooltip: {
        backgroundColor: 'white',
        bodyColor: '#666',
        borderColor: 'rgb(209 209 209)',
        borderWidth: 1,
        padding: 15,
        displayColors: false,
        title: false,
        callbacks: {
          title: function () {
            return ''
          },
          label: function (context) {
            const { label, raw } = context
            return `${label} : ${raw}%`
          }
        }
      }
    },
    borderWidth: 0
  }
))

onMounted(() => {
  isLoaded.value = true
})
</script>
