<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="30" title="網路防偽聲明" :imagePath="IconLockPath" />
    <div class="content">
      <p class="block-with-bottom-space">
        網路釣魚盛行，中國信託投信與您一同關心網路安全，提醒您多加留意，認明中國信託投信官方網址(
        <a
          class="text-main hover:underline"
          href="https://www.ctbcinvestments.com"
          target="_blank"
        >
          https://www.ctbcinvestments.com
        </a>
        )，以及中國信託投信電子交易平台網址 (
        <a
          class="text-main hover:underline"
          href="https://etrade.ctbcinvestments.com.tw/CTBC.EC"
          target="_blank"
        >
          https://etrade.ctbcinvestments.com.tw/CTBC.EC
        </a>
        )，務必謹慎小心，以避免網路釣魚詐騙。若看到疑似偽冒中國信託投信網站及電子郵件時，建議您參考下方說明：
      </p>

      <div class="block-with-bottom-space">
        <PageSubTitle title="一、認明中國信託投信官方網址" />
        <div class="block-indent">
          <p>
            中國信託投信官方網址為：
            <a
              class="text-main hover:underline"
              href="https://www.ctbcinvestments.com"
              target="_blank"
            >
              https://www.ctbcinvestments.com
            </a>
          </p>
          <p>
            中國信託投信電子交易平台網址為：
            <a
              class="text-main hover:underline"
              href="https://etrade.ctbcinvestments.com.tw/CTBC.EC"
              target="_blank"
            >
              https://etrade.ctbcinvestments.com.tw/CTBC.EC
            </a>
          </p>
          <p>
            進入網頁，請務必再確認網址為中國信託投信官方網址或中國信託投信電子交易平台，慎防假冒的釣魚詐騙網站偽裝中國信託投信網頁，進而盜取個資或其他詐騙行為。
          </p>
          <p>
            中國信託金融控股股份有限公司暨各子公司擁有您的公司/個人資料，係因您是中國信託金融控股股份有限公司任一子公司之客戶，或係從其他合法管道所取得之資料，其中亦包括經公開資訊、經政府機關揭露或第三人有權提供之合法資料。
          </p>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="二、切勿點開不明連結或進入可疑網址依照指示輸入帳號、密碼" />
        <div class="block-indent">
          <p>若從您的親朋好友或是其他由信任管道獲得的網址，也要小心，</p>
          <p>
            請確認中國信託投信官方網址為
            <a
              class="text-main hover:underline"
              href="https://www.ctbcinvestments.com"
              target="_blank"
            >
              https://www.ctbcinvestments.com
            </a>
          </p>
          <p>
            或中國信託投信電子交易平台
            <a
              class="text-main hover:underline"
              href="https://etrade.ctbcinvestments.com.tw/CTBC.EC"
              target="_blank"
            >
              https://etrade.ctbcinvestments.com.tw/CTBC.EC
            </a>
          </p>
          <p>
            非此網址切勿點開連結；如不慎點入也請立即關閉網頁，為保護您的個人資料安全，請務必謹慎小心。
          </p>
        </div>
      </div>

      <div class="block-with-bottom-space text-[#28a7a8]">
        *如有任何疑問可於週一～週五9：00～17：30 撥打客服專線：
        <a class="hover:underline" href="tel:+88622652-6699">(02)2652-6699</a>
        ，將有專人竭誠為您服務。
      </div>
    </div>
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/security.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '網路防偽聲明', routeName: undefined }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>
