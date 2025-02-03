<template>
  <div class="flex items-center gap-4 pr-6 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-8">
    <TabWithBar
      v-for="name in tabs"
      :key="name"
      :is-active="current === name.name"
      :has-arrow="hasArrow"
      :name="name.label"
      text-class="!mb-1"
      @click="tabClick(name.name)"
    />
  </div>
</template>
<script setup>
defineProps({
  current: String,
  tabs: {
    type: Array,
    default: () => []
  },
  hasArrow: Boolean
})
const emit = defineEmits(['tab-click'])

const tabClick = name => {
  emit('tab-click', name)
}
</script>
