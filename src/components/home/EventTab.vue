<template>
  <div :class="{ active: isActive }" class="flex-1 cursor-pointer group" @click="tabClick">
    <div class="relative flex items-center justify-between pb-4">
      <div class="flex items-center">
        <slot />
        <p
          :class="{ '!text-main': isActive }"
          class="text-2xl lg:text-3xl break-keep transitions pr-[18px] select-none text-[#a6a6a6] group-hover:text-main"
        >
          {{ name }}
        </p>
      </div>
      <RouterLink
        v-if="shouldShowMoreButton"
        :to="{ name: link }"
      >
        <MoreButton />
      </RouterLink>
    </div>
    <div class="bar w-full h-2 rounded-md bg-[#a6a6a6] group-hover:bg-main"/>
  </div>
</template>

<script setup>
const systemStore = useSystemStore()

const props = defineProps({
  name: String,
  isActive: Boolean,
  link: String,
  showMoreButton: Boolean
})
const emit = defineEmits(['tab-click'])
const tabClick = () => {
  emit('tab-click')
}
const shouldShowMoreButton = computed(() => (props.isActive && systemStore.isCurrentDesktop) || props.showMoreButton)
</script>

<style lang="scss" scoped>
.active .bar {
  background: linear-gradient(135deg, #00625f 15%, #24a5a6 15%);
}
</style>
