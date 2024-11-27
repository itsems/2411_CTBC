<template>
  <ul class="flex flex-wrap items-center justify-center overflow-hidden rounded-md cursor-pointer select-none tabs">
    <li
      v-for="tab in tabTypes"
      :key="tab.name"
      class="flex items-center justify-center py-4 tab"
      @click="handleTabClick( tab.name )"
      :class="{ active: currentTab === tab.name }"
    >
      <p class="w-full text-center label text-md">{{ tab.label }}</p>
    </li>
  </ul>
</template>
<script setup>
import { FUND_SUB_TABS } from '@/constants/home'
const tabTypes = [
  {
    name: FUND_SUB_TABS.all,
    label: '中信全系列'
  },
  {
    name: FUND_SUB_TABS.stock,
    label: '股票型'
  },
  {
    name: FUND_SUB_TABS.bond,
    label: '債券型'
  },
  {
    name: FUND_SUB_TABS.balance,
    label: '平衡型'
  },
  {
    name: FUND_SUB_TABS.multi,
    label: '多重資產型'
  },
  {
    name: FUND_SUB_TABS.other,
    label: '其他型'
  }
]

const emit = defineEmits(['tab-click'])
const handleTabClick = tab => {
  emit('tab-click', tab)
}
defineProps({
  currentTab: String
})
</script>
<style lang="scss" scoped>
.tabs {
  border: solid #d1d1d1;
  border-width: 1px 1px 0 1px;
  background-color: #fff;
  .tab {
    border-bottom: 1px solid #d1d1d1;
    width: calc(100% / 3);
    @media (min-width: 1024px) {
      width: calc(100% / 6);
    }
    &.active,
    &:hover {
      background-color: #e6f7f7;
      .label {
        color: $mainGreen;
        font-weight: bold;
      }
    }
    &:not(:nth-child(3n)) .label {
      border-right: 1px solid #d1d1d1;
    }
    @media (min-width: 1024px) {
      &:not(:last-of-child) .label {
        border-right: 1px solid #d1d1d1;
      }
    }
  }
}
</style>
