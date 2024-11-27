<template>
  <GradientBackground :mobile-position="260" :desktop-position="300" />

  <!-- 市場快訊內容頁 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="市場快訊" :imagePath="PageTitleIcon" />

    <div
      class="w-full pb-[57%] lg:!pb-[22%] h-full bg-cover bg-no-repeat bg-center rounded-3xl shadow-xl mb-5"
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
              美股因聯準會(Fed放鷹及經濟展望欠佳連跌數周·上周出現技術性反彈·拉抬新興股回穩·其中泰國印度上周別上漲2%與1.7%·越股下跌2.5·觀上周資金流入最多的前三新興亞股為印度印尼及菲律賓·金額分別為
              6.2億美元、3 億美元及2千萬美元·台股連6周淨流出、越南也3周流出。
            </p>
            <br />
            <p>
              台股加權指數上周收在1458.4點周幅0.6中信智慧50E00912經理人張圭慧表示美股上週技術性彈、但仍有通膨、升息等不確定性主導依據芝易所CE)數據.預美國聯準會月升息幅度以3碼為主.股市基本面表現、仍利率政策與經濟前景為驅動引擎。月台目前電子類股修正.半導體與航運類價格調整.在上週蘋果舉辦秋季發表會後.預購熱潮湧入.針對受惠蘋果新品光環的半導體、光學類.以及政策支持性產業.如能、電動車類仍待。
            </p>
            <br />
            <p>
              越指上周處於震盪格局,中國信託越南機會基金經理人張晨瑋指出·越南在上半年疫情穩定後復甦趨勢仍不變.國際貨幣基金組織(IMF近期報告將越南今年經濟長率從6%上調至7%仍為亞洲唯一大幅上的經濟體另依據越南計劃投資部(MPI統計總局月公饰經濟數據顯示今年月份越南商品零售額和消費服務收額比上月增長0.6%,比去年同期增長50.2%增長規模和速度高於疫情前歷年同期另8月份業生產指數比增長15.6%年初至今·越南新註冊與恢復營業之企業約15萬家.年增31.1%。
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
          <BackToListButton @click="router.push({ name: ROUTE_NAME.focus.market.name })" role="link" />
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
  { name: '市場快訊', routeName: ROUTE_NAME.focus.market.name }
]


const fakeData = ref({
  id: 0,
  date: '2022/10/02',
  title: '新興亞股跌幅收斂 越股走弱',
  content:
    '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
  imageUrl: 'https://i.imgur.com/ws9HmSS.png'
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
<style lang="scss" scoped>
@import '@/assets/scss/pages/focus.scss';
.text-ellipsis {
  @include generateContentStyle(14px, 5, 1.3, 15px, 2);
}
</style>
