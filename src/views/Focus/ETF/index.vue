<template>
  <!-- 聚焦ETF 列表-->
  <img
    class="absolute hidden top-0 left-[50%] -translate-x-[50%] z-[-1]"
    src="@/assets/images/market-bg.png"
    alt=""
  />

  <div class="page-layout">
    <PageTitle title="聚焦ETF" :imagePath="PageTitleIcon" />
    <Breadcrumb :list="breadCrumbList" />

    <div class="mb-16">
      <!-- CardsSlider -->
      <CardsSlider :slide-data="fakeData" @redirect="handleRedirect" />
    </div>

    <div class="grid grid-cols-1 gap-9 lg:grid-cols-3">
      <!-- Card -->
      <div class="mb-3 card" v-for="post in fakeData" :key="post.id">
        <FocusCard @redirect="handleRedirect" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitleIcon from '@/assets/images/icon/scope-etf.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '投資觀點', routeName: undefined },
  { name: '聚焦ETF', routeName: undefined }
]

const fakeData = ref([
  {
    id: 0,
    date: '2022/10/02',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://i.imgur.com/ws9HmSS.png'
  },
  {
    id: 1,
    date: '2022/10/05',
    title: '法盛投資管理2022年10月投資展望法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=1'
  },
  {
    id: 2,
    date: '2022/10/8',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=2'
  },
  {
    id: 3,
    date: '2022/10/12',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=3'
  },
  {
    id: 4,
    date: '2022/10/22',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=4'
  },
  {
    id: 5,
    date: '2022/11/13',
    title: '法盛投資管理2022年10月投資展望',
    content:
      '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
    imageUrl: 'https://picsum.photos/640/350?random=5'
  }
])

const router = useRouter()
const handleRedirect = post => {
  router.push({ name: ROUTE_NAME.focus.etfDetail.name, params: { id: post.id } })
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
.content {
  display: -webkit-box;
  max-width: 100%;
  height: 15px * 1.5 * 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  @media (min-width: 1023px) {
    height: 16px * 1.5 * 3;
  }
}
</style>
