<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="35" title="交易安全機制" :imagePath="IconLockPath" />
    <div class="content">
      <div class="block-with-bottom-space">
        <ul class="list-cjk">
          <li>
            中國信託投信網路交易採用SSL加密保護，SSL是Secure Sockets
            Layer之縮寫，成為安全機制協定是一種網際網路上先進的安全協定。
          </li>
          <li>
            當SSL開始時，使用者端之瀏覽器會傳送自己的公開金鑰給伺服器，而伺服器端就會安全地將一個私密金鑰傳送到客戶端之瀏覽器，建立起一個安全資料交換的傳輸環境。
          </li>
          <li>自此之後，瀏覽器與伺服器間所交換之資料就經過私密金鑰加密。</li>
          <li>
            若瀏覽器下方的狀態列上出現鎖頭的圖示，表示目前瀏覽器與伺服器間的通訊資料，均採用SSL安全機制的保護，使用者可以安心的在此頁面中輸入個人的資料。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/unlock.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '交易安全機制', routeName: undefined }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>