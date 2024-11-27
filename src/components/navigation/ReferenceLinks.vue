<template>
  <div class="flex justify-center">
    <a :href="LINE_LINK" class="w-10 lg:w-[34px] lg:ml-10" target="_blank">
      <img class="block w-full" src="@/assets/images/nav/line.png" alt="" />
    </a>
    <a :href="FB_LINK" class="w-10 lg:w-[34px] ml-[11px]" target="_blank">
      <img class="block w-full" src="@/assets/images/nav/fb.png" alt="" />
    </a>
    <a :href="YT_LINK" class="w-10 lg:w-[34px] ml-[11px]" target="_blank">
      <img class="block w-full" src="@/assets/images/nav/yt.png" alt="" />
    </a>
  </div>
</template>
<script setup>
const LINE_LINK = 'https://page.line.me/ctbcfund?openQrModal=true'
const FB_LINK = 'https://www.facebook.com/ctbcinvestmentsfanpage/?utm_source=ec&utm_medium=social&utm_campaign=23_ec_branding&utm_content=230806_fbopen'
const YT_LINK = 'https://www.youtube.com/@CTBCInvestmentsTop1'
</script>
