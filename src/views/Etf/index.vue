<template>
  <div class="pt-3 page-layout">
    <RouterView />
  </div>

  
</template>
<script setup>
const router = useRouter()
const currentRoute = computed(() => router.currentRoute.value.name)
const activeTab = ref(currentRoute.value)

onUpdated(() => {
  activeTab.value = router.currentRoute.value.name
})


</script>
