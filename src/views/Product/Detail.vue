<template>
  <div>
    
    <!-- 基金總覽 內頁-->
    <div class="pb-0 mb-4 page-layout">
      <Breadcrumb :list="breadCrumbList" />
      <div class="items-center justify-between lg:gap-8 lg:flex lg:mb-2">
        <RoundButton @click="openModal" label="切換其他基金" class="w-full mb-4 shrink-0 lg:w-auto lg:order-2 lg:!px-5 lg:mb-0" />
        <p class="mb-4 lg:mb-2 text-2xl lg:text-3xl text-[#333]">{{ fakeData.name }}</p>
      </div>

      <select class="mb-4 pr-14 selects lg:mb-1 w-max lg:max-w-screen-sm">
        <option>中國信託華營貨幣市場基金</option>
        <option>新台幣-不配息A</option>
        <option>新台幣-不配息A</option>
      </select>

      <!-- 最新狀態格 -->
      <FundInfoBox :fund="fakeData" class="lg:w-2/3" />
    </div>
    <div class="relative">

      <!-- 分頁分類 -->
      <div class="px-6 overflow-x-auto lg:max-w-[1110px] mx-auto lg:px-0">
        <SelectTab
          :currentTab="currentTab"
          @select-update="handleSelectUpdate"
        />
      </div>

      <!-- 分頁 -->
      <div class="bg-gradient -mt-[2px]">
        <div class="page-layout lg:pt-10">
          <RouterView :fund="fakeData" />
        </div>
      </div>
    
    </div>
  </div>

  <!-- 切換其他基金 Modal -->
  <Teleport to="body">
    <Modal
      :show="shouldModalShow"
      header="切換其他基金"
      @close="closeModal"
      bodyClass="!px-0 !m-0"
      containerClass="!pb-0 lg:!px-0 lg:!w-[540px]"
    >
      <template #body>
        <div class="px-4 lg:px-12">
          <div class="items-center mb-6 lg:flex lg:gap-4">
            <p class="mb-3 lg:mb-0 shrink-0">搜尋基金</p>
            <inputButtonGroup
              class="mb-4 lg:mb-0 lg:w-full"
              placeholder="搜尋基金名稱 / 證券代碼"
              button-text="送出"
            />
          </div>
          <p class="mb-3 lg:mb-5">快速選擇-基金類型</p>
          <div class="grid grid-cols-3 gap-2 mb-3 lg:grid-cols-4 lg:mb-8">
            <SearchTag
              v-for="tag in quickSelectTags.tags"
              :key="tag"
              :label="tag.label"
              :selected="tag.selected"
              badgeClass="mr-0"
              @click="selectTag(quickSelectTags,tag.label)"
            >
              {{ tag.label }}
            </SearchTag>
          </div>
        </div>
        <div class="w-11/12 mx-auto h-[1px] bg-[#adafb0]" />
        <div class="py-6 pr-2 bg-gradient rounded-b-3xl lg:px-12">
          <div class="max-h-[280px] lg:max-h-[330px] overflow-y-auto grid gap-3 px-4 pb-1 customized-scrollbar">
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金" isCurrent />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金-新台幣" />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金-美金" />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金" />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金-新台幣" />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金-新台幣" />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金-美金" />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金" />
            <SearchedPageName @click="closeModal" title="中國信託台灣活力證券投資信託基金-新台幣" />
          </div>
        </div>
      </template>
    </Modal>
  </Teleport>

</template>

<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '基金資訊', routeName: undefined },
  { name: '基金總覽', routeName: ROUTE_NAME.fund.list.name },
  { name: '中國信託台灣活力證券投資信託基金', routeName: undefined }
]


const fakeData = {
  id: 0,
  name: '中國信託2026年到期新興優先順位債券基金 (本基金有相當比重投資於非投資等級等高風險債券)',
  netWorth: 15.74,
  date: '2022/10/05',
  fromPreviousDay: 0.25,
  fromPreviousDayPercent: -0.13,
  hasTrendLink: true,
  hasMoreLink: true,
  riskLevel: 4,
  isESGFund: false
}

// routing
const currentTab = ref()

// eslint-disable-next-line no-unused-vars
watch(() => router.currentRoute.value.name, _ => {
  currentTab.value = router.currentRoute.value.name
}, { immediate: true, deep: true})

const handleSelectUpdate = tab => {
  router.push({ name: tab })
  currentTab.value = tab
}

// 燈箱
const { shouldModalShow, closeModal, openModal } = useModal()

// 搜尋 tags
const quickSelectTags = ref({
  label: undefined,
  tags: [
  { label: '所有基金', selected: true },
  { label: '國內股票', selected: false },
  { label: '海外股票', selected: false },
  { label: '海外債券', selected: false },
  { label: '平衡型', selected: false },
  { label: '多重資產', selected: false },
  { label: '組合型', selected: false },
  { label: '貨幣型', selected: false },
  { label: 'ETF', selected: false },
  { label: '境外基金', selected: false },
  ]
})
const { selectTag } = useTags()
</script>
