<template>
  <div class="bg-[#28a7a8] p-6 text-xs pb-24 lg:pb-6">
    <div class="mx-auto max-w-[1110px]">
      <div class="flex flex-wrap justify-start mb-4">
        <RouterLink class="link" :to="{ name: ROUTE_NAME.siteMap }">網站地圖</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.privacy }">隱私權政策</RouterLink>
        <RouterLink  class="link" :to="{ name: ROUTE_NAME.dataConfidentiality }">資料保密承諾</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.personal }">個資運用聲明</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.risk }">風險預告聲明</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.antiCounterfeiting }">網路防偽聲明</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.legalDisclaimers }">法定揭露專區</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.security }">交易安全機制</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.consumerDispute }" >金融消費爭議處理專區</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.accessibility }">金融友善專區</RouterLink>
        <RouterLink class="link" :to="{ name: ROUTE_NAME.esg.stewardship.name }">機構投資人盡職治理揭露</RouterLink>
      </div>
      <p>© 中國信託投信 版權所有 建議瀏覽器版本 : Edge、Chrome、Safari、FireFox</p>
    </div>
  </div>
</template>

<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')
</script>

<style lang="scss" scoped>
.link {
  @apply relative inline-block mb-2;
  &:not(:last-of-type) {
    &:after {
      content: '';
      width: 1px;
      height: 50%;
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
      background-color: #fff;
    }
  }
}
</style>
