<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="金融友善專區" :imagePath="IconLockPath" />
    <div class="content">
      <p class="block-with-bottom-space">
        為提供身心障礙者友善金融服務環境，確保身心障礙者充分享有基本權利、平等及合理便利之金融服務，本公司積極落實金融友善環境，依個別需求提供適當之友善服務措施與協助。
      </p>
      <div class="pt-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-10">
        <ImgCard class="mb-16 lg:mb-0" title="友善環境">
          <template #img>
            <img class="" src="@/assets/images/acc1.png" alt="" />
          </template>
          <template #text>
            <p class="tracking-wide lg:tracking-normal">
              本公司位於中國信託金融園區B棟12樓，一樓設有無障礙平面坡道及保全人員，如遇身心障礙者，現場可立即提供必要之協助，亦可先來電本公司客服專線預約告知，讓客服人員提供現場的引導及服務。
            </p>
            <hr class="my-4" />
            <p class="tracking-wide lg:tracking-normal">
              若遇身心障礙者(如：視/聽/語言/肢體等障礙)臨櫃辦理開戶及簽約作業，可由服務專員現場說明或以手寫方式說明，並協助完成相關契約及開戶文件作業。
            </p>
          </template>
        </ImgCard>
        <ImgCard class="mb-16 lg:mb-0" title="無障礙設施">
          <template #img>
            <img class="" src="@/assets/images/acc2.png" alt="" />
          </template>
          <template #text>
            <p class="tracking-wide disc-list lg:tracking-normal">
              上下樓層設有「無障礙電梯」，提供盲人點字樓層及按鈕指示、梯內扶手、梯內外無障礙按鈕、梯內語音播放設備。
            </p>
            <hr class="my-4" />
            <p class="tracking-wide disc-list lg:tracking-normal">
              公司大樓設有「無障礙廁所」，提供按壓式開關門、感應式洗手台、感應式沖水設備、室內扶手設備。
            </p>
            <hr class="my-4" />
            <p class="tracking-wide disc-list lg:tracking-normal">
              公司大樓設有「無障礙停車格」(地下停車場3樓)
            </p>
          </template>
        </ImgCard>
        <ImgCard class="col-span-2 mb-10" title="交易服務">
          <template #img>
            <img class="" src="@/assets/images/icon/service2.png" alt="" />
          </template>
          <template #text>
            <p class="mb-2 tracking-wide disc-list lg:tracking-normal">
              專人服務：請於周一~周五，9:00-17:00(不含國定假日)，撥打
              <a class="text-darkGreen hover:underline" href="tel:+8862-2652-6699">02-2652-6699</a
              >，將有專人為您服務
            </p>
            <p class="mb-2 tracking-wide disc-list lg:tracking-normal">
              線上交易：本公司電子交易客戶，可透過線上交易平台申購基金。
              申購網址：
              <a
                class="block indent-0 lg:inline text-darkGreen hover:underline"
                href="https://etrade.ctbcinvestments.com.tw/"
                target="_blank"
              >https://etrade.ctbcinvestments.com.tw/</a
              >
            </p>
            <div class="mb-2 tracking-wide disc-list lg:tracking-normal">
              線上預約開戶：申辦本公司電子交易客戶，可直接於線上交易平台下單，省去匯款、傳真之不便。
              <p class="mb-2 tracking-wide indent-0 lg:ml-[110px] lg:tracking-normal">
                開戶網址：
                <a
                  class="lg:inline text-darkGreen hover:underline"
                  href="https://etrade.ctbcinvestments.com.tw/OpenOnline/"
                  target="_blank"
                >
                  https://etrade.ctbcinvestments.com.tw/OpenOnline/
                </a>
              </p>
            </div>
            <p class="mb-2 tracking-wide disc-list lg:tracking-normal">
              客服信箱：若您於專人服務時間以外有需求，請先來信
              <a
                class="block indent-0 lg:inline text-darkGreen hover:underline"
                href="mailto:cs@ctbcinvestments.com"
              >
                cs@ctbcinvestments.com
              </a>
            </p>
          </template>
        </ImgCard>
      </div>

      <p class="text-center block-with-bottom-space text-main mb-11">
        金融友善措施相關訊息及資訊請詳見：
        <a
          class="text-darkGreen hover:font-bold"
          href="https://www.sitca.org.tw/ROC/UserFriendly/main.aspx"
          target="_blank"
        >
          投信投顧公會金融友善服務專區
        </a>。
      </p>
    </div>
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/hand.png'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '金融友善專區', routeName: undefined }
]
</script>
<style lang="scss" scoped>
.disc-list {
  text-indent: -26px;
  margin-left: 26px;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 10px;
    background-color: $mainGreen;
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>