<template>
  <!-- 基金匯款帳號暨手續費率表 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <TabBar>
      <Tab
        :name="ACCOUNT" 
        :isActive="isAccountActive"
        :imageUrl="accountImageUrl" 
        :activeImageUrl="activeAccountImageUrl" 
        @tab-click="handleTabClick"
      />
      <Tab
        :name="RATE"
        :isActive="!isAccountActive"
        :imageUrl="rateImageUrl" 
        :activeImageUrl="activeRateImageUrl" 
        @tab-click="handleTabClick"
      />
    </TabBar>

    <!-- 分頁 -->
    <RouterView :fund="fakeData" />

    <hr>
    <p class="mt-5 mb-1 font-bold text-md text-main">註：外幣計價基金匯款注意事項</p>
    <ul class="ml-5 text-sm font-medium list">
      <li>1) 外幣計價基金匯款時，請銀行務必註明『當日匯款』及全額到付。</li>
      <li>2) 受益人須留意外幣匯款到達時點，可能因銀行作業時間而遞延，並確認款項需全額匯至基金專戶。</li>
      <li>3) 備註欄或附言：申購匯款請填寫申購人之身分證字號/統一編號或英文姓</li>
    </ul>

  </div>
</template>
<script setup>
import accountImageUrl from '@/assets/images/icon/piggy-bank-s.png'
import activeAccountImageUrl from '@/assets/images/icon/piggy-bank-w.png'
import rateImageUrl from '@/assets/images/icon/monies-s.png'
import activeRateImageUrl from '@/assets/images/icon/monies-w.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '基金資訊', routeName: undefined },
  { name: '基金匯款帳號暨手續費率表', routeName: undefined }
]

// Tabs
const ACCOUNT = { name: ROUTE_NAME.fund.account.name, label: '匯款帳號' }
const RATE = { name: ROUTE_NAME.fund.rate.name, label: '手續費率表' }
const currentTab = ref(ACCOUNT.name)
onMounted(() => {
  currentTab.value = router.currentRoute.value.name
})
const isAccountActive = computed(() => currentTab.value === ACCOUNT.name )
const handleTabClick = tab => {
  router.push({ name: tab })
  currentTab.value = tab
}

const fakeData = ref([
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'A. 累積型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託成長轉機多重資產基金專戶',
    account: '9013-5001-9125	',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'B. 月配息型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託成長轉機多重資產基金專戶',
    account: '9013-5001-9125',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-美金(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'A. 累積型',
    bank: ['CTBC BANK Co.,Ltd', 'SWIFT CODE：CTCBTWTPXXX'],
    accountName: 'CTBC Growth Opportunities Multi-Asset Fund',
    account: '9011-3132-0907',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金-美金(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'B. 月配息型',
    bank: ['CTBC BANK Co.,Ltd', 'SWIFT CODE：CTCBTWTPXXX'],
    accountName: '中國信託ESG碳商機多重資產基金專戶',
    account: '9013-5001-8498',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'A. 累積型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託ESG金融收益多重資產基金專戶	',
    account: '9013-5001-8838',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金-台幣(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)',
    level: 'B. 月配息型',
    bank: ['中國信託銀行營業部'],
    accountName: '中國信託ESG碳商機多重資產基金專戶',
    account: '9013-5001-8838',
    lowest: '10,000',
    lowestPerTime: '3,000',
  },
])


</script>
<style lang="scss" scoped>
.list {
  text-indent: -20px;
}
</style>