<template>
  <GradientBackground :mobile-position="195" :desktop-position="280" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="常見問題" :imagePath="PageTitleIcon" />

    <!-- 分頁 Tab -->
    <div class="grid grid-cols-4 gap-2 mb-5 md:gap-8">
      <TabWithBar
        v-for="name in tabTypes"
        :key="name"
        :is-active="activeTab === name.name"
        :name="name.label"
        textClass="text-sm md:mb-3 md:text-2xl"
        @click="handleTabClick( name.name )"
      />
    </div>
    

    <FaqItem question="申請開立投信基金網路交易帳戶，該如何辦理？應該寄回哪些文件？">
      <p>
        無論申請實體交易或電子交易，受益人皆需備妥以下文件，並將正本資料郵寄至中國信託投信辦理，待資料確認無誤後，開戶始生效。
      </p>
    </FaqItem>
    <FaqItem question="我在投信公司開戶交易與在銀行開戶交易有何差異？">
      <p>
        投資人透過投信公司開戶並申購基金，其申購手續費率按投信公司費率計收，贖回（賣出）基金時，不另行收取贖回費用，亦無帳戶信託管理費。所有交易資料均留存於投信公司，對帳單及交易確認書是由投信公司寄發給投資人，若欲查詢交易資料請逕向投信公司查詢。若投資人透過銀行依特定金錢信託（原指定用途信託）方式申購基金，其申購手續費與贖回費用，則需按銀行訂定之費率計收。相關基金交易資料則留存於銀行，對帳單及交易確認書是由銀行寄發給投資人，若欲查詢交易資料請逕向銀行查詢。
      </p>
      <p>
        註：&lt;&lt;特定金錢（原指定用途）信託&gt;&gt;投資人參加特定金錢（原指定用途）信託，是由銀行匯集投資人的錢，以銀行的名義，一筆向基金公司申購，真正基金的持有人是銷售銀行，因此參加特定金錢（原指定用途）信託的投資人，要查詢投資狀況及索取對帳單資料，請向當初辦理之銀行洽詢。
      </p>
    </FaqItem>

    
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/scope-money.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '常見問題', routeName: undefined }
]

// tabs
const tabTypes = ref([
  {
    name: 'openAccount',
    label: '開戶'
  },
  {
    name: 'transaction',
    label: '交易'
  },
  {
    name: 'routine',
    label: '定期定額'
  },
  {
    name: 'others',
    label: '其他'
  }
])
const activeTab = ref(tabTypes.value[0].name)
const handleTabClick = tab => {
  activeTab.value = tab
}

// https://www.ctbcinvestments.com/Home/FAQ
</script>
