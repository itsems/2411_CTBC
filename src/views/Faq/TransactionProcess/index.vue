<template>
  <!-- 交易資訊 -->
  <div class="absolute top-[314px] w-full h-full bg-cloud z-0" />
  <div class="page-layout pt-[28px]">
    <Breadcrumb :list="breadCrumbList" class="!mb-5 hidden lg:flex" />
    <PageTitle title="交易資訊" :imagePath="PageTitleIcon" class="!mb-6" />
    <!-- Card -->
    <div class="content-card">
      <!-- 分頁 Tab -->
      <div class="grid grid-cols-3 gap-3 lg:gap-8 lg:mb-6">
        <TabWithBar
          v-for="tab in tabs"
          :key="tab.name"
          :is-active="currentPage === tab.name"
          :name="tab.label"
          class="mb-2 lg:mb-0"
          textClass="text-sm md:mb-3 md:text-2xl"
          @click="handleTabClick(tab)"
        />
      </div>
      <div class="py-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/transaction.png'

const router = useRouter()
const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '交易資訊', routeName: undefined }
]

// tabs
const tabs = ref([
  {
    name: ROUTE_NAME.faq.transferAccount.name,
    label: '基金匯款帳號'
  },
  {
    name: ROUTE_NAME.faq.feeRate.name,
    label: '手續費率表'
  },
  {
    name: ROUTE_NAME.faq.salesLocation.name,
    label: '銷售機構'
  }
])
const currentRoute = computed(() => router.currentRoute.value.name)
const currentPage = ref(currentRoute.value)

watch(() => router.currentRoute.value.name, newRoute => {
  currentPage.value = newRoute
})

const selectedTab = ref(tabs.value[0].name)
const redirect = () => {
  router.push({ name: selectedTab.value })
  currentPage.value = selectedTab.value
}
const handleTabClick = tab => {
  selectedTab.value = tab.name
  redirect()
}
</script>
