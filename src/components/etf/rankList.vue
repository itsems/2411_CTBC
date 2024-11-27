<template>
  <div class="bg-[#f4f4f4] rounded-lg px-3 py-5 mb-3 lg:mb-2 lg:py-2 lg:px-8">
    <p class="lg:hidden">基金名稱</p>
    <div class="lg:grid lg:grid-cols-[45%_55%] lg:items-center">
      <p class="mt-2 mb-3 text-lg font-bold lg:mt-0 lg:mb-0 lg:font-normal text-main lg:text-font-color">{{ fund.code}} {{ fund.name }}</p>
      <ul class="flex">
        <RankListItem
          label="最新市價"
          :current="fund.currentValue"
          :from="fund.fromPreviousDayPercent"
        />
        <RankListItem
          label="預估淨值"
          :current="fund.currentValue"
          :from="fund.expectedValue"
        />
        <RankListItem
          label="折溢價"
          :current="fund.currentValue"
          :from="fund.discount"
        />
        <RankListItem
          label="追蹤偏差"
          :current="fund.currentValue"
          :from="fund.track"
        />
      </ul>
    </div>
  </div>
</template>
<script setup>
import RankListItem from './rankListItem.vue'

defineProps({
  fund: {
    type: Object,
    default: undefined,
  },
})
</script>
