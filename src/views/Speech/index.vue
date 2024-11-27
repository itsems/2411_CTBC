<template>
  <!-- 講座活動 -->
  <div class="page-layout !pb-0">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="講座活動" :size="30" :imagePath="PageTitleIcon" />
  </div>
  <!-- 分頁內容 -->
  <RouterView />
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/speech.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '講座活動', routeName: ROUTE_NAME.speech.list.name }
]
</script>
