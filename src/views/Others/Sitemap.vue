<template>
  <GradientBackground :mobile-position="202" :desktop-position="280" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="26" title="網站地圖" :imagePath="IconPath" />
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-7">
      <!-- 首頁 -->
      <SiteMapCard :type="'首頁'" :links="homePages">
        <div class="flex mb-3 sm:gap-3 lg:mb-6">
          <RouterLink 
            class="font-medium text-main lg:text-lg"
            :to="{ name: ROUTE_NAME.news.index }"
          >
            最新公告
          </RouterLink>
          <span class="text-main">|</span>
          <RouterLink
            class="font-medium text-main lg:text-lg hover:text-main"
            :to="{ name: ROUTE_NAME.speech.index }"
          >
            講座活動
          </RouterLink>
        </div>
      </SiteMapCard>
      <SiteMapCard :type="'關於我們'" :links="aboutSubPages" />
      <SiteMapCard :type="'基金資訊'" :links="fundSubPages" />
      <SiteMapCard :type="'ETF專區'" :links="etfSubPages" />
      <SiteMapCard :type="'投資觀點'" :links="focusSubPages" />
      <SiteMapCard :type="'永續責任'" :links="esgSubPages" />
      <SiteMapCard :type="'客服中心'" :links="faqSubPages" />
    </div>
  </div>
</template>
<script setup>
import IconPath from '@/assets/images/icon/sitemap.png'

import {
  homePages,
  aboutSubPages,
  fundSubPages,
  etfSubPages,
  focusSubPages,
  esgSubPages,
  faqSubPages,
} from '@/constants/header-links'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '網站地圖', routeName: undefined }
]

</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>