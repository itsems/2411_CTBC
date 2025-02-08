<template>
  <div :class="{ active: isActive, 'cursor-pointer': !isActive }" class="group">
    <div class="relative flex items-center">
      <p
        :class="{ '!text-main': isActive , [textClass]: textClass }"
        class="break-keep pr-7 lg:pr-o flex items-center transitions select-none text-lg text-[#a6a6a6] lg:text-2xl mb-1 lg:mb-4 group-hover:text-main"
      >
        <template v-if="$slots.activeIcon">
          <div :class="{ 'group-hover:block hidden': !isActive, block: isActive }" class="mr-2 shrink-0">
            <slot name="activeIcon" />
          </div>
        </template>
        <template v-if="$slots.inactiveIcon">
          <div :class="{ '!block group-hover:!hidden': !isActive }" class="hidden mr-2 shrink-0">
            <slot name="inactiveIcon" />
          </div>
        </template>

        <slot name="text">{{ name }}</slot>
      </p>
      <div v-if="shouldShowArrow" class="absolute right-0 top-[11px]">
        <img class="w-[14px]" src="@/assets/images/icon/bar-tab-active.png" alt="" />
      </div>
    </div>
    <div
      :style="{ background: barStyle }"
      class="w-full h-[7px] lg:h-[10px] rounded-md bar bg-[#a6a6a6] group-hover:bg-main"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  hasArrow: Boolean,
  isActive: Boolean,
  textClass: String,
  gradientPercentage: {
    type: Number,
    default: 40
  },
})

const shouldShowArrow = computed(() => props.isActive && props.hasArrow)
const barStyle = computed(() => 
  props.isActive 
    ?`linear-gradient(135deg, #00625f ${props.gradientPercentage}%, #24a5a6 ${props.gradientPercentage}%)`
    : '' 
)
</script>