<template>
  <div class="relative w-full px-5 pt-5 pb-56 bg-white rounded-2xl" :title="fund.name">
    <!-- ETF 類型 -->
    <div class="inline-block px-3 py-[3px] mb-4 text-sm border border-solid rounded-3xl border-main text-main">
      {{ fund.tag }}
    </div>
    <!-- 基金名稱 -->
    <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 } }">
      <EtfName :fund="fund" class="text-lg font-medium lg:text-base text-ellipsis hover:underline" />
    </RouterLink>

    <!-- Bottom contents wrapper -->
    <div class="absolute bottom-5 w-[calc(100%-2.5rem)]">
          
      <!-- 基金淨值 -->
      <div class="flex items-end justify-between mb-2 net-worth text-md">
        <label class="text-[#999]">基金淨值</label>
        <label class="text-3xl font-black text-[#333]">
          {{ fund.netWorth }}
        </label>
      </div>
          
      <div class="flex justify-between mb-1 text-md text-[#999]">
        <label>日期</label>
        <label class="font-medium">{{ fund.date }}</label>
      </div>
      <div class="flex justify-between mb-1 text-md text-[#999]">
        <label>日漲跌</label>
        <label class="font-medium" :class="isUpOrDownClass(fund.fromPreviousDay)">
          {{ fund.fromPreviousDay }}
          <Symbol :number="fund.fromPreviousDay" />
        </label>
      </div>
      <div class="flex justify-between text-md text-[#999] mb-6">
        <label>漲跌幅</label>
        <label class="font-medium" :class="isUpOrDownClass(fund.fromPreviousDayPercent)">
          {{ fund.fromPreviousDayPercent }}%
          <Symbol :number="fund.fromPreviousDayPercent" />
        </label>
      </div>
      <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: fund.id } }" class="w-full">
        <RoundButton label="詳細介紹" class="w-full" />
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

const ROUTE_NAME = inject('ROUTE_NAME')

defineProps({
  fund: {
    type: Object,
    required: true
  },
})
</script>
