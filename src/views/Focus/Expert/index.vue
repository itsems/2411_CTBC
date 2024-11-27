<template>
  <!-- 專家評論 列表-->
  <GradientBackground :mobile-position="320" :desktop-position="300" />

  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="專家評論" :imagePath="PageTitleIcon" />
    <select class="mb-5 selects lg:hidden">
      <option selected disabled value="-1">請選擇文章類型</option>
      <option value="00003">市場快訊</option>
      <option value="00005">越南日訊</option>
      <option value="00011">陸港股日訊</option>
      <option value="00012">台股系列ETF週報</option>
      <option value="00004">債券ETF每週視野</option>
      <option value="00013">海外系列ETF週報</option>
      <option value="00014">多重資產基金週報</option>
      <option value="00008">法盛基金日訊</option>
      <option value="00009">法盛旗艦債週報</option>
      <option value="00010">法盛股票基金週報</option>
    </select>
    <ResponsiveCard
      :content-class="'lg:!pb-0'"
      :post="fakeData[0]"
      class="mb-5"
      @card-click="handleRedirect(fakeData[0].id)"
    >
      <template #sub-title>
        {{ fakeData[0].type }} <span class="mx-2">|</span>{{ fakeData[0].date }}
      </template>
      <template #title>
        <p :title="fakeData[0].title" class="mb-3 card-title-ellipsis">
          {{ fakeData[0].title }}
        </p>
      </template>
      <template #content>
        <p :title="fakeData[0].content" class="lg:mb-8 content-text-ellipsis lg:text-base">
          {{ fakeData[0].content }}
        </p>
        <div class="flex gap-3 mb-6">
          <span class="hash-tag">#台股</span>
          <span class="hash-tag">#新興市場</span>
          <span class="hash-tag">#聯準會</span>
        </div>
      </template>
    </ResponsiveCard>

    <div class="lg:flex lg:gap-6">
      <!-- Selection & Posts -->
      <div class="mb-8 lg:flex-grow">
        <select class="hidden mb-5 selects lg:block">
          <option selected disabled value="-1">請選擇文章類型</option>
          <option value="00003">市場快訊</option>
          <option value="00005">越南日訊</option>
          <option value="00011">陸港股日訊</option>
          <option value="00012">台股系列ETF週報</option>
          <option value="00004">債券ETF每週視野</option>
          <option value="00013">海外系列ETF週報</option>
          <option value="00014">多重資產基金週報</option>
          <option value="00008">法盛基金日訊</option>
          <option value="00009">法盛旗艦債週報</option>
          <option value="00010">法盛股票基金週報</option>
        </select>
        
        <!-- Cards -->
        <ResponsiveCard
          v-for="post in fakeData"
          :key="post"
          :post="post"
          :content-class="'lg:!pb-0'"
          class="mb-5"
          @card-click="handleRedirect(post.id)"
        >
          <template #sub-title>
            {{ post.type }} <span class="mx-2">|</span>{{ post.date }}
          </template>
          <template #title>
            <p class="mb-3 card-title-ellipsis" :title="post.title">{{ post.title }}</p>
          </template>
          <template #content>
            <p :title="post.content" class="mb-4 content-text-ellipsis lg:text-base">
              {{ post.content }}
            </p>
            <div class="flex gap-3 mb-6">
              <span class="hash-tag">#台股</span>
              <span class="hash-tag">#新興市場</span>
              <span class="hash-tag">#聯準會</span>
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
import PageTitleIcon from '@/assets/images/icon/hold-earth.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '投資觀點', routeName: undefined },
  { name: '專家評論', routeName: undefined }
]

const fakeData = ref([
  {
    id: 0,
    date: '2022/10/02',
    type: '台股',
    title: '新興亞股跌幅收斂 越股走弱新興亞股跌幅收斂 越股走弱新興亞股跌幅收斂 越股走弱新興亞股跌幅收斂 越股走弱',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://i.imgur.com/vKew60K.png'
  },
  {
    id: 1,
    date: '2022/10/05',
    type: '美股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=1'
  },
  {
    id: 2,
    date: '2022/10/8',
    type: '台股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=2'
  },
  {
    id: 3,
    date: '2022/10/12',
    type: '美股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=3'
  },
  {
    id: 4,
    date: '2022/10/22',
    type: '台股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=4'
  },
  {
    id: 5,
    date: '2022/11/13',
    type: '美股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=5'
  },
  {
    id: 6,
    date: '2022/10/8',
    type: '台股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=2'
  },
  {
    id: 7,
    date: '2022/10/12',
    type: '美股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=3'
  },
  {
    id: 8,
    date: '2022/10/22',
    type: '台股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=4'
  },
  {
    id: 9,
    date: '2022/11/13',
    type: '美股',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=5'
  }
])

// Articles routing
const router = useRouter()
const handleRedirect = id => {
  router.push({ name: ROUTE_NAME.focus.expertDetail.name, params: { id } })
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
.card-title-ellipsis {
  @include generateContentStyle(18px, 2, 1.7, 24px, 1);
}
.content-text-ellipsis {
  @include generateContentStyle(15px, 3, 1.7, 16px, 4);
}
</style>
<style scoped>
@import '@/assets/scss/pages/focus.scss';
</style>
