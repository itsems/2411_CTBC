<template>
  <div class="group hover:shadow-lg transition duration-300 grid grid-cols-[60px_auto] relative rounded-lg cursor-pointer">
    <p class="bg-darkGreen text-white font-medium text-[10px] absolute left-3 z-[1] -top-2 inline-block px-2 py-1 rounded-md">PDF</p>
    <div class="bg-[#b9d7d9] pt-2 flex justify-center items-center lg:p-3 relative rounded-l-lg overflow-hidden">
      <img class="w-[20px]" src="@/assets/images/icon/download2.png" alt="">
    </div>
    <div class="group-hover:bg-white transition duration-300 bg-[#f4f4f4] p-4 lg:px-6 flex justify-center lg:justify-center lg:items-center lg:h-[57px] rounded-r-lg overflow-hidden">
      {{ text}}
    </div>
  </div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: undefined,
  },
})
</script>
