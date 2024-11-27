<template>
  <div class="mb-5 bg-white shadow-xl rounded-3xl text-md">
    <div @click="toggle" :class="{ 'cursor-pointer' : !open }" class="flex items-start justify-between p-3 lg:justify-normal lg:items-center lg:pl-2 lg:pr-3 lg:py-2 lg:gap-6">
      <div class="rounded-full mr-3 lg:mr-0 shrink-0 bg-main text-white flex items-center justify-center w-[33px] h-[33px]">
        Q
      </div>
      <p class="w-full" >
        {{ question }}
      </p>
      <CollapseIcon v-if="!open" :isExpanded="isShown" />
    </div>

    <Collapse :when="isShown" class="bg-[#e8f7f7] overflow-hidden rounded-b-3xl">
      <div class="flex gap-3 p-3 lg:p-2 lg:pt-3 lg:gap-6 lg:pr-6">
        <div class="rounded-full shrink-0 bg-[#a6a6a6] text-white flex items-center justify-center w-[33px] h-[33px]">A</div>
        <div>
          <slot />
        </div>
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import { Collapse } from 'vue-collapsed'

const props = defineProps({
  question: {
    type: String,
    default: undefined,
  },
  open: Boolean
})

const isShown = ref(false)
if (props.open) {
  isShown.value = true
}

const toggle = () => {
  if (props.open) return
  isShown.value = !isShown.value
}
</script>
