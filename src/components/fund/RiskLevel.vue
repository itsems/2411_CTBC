<template>
  <div>
    <p class="py-2 text-3xl font-bold">
      RP{{ level }}
    </p>
    <div class="flex justify-center gap-1">
      <div v-for="el in level" :key="el" class="bg-main w-[13px] h-[5px]" />
      <div v-for="el in (5-level)" :key="el" class="bg-[#bfbfbf] w-[13px] h-[5px]" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  level: Number,
})
</script>
