<template>
  <div class="relative w-full px-5 pt-5 pb-56 bg-white shadow-2xl rounded-3xl" :title="fund.name">
    <RouterLink
      :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: fund.id } }"
      class="block mb-4 text-lg font-medium hover:underline"
    >
      <p>
        {{ fund.name }}
        <span v-if="fund.warning" class="text-red">({{ fund.warning }})</span>
      </p>  
    </RouterLink>
      
    <!-- Bottom contents wrapper -->
    <div class="absolute bottom-5 w-[calc(100%-2.5rem)]">
      <div class="flex justify-between mb-1 text-grey-999 text-md">
        <label>基金淨值</label>
        <label class="text-3xl font-black text-[#333]">
          {{ fund.netWorth }}
        </label>
      </div>
      <div class="flex justify-between mb-1 text-grey-999 text-md">
        <label>日期</label>
        <label class="font-medium">{{ fund.date }}</label>
      </div>
      <div class="flex justify-between mb-1 text-grey-999">
        <label>日漲跌</label>
        <label class="font-medium" :class="isUpOrDownClass( fund.fromPreviousDay )">
          {{ fund.fromPreviousDay }}
          <Symbol :number="fund.fromPreviousDay" />
        </label>
      </div>
      <div class="flex justify-between mb-1 text-grey-999">
        <label>漲跌幅</label>
        <label class="font-medium" :class="isUpOrDownClass( fund.fromPreviousDayPercent )">
          {{ fund.fromPreviousDayPercent }}%
          <Symbol :number="fund.fromPreviousDayPercent" />
        </label>
      </div>
      <slot name="buttons" :fund="fund" />
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
