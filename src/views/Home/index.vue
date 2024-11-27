<template>
  <section class="overflow-hidden">
    <!-- 輪播 -->
    <section class="mx-auto section-kv-slider">
      <KvSlider />
    </section>

    <!-- 搜尋基金/證券 -->
    <div
      class="relative z-[2] px-5 xl:px-0 flex justify-center -mt-[39px] lg:-mt-[25px] mx-auto section-content-limit-width"
    >
      <SearchInput
        placeholder="輸入基金名稱 / 證券代碼"
        class="xl:w-[445px] max-w-[645px]"
        @search-apply="handleSearchApply"
      />
    </div>

    <!-- 熱門推薦 -->
    <section class="pl-6 bg-center bg-no-repeat bg-cover pt-11 pb-11 lg:py-20">
      <div class="mx-auto section-content-limit-width">
        <div class="flex flex-wrap items-center justify-between mb-6 lg:mb-14">
          <SectionTitle title="熱門推薦" class="!items-start xl:mr-10 !mb-0">
            <img width="34px" src="@/assets/images/icon/scope.png" />
          </SectionTitle>
          <RouterLink :to="{ name: ROUTE_NAME.fund.list.name }" class="pr-3 sm:order-3 sm:self-end">
            <p class="flex items-center self-end font-medium lg:ml-24 text-main hover:underline underline-offset-4">
              查看所有基金
              <img
                class="w-[14px] ml-2 lg:ml-[18px]"
                src="@/assets/images/icon/bar-tab-active.png"
                alt=""
              />
            </p>
          </RouterLink>
          <TabsWithBar
            class="pt-6 pr-6 xl:flex-1"
            hasArrow
            :current="currentRecommendTab"
            :tabs="recommendTabs"
            @tab-click="handleRecommendTabClick"
          />
        </div>
        <!-- ETF/基金資料 -->
        <FundSlider :funds="fakeFunds" />
      </div>
    </section>

    <!-- 影音專區 + 投資觀點 -->
    <section class="section-video">
      <SectionTitle title="影音專區" class="px-4 mx-auto section-content-limit-width">
        <img width="30" src="@/assets/images/icon/video.png" />
      </SectionTitle>
      <VideoTabs
        class="px-4 mx-auto section-content-limit-width"
        :currentTab="activeVideoTab"
        @tab-click="handleVideoTabClick"
      />
      <!-- 影音 + 投資 content -->
      <div class="-mt-4 bg-center bg-cloud pt-9 lg:-mt-9">
        <!-- 影片 -->
        <Videos
          class="hidden mx-auto mb-8 section-content-limit-width lg:block"
          :videos="fakeVideos"
          @video-watch-more="handleVideoWatchMoreClick"
        />
        <Videos
          class="mx-auto mb-8 section-content-limit-width lg:hidden"
          :videos="fakeVideosMobile"
          @video-watch-more="handleVideoWatchMoreClick"
        />
        <!-- 投資觀點 -->
        <SectionTitle
          text-color="text-darkGreen"
          title="投資觀點"
          class="mx-auto section-content-limit-width mb-7 lg:!-mb-[85px] pl-4"
        >
          <img class="w-6 lg:w-[30px]" src="@/assets/images/icon/dollar.png" />
        </SectionTitle>
        <FocusSlider :focusPosts="fakeFocusPosts" />
      </div>
    </section>

    <!-- 最新消息 / 講座活動 -->
    <section class="px-6 pt-12 pb-20 mx-auto section-events section-content-limit-width lg:px-0 lg:pb-10">
      <EventTabs :tabs="eventTabs" :current="currentEventTab" @tab-click="handleNewsTabClick" />

      <div class="pt-5 lg:pt-7">
        <ul v-if="currentEventTab === EVENT_TABS.news">
          <DataListLi
            v-for="item in fakeNewsList"
            :item="item"
            :key="item.id"
            @click="gotoNewsDetail(item.id)"
          />
        </ul>
        <ul v-else>
          <TypeTitleListLi
            v-for="item in fakeSpeeches"
            :item="item"
            :key="item.id"
            @click="gotoSpeechDetail(item.id)"
          />
        </ul>
        <RouterLink :to="{ name: currentEventTab === EVENT_TABS.news ? ROUTE_NAME.news.index : ROUTE_NAME.speech.index }">
          <RoutingButton
            class="block mx-auto mt-8 lg:hidden"
            :arrow-direction="BUTTON_ARROW_DIRECTION.right"
            label="查看更多"
          />
        </RouterLink>
      </div>
    </section>
  </section>

  <!-- 首頁燈箱 -->
  <Teleport to="body">
    <Modal
      :show="shouldModalShow"
      header="重要公告"
      bodyClass="!m-0"
      @close="closeModal">
      <template #body>
        <div class="max-h-[400px] overflow-y-auto customized-scrollbar pr-3 lg:pr-6">
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
          <p class="mb-5 text-2xl font-bold text-center text-main">敬請投資人特別注意ETF溢價狀況及買賣風險</p>
          <p class="text-font-color">【中信上游半導體(00941)】目前 <span class="text-2xl font-bold text-red">溢價率超過3%</span>，投資人應特別注意溢價過大所產生的價格波動風險，務必審慎評估價格之合理性，避免蒙受損失。</p>
          <br>
          <br>
        </div>
        
        <Hr class="my-5" />

        <RoundButton class="mx-auto" label="關閉" @click="closeModal" />

      </template>
    </Modal>
  </Teleport>
