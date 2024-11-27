<template>
  <ul
    :class="[
      'tabs',
      'items-center justify-center flex flex-wrap',
      'overflow-hidden rounded-md',
      'cursor-pointer select-none',
      'bg-white shadow-md'
    ]">
    <li
      v-for="tab in tabs"
      :key="tab.name"
      class="flex items-center justify-center flex-grow flex-shrink-0 py-4 tab basis-1/2 lg:flex-1"
      @click="handleTabClick( tab.name )"
      :class="{ active: currentTab === tab.name }"
    >
      <p class="w-full text-lg text-center lg:text-xl label">{{ tab.label }}</p>
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
  .label {
    color: $mainGreen;
  }
  .tab {
    &.active,
    &:hover {
      background-color: $mainGreen;
      .label {
        color: #fff
      }
    }
    @media (max-width: 1024px) {
      &:nth-child(odd):not(:last-of-type) .label {
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
