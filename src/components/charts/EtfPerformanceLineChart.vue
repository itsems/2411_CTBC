<template>
  <Line :data="data" :options="options" />
</template>

<script setup>
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm'
import {
  Chart as ChartJS,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import dayjs from 'dayjs'

ChartJS.register(
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps({
	chartData: {
		type: Array,
		required: true,
	},
	label: {
		type: String,
		default: undefined
	},
	time: {
		type: Object,
		required: true
	},
})

const options =  {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    tooltip: {
			caretSize: 8,
      mode: 'index',
      intersect: false,
      caretPadding: 10,
      backgroundColor: '#d0e9e9',
      displayColors: false,
      titleColor: '#666',
      titleFont: {
        size: 15,
        weight: 'normal',
        family: 'Noto Sans TC'
      },
      bodyColor: '#666',
      bodyFont: {
        size: 15
      },
      padding: 10,
      callbacks: {
        title: function(context) {
          return `淨值：${context[0].formattedValue}`
        },
        label: function(context) {
          return `日期：${context.label}`
        },
      },
    },
    legend: {
      display: false
    },

  },
  scales: {
    x: {
      type: 'time',
      parser: function (value) {
        return dayjs(value).toDate()
      },
      time: {
        displayFormats: {
          day: 'YYYY/MM',
        },
        unit: 'day',
        tooltipFormat: 'YYYY/MM/DD',
      },
      min: props.time.start,
      max: props.time.end,
      ticks: {
        autoSkip: true,
        maxRotation: 20,
      }
    },
    y: {
      type: 'linear',
      display: true,
      ticks: {
        autoSkip: true,
        minRotation: 0,
        maxRotation: 50,
        tickMarkLength: 10,
      }
    }
  }
}

const data = ref({
  datasets: [
    {
      data: props.chartData,
      pointStyle: 'circle',
      radius: 0,
      hoverRadius: 5,
      backgroundColor: "#24a5a6",
      pointHoverRadius: 7,
      pointBorderColor: "#fff",
      pointHoverBorderWidth: 3,
      borderColor: "#05797a",
      borderWidth: 2,
      label: props.label,
      lineTension: 0.4,
      fill: false,
      
    }
  ]
})
</script>