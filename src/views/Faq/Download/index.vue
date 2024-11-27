<template>
  <GradientBackground :mobile-position="202" :desktop-position="280" />
  <!-- 表單下載 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="表單下載" :imagePath="PageTitleIcon" />

    <!-- 分頁 Tab -->
    <div class="grid grid-cols-3 gap-4 lg:gap-8 mb-7 lg:mb-10">
      <TabWithBar
        v-for="name in tabTypes"
        :key="name"
        :is-active="activeTab === name.name"
        :name="name.label"
        textClass="lg:mb-3 lg:text-2xl"
        @click="handleTabClick( name.name )"
      />
    </div>

    <RouterView />
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/download.png'

const router = useRouter()
const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '表單下載', routeName: undefined }
]

// Tabs
const tabTypes = ref([
  {
    name: ROUTE_NAME.faq.openForm.name,
    label: '開戶表單'
  },
  {
    name: ROUTE_NAME.faq.transactionForm.name,
    label: '交易表單'
  },
  {
    name: ROUTE_NAME.faq.otherForm.name,
    label: '其他表單'
  }
])
const currentRoute = computed(() => router.currentRoute.value.name)
const activeTab = ref(currentRoute.value)
const handleTabClick = tab => {
  activeTab.value = tab
  router.push({ name: tab })
}
onUpdated(() => {
  activeTab.value = currentRoute.value
})
</script>