</template>
<script setup>
import { EVENT_TABS, VIDEO_TABS } from '@/constants/home'
import { BUTTON_ARROW_DIRECTION } from '@/constants/layout'

// 搜尋基金代碼/證券代碼
const handleSearchApply = () => {
  console.log('handleSearchApply')
}

// 熱門推薦
const recommendTabs = [
  {
    name: 'etf',
    label: 'ETF'
  },
  {
    name: 'ctbc',
    label: '中信系列基金'
  },
  {
    name: 'natixis',
    label: '法盛系列基金'
  }
]
const currentRecommendTab = ref(recommendTabs[0].name)
const handleRecommendTabClick = name => {
  currentRecommendTab.value = name
  console.log(currentRecommendTab.value)
}

// 最新公告/講座活動
const eventTabs = [
  {
    name: EVENT_TABS.news,
    label: '最新公告'
  },
  {
    name: EVENT_TABS.speech,
    label: '講座活動'
  }
]
const currentEventTab = ref(EVENT_TABS.news)
const handleNewsTabClick = tab => {
  currentEventTab.value = tab
}

// 影音專區 tabs
const activeVideoTab = ref(VIDEO_TABS.tuesday)
const handleVideoTabClick = tab => {
  activeVideoTab.value = tab
}
const handleVideoWatchMoreClick = () => {
  console.log('handleVideoWatchMoreClick')
}
const router = useRouter()
const ROUTE_NAME = inject('ROUTE_NAME')
const gotoNewsDetail = id => {
  router.push({ name: ROUTE_NAME.news.detail.name, params: { id } })
}
const gotoSpeechDetail = id => {
  router.push({ name: ROUTE_NAME.speech.detail.name, params: { id } })
}

// 燈箱
const { 
  shouldModalShow,
  closeModal,
  openModal
} = useModal()
openModal()


// Fake data

// 基金淨值
const fakeFunds = [
  {
    id: 0,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: '15.74',
    date: '2022/10/05',
    fromPreviousDay: -0.02,
    fromPreviousDayPercent: -0.13,
    isBuyable: true
  },
  {
    id: 1,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: '11.64',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    isBuyable: false
  },
  {
    id: 2,
    name: '中國信託智慧城市建設證券投資信基金-美元',
    netWorth: '19.00',
    date: '2022/10/05',
    fromPreviousDay: -0.05,
    fromPreviousDayPercent: 1.34,
    isBuyable: true
  },
  {
    id: 3,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: '217.82',
    date: '2022/11/05',
    fromPreviousDay: 0,
    fromPreviousDayPercent: 0,
    isBuyable: true
  },
  {
    id: 4,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: '25.74',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: -0.13,
    isBuyable: false
  },
  {
    id: 5,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: '21.64',
    date: '2022/10/05',
    fromPreviousDay: -0.05,
    fromPreviousDayPercent: 2.19,
    isBuyable: true
  },
  {
    id: 6,
    name: '中國信託智慧城市建設證券投資信基金-美元',
    netWorth: '29.0',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    isBuyable: false
  },
  {
    id: 7,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: '222.82',
    date: '2022/10/05',
    fromPreviousDay: -0.02,
    fromPreviousDayPercent: -0.13,
    isBuyable: true
  },
  {
    id: 8,
    name: '中國信託智慧城市建設證券投資信基金-美元',
    netWorth: '19.0',
    date: '2022/10/05',
    fromPreviousDay: 0.25,
    fromPreviousDayPercent: 2.19,
    isBuyable: true
  },
  {
    id: 9,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: '217.82',
    date: '2022/10/05',
    fromPreviousDay: -0.02,
    fromPreviousDayPercent: -0.13,
    isBuyable: true
  }
]

