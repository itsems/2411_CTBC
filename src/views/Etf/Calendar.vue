<template>
  <GradientBackground :mobile-position="260" :desktop-position="260" />
  <!-- 配息行事曆 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" class="hidden lg:flex" />
    <div class="items-center justify-between gap-5 mb-4 lg:flex lg:mb-10">
      <PageTitle
        title="配息行事曆"
        :imagePath="PageTitleIcon"
        :size="26"
        class="lg:!mb-0" />

      <div class="flex gap-4">
        <CalendarTypeText label="配息公告" bgClass="bg-[#f4992d]" />
        <CalendarTypeText label="非營業日" bgClass="bg-[#ef6161]" />
        <CalendarTypeText label="ETF除息日" bgClass="bg-main" />
      </div>
    </div>

    <div class="overflow-hidden shadow-2xl calendar-wrap rounded-3xl">
      <VCalendar
        class="rounded-md custom-fund-calendar"
        :masks="masks"
        :attributes="attributes"
        borderless
        is-expanded
        trim-weeks
      >
        <template #header-prev-button>
          <img width="10" src="@/assets/images/icon/arrow-l3.png" alt="" />
        </template>
        <template #header-next-button>
          <img width="10" src="@/assets/images/icon/arrow-r3.png" alt="" />
        </template>
        <template #day-content="{ day, attributes }">
          <div class="h-full lg:px-2 lg:pt-1">
            <p class="text-center lg:text-left">{{ String(day.day).padStart(2, '0') }}</p>
            
            <div class="flex flex-col gap-1 border lg:hidden">
              <div v-if="attributes[0]?.customData?.label" class="relative w-full py-2" @click="handleOpenAnnounceModal" />
              <div v-if="attributes[1]?.customData?.label" class="relative w-full py-2" @click="handleOpenClosedModal" />
              <div v-if="attributes[2]?.customData?.label" class="relative w-full py-2" @click="handleOpenEtfModal" />
            </div>
            <div class="hidden text-sm lg:block">
              <div class="relative pl-5 cursor-pointer" @click="handleOpenAnnounceModal">
                <p>{{ attributes[0]?.customData?.label }}</p>
              </div>
              <div class="relative pl-5 cursor-pointer" @click="handleOpenClosedModal">
                <p>{{ attributes[1]?.customData?.label }}</p>
              </div>
              <div class="relative pl-5 cursor-pointer" @click="handleOpenEtfModal">
                <p>{{ attributes[2]?.customData?.label }}</p>
              </div>
            </div>
          </div>
        </template>

        <template #day-popover>
          <div class="text-xs text-gray-700 dark:text-gray-300">
            Using my own content now
          </div>
        </template>

        
      </VCalendar>
        
    </div>

    
    <p class="mt-10 mb-2 text-sm font-bold">註：</p>
    <ul class="ml-5 text-sm -indent-4">
      <li>1) 基金非營業日即停止「淨值報價、申贖交易、申贖款收付」等業務。</li>
      <li>2) 基金非營業日公告僅供投資人參考。因應基金營業日有特殊節日、投資市場狀況等因素而受影響之情況，海外基金依公開說明書之規定自成立之日起屆滿6個月後，每年度1、4、7、10月第10日(含)前公告達一定比列之主要投資所在國別及其次一季之例假日。</li>
      <li>3) 各基金營業日相關規定，請詳見基金公開說明書。</li>
    </ul>


  </div>
  
  <!-- 配息公告燈箱 -->
  <Teleport to="body">
    <Modal
      body-class="lg:!pr-0"
      :show="showAnnounceModalShow"
      @close="closeAnnounceModal"
    >
      <template #body>
        <div class="grid grid-cols-3 gap-2 mb-6 lg:gap-5">
          <TabWithBar
            v-for="name in twoTabTypes"
            :key="name"
            :name="name.label"
            :is-active="activeTab === name.name"
            @click="handleTabClick(name.name)"
          />
        </div>

        <div class="content max-h-[400px] lg:max-h-[487px] overflow-y-auto customized-scrollbar pr-2 lg:pr-7">
          <ul v-if="activeTab === twoTabTypes[0].name" class="ml-6 list-disc text-md">
            <li>中國信託樂齡收益平衡證券投資信託基金</li>
            <li>中國信託2024年到期新興主權債券證券投資信託基金</li>
            <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
            <li>中國信託科技趨勢多重資產證券投資信託基金</li>
            <li>中國信託ESG碳商機多重資產證券投資信託基金</li>
            <li>中國信託ESG金融收益多重資產證券投資信託基金</li>
            <li>中國信託成長轉機多重資產證券投資信託基金</li>
            <li>中國信託臺灣ESG永續關鍵半導體ETF基金</li>
            <li>中國信託特選小資高價30ETF基金</li>
            <li>中國信託臺灣綠能及電動車ETF基金<span class="text-red">(本基金非屬環境、社會及治理相關主題基金)</span></li>
            <li>中國信託臺灣智慧50ETF基金</li>
            <li>中國信託上櫃ESG 30 ETF基金</li>
            <li>中國信託臺灣優選成長高股息ETF基金<span class="text-red">(本基金之配息來源可能為收益平準金)</span></li>
            <li>中國信託恒生中國高股息ETF基金</li>
            <li>中國信託10年期以上高評級美元公司債券ETF基金</li>
            <li>中國信託10年期以上優先順位金融債券ETF基金</li>
            <li>中國信託樂齡收益平衡證券投資信託基金</li>
            <li>中國信託2024年到期新興主權債券證券投資信託基金</li>
            <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
            <li>中國信託科技趨勢多重資產證券投資信託基金</li>
            <li>中國信託ESG碳商機多重資產證券投資信託基金</li>
            <li>中國信託ESG金融收益多重資產證券投資信託基金</li>
            <li>中國信託成長轉機多重資產證券投資信託基金</li>
            <li>中國信託臺灣ESG永續關鍵半導體ETF基金</li>
            <li>中國信託特選小資高價30ETF基金</li>
            <li>中國信託臺灣綠能及電動車ETF基金<span class="text-red">(本基金非屬環境、社會及治理相關主題基金)</span></li>
            <li>中國信託臺灣智慧50ETF基金</li>
            <li>中國信託上櫃ESG 30 ETF基金</li>
            <li>中國信託臺灣優選成長高股息ETF基金<span class="text-red">(本基金之配息來源可能為收益平準金)</span></li>
            <li>中國信託恒生中國高股息ETF基金</li>
            <li>中國信託10年期以上高評級美元公司債券ETF基金</li>
            <li>中國信託10年期以上優先順位金融債券ETF基金</li>
          </ul>
          <div v-else>
            <p class="text-lg font-medium text-main">中國</p>
            <ul class="mb-8 ml-6 list-disc text-md">
              <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
              <li>中國信託MSCI中國外資自由投資50不含A及B股ETF基金</li>
              <li>中國信託恒生中國高股息ETF基金</li>
              <li>中國信託MSCI中國外資自由投資50不含A及B股單日正向2倍ETF基金</li>
            </ul>
            <p class="text-lg font-medium text-main">美國</p>
            <ul class="mb-8 ml-6 list-disc text-md">
              <li>．中國信託科技趨勢多重資產證券投資信託基金</li>
              <li>．中國信託ESG碳商機多重資產證券投資信託基金</li>
              <li>．中國信託ESG金融收益多重資產證券投資信託基金</li>
              <li>．中國信託成長轉機多重資產證券投資信託基金</li>
              <li>．中國信託電池及儲能科技ETF基金</li>
              <li>．中國信託特選金融及數據ETF基金</li>
              <li>．中國信託10年期以上高評級美元公司債券ETF基金</li>
              <li>．中國信託10年期以上優先順位金融債券ETF基金</li>
            </ul>

          </div>
        </div>
      </template>
    </Modal>
  </Teleport>

  <!-- 非營業日燈箱 -->
  <Teleport to="body">
    <Modal
      body-class="lg:!pr-0"
      :show="showClosedModalShow"
      @close="closeClosedModal"
    >
      <template #body>
        <div class="grid grid-cols-3 gap-2 mb-6 lg:gap-5">
          <TabWithBar
            v-for="name in twoTabTypes"
            :key="name"
            :is-active="activeTab === name.name"
            :name="name.label"
            @click="handleTabClick(name.name)"
          />
        </div>
        <div class="content max-h-[400px] lg:max-h-[487px] overflow-y-auto customized-scrollbar pr-2 lg:pr-7">
          <ul v-if="activeTab === twoTabTypes[0].name" class="ml-6 list-disc text-md">
            <li>中國信託樂齡收益平衡證券投資信託基金</li>
            <li>中國信託2024年到期新興主權債券證券投資信託基金</li>
            <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
            <li>中國信託科技趨勢多重資產證券投資信託基金</li>
            <li>中國信託ESG碳商機多重資產證券投資信託基金</li>
            <li>中國信託ESG金融收益多重資產證券投資信託基金</li>
            <li>中國信託成長轉機多重資產證券投資信託基金</li>
            <li>中國信託臺灣ESG永續關鍵半導體ETF基金</li>
            <li>中國信託特選小資高價30ETF基金</li>
            <li>中國信託臺灣綠能及電動車ETF基金<span class="text-red">(本基金非屬環境、社會及治理相關主題基金)</span></li>
            <li>中國信託臺灣智慧50ETF基金</li>
            <li>中國信託上櫃ESG 30 ETF基金</li>
            <li>中國信託臺灣優選成長高股息ETF基金<span class="text-red">(本基金之配息來源可能為收益平準金)</span></li>
            <li>中國信託恒生中國高股息ETF基金</li>
            <li>中國信託10年期以上高評級美元公司債券ETF基金</li>
            <li>中國信託10年期以上優先順位金融債券ETF基金</li>
            <li>中國信託樂齡收益平衡證券投資信託基金</li>
            <li>中國信託2024年到期新興主權債券證券投資信託基金</li>
            <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
            <li>中國信託科技趨勢多重資產證券投資信託基金</li>
            <li>中國信託ESG碳商機多重資產證券投資信託基金</li>
            <li>中國信託ESG金融收益多重資產證券投資信託基金</li>
            <li>中國信託成長轉機多重資產證券投資信託基金</li>
            <li>中國信託臺灣ESG永續關鍵半導體ETF基金</li>
            <li>中國信託特選小資高價30ETF基金</li>
            <li>中國信託臺灣綠能及電動車ETF基金<span class="text-red">(本基金非屬環境、社會及治理相關主題基金)</span></li>
            <li>中國信託臺灣智慧50ETF基金</li>
            <li>中國信託上櫃ESG 30 ETF基金</li>
            <li>中國信託臺灣優選成長高股息ETF基金<span class="text-red">(本基金之配息來源可能為收益平準金)</span></li>
            <li>中國信託恒生中國高股息ETF基金</li>
            <li>中國信託10年期以上高評級美元公司債券ETF基金</li>
            <li>中國信託10年期以上優先順位金融債券ETF基金</li>
          </ul>
          <div v-else>
            <p class="text-lg font-medium text-main">中國</p>
            <ul class="mb-8 ml-6 list-disc text-md">
              <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
              <li>中國信託MSCI中國外資自由投資50不含A及B股ETF基金</li>
              <li>中國信託恒生中國高股息ETF基金</li>
              <li>中國信託MSCI中國外資自由投資50不含A及B股單日正向2倍ETF基金</li>
            </ul>
            <p class="text-lg font-medium text-main">美國</p>
            <ul class="mb-8 ml-6 list-disc text-md">
              <li>．中國信託科技趨勢多重資產證券投資信託基金</li>
              <li>．中國信託ESG碳商機多重資產證券投資信託基金</li>
              <li>．中國信託ESG金融收益多重資產證券投資信託基金</li>
              <li>．中國信託成長轉機多重資產證券投資信託基金</li>
              <li>．中國信託電池及儲能科技ETF基金</li>
              <li>．中國信託特選金融及數據ETF基金</li>
              <li>．中國信託10年期以上高評級美元公司債券ETF基金</li>
              <li>．中國信託10年期以上優先順位金融債券ETF基金</li>
            </ul>

          </div>
        </div>
      </template>
    </Modal>
  </Teleport>

  <!-- ETF除息日燈箱 -->
  <Teleport to="body">
    <Modal
      body-class="lg:!pr-0"
      :show="showEtfModalShow"
      @close="closeEtfModal"
    >
      <template #body>
        <div class="grid grid-cols-3 gap-2 mb-6 lg:gap-5 lg:grid-cols-3">
          <TabWithBar
            v-for="name in allTabTypes"
            :key="name"
            :is-active="activeTab === name.name"
            :name="name.label"
            @click="handleTabClick(name.name)"
          />
        </div>
        <div class="content max-h-[400px] lg:max-h-[487px] overflow-y-auto customized-scrollbar pr-2 lg:pr-7">
          <ul class="ml-6 list-disc">
            <li>中國信託樂齡收益平衡證券投資信託基金</li>
            <li>中國信託2024年到期新興主權債券證券投資信託基金</li>
            <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
            <li>中國信託科技趨勢多重資產證券投資信託基金</li>
            <li>中國信託ESG碳商機多重資產證券投資信託基金</li>
            <li>中國信託ESG金融收益多重資產證券投資信託基金</li>
            <li>中國信託成長轉機多重資產證券投資信託基金</li>
            <li>中國信託臺灣ESG永續關鍵半導體ETF基金</li>
            <li>中國信託特選小資高價30ETF基金</li>
            <li>中國信託臺灣綠能及電動車ETF基金<span class="text-red">(本基金非屬環境、社會及治理相關主題基金)</span></li>
            <li>中國信託臺灣智慧50ETF基金</li>
            <li>中國信託上櫃ESG 30 ETF基金</li>
            <li>中國信託臺灣優選成長高股息ETF基金<span class="text-red">(本基金之配息來源可能為收益平準金)</span></li>
            <li>中國信託恒生中國高股息ETF基金</li>
            <li>中國信託10年期以上高評級美元公司債券ETF基金</li>
            <li>中國信託10年期以上優先順位金融債券ETF基金</li>
            <li>中國信託樂齡收益平衡證券投資信託基金</li>
            <li>中國信託2024年到期新興主權債券證券投資信託基金</li>
            <li>中國信託亞太實質收息多重資產證券投資信託基金</li>
            <li>中國信託科技趨勢多重資產證券投資信託基金</li>
            <li>中國信託ESG碳商機多重資產證券投資信託基金</li>
            <li>中國信託ESG金融收益多重資產證券投資信託基金</li>
            <li>中國信託成長轉機多重資產證券投資信託基金</li>
            <li>中國信託臺灣ESG永續關鍵半導體ETF基金</li>
            <li>中國信託特選小資高價30ETF基金</li>
            <li>中國信託臺灣綠能及電動車ETF基金<span class="text-red">(本基金非屬環境、社會及治理相關主題基金)</span></li>
            <li>中國信託臺灣智慧50ETF基金</li>
            <li>中國信託上櫃ESG 30 ETF基金</li>
            <li>中國信託臺灣優選成長高股息ETF基金<span class="text-red">(本基金之配息來源可能為收益平準金)</span></li>
            <li>中國信託恒生中國高股息ETF基金</li>
            <li>中國信託10年期以上高評級美元公司債券ETF基金</li>
            <li>中國信託10年期以上優先順位金融債券ETF基金</li>
          </ul>
        </div>
      </template>
    </Modal>
  </Teleport>

