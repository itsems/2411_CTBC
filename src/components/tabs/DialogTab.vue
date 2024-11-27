<template>
  <div
    :class="{ active: isActive, [tabClass]: tabClass }"
    class="relative hover:text-main text-[#a6a6a6] transitions flex items-center justify-center px-4 py-2 lg:py-4 bg-white shadow-lg cursor-pointer rounded-full lg:rounded-full tab text-md"
  >
    <div v-if="$slots.default">
      <slot />
    </div>
    <span
      :class="{ 'text-white': isActive, [textClass]: textClass }"
      class="text-lg font-light leading-4 text-center lg:text-2xl"
    >
      {{ name }}
    </span>
  </div>
</template>
<script setup>
defineProps({
  name: String,
  isActive: Boolean,
  tabClass: String,
  textClass: String
})
</script>
<style lang="scss" scoped>
.tab {
  &.active {
    background-color: $mainGreen;
    color: #fff;
    &:after {
      position: absolute;
      content: '';
      width: 0px;
      height: 0px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      top: calc(100% - 1px);
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-bottom: 10px solid transparent;
      border-top: 9px solid $mainGreen;
    }
  }
  @media (min-width: 992px) {
    &.active {
      &:after {
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-top: 14px solid $mainGreen;
      }
    }
  }
}
</style>
