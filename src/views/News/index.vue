<template>
  <GradientBackground :mobile-position="200" :desktop-position="280" />
  <!-- 最新公告 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="最新公告" :imagePath="PageTitleIcon" />

    <div class="grid items-end grid-cols-2 gap-4 mb-6 lg:mb-8">
      <TabWithBar
        :key="tabTypes[0].name"
        :is-active="activeTab === tabTypes[0].name"
        :name="tabTypes[0].label"
        @click="handleTabClick( tabTypes[0].name )"
      >
        <template #activeIcon>
          <img src="@/assets/images/icon/bulletin-s.png" class="block w-5 lg:w-8" alt="一般公告" />
        </template>
        <template #inactiveIcon>
          <img src="@/assets/images/icon/bulletin-g.png" class="block w-5 lg:w-8" alt="一般公告" />
        </template>
      </TabWithBar>
      <TabWithBar
        :key="tabTypes[1].name"
        :is-active="activeTab === tabTypes[1].name"
        :name="tabTypes[1].label"
        @click="handleTabClick( tabTypes[1].name )"
      >
        <template #activeIcon>
          <img src="@/assets/images/icon/dialog-s.png" class="w-5 lg:w-8" alt="特別公告" />
        </template>
        <template #inactiveIcon>
          <img src="@/assets/images/icon/dialog-g.png" class="w-5 lg:w-8" alt="特別公告" />
        </template>
      </TabWithBar>
    </div>

    <!-- Search bar -->
    <div class="mb-4">
      <NewsSearchBar />
    </div>

    <!-- Data List -->
    <div class="mb-20 lg:pt-6 lg:px-4">
      <ul>
        <DataListLi
          v-for="item in fakeData"
          :key="item.id"
          :item="item"
          @click="gotoNewsDetail( item.id )"
        />
      </ul>
    </div>

    <Pagination
      class="mt-10"
      :totalItems="120"
      :current-page="current"
      @prev="navigatePage('prev')"
      @next="navigatePage('next')"
      @page="handlePageClick"
    />
  </div>
</template>

<script setup>
import PageTitleIcon from '@/assets/images/icon/speaker-s.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '最新公告', routeName: undefined }
]

// Tabs
const tabTypes = ref([
  { name: 'normal', label: '一般公告' },
  { name: 'special', label: '特別公告' }
])
const activeTab = ref(tabTypes.value[0].name)
const handleTabClick = tab => {
  activeTab.value = tab
}

const fakeData = ref([
  {
    id: 0,
    date: '2022/10/10',
    content: '公告中國信託臺灣智慧50ETF證券投資信託基金民國111年9月30日收益分配評價結果。'
  },
  {
    id: 1,
    date: '2022/10/09',
    content: '公告中國信託ETF系列基金民國111年9月收益分配評價結果。'
  },
  {
    id: 2,
    date: '2022/10/08',
    content: '本公司總代理之「（盧森堡）法盛國際基金I」基金公開說明書之變更事項通知。'
  },
  {
    id: 3,
    date: '2022/10/07',
    content: '中國信託全系列月配息型基金收益分配期前公告'
  },
  {
    id: 4,
    date: '2022/10/06',
    content:
      '新增「陽信商業銀行股份有限公司」為本公司所經理「中國信託亞太實質收息多重資產證券投資信託基金」之基金銷售機構。'
  },
  {
    id: 5,
    date: '2022/10/05',
    content: '公告中國信託臺灣智慧50ETF證券投資信託基金民國111年9月30日收益分配評價結果。'
  },
  {
    id: 6,
    date: '2022/10/08',
    content: '本公司總代理之「（盧森堡）法盛國際基金I」基金公開說明書之變更事項通知。'
  },
  {
    id: 7,
    date: '2022/10/07',
    content: '中國信託全系列月配息型基金收益分配期前公告'
  },
  {
    id: 8,
    date: '2022/10/06',
    content:
      '新增「陽信商業銀行股份有限公司」為本公司所經理「中國信託亞太實質收息多重資產證券投資信託基金」之基金銷售機構。'
  },
  {
    id: 9,
    date: '2022/10/05',
    content: '公告中國信託臺灣智慧50ETF證券投資信託基金民國111年9月30日收益分配評價結果。'
  },
])

const router = useRouter()
const gotoNewsDetail = id => {
  activeTab.value === tabTypes.value[0].name
    ? router.push({ name: ROUTE_NAME.news.detail.name, params: { id } })
    : router.push({ name: ROUTE_NAME.news.specialNewsDetail.name, params: { id } })
}

// Pagination
const current = ref(1)
const navigatePage = type =>{
  if (type === 'prev') {
    current.value--
  } else if (type === 'next') {
    current.value++
  }
  console.log(current.value)
}
const handlePageClick = number => {
  console.log(number)
  current.value = number
}
</script>
