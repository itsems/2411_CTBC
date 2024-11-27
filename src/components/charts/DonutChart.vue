<template>
  <div>
    <Doughnut v-if="isLoaded" :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import autocolors from 'chartjs-plugin-autocolors'
const system = useSystemStore()

ChartJS.register(ArcElement, Tooltip, Legend, autocolors)

defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

const isLoaded = ref(false)

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left',
      labels: {
        usePointStyle: true,
        padding: 20
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
  borderWidth: 0,
  cutout: '82%'
})

onMounted(() => {
  if (system.isCurrentMobile) {
    options.value.plugins.legend.position = 'top'
    options.value.plugins.legend.labels.padding = 10
  } else {
    options.value.plugins.legend.position = 'left'
    options.value.plugins.legend.labels.padding = 30
  }
  isLoaded.value = true
})
</script>
