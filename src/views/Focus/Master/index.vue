<template>
  <!-- 大師開講 列表-->
  <GradientBackground :mobile-position="260" :desktop-position="300" />

  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="22" title="大師開講" :imagePath="PageTitleIcon" />

    <div class="lg:flex lg:gap-6">
      <!-- Selection & Posts -->
      <div class="mb-8 lg:flex-grow">
        <!-- Cards -->
        <ResponsiveCard
          @card-click="handleRedirect( post.id )"
          v-for="post in fakeData"
          :key="post"
          :post="post"
          class="mb-5 group"
        >
          <template #sub-title>
            {{ post.date }}
          </template>
          <template #title>
            <p class="mb-3" :title="post.title">{{ post.title }}</p>
          </template>
          <template #content>
            <p :title="post.content" class="mb-8 art-text-ellipsis lg:text-base lg:mb-4">
              {{ post.content }}
            </p>
            <div
              class="w-[30px] h-[30px] rounded-full bg-grey-999 flex justify-center items-center absolute right-4 bottom-[14px] group-hover:bg-main"
            >
              <img width="16" src="@/assets/images/icon/plus-w.png" alt="" />
            </div>
          </template>
        </ResponsiveCard>

        <!-- Pagination -->
        <Pagination
          class="mt-10"
          :totalItems="65"
          @prev="navigate"
          @next="navigate"
          @page="handlePageClick"
        />
      </div>
      <!-- Ads -->
      <div class="lg:w-[255px]">
        <SubscribeBlock class="mb-5" />
        <div class="hidden gap-6 lg:block lg:grid-cols-1">
          <img class="cursor-pointer" src="@/assets/images/ad1.png" alt="" />
          <img class="cursor-pointer" src="@/assets/images/ad2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitleIcon from '@/assets/images/icon/micro.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '投資觀點', routeName: undefined },
  { name: '大師開講', routeName: undefined }
]

