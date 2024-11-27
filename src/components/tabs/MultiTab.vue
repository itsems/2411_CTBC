<template>
  <ul
    :class="[
      'tabs',
      'flex flex-wrap items-center justify-center',
      'overflow-hidden rounded-md',
      'cursor-pointer select-none',
      'bg-white'
    ]">
    <li
      v-for="tab in tabs"
      :key="tab.name"
      class="flex items-center justify-center w-1/2 py-4 tab lg:w-1/6"
      @click="handleTabClick( tab.name )"
      :class="{ active: currentTab === tab.name }"
    >
      <p class="w-full text-center text-md label">{{ tab.label }}</p>
    </li>
  </ul>
</template>
<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  theme: {
    type: String,
    default: 'light'
  },
  currentTab: {
    type: String,
    default: undefined
  }
})

const emit = defineEmits(['tab-click'])
const handleTabClick = tab => {
  emit('tab-click', tab)
}

</script>
<style lang="scss" scoped>
.tabs {
  border: 1px solid $grey;
  .tab {
    &.active,
    &:hover {
      background-color: #e6f7f7;
      .label {
        color: $mainGreen;
        font-weight: bold;
      }
    }
    @media (max-width: 1024px) {
      &:nth-child(odd) .label {
        border-right: 1px solid $grey;
      }
    }
    @media (min-width: 1024px) {
      &:not(:last-of-type) .label {
        border-right: 1px solid $grey;
      }
    }
  }
}
</style>
