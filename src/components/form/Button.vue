<template>
  <button
    :class="[
      'buttons',
      'flex items-center justify-center w-full', 
      'bg-main text-white',
      'border border-solid rounded-md',
      'border-main lg:hover:bg-transparent lg:hover:text-main',
      'transition-all duration-300',
      'py-2','lg:py-2 lg:px-0'
    ]"
  >
    {{text}}
  </button>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: undefined,
  },
})
</script>