</template>

<script setup>
import PageTitleIcon from '@/assets/images/icon/calendar-s.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '配息專區', routeName: undefined },
  { name: '配息行事曆', routeName: undefined }
]

// Calendar
const month = new Date().getMonth()
const year = new Date().getFullYear()
const masks = ref({
  weekdays: 'W',
  title: 'YYYY年MMM'
})
const attributes = ref([
  {
    customData: { label: '配息公告' },
    dot: {
      style: {
        backgroundColor: '#f4992d',
      },
      class: 'orange',
    },
    order: 1,
    dates: [
      new Date(year, month, 3),
      new Date(year, month, 15),
      new Date(year, month, 17),
    ]
  },
  {
    customData: { label: '非營業日' },
    dot: {
      style: {
        backgroundColor: '#ef6161',
      },
    },
    order: 2,
    dates: [
      new Date(year, month, 3),
      new Date(year, month, 6),
      new Date(year, month, 17),
      new Date(year, month, 25),
      new Date(year, month, 30),
    ]
  },
  {
    customData: { label: 'ETF除息日' },
    order: 2,
    dot: {
      style: {
        backgroundColor: '#24a5a6',
      },
      class: '#24a5a6',
    },
    dates: [
      new Date(year, month, 3),
    ]
  },
])


// 燈箱
const { 
  shouldModalShow: showAnnounceModalShow,
  closeModal: closeAnnounceModal,
  openModal: openAnnounceModal
} = useModal()
const { 
  shouldModalShow: showClosedModalShow,
  closeModal: closeClosedModal,
  openModal: openClosedModal
} = useModal()
const { 
  shouldModalShow: showEtfModalShow,
  closeModal: closeEtfModal,
  openModal: openEtfModal
} = useModal()

