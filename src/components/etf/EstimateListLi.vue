<template>
  <li class="relative transition bg-white shadow-lg lg:px-5 rounded-3xl lg:rounded-full group hover:bg-white lg:bg-transparent hover:shadow-lg lg:shadow-none">
    <RouterLink
      :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: etf.id } }"
      class="lg:py-2 block lg:flex lg:items-center border-0 group-hover:border-b-transparent border-[#bababa] lg:border-b border-solid"
    >
      <div class="w-full grid content grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center">
        <!-- 基金名稱 -->
        <div class="col-span-2 px-5 py-3 mb-3 lg:mb-0 font-medium lg:p-0 lg:border-0 border-b lg:col-auto border-[#eee] border-solid">
          <EtfName :fund="etf" />
        </div>
        <EstimateListLiBlock
          class="mb-3 lg:mb-0"
          label="最新市價"
          :value="etf.currentValue"
          :value-change="etf.fromPreviousDayPercent"
        />
        <EstimateListLiBlock
          class="mb-3 lg:mb-0"
          label="預估淨值"
          :value="etf.expectedValue"
          :value-change="etf.expectValueChange"
        />
        <EstimateListLiBlock
          class="mb-3 lg:mb-0"
          label="折溢價"
          :value="etf.discount"
          :value-change="etf.discountChange"
        />
        <EstimateListLiBlock class="mb-3 lg:mb-0" label="追蹤差距">
          {{ etf.track }}
        </EstimateListLiBlock>
        
      </div>
    </RouterLink>
  </li>
</template>
<script setup>

const ROUTE_NAME = inject('ROUTE_NAME')

defineProps({
  etf: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
li:hover::before {
  content: '';
  position: absolute;
  width: 100%;
  top: -1px;
  left: 0;
  height: 1px;
  background: #f4f4f4;
}
</style>