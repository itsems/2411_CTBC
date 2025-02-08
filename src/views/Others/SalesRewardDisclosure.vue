<template>
  <GradientBackground :mobile-position="150" :desktop-position="280" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="20" title="銷售通路報酬揭露" :imagePath="IconLockPath" />
    
    <div class="mb-6 content-card">
      <p>本公司依行政院金融監督管理委員會核定「中華民國證券投資信託暨顧問商業同業公會會員及其銷售機構基金通路報酬揭露施行要點」之規定，辦理銷售機構報酬揭露。</p>
      <br>
      <p>投資人向本公司購買總代理或透過銷售機構購買本公司基金，於持有期間本公司或該銷售機構仍持續收取經理費分成報酬；投資人可依本公司網站設置之『通路報酬揭露專區』，查詢通路報酬揭露內容或銷售機構通路報酬揭露網址等相關資訊。</p>
    </div>

    <div class="mb-10 normal-table-wrap fixed-head">
      <table class="normal-table">
        <thead>
          <tr>
            <th class="th w-[30%] lg:w-[50%]">銷售中信投信發行基金之銷售機構</th>
            <th class="th lg:w-[20%]">銷售機構電話</th>
            <th class="th lg:w-[30%]">通路報酬揭露網址</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="item in fakeData1" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              {{ item.tel }}
            </td>
            <td>
              <a :href=item.link target="_blank" class="underline text-main underline-offset-4">通路報酬揭露</a>
            </td>
          </tr>
          <tr>
            <th class="th !rounded-none">總代理法盛投資系列基金</th>
            <th class="th !rounded-none">銷售機構電話</th>
            <th class="th !rounded-none">通路報酬揭露網址</th>
          </tr>
          <tr class="text-center" v-for="item in fakeData2" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              {{ item.tel }}
            </td>
            <td>
              <a :href=item.link target="_blank" class="underline text-main underline-offset-4">通路報酬揭露</a>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/marker-package.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '銷售通路報酬揭露', routeName: undefined }
]

const fakeData1 = [
  {
    id: 0,
    name: '康和綜合證券',
    tel: '02-87871888',
    link: '/'
  },
  {
    id: 1,
    name: '兆豐證券',
    tel: '02-23278988',
    link: '/'
  },
  {
    id: 0,
    name: '康和綜合證券',
    tel: '02-87871888',
    link: '/'
  },
  {
    id: 1,
    name: '兆豐證券',
    tel: '02-23278988',
    link: '/'
  },
  {
    id: 0,
    name: '康和綜合證券',
    tel: '02-87871888',
    link: '/'
  },
  {
    id: 1,
    name: '兆豐證券',
    tel: '02-23278988',
    link: '/'
  },
  {
    id: 0,
    name: '康和綜合證券',
    tel: '02-87871888',
    link: '/'
  },
  {
    id: 1,
    name: '兆豐證券',
    tel: '02-23278988',
    link: '/'
  },
  {
    id: 0,
    name: '康和綜合證券',
    tel: '02-87871888',
    link: '/'
  },
  {
    id: 1,
    name: '兆豐證券',
    tel: '02-23278988',
    link: '/'
  },
  {
    id: 0,
    name: '康和綜合證券',
    tel: '02-87871888',
    link: '/'
  },
  {
    id: 1,
    name: '兆豐證券',
    tel: '02-23278988',
    link: '/'
  },
]
const fakeData2 = [
  {
    id: 1,
    name: '兆豐證券',
    tel: '02-23278988',
    link: '/'
  },
]
</script>

