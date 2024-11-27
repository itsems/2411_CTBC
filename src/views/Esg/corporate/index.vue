<template>
  <GradientBackground :mobile-position="282" :desktop-position="482" />
  <div class="relative">
    
    <Banner title="企業永續" :mobile-image="mobileImageBn" :desktop-image="desktopImageBn" />
    <!-- 企業永續 -->
    <div class="pt-7">
      <div class="py-0 page-layout">
        <Breadcrumb :list="breadCrumbList" />
        <div class="grid grid-cols-3 gap-5 mb-8 relative z-[1]">
          <TabWithBar
            v-for="tab in tabs"
            :key="tab"
            :name="tab.label"
            :gradientPercentage="30"
            :is-active="currentTab === tab.name"
            @click="handleTabClick(tab.name)"
          />
        </div>
      </div>
      
      
      <!-- 分頁內容 -->
      <RouterView />
      
    </div>
  </div>
</template>
<script setup>
import mobileImageBn from '@/assets/images/esg/1-bn-m.png'
import desktopImageBn from '@/assets/images/esg/1-bn-d.jpg'

const router = useRouter()
const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '永續責任', routeName: ROUTE_NAME.esg.index },
  { name: '企業永續', routeName: undefined }
]
const tabs = ref([
  {
    label: '環境永續',
    name: ROUTE_NAME.esg.environment.name
  },
  {
    label: '社會責任',
    name: ROUTE_NAME.esg.society.name
  },
  {
    label: '公司治理',
    name: ROUTE_NAME.esg.corporateGovernance.name
  }
])

const currentTab = ref()
// eslint-disable-next-line no-unused-vars
watch(() => router.currentRoute.value.name, _ => {
  currentTab.value = router.currentRoute.value.name
}, { immediate: true, deep: true})

const redirect = name => {
  router.push({ name })
}
const handleTabClick = name => {
  currentTab.value = name
  redirect(name)
}


</script>
<style lang="scss" scoped>
.tab {
  &:not(:last-of-type) {
    border-right: 1px solid #666;
  }
}
</style>
