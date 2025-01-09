<template>
  <div class="relative bg-gradient w-[1050px] h-[1680px] mx-auto">
    <div class="px-6 py-4 mb-9 bg-darkGreen">
      <img class="w-[260px]" src="@/assets/images/logo-w.png" alt="中國信託投信 CTBC INVESTMENTS" />
    </div>
    <div class="px-6 mb-8">
      
      <!-- Label Title -->
      <div class="text-6xl font-medium tracking-wider text-center mb-9 text-main">法盛投資系列基金淨值</div>
      
      <!-- Nav Title -->
      <div class="grid shadow-md mb-4 text-center text-4xl bg-main grid-cols-[1fr_100px_130px_155px_135px] text-white rounded-full py-4 mx-auto pr-4">
        <span class="pl-16 text-left">基金名稱</span>
        <span>日期</span>
        <span>淨值</span>
        <span>漲跌</span>
        <span>漲跌幅</span>
      </div>
    
      <!-- List item Start -->
      <div class="list-item">
        <span class="text-left">盧米斯賽勒斯債券基金-I/D美元級別</span>
        <span>1/6</span>
        <span>11.95</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(0.1250)">
            <Symbol :number="0.1250"  />
            <span>0.1250</span>
          </label>
        </span>
        <span :class="isUpOrDownClass(2.43)">2.43%</span>
      </div>
      <!-- List item End -->
     
      <div class="list-item">
        <span class="text-left">盧米斯賽勒斯非投資等級債券基金-I/D美元級別</span>
        <span>1/6</span>
        <span>4.70</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(-0.01)">
            <Symbol :number="-0.01"  />
            <span>-0.01</span>
          </label>
        </span>
        <span :class="isUpOrDownClass(-0.21)">-0.21%</span>
      </div>
      <div class="list-item">
        <span class="text-left">盧米斯賽勒斯全球機會債券基金-I/D美元級別</span>
        <span>1/6</span>
        <span>9.28</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(-0.01)">
            <Symbol :number="-0.01"  />
            <span>-0.01</span>
          </label>
        </span>
        <span :class="isUpOrDownClass(-0.21)">-0.21%</span>
      </div>
      <div class="list-item">
        <span class="text-left">盧米斯賽勒斯債券基金-R/DG美元級別</span>
        <span>1/6</span>
        <span>11.95</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(0.1250)">
            <Symbol :number="0.1250"  />
            <span>0.1250</span>
          </label>
        </span>
        <span :class="isUpOrDownClass(2.43)">2.43%</span>
      </div>
      <div class="list-item">
        <span class="text-left">盧米斯賽勒斯債券基金-R/DG美元級別</span>
        <span>1/6</span>
        <span>4.70</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(0.1250)">
            <Symbol :number="0.1250"  />
            <span>0.1250</span>
          </label>
        </span>
        <span :class="isUpOrDownClass(2.43)">2.43%</span>
      </div>
      <div class="list-item">
        <span class="text-left">盧米斯賽勒斯債券基金-R/DG美元級別</span>
        <span>1/6</span>
        <span>11.95</span>
        <span>
          <label class="font-medium" :class="isUpOrDownClass(0.1250)">
            <Symbol :number="0.1250"  />
            <span>0.1250</span>
          </label>
        </span>
        <span :class="isUpOrDownClass(2.43)">2.43%</span>
      </div>
    </div>
    <NavBoardSlider class="mb-16" />
    <div class="h-[1px] bg-[#d5d5d5] w-full mb-4" />
    <p class="text-[#333] text-2xl text-center">以上為最新參考淨值，實際交易淨值以交易確認單為主，或請參考中國信託投信網站公告之淨值。</p>
  </div>
</template>
<script setup>
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'
</script>
<style scoped>
.list-item {
  @apply mb-4 grid shadow-md pl-6 text-[#333] leading-snug text-center text-4xl py-4 font-medium bg-white grid-cols-[1fr_100px_130px_155px_135px] rounded-[2rem] mx-auto pr-3;
}
</style>