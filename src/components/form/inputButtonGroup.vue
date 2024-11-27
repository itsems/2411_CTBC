<template>
  <div class="flex shadow-2xl rounded-3xl">
    <input
      type="email"
      class="rounded-l-3xl w-0 rounded-r-none inputs text-[#666]  flex-grow py-3"
      :placeholder="placeholder"
      :class="inputClass"
    />
    <div
      @click="handleButtonClick"
      class="flex items-center justify-center px-4 text-white border border-solid cursor-pointer select-none lg:px-7 rounded-r-3xl text-md hover:bg-darkGreen hover:border-main transitions border-main shrink-0 bg-main lg:text-base"
      :class="btnClass"
    >
      {{ buttonText }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  buttonText: String,
  placeholder: {
    type: String,
    default: undefined
  },
  inputClass: {
    type: String,
    default: undefined
  },
  btnClass: {
    type: String,
    default: undefined
  }
})
const emit = defineEmits(['button-click'])
const handleButtonClick = () => {
  emit('button-click')
}
</script>