// tabs
const allTabTypes = ref([
  {
    name: 'announce',
    label: '配息公告'
  },
  {
    name: 'closed',
    label: '非營業日'
  },
  {
    name: 'etf',
    label: 'ETF除息日'
  },
])
const twoTabTypes = ref([
  {
    name: 'announce',
    label: '配息公告'
  },
  {
    name: 'closed',
    label: '非營業日'
  }
])

const activeTab = ref(twoTabTypes.value[0].name)
const handleTabClick = tab => {
  activeTab.value = tab
}
const resetActiveTab = () => {
  activeTab.value = twoTabTypes.value[0].name
}

const handleOpenEtfModal = () => {
  resetActiveTab()
  openEtfModal()
}
const handleOpenClosedModal = () => {
  resetActiveTab()
  openClosedModal()
}
const handleOpenAnnounceModal = () => {
  resetActiveTab()
  openAnnounceModal()
}




</script>

<style lang="scss">
.vc-header {
  --vc-header-title-color: #666;
}

.custom-fund-calendar {
  width: 100%;
  .vc-header {
    background-color: white;
    padding: 20px 0;
    margin-top: 0;
    height: auto;
    .vc-title {
      z-index: 1;
      font-size: 21px;
      opacity: 0.75;
    }
    .vc-prev {
      margin-left: 10px;
    }
    .vc-next {
      margin-right: 10px;
    }
    
    .vc-arrow {
      &:hover {
        background: initial;
      }
      &:focus {
        outline: 0;
      }
    }
  }
  .vc-weeks {
    padding: 0;
  }
  .vc-weekdays {
    padding: 10px 0;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    .vc-weekday {
      padding: 0;
    }
  }
  .vc-day {
    height: 97px;
    align-items: flex-start;
    color: #666;
    border: 2px solid white;
    .vc-day-content {
      font-size: 15px;
      cursor: context-menu;
      &:hover {
        background: initial;
      }
      &:focus-within {
        box-shadow: none;
      }
    }
    .vc-day-box-center-bottom {
      align-items: flex-start;
      padding-top: 28px;
      @media (min-width: 1024px) {
        justify-content: flex-start;
        padding-left: 10px;
        padding-top: 32px;
      }
    }
    .vc-dot {
      width: 13px;
      height: 13px;
      margin: 0;
    }
    
    &:not(.on-bottom) {
      border-bottom: 2px solid white;
    }
    @media (min-width: 1024px) {
      border: 5px solid white;
    }
    &.weekday-2, &.weekday-3, &.weekday-4, &.weekday-5, &.weekday-6 {
      background-color:#f5f5f5;
    }
    &.weekday-1, &.weekday-7 {
      background-color:#fbeff3;
    }
    &.is-today {
      background-color: #e3f4f4;
      border-bottom: 4px solid $mainGreen;
    }
  }
  .vc-dots {
    flex-direction: column;
    gap: 6px;
  }
}

</style>
