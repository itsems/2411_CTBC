<template>
  <ul class="grid grid-cols-3 lg:flex">
    <li class="text-center lg:pl-5 lg:pr-11">
      <p class="w-full mb-1 text-center lg:mb-3 text-md lg:text-base">最新淨值</p>
      <p class="text-lg font-bold lg:text-4xl">{{ fund.netWorth }}</p>
      <p class="text-xs font-medium lg:text-sm text-grey-999">{{ fund.date }}</p>
    </li>
    <li class="text-center center-tab lg:px-14">
      <p class="w-full mb-1 text-center lg:mb-3 text-md lg:text-base">日漲跌</p>
      <p :class="isUpOrDownClass( fund.fromPreviousDay )" class="text-lg font-medium lg:text-4xl">
        {{ fund.fromPreviousDay }}
        <Symbol :number="fund.fromPreviousDay" />
      </p>
    </li>
    <li class="text-center lg:pl-10">
      <p class="w-full mb-1 text-center lg:mb-3 text-md lg:text-base">漲跌幅</p>
      <p :class="isUpOrDownClass( fund.fromPreviousDayPercent )" class="text-lg font-medium lg:text-4xl">
        {{ fund.fromPreviousDayPercent }}%
        <Symbol :number="fund.fromPreviousDayPercent" />
      </p>
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
  .center-tab {
    position: relative;
    &:after, &:before {
      content: '';
      display: inline-block;
      position: absolute;
      height: 100%;
      width: 2px;
      background-color: #c4cdce;
      top: 0;
    }
    &:after {
      left: 0%;
    }
    &:before {
      right: 0%;
    }
  }
</style>
