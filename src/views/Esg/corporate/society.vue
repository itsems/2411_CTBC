<template>
  <div class="absolute top-[411px] h-[1280px] left-0 right-0 hidden bg-gradient lg:block" />
  <div class="py-0 page-layout">
    
    <!-- 社會責任 -->
    <p class="mb-6">
      中國信託投信持續推動投資教育服務，透過線上及線下並行方式，積極舉辦實體講座與網路直播活動；同時，本公司將員工視為最重要的資產，積極建立健康友善的職場環境，提供員工完善的職涯發展規劃及福利制度，善盡企業社會責任。
    </p>
    <VerticalBarTitle class="mb-3 lg:mb-8" title="投資教育" />
    <p class="mb-10">中國信託投信自2019年以來開辦ETF投資講座，與全台投資人進行面對面接觸，傳遞投資理財知識與風險管理觀念。2020年起受新冠疫情影響，將實體講座轉化為線上影音與直播，透過豐富的管道及形式，與投資人進行無時差的溝通與服務，滿足投資人需求，並因此榮獲2020《亞洲資產管理雜誌》「TAIWAN - Best Investor Education」大獎殊榮。</p>
    <p class="mb-5 text-xl text-center text-main lg:text-3xl lg:mb-14">全台投資人行腳式說明會</p>

    <div class="justify-between mb-10 lg:mb-[130px] lg:flex">

      <!-- taiwan -->
      <img
        src="@/assets/images/esg/taiwan.png"
        data-aos="fade-right"
        alt=""
        data-aos-once="true"
        class="mb-8 lg:w-[487px] lg:self-start mx-auto animate-start" />
      <div class="items-end lg:flex lg:flex-col">
        <!-- texts -->
        <div class="text-center lg:text-left lg:order-2">
          <div
            data-aos-anchor=".animate-start"
            data-aos-delay="100"
            data-aos="fade-left"
            class="relative inline-block mb-10 lg:mb-0">
            <img class="lg:hidden w-[162px] block mx-auto" src="@/assets/images/esg/so1-m.png" alt="走訪17+縣市" />
            <img class="hidden mx-auto mt-3 lg:block" src="@/assets/images/esg/so1-d.png" alt="走訪17+縣市" />
            <CountUp
              class="absolute text-main font-['Century_Gothic'] text-[44px] lg:text-[66px] font-bold italic right-[69px] top-[72px] lg:right-[111px] lg:top-[10px]"
              :end-val="17"
              :options="options" />
          </div>
          <br>
          <div
            data-aos-anchor=".animate-start"
            data-aos-delay="200"
            data-aos="fade-left"
            class="relative inline-block mb-10 lg:mb-0 lg:ml-[70px]">
            <img class="lg:hidden w-[168px] block mx-auto" src="@/assets/images/esg/so2-m.png" alt="舉辦155+場" />
            <img class="hidden mx-auto lg:block" src="@/assets/images/esg/so2-d.png" alt="舉辦155+場" />
            <CountUp
              class="absolute text-main font-['Century_Gothic'] text-[44px] lg:text-[66px] font-bold italic right-[50px] top-[65px] lg:right-[81px] lg:-top-[3px]"
              :end-val="155"
              :options="options" />
          </div>
          <br>
          <div
            data-aos-anchor=".animate-start"
            data-aos-delay="300"
            data-aos="fade-left"
            class="relative inline-block mb-10 lg:mb-0 lg:ml-[140px]">
            <img class="lg:hidden w-[256px] block mx-auto" src="@/assets/images/esg/so3-m.png" alt="參加人數20000+人" />
            <img class="hidden mx-auto lg:block" src="@/assets/images/esg/so3-d.png" alt="參加人數20000+人" />
            <CountUp
              class="absolute text-main font-['Century_Gothic'] text-[43px] lg:text-[64px] font-bold italic right-[48px] top-[65px] lg:right-[74px] lg:top-0"
              :end-val="20000"
              :options="options" />
          </div>
        </div>

        <!-- pic -->
        <div data-aos="fade-left" data-aos-once="true" class="overflow-hidden border-4 border-solid rounded-3xl border-main lg:order-1 lg:w-[564px] lg:border-[6px]">
          <img class="w-full" src="@/assets/images/esg/pic.png" alt="" />
        </div>
      </div>
    </div>

    <p class="text-xl text-center mb-20 video-animate-start text-main lg:text-3xl lg:mb-[90px]">線上影音&直播</p>
  </div>
  <div class="page-layout relative bg-[#f4f4f4] pt-[18%] lg:pt-0">
    <div class="flex justify-center gap-9 mb-7 lg:hidden absolute w-full px-[26px] left-0 -top-12 lg:top-0">
      <DialogTab
        class="max-w-[144px]"
        @click="handleVideoTabClick(VIDEO_TABS.tuesday)"
        :isActive="activeVideoTab === VIDEO_TABS.tuesday"
        tabClass="!rounded-2xl !bg-main">
        <img class="block mx-auto" src="@/assets/images/esg/society-vid1-m.png" alt="週二Fund愛講直播Talk Show" />
      </DialogTab>
      <DialogTab
        class="max-w-[144px]"
        @click="handleVideoTabClick(VIDEO_TABS.strategy)"
        :isActive="activeVideoTab === VIDEO_TABS.strategy"
        tabClass="!rounded-2xl !bg-main">
        <img class="block mx-auto" src="@/assets/images/esg/society-vid2-m.png" alt="財經360專業經理人解說" />
      </DialogTab>
    </div>
    <div class="hidden grid-cols-2 gap-9 mb-7 lg:flex relative lg:-top-[40px] lg:mb-0">
      <DialogTab
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-offset="400"
        data-aos-anchor=".video-animate-start"
        class="w-1/2"
        isActive
        @click="handleVideoTabClick(VIDEO_TABS.tuesday)"
      >
        <img class="mx-auto" src="@/assets/images/esg/society-vid1-d.png" alt="週二Fund愛講直播Talk Show" />
      </DialogTab>
      <DialogTab
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-offset="400"
        data-aos-anchor=".video-animate-start"
        data-aos-delay="100"
        class="w-1/2"
        isActive
        @click="handleVideoTabClick(VIDEO_TABS.strategy)"
      >
        <img class="mx-auto" src="@/assets/images/esg/society-vid2-d.png" alt="財經360專業經理人解說" />
      </DialogTab>
    </div>
    <div class="grid gap-5 mb-10 lg:grid-cols-2 lg:gap-8">
      <img class="block mx-auto" src="@/assets/images/esg/sample/1.png" alt="" />
      <img class="block mx-auto" src="@/assets/images/esg/sample/2.png" alt="" />
      <img class="block mx-auto" src="@/assets/images/esg/sample/3.png" alt="" />
      <img class="block mx-auto" src="@/assets/images/esg/sample/4.png" alt="" />
    </div>
    
  </div>
  
</template>
<script setup>
import CountUp from 'vue-countup-v3'
import { VIDEO_TABS } from '@/constants/home'

const options = {
  enableScrollSpy: true,
  scrollSpyOnce: true
}
const activeVideoTab = ref(VIDEO_TABS.tuesday)
const handleVideoTabClick = tab => {
  activeVideoTab.value = tab
}
</script>