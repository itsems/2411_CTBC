<template>
  <div class="flex items-center justify-center mb-4 fund-card-wrap lg:mb-3 lg:h-auto">
    <div
      class="w-full px-5 py-6 bg-white shadow-2xl rounded-3xl"
      :title="fund.name"
    >
      <RouterLink
        :to="{ name: ROUTE_NAME.fund.detail.name, params: { id: fund.id } }"
        class="mb-6 font-medium text-ellipsis hover:underline"
      >
        {{ fund.name }}
        <span v-if="fund.warning" class="text-red">({{fund.warning}})</span>
      </RouterLink>
      
      <div class="flex justify-between mb-1 text-md">
        <label class="text-grey-999">配息年月</label>
        <label class="font-medium">{{ fund.date }}</label>
      </div>
      <div class="flex justify-between mb-1 text-md">
        <div class="flex gap-2">
          <label class="text-grey-999">最新配息金額</label>
          <RoundButton label="配息紀錄" small text />
        </div>
        <label class="font-medium">{{ fund.dividend }}</label>
      </div>
      <div class="flex justify-between mb-1 text-md">
        <label class="text-grey-999">當期配息率</label>
        <label class="font-medium">{{ fund.ratio }}</label>
      </div>
      <div class="flex justify-between mb-1 text-md">
        <label class="text-grey-999">當期配息報酬率</label>
        <label class="font-medium">{{ fund.return }}</label>
      </div>
      <div class="flex justify-between mb-1 text-md">
        <label class="text-grey-999">配息頻率</label>
        <label class="font-medium">{{ fund.frequency }}</label>
      </div>
      <RoundButton label="線上申購" class="w-full mt-4" />
    </div>
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
