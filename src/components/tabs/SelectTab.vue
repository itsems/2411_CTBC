<template>
  <ul
    :class="[
      'flex items-center gap-6 lg:gap-12',
      'rounded-lg border-grey',
      'cursor-pointer select-none',
    ]">
    <li 
      v-for="tab in tabs"  
      :key="tab.name"
      @click="handleListClick(tab.name)"
      class="flex items-center justify-center pb-1 text-xl border-b-4 border-transparent border-solid transitions tab min-w-max"
      :class="{ active: currentTab === tab.name }"
    >
      {{ tab.label }}
    </li>
    <li> &nbsp; </li>
  </ul>
    
</template>
<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')

defineProps({
  currentTab: {
    type: String,
    required: true,
  },
})


const tabs = ref([
  { label: '基金資訊', name: ROUTE_NAME.fund.info.name },
  { label: '基金淨值', name: ROUTE_NAME.fund.trend.name },
  { label: '績效表現', name: ROUTE_NAME.fund.performance.name },
  { label: '投資組合', name: ROUTE_NAME.fund.shareHolding.name },
  { label: '配息紀錄', name: ROUTE_NAME.fund.dividend.name }
])

const emit = defineEmits(['select-update'])


const handleListClick = tab => {
  emit('select-update', tab)
}
</script>
<style lang="scss" scoped>
  .tab {
  //   @media (min-width: 1024px) {
  //     flex: auto;
  //   }
    &.active,
    &:hover {
      color: $mainGreen;
      border-color: $mainGreen
    }
  //   @media (max-width: 1024px) {
  //     &:nth-child(odd) .label {
  //       border-right: 1px solid $grey;
  //     }
  //   }
  //   @media (min-width: 1024px) {
  //     &:not(:last-of-type) .label {
  //       border-right: 1px solid $grey;
  //     }
  //   }
  }
</style>