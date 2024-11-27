<template>
  <!-- 人氣ETF -->
  <ul class="hidden lg:grid grid-cols-[45%_1fr_1fr_1fr_1fr] text-center pl-8 mb-3 pr-8">
    <li class="text-left">基金名稱</li>
    <li>最新市價</li>
    <li>預估淨值</li>
    <li>折溢價</li>
    <li>追蹤偏差</li>

  </ul>
  <RankList v-for="el in fakeFunds" :key="el.id" :fund=el />
   
</template>
<script setup>
import RankList from './rankList.vue'

// 基金淨值
const fakeFunds = [
  {
    id: 0,
    code: '00752',
    name: '中信臺灣智慧50',
    currentValue: 15.74,
    fromPreviousDayPercent: -0.13,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 1,
    code: '00753L',
    name: '中信中國50正2',
    currentValue: 11.64,
    fromPreviousDayPercent: 2.19,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 2,
    code: '00753L',
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    currentValue: 19.0,
    fromPreviousDayPercent: 1.34,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 3,
    code: '00752',
    name: '中信臺灣智慧50',
    currentValue: 217.82,
    fromPreviousDayPercent: 0,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 4,
    code: '00753L',
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    currentValue: 15.74,
    fromPreviousDayPercent: -0.13,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 5,
    code: '00752',
    name: '中信臺灣智慧50',
    currentValue: 11.64,
    fromPreviousDayPercent: 2.19,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 6,
    code: '00752',
    name: '中信中國50正2',
    currentValue: 19.0,
    fromPreviousDayPercent: 2.19,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 7,
    code: '00752',
    name: '中信臺灣智慧50',
    currentValue: 217.82,
    fromPreviousDayPercent: -0.13,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 8,
    code: '00752',
    name: '中信中國50正2',
    currentValue: 19.0,
    fromPreviousDayPercent: 2.19,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  },
  {
    id: 9,
    code: '00752',
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    currentValue: 217.82,
    fromPreviousDayPercent: -0.13,
    expectedValue: 0.44,
    discount: -0.27,
    track: 0.05
  }
]


</script>