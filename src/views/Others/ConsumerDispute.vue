<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="28" title="金融消費爭議處理專區" :imagePath="IconPath" />
    <div class="leading-7 content">
      <div class="mb-20 lg:mb-12">
        本公司基金投資人與基金銷售機構發生爭議，應先依各基金銷售機構之有關申訴處理程序辦理，於必要時，本公司亦得從中協助及協調基金銷售機構與投資人間之任何爭議。投資人申訴評議流程如下：
      </div>

      <div class="block-with-bottom-space sm:flex sm:gap-4 lg:gap-16 lg:pl-16 md:mb-10">
        <ImgCard class="mb-16 lg:mb-0" title="STEP 01">
          <template #img>
            <img
              class=""
              src="@/assets/images/dispute1.png"
              alt="投資人就金融消費爭議事件應先向基金銷售機構提出申訴"
            />
          </template>
          <template #text>
            <p class="tracking-wider lg:tracking-normal">
              投資人就金融消費爭議事件應先向基金銷售機構提出申訴
            </p>
          </template>
        </ImgCard>
        <ImgCard class="mb-16 lg:mb-0" title="STEP 02">
          <template #img>
            <img
              class=""
              src="@/assets/images/dispute2.png"
              alt="基金銷售機構應於收受申訴日起30日內為適當之處理並回覆投資人"
            />
          </template>
          <template #text>
            <p class="tracking-wider lg:tracking-normal">
              基金銷售機構應於收受申訴日起30日內為適當之處理並回覆投資人
            </p>
          </template>
        </ImgCard>
        <ImgCard class="mb-16 lg:mb-0 lg:max-w-[443px]" title="STEP 03">
          <template #img>
            <img
              class=""
              src="@/assets/images/dispute3.png"
              alt="若投資人不滿意前開基金銷售機構之處理，或基金銷售機構未於30日內回覆者，投資人得於收受處理結果或期限屆滿之日起60日內，向財團法人金融消費評議中心申請評議。"
            />
          </template>
          <template #text>
            <p class="tracking-wider lg:tracking-normal">
              若投資人不滿意前開基金銷售機構之處理，或基金銷售機構未於30日內回覆者，投資人得於收受處理結果或期限屆滿之日起60日內，向財團法人金融消費評議中心申請評議。
            </p>
          </template>
        </ImgCard>
      </div>
      <p class="mb-11">如有金融消費爭議，請於上班時間撥打1998金融服務專線。</p>
      <p>
        財團法人金融消費評議中心熱線：
        <a
          href="tel:+0800-789-885"
          class="block lg:inline text-main hover:underline"
        >0800-789-885</a
        >
      </p>
      <p class="mb-14 lg:mb-32">
        財團法人金融消費評議中心網址：
        <a
          class="block lg:inline text-main hover:underline"
          href="https://www.foi.org.tw/index.html"
          target="blank"
        >https://www.foi.org.tw/index.html</a
        >
      </p>
    </div>
  </div>
</template>
<script setup>
import IconPath from '@/assets/images/icon/dispute.png'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '金融消費爭議處理專區', routeName: undefined }
]
</script>