// 最新公告參考格式
const fakeNewsList = [
  {
    id: 1,
    date: '2022/10/04',
    isNew: true,
    content: '公告中國信託臺灣智慧50ETF證券投資信託基金民國111年9月30日收益分配評價結果。'
  },
  {
    id: 2,
    isNew: true,
    date: '2022/10/03',
    content: '公告中國信託ETF系列基金民國111年9月收益分配評價結果。'
  },
  {
    id: 3,
    isNew: false,
    date: '2022/10/01',
    content: '本公司總代理之「（盧森堡）法盛國際基金I」基金公開說明書之變更事項通知。'
  },
  {
    id: 4,
    isNew: false,
    date: '2022/09/25',
    content: '中國信託全系列月配息型基金收益分配期前公告'
  },
  {
    id: 4,
    isNew: false,
    date: '2022/09/25',
    content: '新增「陽信商業銀行股份有限公司」為本公司所經理「中國信託亞太實質收息多重資產證券投資信託基金」。'
  },
  {
    id: 4,
    isNew: false,
    date: '2022/08/25',
    content: '本公司總代理之「（盧森堡）法盛國際基金I」基金公開說明書之變更事項通知。'
  }
]
// 講座資料參考格式
const fakeSpeeches = [
  {
    id: 1,
    type: '用ETF投資全世界',
    title: '中國信託LIVE投資分享會 (4/24雲林場)',
  },
  {
    id: 2,
    type: '用ETF投資全世界',
    title: '中國信託LIVE投資分享會 (4/25台中場)',
  },
  {
    id: 3,
    type: '用ETF投資全世界',
    title: '中國信託LIVE投資分享會 (4/26苗栗場)',
  },
  {
    id: 4,
    type: '用ETF投資全世界',
    title: '中國信託LIVE投資分享會 (5/2高雄場)',
  },
  {
    id: 5,
    type: '用ETF投資全世界',
    title: '中國信託LIVE投資分享會 (5/4嘉義場)',
  },
  {
    id: 6,
    type: '用ETF投資全世界',
    title: '中國信託LIVE投資分享會 (5/7台北場)',
  }
]

// 影音專區
const fakeVideos = [
  {
    title: '股怪教授 #謝晨彥 feat.「週二Fund愛講」EP.172 - 全球加速佈局半導體 趁勢佈局上游供應鏈！',
    id: 'Jt1okLDUytA'
  },
  {
    title: '#朱岳中 feat.「週二Fund愛講」EP.171 - 股債市震盪加劇，如何不被甩下車？',
    id: '31v7YqEV7n8'
  },
  {
    title: '#選股教練 陳唯泰 feat.「週二Fund愛講」EP.167 - 台股衝鋒兩萬點🚀 成長型 vs. 高息型 哪個更吃香？',
    id: 'OcVbL3RPKvk'
  },
  {
    title: '「週二Fund愛講」EP 166 芯創富未來！半導體投資論壇線上開講💥',
    id: 'vzjCo6MCf0Y'
  },
  {
    title: '#白瑜 feat.「週二Fund愛講」EP.162 - 2024年財運居然是他最旺❓❗',
    id: 'djO2_vRyxwA'
  },
  {
    title: '#馮志源 feat.「週二Fund愛講」EP.161 - 🤔牛市起點還是終點？創新高的美股還是值得買入？',
    id: 'g8zyN1qR64g'
  },
  {
    title: '#朱岳中 feat.「週二Fund愛講」EP.158 - 債券ETF如何投資更有利❓ 2024存債必看攻略💡',
    id: 'UN-olCIVY-s'
  },
  {
    title: '#朱紀中 feat.「週二Fund愛講」EP.156 - 經濟回暖ing... 越股2024將迎來彎道超車？',
    id: '1uOVvfb12fU'
  },
  {
    title: '基金教授 #朱岳中 feat.「週二Fund愛講」EP.133 - 「債」不買捶心肝，優質債券ETF大檢視',
    id: '-bTY1LdS0-E'
  },
  {
    title: '投資達人 #股添樂 feat.「週二Fund愛講」EP.132 - 台股勇猛戰萬八，ETF下半年該挑誰❓',
    id: 'hs6WziXPVqQ'
  },
  {
    title: '不敗教主 #陳重銘 feat.「週二Fund愛講」EP.131 - 經濟前景不明🤔 陸股ETF現在如何投資？',
    id: 'jRta5LZcaY8'
  },
  {
    title:
      '理財專家 #盧燕俐 feat.「週二Fund愛講」EP.130 - 投資送分題「債」現，息利雙收選債術大公開🤑',
    id: '50bZzL0IpBw'
  },
  {
    title: '#基金V怪客 feat.「週二Fund愛講」EP.129 - 「越」來「越」有戲，越南將迎來華麗轉身❓❗',
    id: '0PSW3CIJ7BA'
  },
  {
    title:
      '股怪教授 #謝晨彥 feat.「週二Fund愛講」EP.128 - 既期待又怕受傷害，中國投資下一步怎麼走❓',
    id: 'L9ZLDVyS7fI'
  }
]
// 影音專區 手機板
const fakeVideosMobile = [
  {
    title: '股怪教授 #謝晨彥 feat.「週二Fund愛講」EP.172 - 全球加速佈局半導體 趁勢佈局上游供應鏈！',
    id: 'Jt1okLDUytA'
  },
  {
    title: '#朱岳中 feat.「週二Fund愛講」EP.171 - 股債市震盪加劇，如何不被甩下車？',
    id: '31v7YqEV7n8'
  },
  {
    title: '#選股教練 陳唯泰 feat.「週二Fund愛講」EP.167 - 台股衝鋒兩萬點🚀 成長型 vs. 高息型 哪個更吃香？',
    id: 'OcVbL3RPKvk'
  },
  {
    title: '「週二Fund愛講」EP 166 芯創富未來！半導體投資論壇線上開講💥',
    id: 'vzjCo6MCf0Y'
  },
]

