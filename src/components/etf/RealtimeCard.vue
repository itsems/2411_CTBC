<template>
  <div class="p-0 mb-4 overflow-hidden content-card">
    <div class="px-4 py-3">
      <p class="text-md text-ellipsis">{{ fund.code }} {{ fund.name }}<span v-if="fund.warning" class="text-red">({{ fund.warning }})</span></p>
    </div>
    <div class="px-4 py-3">
      <div class="grid grid-cols-2">
        <div>
          <p class="text-md">最新市價</p>
          <p class="text-[#333] text-2xl font-semibold">{{ fund.current }}
            <span class="ml-1 text-md" :class="isUpOrDownClass(fund.currentChange)">
              <Symbol :number="fund.currentChange" />
              {{ fund.currentChange }}
            </span>
          </p>
          <p class="text-md text-grey-999">昨收市價 <span>{{ fund.yesterday1 }}</span></p>
        </div>
        <div>
          <p class="text-md">預估淨值</p>
          <p class="text-[#333] text-2xl font-medium">{{ fund.expectValue }}
            <span class="ml-1 text-md" :class="isUpOrDownClass(fund.expectValueChange)">
              <Symbol :number="fund.expectValueChange" />
              {{ fund.expectValueChange }}
            </span>
          </p>
          <p class="text-md text-grey-999">昨收淨值 <span>{{ fund.yesterday2 }}</span></p>
        </div>
      </div>
      <hr class="my-3" />
      <div class="grid items-center grid-cols-2">
        <p class="text-grey-999 text-md">折溢價</p>
        <p class="text-[#333] font-semibold text-lg">{{ fund.discount }} <span :class="isUpOrDownClass(fund.discountChange)" class="font-medium text-md">({{ fund.discountChange }}%)</span></p>
        <p class="text-grey-999 text-md">追蹤差距</p>
        <p class="text-[#333] font-semibold text-lg">{{ fund.track }}%</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
defineProps({
  fund: Object,
})
</script>
