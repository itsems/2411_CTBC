<template>
  <div
    class="w-[30px] cursor-pointer h-[30px] flex items-center justify-center bg-[#c0c0c0] hover:bg-main text-white rounded-full text-md"
    @click="buttonClick"
    :class="{ '!bg-main': isActive }"
  >
    {{ text }}
  </div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  isActive: Boolean
})

const emit = defineEmits(['button-click'])
const buttonClick = () => {
  emit('button-click')
}
</script>
