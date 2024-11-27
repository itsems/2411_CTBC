<template>
  <div class="relative pt-16 text-center content-card lg:pt-11">
    <div class="absolute w-20 -translate-x-1/2 md:translate-x-0 -top-10 left-1/2 md:-left-6 md-top-7">
      <slot name="default" />
    </div>

    <div class="text-xl md:text-2xl text-main mb-7">
      <slot name="title">{{ title }}</slot>
    </div>
    <RoundButton class="!py-1 mx-auto md:!hidden" small>
      <a :href="link" download>
        <div class="flex items-center gap-2 p-1">
          <span>下載</span>
          <img class="" src="@/assets/images/etf/icon-download-a.png" alt="" />
        </div>
      </a>
    </RoundButton>
    <RoundButton text class="mx-auto !hidden md:!flex !pr-0 !pl-2 group" small>
      <a :href="link" download>
        <div class="flex items-center gap-2 p-1">
          <span>下載</span>
          <img class="group-hover:hidden" src="@/assets/images/etf/icon-download.png" alt="" />
          <img class="hidden group-hover:block" src="@/assets/images/etf/icon-download-a.png" alt="" />
        </div>
      </a>
    </RoundButton>    
  </div>
</template>
<script setup>
import RoundButton from '@/components/form/RoundButton.vue'
defineProps({
  title: {
    type: String,
    default: undefined,
  },
  link: {
    type: String,
    default: undefined,
  },
})
</script>
