<template>
  <span
    :class="{'active': selected, [badgeClass]: badgeClass}"
    class="badge"
  >
    {{ label }}
  </span>
</template>
<script setup>
defineProps({
  selected: Boolean,
  badgeClass: String,
  label: String
})
</script>
