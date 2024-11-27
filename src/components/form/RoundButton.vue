<template>
  <button
    class="round-button"
    :disabled="disabled"
    :type="submit ? 'submit' : 'button'"
    :class="computedClass"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  text: Boolean,
  small: Boolean,
  grey: Boolean,
  hover: Boolean,
  active: Boolean,
  submit: Boolean,
  light: Boolean,
  disabled: Boolean,
})

const computedClass = computed(() => {
  return {
    'text-round-button': props.text,
    'small': props.small,
    'grey': props.grey,
    'hover': props.hover,
    'active': props.active,
    'light': props.light,
    'disable-no-hover': props.disabled
  }
})
</script>

<style lang="scss" scoped>
.round-button {
  @apply flex items-center hover:bg-darkGreen justify-center px-8 py-2 text-white select-none bg-main text-md rounded-3xl transition duration-300;
}
.text-round-button {
  @apply bg-transparent border-main border-solid text-main border hover:bg-main hover:text-white;
}
.small {
  @apply px-2 py-0;
}
.grey {
  @apply bg-grey-999 hover:bg-font-color;
}
.hover {
  background-image: linear-gradient(119deg, #00625f 50%, transparent 50%);
  background-size: 250%;
  background-position: 100%;
  transition: all 300ms ease-out;
  background-color: #95cbcb;
}
.hover:hover {
  background-position: 22%;
  @apply hover:bg-main bg-main;
}
.active {
  background-image: linear-gradient(119deg, #00625f 50%, transparent 50%);
  background-size: 250%;
  background-position: 71%;
  transition: all 300ms ease-out;
  @apply bg-main;
}
.light {
  @apply text-white border-white;
}
.disable-no-hover {
  @apply cursor-not-allowed opacity-50;
}
</style>