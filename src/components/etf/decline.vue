<template>
  <!-- 市價跌幅 -->
  <ul class="hidden lg:grid grid-cols-[90px_36%_1fr_1fr_1fr_1fr] text-center pl-8 mb-3 pr-8">
    <li class="text-left">排名</li>
    <li class="text-left">基金名稱</li>
    <li>最新市價</li>
    <li>預估淨值</li>
    <li>折溢價</li>
    <li>追蹤偏差</li>
  </ul>

  <RankListWithMedal
    v-for="( el,idx ) in fakeFunds"
    :key="el.id"
    :fund=el
    :index="idx" />
  
</template>
<script setup>
import RankListWithMedal from './rankListWithMedal.vue'

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
 }
]



</script>