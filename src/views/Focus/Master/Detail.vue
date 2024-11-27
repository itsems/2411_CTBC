<template>
  <GradientBackground :mobile-position="260" :desktop-position="300" />
  <!-- 大師開講內容頁 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="大師開講" :imagePath="PageTitleIcon" />

    <div
      class="w-full pb-[57%] lg:!pb-[22%] h-full bg-cover bg-no-repeat bg-center rounded-xl shadow-xl mb-5"
      :style="{ 'background-image': 'url(' + fakeData.imageUrl + ')' }"
    />

    <div class="lg:flex lg:gap-6">
      <!-- Contents -->
      <div class="mb-8 lg:flex-grow lg:w-0">
        <ContentCard :post="fakeData" class="mb-5">
          <template #info>
            <TypeWithDate
              type="市場類別"
              date="YYYY/MM/DD"
              class="mb-4"
            />
            <div class="flex gap-3 mb-6">
              <span class="hash-tag">#台股</span>
              <span class="hash-tag">#新興市場</span>
              <span class="hash-tag">#聯準會</span>
            </div>
          </template>
          <template #content>
            <p>
              由美國AI研究公司OpenAI開發之聊天機器人ChatGPT一度掀起熱潮，它是「生成式」AI，尚未是AGI，因為它只是完成程式設定的工作。ChatGPT的對話式AI技術透過分析大量資訊，依據簡單指示創作內容，如：編寫商業計畫、食譜甚至寫詩。
              它採用「深度學習（deep
              learning）」的方法，亦即搜索數十億位元組數據後，統整串連搜尋結果，然後提交回覆。
            </p>
            <br />
            <p>
              由於技術是透過統整串連來編製答案，有人認為這技術未必能理解任務本身，所以會出現答非所問的情況。雖然如此，AI正高速發展，應用範疇亦日漸擴大，包括投資方面。近年科技業者逐漸影響股市走向，AGI的發展令這些公司更具潛力。這股熱潮已令相關科技公司股價上漲，有研究亦預測全球AI市場規模將由2022年之3874億美元，躍升至2029年1.4兆美元，換算年複合成長率為20.1%。(註)
            </p>
            <br />
            <p>
              另外，有英國個人財務比較網站的分析師進行了一項實驗，要求ChatGPT遵循一系列取自基金投資原則、打造內含30餘檔個股之理論基金，而八週後該投資組合（包含38檔股票）上漲4.9%，報酬勝於一些基金平台的十大熱門基金。如此看來，ChatGPT投資組合管理能力好像更勝人類。不過，在管理投資組合仍有侷限。雖然它可以分析大量數據、提供見解，卻不能影響投資決策的情感或個人立場，而且也不會考量外部因素，例如：可能影響市場的全球事件、法規變動或意外消息。
            </p>
          </template>
        </ContentCard>

        <!-- 上下篇 -->
        <div class="flex justify-center gap-8 mb-10">
          <PrevArticleText @click="prevArticle" />
          <NextArticleText @click="nextArticle" />
        </div>

        <!-- 延伸閱讀 -->
        <div class="flex items-center gap-3 mb-6">
          <div class="w-[9px] h-9 rounded-md side-gradient-bar"/>
          <span class="text-2xl text-main">延伸閱讀</span>
        </div>

        <!-- Articles -->
        <div class="grid gap-5 mb-8 md:grid-cols-2">
          <MoreArticleCard
            v-for="post in fadeAds"
            :key="post.id"
            :post="post"
            :contentClass="['!py-4 lg:!w-[230px] !px-4']"
          >
            <template #image>
              <div
                class="w-full pb-[31%] lg:!pb-[78%] h-full bg-cover bg-no-repeat bg-center duration-1000"
                :style="{ 'background-image': 'url(' + post.imageUrl + ')' }"
              />
            </template>
            <template #title>
              <p class="mb-2 leading-4 text-md lg:text-lg lg:font-bold" :title="post.title">
                {{ post.title }}
              </p>
            </template>
            <template #content>
              <p class="mb-3 text-sm text-ellipsis lg:text-md group-hover:text-main" :title="post.content">
                {{ post.content }}
              </p>
              <div class="flex gap-2">
                <span class="text-grey-999">#台股</span>
                <span class="text-grey-999">#新興市場</span>
              </div>
            </template>
          </MoreArticleCard>
           
        </div>

        <!-- 回列表頁 -->
        <div class="flex justify-center">
          <BackToListButton @click="router.push({ name: ROUTE_NAME.focus.master.name })" role="link" />
        </div>
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
import PageTitleIcon from '@/assets/images/icon/hold-earth.png'

const router = useRouter()
const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '投資觀點', routeName: undefined },
  { name: '大師開講', routeName: ROUTE_NAME.focus.master.name }
]

const fakeData = ref({
  id: 0,
  date: '2022/10/02',
  title: '通用人工智慧為何大熱門？',
  content:
    '近年人工智慧（AI）不斷發展，並逐漸深入我們的日常生活，網路搜尋、電動車、Siri等語音助理均是應用範疇，不過AI發展不止於此。通用人工智慧（AGI）亦稱為「強AI（Strong AI）」，可謂AI發展的下一階段。目前AI系統已可收集大量數據，而AGI不同之處是能理解數據，近似人類認知能力（如：學習、思辨、解決問題、語言溝通）之理論型人工智慧，簡單來說，即能夠如同人類般思考、甚至學習。',
  imageUrl: 'https://i.imgur.com/0gPScLh.png'
})

const fadeAds = ref([
  {
    id: 0,
    title: '到全家用LINE Pay',
    content: '本優惠專案須先至臨櫃、網路銀行、行動銀行簽署特約事項，申購不適用此優惠專案',
    imageUrl: 'https://i.imgur.com/zxy7v18.png'
  },
  {
    id: 1,
    title: '到全家用LINE Pay',
    content: '本優惠專案須先至臨櫃、網路銀行、行動銀行簽署特約事項，申購不適用此優惠專案...,',
    imageUrl: 'https://i.imgur.com/2snYzDv.png'
  },
  {
    id: 2,
    title: '到全家用LINE Pay',
    content: '本優惠專案須先至臨櫃、網路銀行、行動銀行簽署特約事項，申購不適用此優惠專案',
    imageUrl: 'https://i.imgur.com/zxy7v18.png'
  },
  {
    id: 3,
    title: '到全家用LINE Pay',
    content: '本優惠專案須先至臨櫃、網路銀行、行動銀行簽署特約事項，申購不適用此優惠專案...,',
    imageUrl: 'https://i.imgur.com/2snYzDv.png'
  }
])

const prevArticle = () => {}
const nextArticle = () => {}
</script>
<style>
@import '@/assets/scss/pages/focus.scss';
</style>

<style lang="scss" scoped>
@import '@/assets/scss/pages/focus.scss';
.text-ellipsis {
  @include generateContentStyle(14px, 5, 1.3, 15px, 3);
}
</style>
