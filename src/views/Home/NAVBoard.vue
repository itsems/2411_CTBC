<template>
  <div class="relative bg-gradient h-svh">
    <div class="px-5 py-2 mb-16 bg-darkGreen">
      <img class="w-[175px]" src="@/assets/images/logo-w.png" alt="中國信託投信 CTBC INVESTMENTS" />
    </div>
    <div class="px-[10%]">
      
      <!-- Label Title -->
      <div class="mb-16 text-5xl font-medium tracking-wider text-center text-main">法盛投資系列基金淨值</div>
      
      <!-- Nav Title -->
      <div class="grid shadow-md mb-4 text-center text-lg bg-main grid-cols-[1fr_200px_200px_200px_200px] text-white rounded-full py-2 mx-auto">
        <span>基金名稱</span>
        <span>日期</span>
        <span>淨值</span>
        <span>漲跌</span>
        <span>漲跌幅</span>
      </div>
    
      <!-- List item Start -->
      <div class="mb-4 list-item">
        <span class="text-left">盧米斯賽勒斯債券基金-I/D美元級別</span>
        <span>1/6</span>
        <span>11.9588</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(0.1250)">
            0.1250
            <Symbol :number="0.1250"  />
          </label>
        </span>
        <span :class="isUpOrDownClass(2.43)">2.43</span>
      </div>
      <!-- List item End -->
     
      <div class="mb-4 list-item">
        <span class="text-left">盧米斯賽勒斯非投資等級債券基金-I/D美元級別</span>
        <span>1/6</span>
        <span>4.70</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(-0.01)">
            -0.01
            <Symbol :number="-0.01"  />
          </label>
        </span>
        <span :class="isUpOrDownClass(-0.21)">-0.21</span>
      </div>
      <div class="mb-4 list-item">
        <span class="text-left">盧米斯賽勒斯全球機會債券基金-I/D美元級別</span>
        <span>1/6</span>
        <span>9.28</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(-0.01)">
            -0.01
            <Symbol :number="-0.01"  />
          </label>
        </span>
        <span :class="isUpOrDownClass(-0.21)">-0.21</span>
      </div>
      <div class="mb-4 list-item">
        <span class="text-left">盧米斯賽勒斯債券基金-R/DG美元級別</span>
        <span>1/6</span>
        <span>11.9588</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(0.1250)">
            0.1250
            <Symbol :number="0.1250"  />
          </label>
        </span>
        <span :class="isUpOrDownClass(2.43)">2.43</span>
      </div>
    </div>
    <div class="h-[1px] bg-[#d5d5d5] absolute w-full bottom-24" />
    <p class="absolute text-[#333] text-lg -translate-x-1/2 bottom-10 left-1/2">以上為最新參考淨值，實際交易淨值以交易確認單為主，或請參考中國信託投信網站公告之淨值。</p>
  </div>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
</script>
<style scoped>
.list-item {
  @apply grid shadow-md pl-6 text-[#333] text-center text-2xl py-4 font-medium bg-white grid-cols-[1fr_200px_200px_200px_200px] rounded-full mx-auto;
}
</style>