<template>
  <div class="w-full px-5 py-5 bg-white rounded-3xl" :title="fund.name">
    <!-- 基金名稱 -->
    <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 } }">
      <div class="mb-6 font-medium text-ellipsis name hover:underline">
        <EtfName :fund="fund" />
      </div>
    </RouterLink>
          
    <div class="flex items-end justify-between mb-1.5 net-worth text-md">
      <label class="text-[#999]">配息年月</label>
      <label class="font-medium">
        {{ fund.distributionDay }}
      </label>
    </div>
    <div class="flex items-end justify-between mb-1.5 net-worth text-md">
      <div class="flex gap-2">
        <label class="text-[#999]">最新配息金額</label>
        <RoundButton label="配息紀錄" small text />
      </div>

      <label class="font-medium">
        {{ fund.latestShare }}
      </label>
    </div>
    <div class="flex items-end justify-between mb-1.5 net-worth text-md">
      <label class="text-[#999]">當期配息率</label>
      <label class="font-medium">
        {{ fund.ratio }}
      </label>
    </div>
    <div class="flex items-end justify-between mb-1.5 net-worth text-md">
      <label class="text-[#999]">當期含息報酬率</label>
      <label class="font-medium">
        {{ fund.ratio2 }}
      </label>
    </div>
    <div class="flex items-end justify-between mb-4 net-worth text-md">
      <label class="text-[#999]">配息頻率</label>
      <label class="font-medium">
        {{ fund.frequency }}
      </label>
    </div>
          
    
    <RouterLink :to="{ name: ROUTE_NAME.etf.detail.name, params: { id: 0 } }" class="w-full">
      <RoundButton label="詳細介紹" class="w-full" />
    </RouterLink>
  </div>
</template>
<script setup>

const ROUTE_NAME = inject('ROUTE_NAME')

defineProps({
  fund: {
    type: Object,
    required: true
  },
})
</script>
<style lang="scss" scoped>
.text-ellipsis {
  @include generateContentStyle(16px, 3, 1.3, 16px, 3);
}
</style>
