<template>
  <div class="bg-[#f4f4f4] rounded-lg px-3 py-4 mb-3 lg:mb-2 lg:py-2 lg:px-8">
    <div class="lg:grid lg:grid-cols-[45%_55%] lg:items-center">
      <div class="grid grid-cols-[90px_auto] mb-3 lg:mb-0">
        <div class="items-center rank-medal lg:flex">
          <p class="mb-3 lg:hidden">排名</p>
          <img
            :class="medalImgWidth"
            :src="medalUrl"
            alt=""
          >
        </div>
        <div class="fund-name">
          <p class="lg:hidden">基金名稱</p>
          <p class="mt-2 mb-3 text-lg font-bold lg:mt-0 lg:mb-0 lg:font-normal text-main lg:text-font-color">{{ fund.code}} {{ fund.name }}</p>
        </div>
      </div>

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
import Medal1 from '@/assets/images/medal-1.png'
import Medal2 from '@/assets/images/medal-2.png'
import Medal3 from '@/assets/images/medal-3.png'
import Medal4 from '@/assets/images/medal-4.png'
import Medal5 from '@/assets/images/medal-5.png'

const props = defineProps({
  fund: {
    type: Object,
    default: undefined,
  },
  index: {
    type: Number,
    default: -1
  }
})

const medalUrl = computed(() => {
  if (props.index === 0) return Medal1
  if (props.index === 1) return Medal2
  if (props.index === 2) return Medal3
  if (props.index === 3) return Medal4
  else return Medal5
})

const medalImgWidth = computed(() => {
  if (props.index === 0 || props.index === 1 || props.index === 2) return 'w-[30px]'
  if (props.index === 3 || props.index === 4) return 'h-[25px] ml-2'
  else return ''
})
</script>
