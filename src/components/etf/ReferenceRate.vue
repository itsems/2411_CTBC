<template>
  <div>
    1 {{ referenceCurrency }} = {{ number }} {{ currency }}
    <span class="hidden lg:inline">；</span><br class="lg:hidden" />
  </div>
</template>
<script setup>
defineProps({
  referenceCurrency: {
    type: String,
    default: 'USD',
  },
  number: {
    type: String,
    default: undefined,
  },
  currency: {
    type: String,
    default: undefined,
  }
})
</script>
