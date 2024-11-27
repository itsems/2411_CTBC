<template>
  <div class="relative">
    <ul class="flex justify-between gap-3 overflow-x-auto text-center lg:gap-0 duration-select lg:justify-start wrapper-box">
      <li
        v-for="duration in durations"
        :key="duration.value"
        :class="{ active: current === duration.value }"
        @click="handleDurationClick(duration.value)"
        class="pr-3 cursor-pointer select-none lg:px-3 shrink-0 font-md lg:w-auto hover:text-main">
        {{ duration.label }}
      </li>
    </ul>
    <img
      width="9"
      class="absolute block bg-white -right-1 top-1 lg:hidden"
      src="@/assets/images/icon/arrow-right-b.png"
      alt=""
      @click="scrollRight"
    />
  </div>
</template>

<script setup>
import { DURATION, DEFAULT_DURATIONS } from '@/constants/fund'

defineProps({
  current: {
    type: String,
    default: DURATION.oneMonth.value,
  },
  durations: {
    type: Array,
    default: DEFAULT_DURATIONS,
  },
})
const emit = defineEmits(['duration-select'])

const handleDurationClick = duration => {
  emit('duration-select', duration)
}

const scrollRight = () => {
  let content = document.querySelector(".wrapper-box")
  content.scrollLeft += 80
}
</script>

<style lang="scss" scoped>
.duration-select {
  li {
    &:not(:last-of-type) {
      border-right: 1px solid $grey;
    }
    &.active {
      color: $mainGreen;
      font-weight: bold;
    }
  }
}
</style>