// https://www.ctbcinvestments.com.tw/Home/Master
const fakeData = ref([
  {
    id: 0,
    date: '2022/10/02',
    title: '通用人工智慧為何大熱門？',
    content:
      '近年人工智慧（AI）不斷發展，並逐漸深入我們的日常生活，網路搜尋、電動車、Siri等語音助理均是應用範疇，不過AI發展不止於此。通用人工智慧（AGI）亦稱為「強AI（Strong AI）」，可謂AI發展的下一階段。目前AI系統已可收集大量數據，而AGI不同之處是能理解數據，近似人類認知能力（如：學習、思辨、解決問題、語言溝通）之理論型人工智慧，簡單來說，即能夠如同人類般思考、甚至學習。',
    imageUrl: 'https://i.imgur.com/0gPScLh.png'
  },
  {
    id: 1,
    date: '2022/10/05',
    title: '「邊緣債券」為何值得關注？',
    content:
      '邊緣債券（crossover bonds）信評介於投資等級、非投資等級之間，超額報酬潛力雄厚。法盛-盧米斯賽勒斯債券基金（本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金）經理人馬修．伊根（Matthew J. Eagan）擁有數十年投資經驗，在接受採訪時進一步說明其研究團隊如何藉獨特流程於信用循環各階段精準選債，以及目前值得留意之領域。',
    imageUrl: 'https://picsum.photos/640/350?random=1'
  },
  {
    id: 2,
    date: '2022/10/8',
    title: '成長投資絕非競速大賽',
    content:
      '如何以低波動成就股票長期增值？ 為投資組合增加有意義價值的增長通常不會在幾個月內發生。若欲造就報酬率經久不衰並步步高升，投資之企業必須有能力長時間持續茁壯，法盛盧米斯賽勒斯美國成長股票基金經理人阿齊茲（Aziz Hamzaogullari）認為企業必須具備極其久長之競爭優勢。',
    imageUrl: 'https://picsum.photos/640/350?random=2'
  },
  {
    id: 3,
    date: '2022/10/12',
    title: '停滯性通膨何以引發熱議？',
    content: '「停滯性通膨」意指經濟成長緩慢或停滯時高通膨伴隨出現，為何這在70年代風行一詞再掀討論',
    imageUrl: 'https://picsum.photos/640/350?random=3'
  },
  {
    id: 4,
    date: '2022/10/22',
    title: '宏觀逆風 利好債市',
    content:
      '貨幣政策收緊往往曝露經濟體系內之金融超載（financial excesses）與潛藏危險。當前循環晚期環境下，貨幣政策緊縮副作用便易出現，放款標準趨嚴、金融業警報響起更非人們所樂見，惟就通膨而言，整體金融情勢緊縮可限制融資取得，連帶壓抑消費者、企業之借貸與支出。',
    imageUrl: 'https://picsum.photos/640/350?random=4'
  },
  {
    id: 5,
    date: '2022/11/13',
    title: '債市展望暨全球投資策略',
    content:
      '回首2022年，通膨橫掃各地，於是各國央行「升升不息」、全球債券哀鴻遍野，同時美元走強，全球股票損失更是慘重，但對全球固定收益報酬而言，2023年料將成為過渡期，所幸應是邁向光明之坦途。',
    imageUrl: 'https://picsum.photos/640/350?random=5'
  },
  {
    id: 6,
    date: '2022/10/8',
    title: '成長投資絕非競速大賽',
    content:
      '如何以低波動成就股票長期增值？ 為投資組合增加有意義價值的增長通常不會在幾個月內發生。若欲造就報酬率經久不衰並步步高升，投資之企業必須有能力長時間持續茁壯，法盛盧米斯賽勒斯美國成長股票基金經理人阿齊茲（Aziz Hamzaogullari）認為企業必須具備極其久長之競爭優勢。',
    imageUrl: 'https://picsum.photos/640/350?random=2'
  },
  {
    id: 7,
    date: '2022/10/12',
    title: '停滯性通膨何以引發熱議？',
    content: '「停滯性通膨」意指經濟成長緩慢或停滯時高通膨伴隨出現，為何這在70年代風行一詞再掀討論',
    imageUrl: 'https://picsum.photos/640/350?random=3'
  },
  {
    id: 8,
    date: '2022/10/22',
    title: '宏觀逆風 利好債市',
    content:
      '貨幣政策收緊往往曝露經濟體系內之金融超載（financial excesses）與潛藏危險。當前循環晚期環境下，貨幣政策緊縮副作用便易出現，放款標準趨嚴、金融業警報響起更非人們所樂見，惟就通膨而言，整體金融情勢緊縮可限制融資取得，連帶壓抑消費者、企業之借貸與支出。',
    imageUrl: 'https://picsum.photos/640/350?random=4'
  },
  {
    id: 9,
    date: '2022/11/13',
    title: '債市展望暨全球投資策略',
    content:
      '回首2022年，通膨橫掃各地，於是各國央行「升升不息」、全球債券哀鴻遍野，同時美元走強，全球股票損失更是慘重，但對全球固定收益報酬而言，2023年料將成為過渡期，所幸應是邁向光明之坦途。',
    imageUrl: 'https://picsum.photos/640/350?random=5'
  },
])

// Articles routing
const router = useRouter()
const handleRedirect = id => {
  router.push({ name: ROUTE_NAME.focus.masterDetail.name, params: { id } })
}

// Pagination
const navigate = () => {}
const handlePageClick = number => {
  console.log(number)
}
</script>

<style lang="scss">
.market-bg {
  background-image: url('@/assets/images/market-bg.png');
  background-repeat: no-repeat;
  background-position: left top;
  @media (min-width: 1024px) {
    background-size: 100% auto;
  }
}
</style>

<style lang="scss" scoped>
.art-text-ellipsis {
  @include generateContentStyle(15px, 3, 1.7, 16px, 2);
}
</style>
<style scoped>
@import '@/assets/scss/pages/focus.scss';
</style>
