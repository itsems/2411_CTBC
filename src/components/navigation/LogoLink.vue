<template>
  <RouterLink :to="{ name: routeName }">
    <img src="@/assets/images/logo-w.png" alt="中國信託投信 CTBC INVESTMENTS" />
  </RouterLink>
</template>

<script setup>

defineProps({
  routeName: {
    type: String,
    default: 'Home',
  },
})
</script>
