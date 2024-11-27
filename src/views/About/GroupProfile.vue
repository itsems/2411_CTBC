<template>
  <GradientBackground />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="集團簡介" :imagePath="PageTitleIcon" />

    <div class="leading-7">
      <img
        class="mb-8 shadow-xl rounded-2xl lg:rounded-[42px] lg:float-left lg:mr-10"
        src="@/assets/images/about/group.png"
        alt="集團簡介"
      />
      <div>
        <h3 class="mb-3 text-2xl font-bold text-darkGreen lg:pt-[70px]">成立逾半世紀的金融巨擘</h3>
        <p class="mb-5 lg:mb-20">
          中國信託金融控股公司（簡稱「中信金控」）成立於民國91年，企業總部設於臺灣臺北市，全球員工人數約30,000人，旗下子公司包括中國信託商業銀行、台灣人壽保險公司、中國信託綜合證券公司、中國信託創業投資公司、中國信託資產管理公司、中國信託證券投資信託公司、中國信託資融公司、中信保全公司、台灣彩券公司等九家子公司。
        </p>
        <p class="mb-5 lg:mb-10">
          秉持著創新求變的精神，提供客戶完整之產品服務，中信金控積極投入數位轉型。除推動流程數位化，並陸續設立區塊鏈、人工智能實驗室及大數據研發中心，領先同業開發新型態業務，滿足市場與客戶之需求。
        </p>
        <p class="mb-5 lg:mb-10">
          中信金控金融版圖跨足14個國家及地區，在全球擁有超過370處據點，子公司中國信託商業銀行為臺灣最國際化的銀行，海外布局以大中華、日本、北美及東南亞為重心，設有東京之星子行、美國子行、加拿大子行、菲律賓子行及印尼子行，深耕在地客戶，提供國際企業完善之跨境金融服務。中國信託商業銀行更響應政府新南向政策，近年除了透過越南、印度及新加坡分行積極拓展東南亞業務，更於110年增持泰國LH Financial Group Public Company Limited（簡稱「LHFG金融集團」）持股至46.6%，成為LHFG金融集團第一大股東，並於110年10月取得過半董事席次，未來可串聯LHFG金融集團分行據點，提供臺商及外資企業金融服務。在大中華區以上海為中心，深耕長三角經濟圈及粵港澳大灣區，提供客戶便捷完整的服務網絡；另外，金控子公司台灣人壽保險公司在大陸廈門亦合資設有君龍人壽保險有限公司，整合銀行、壽險多元化服務及據點，共同布局大陸市場，發揮雙品牌綜效。
        </p>
        <p class="mb-5 lg:mb-10">
          展望未來，中信金控將繼續秉持We are family的品牌精神，在營運績效、公司治理、企業社會責任、環境永續等面向持續努力，為客戶、員工、股東與社會創造共同利益，打造「臺灣第一、亞洲領先」的領導品牌，期許成為治理最佳、客戶及股東心目中最值得信賴的金融服務機構。
        </p>
      </div>
    </div>
    <MoreButton @click="navigate" />
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/write.png'

const ROUTE_NAME = inject('ROUTE_NAME')

const navigate = () => {
  window.open('https://www.ctbcholding.com/content/twhoo/zh_tw/index.html')
}

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '關於我們', routeName: undefined },
  { name: '集團簡介', routeName: undefined }
]
</script>
