<template>
  <div>
    <span v-if="showFundCode">{{ fund.code }}&nbsp;</span>
    <span>{{ fund.name }}</span>
    <span v-if="fund.warning" class="text-red">({{ fund.warning }})</span>
  </div>
</template>
<script setup>
defineProps({
  fund: {
    type: Object,
    required: true,
  },
  showFundCode: {
    type: Boolean,
    default: true
  }
})
</script>
