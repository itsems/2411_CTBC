<template>
  <div class="pt-0 overflow-hidden page-layout">
    <!-- 環境永續 -->
    <p class="mb-6 lg:mb-12">中國信託投信遵循中國信託金控所訂定之「環境永續政策」，積極推動並導入環境與能源管理系統、綠色採購等綠色營運作為，不斷優化設備資源的使用效率，並於公司內部宣導節能、省水、省紙等節能減碳措施，善盡環境永續的責任，降低對環境的負面衝擊。</p>
  
    <VerticalBarTitle class="mb-5" title="環境永續政策" />
    <p class="mb-5 lg:mb-8">企業社會責任是本公司營運策略中重要的核心價值，也是我們傳承企業文化及品牌 精神不可或缺的DNA。我們在公司治理、客戶關懷、員工照顧、社會參與、環境保護及 節約能源等面向，均以「Green policy, Green future」做為我們實踐企業社會責任的承 諾。預防在作業活動、服務所可能產生的環境風險，降低環境衝擊，積極落實污染預 防、節能減碳及環境保護。我們承諾並持續推動以下事項：</p>
    <ul class="mb-6 ml-4 list-decimal lg:mb-8">
      <li>遵守法規自我要求，擴大採購節能標章的產品。</li>
      <li>定期辦理教育訓練，宣導環境保護與能源管理。</li>
      <li>整合各項相關資源，落實環境與能源管理方案。</li>
      <li>持續環境能源改善，定期審查以達成永續目標。</li>
      <li>期擴大企業影響力，串連周邊企業形成綠能圈。</li>
    </ul>
    <p class="mb-6 lg:mb-14">我們將實踐承諾，並傳達達給所有員工。</p>

    <VerticalBarTitle class="mb-3" title="環境管理系統及驗證" />
    <div class="mb-6 lg:flex lg:gap-9">
      <img
        class="w-[242px] mb-3 lg:w-[352px]"
        src="@/assets/images/esg/env-logo.png"
        data-aos="fade-right"
        alt="" />
      <p data-aos="fade-left" class="lg:pt-6">中國信託投信於2019年9月通過 ISO 14001 與ISO 50001二大國際標準，為臺灣首家通過驗證的證券投資信託公司。</p>
    </div>

    <VerticalBarTitle class="mb-3 lg:mb-8" title="公司內部宣導及作為" />
    <div class="grid justify-center grid-cols-4 gap-5 justify-self-center animate-start lg:gap-10 lg:grid-cols-5 mb-9">
      <ImageCenterTopTextBlock
        data-aos-anchor=".animate-start"
        data-aos="fade-up"
        class="col-start-1 col-end-3 lg:col-end-2"
        :image="image1"
        text="辦公場所使用省電燈管及中央空調管理" />
      <ImageCenterTopTextBlock
        data-aos-anchor=".animate-start"
        data-aos="fade-up"
        data-aos-delay="200"
        class="col-start-3 col-end-5 lg:col-start-2 lg:col-end-3"
        :image="image2"
      >
        落實垃圾分類<br class="hidden lg:block">資源回收再利用
      </ImageCenterTopTextBlock>
      <ImageCenterTopTextBlock
        data-aos-anchor=".animate-start"
        data-aos="fade-up"
        data-aos-delay="300"
        class="col-start-1 col-end-3 lg:col-start-3 lg:col-end-4"
        :image="image3"
        text="不定時舉辦節能減碳之獎勵活動" />
      <ImageCenterTopTextBlock
        data-aos-anchor=".animate-start"
        data-aos="fade-up"
        data-aos-delay="400"
        class="col-start-3 col-end-5 lg:col-start-4 lg:col-end-5"
        :image="image4"
      >
        公司內部及接待外賓<br class="hidden lg:block">不使用一次性餐具
      </ImageCenterTopTextBlock>
      <ImageCenterTopTextBlock
        data-aos-anchor=".animate-start"
        data-aos="fade-up"
        data-aos-delay="500"
        class="col-start-2 col-end-4 lg:col-start-5 lg:col-end-6"
        :image="image5"
        text="廣告文宣及贈品使用環保紙張及環保油墨印製" />
    </div>

  </div>
  
</template>
<script setup>
import image1 from '@/assets/images/esg/env1.png'
import image2 from '@/assets/images/esg/env2.png'
import image3 from '@/assets/images/esg/env3.png'
import image4 from '@/assets/images/esg/env4.png'
import image5 from '@/assets/images/esg/env5.png'
</script>