<template>
  <GradientBackground :mobile-position="275" :desktop-position="275" />
  <!-- 服務據點 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="服務據點" :size="25" :imagePath="PageTitleIcon" />

    <div class="grid gap-8 mb-20 lg:grid-cols-2">
      <div class="p-3 pt-4 bg-white shadow-xl lg:px-4 pb-7 rounded-xl">
        <iframe
          class="w-full mb-6 overflow-hidden rounded shadow-xl aspect-video"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.268584247252!2d121.6158868!3d25.0588843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aca7b3424eb7%3A0x5ecd63f48f8ed396!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A57aT6LK_5LqM6LevMTg46Jmf!5e0!3m2!1szh-TW!2stw!4v1697547904831!5m2!1szh-TW!2stw"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
        <p class="mb-3 text-2xl font-medium text-darkGreen">台北總公司</p>
        <div class="leading-7 text-md">
          <p>
            地址：
            <a
              class="hover:underline hover:text-main"
              href="https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597"
              target="blank"
            >
              115台北市南港區經貿二路188號12樓
            </a>
          </p>
          <p>
            電話：<a
              class="hover:underline hover:text-main"
              href="tel:+886226526688"
            >(02)2652-6688</a
            >
          </p>
          <p>傳真：(02)2789-1538</p>
          <p>110金管投信新字第012號</p>
        </div>
      </div>
      <div class="p-3 pt-4 bg-white shadow-xl lg:px-4 pb-7 rounded-xl">
        <iframe
          class="w-full mb-6 overflow-hidden rounded shadow-xl aspect-video"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.0291902035465!2d120.65766500000001!3d24.135613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693daf79e6671f%3A0x706427f007dcb98!2zNDAz5Y-w5Lit5biC6KW_5Y2A5b-g5piO5Y2X6LevNDk56Jmf!5e0!3m2!1szh-TW!2stw!4v1697549163883!5m2!1szh-TW!2stw"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
        <p class="mb-3 text-2xl font-medium text-darkGreen">台中分公司</p>
        <div class="leading-7 text-md">
          <p>
            地址：
            <a
              class="hover:underline hover:text-main"
              href="https://www.google.com.tw/maps/place/403%E5%8F%B0%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%8D%80%E5%BF%A0%E6%98%8E%E5%8D%97%E8%B7%AF499%E8%99%9F/24.1356179,120.655471,17z/data=!3m1!4b1!4m5!3m4!1s0x34693daf79e6671f:0x706427f007dcb98!8m2!3d24.135613!4d120.657665"
              target="_blank"
            >
              403台中市西區忠明南路499號9樓之1
            </a>
          </p>
          <p>
            電話：<a
              class="hover:underline hover:text-main"
              href="tel:+886423725199"
            >(04)2372-5199</a
            >
          </p>
          <p>傳真：(04)2789-1538</p>
          <p>110金管投信新字第012號</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/marker.png'
const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '服務據點', routeName: undefined }
]
</script>
