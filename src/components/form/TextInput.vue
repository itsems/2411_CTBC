<template>
  <input 
    :placeholder="placeholder"
    class="inputs"
    type="text"
    @input="handleInputUpdate"
    @keyup.enter="handleInputEnter"
  >
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: undefined,
  },
})
const emit = defineEmits(['input-enter', 'input-update'])
const handleInputEnter = () => {
  emit('input-enter')
}

const handleInputUpdate = e => {
  emit('input-update', e.target.value.trim())
}
</script>