// 投資觀點
// ⚠: [type] 為文章類型，Slider component 會使用來轉址
// 和 src\constants\focus.js 連動，要調整 type 的名稱只要改 src\constants\focus.js 這支裡面的名稱就好，Slider component 會自己吃到
// e.g, 市場展望的 type 值為「market1」，將 src\constants\focus.js 的 market: 'market' 改為 market: 'market1' 即可
const fakeFocusPosts = [
  {
    id: 1,
    title: '法盛投資2022年10月投資展望',
    content:
      '全球似乎一步步邁向衰退，美國榮景結束亦倒數計時，而全球央行專注打擊物價高漲，矢志將核心通膨壓回低檔，於是現下總經情勢基調便是利率揚升、美元走強、經濟成長放緩與貨幣政策大力緊縮。',
    type: 'market',
    date: '2022/10/04'
  },
  {
    id: 2,
    title:
      '法盛投資管理2022年12月投資展望法盛投資管理2022年12月投資展望法盛投資管理2022年12月投資展望法盛投資管理2022年12月投資展望',
    content:
      '全球似乎一步步邁向衰退，美國榮景結束亦倒數計時，而全球央行專注打擊物價高漲，矢志將核心通膨壓回低檔，於是現下總經情勢基調便是利率揚升、美元走強、經濟成長放緩與貨幣政策大力緊縮。全球似乎一步步邁向衰退，美國榮景結束亦倒數計時，而全球央行專注打擊物價高漲，矢志將核心通膨壓回低檔，於是現下總經情勢基調便是利率揚升、美元走強、經濟成長放緩與貨幣政策大力緊縮。全球似乎一步步邁向衰退，美國榮景結束亦倒數計時，而全球央行專注打擊物價高漲，矢志將核心通膨壓回低檔，於是現下總經情勢基調便是利率揚升、美元走強、經濟成長放緩與貨幣政策大力緊縮。',
    type: 'perspective',
    date: '2022/12/04'
  },
  {
    id: 3,
    title: '法盛投資管理2023年01月投資展望',
    content:
      '全球似乎一步步邁向衰退，美國榮景結束亦倒數計時，而全球央行專注打擊物價高漲，矢志將核心通膨壓回低檔，於是現下總經情勢基調便是利率揚升、美元走強、經濟成長放緩與貨幣政策大力緊縮。',
    type: 'ETF',
    date: '2023/01/04'
  },
  {
    id: 4,
    title: '法盛投資管理2023年02月投資展望',
    content:
      '全球似乎一步步邁向衰退，美國榮景結束亦倒數計時，而全球央行專注打擊物價高漲，矢志將核心通膨壓回低檔，於是現下總經情勢基調便是利率揚升、美元走強、經濟成長放緩與貨幣政策大力緊縮。',
    type: 'market',
    date: '2023/02/04'
  },
  {
    id: 5,
    title: '法盛投資管理2023年03月投資展望',
    content:
      '全球似乎一步步邁向衰退，美國榮景結束亦倒數計時，而全球央行專注打擊物價高漲，矢志將核心通膨壓回低檔，於是現下總經情勢基調便是利率揚升、美元走強、經濟成長放緩與貨幣政策大力緊縮。',
    type: 'ETF',
    date: '2023/03/04'
  }
]
</script>
<style lang="scss" scoped>
.section-content-limit-width {
  max-width: 1110px;
}
</style>
