<template>
  <TabWithBar
    v-for="tab in TABS"
    :key="tab.name"
    :is-active="currentTab === tab.name"
    @click="handleTabClick(tab.name)"
  />
</template>
<script setup>
defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
  currentTab: {
    type: String,
    default: undefined,
  },
})

// tabs
const TABS = ref([
  {
    name: 'all',
    label: '全部產品'
  },
  {
    name: 'oversea',
    label: '海外ETF'
  },
  {
    name: 'domestic',
    label: '國內ETF'
  },
  {
    name: 'leveraged',
    label: '槓/反ETF'
  },
  {
    name: 'bond',
    label: '債券型ETF'
  }
])
const emit = defineEmits(['tab-click'])
const handleTabClick = tabName => {
  emit('tab-click', tabName)
}
</script>
