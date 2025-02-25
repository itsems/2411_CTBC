<template>
  <ul class="flex flex-wrap justify-center overflow-hidden rounded-md lg:justify-start">
    <li class="w-1/2 py-4 text-center lg:w-auto lg:pr-12 tab lg:text-left">
      <p class="w-full text-center text-md label lg:text-left lg:pl-3">
        最新淨值
      </p>
      <!-- 最新淨值 -->
      <p class="py-2 text-3xl font-bold text-black lg:py-3">
        {{ fund.netWorth }}
      </p>
      <p class="w-full mt-1 text-xs font-medium lg:mt-0 text-grey-999 lg:text-left lg:pl-2">
        <!-- 日期 -->
        {{ fund.date }}
      </p>
    </li>
    <li class="w-1/2 py-4 text-center lg:w-1/4 tab">
      <p class="w-full text-center text-md label">
        日漲跌
      </p>
      <!-- 日漲跌 -->
      <p :class="isUpOrDownClass( fund.fromPreviousDay )" class="py-2 text-3xl font-bold lg:py-3">
        {{ fund.fromPreviousDay }}
        <Symbol :number="fund.fromPreviousDay" />
      </p>
    </li>
    <li class="w-1/2 py-4 text-center lg:w-1/4 tab">
      <p class="w-full text-center text-md label">
        漲跌幅
      </p>
      <!-- 漲跌幅 -->
      <p :class="isUpOrDownClass( fund.fromPreviousDayPercent )" class="py-2 text-3xl font-bold lg:py-3">
        {{ fund.fromPreviousDayPercent }}
        <Symbol :number="fund.fromPreviousDayPercent" />
      </p>
    </li>
    <li class="w-1/2 py-4 text-center lg:w-1/4 tab">
      <p class="w-full text-center text-md label">
        風險屬性
      </p>
      <!-- 風險屬性 -->
      <RiskLevel :level="fund.riskLevel"></RiskLevel>
    </li>
  </ul>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

defineProps({
  fund: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
  .tab {
    position: relative;
    @media (max-width: 1024px) {
      &:nth-child(odd) {
        &:after {
          content: '';
          display: inline-block;
          position: absolute;
          height: 55%;
          width: 2px;
          background-color: $grey;
          right: 0;
          top: 20%;
        }
      }
    }
    @media (min-width: 1024px) {
      &:not(:last-of-type):after {
        content: '';
        display: inline-block;
        position: absolute;
        height: 50%;
        width: 1px;
        background-color: $grey;
        right: 0;
        top: 23%;
      }
    }
  }
</style>
