<template>
  <GradientBackground :mobile-position="190" :desktop-position="280" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="30" title="追蹤差距" :imagePath="PageTitleIcon" />

    <select class="selects lg:hidden">
      <option v-for="tab in tabs" :key="tab.name">{{ tab.label }}</option>
    </select>

    <div class="hidden grid-cols-5 gap-8 mb-7 lg:grid">
      <TabWithBar
        v-for="tab in tabs"
        :key="tab.name"
        :name="tab.label"
        :is-active="currentTab === tab.name"
        @click="handleTabClick(tab.name)"
      />
    </div>

    <!-- 幣別選擇 -->
    <section class="items-center justify-end gap-3 lg:flex">
      <p class="py-4">計價幣別</p>
      <div class="grid grid-cols-2 gap-5 mb-6 lg:gap-3 lg:mb-0">
        <RoundButton
          class="!px-4"
          label="新台幣(TWD)"
          :text="currentCurrency != 'TWD'"
          @click="currentCurrency = 'TWD'"
        />
        <RoundButton
          class="!px-4"
          label="原幣別*(註3)"
          :text="currentCurrency != 'origin'"
          @click="currentCurrency = 'origin'" />
      </div>
    </section>

    <!-- mobile -->
    <ul class="grid grid-cols-[30%_35%_35%] two-col-to-four-table mb-8 lg:hidden">
      <li class="flex items-center th">名稱</li>
      <li class="td">00882中信中國高股息
        <span class="text-red">
          (基金之配息來源可能為收益平準金)
        </span></li>
      <li class="td">恒生中國高股息指數</li>
      <li class="th">淨值/指數</li>
      <li class="!text-base text-center td">XX.XX</li>
      <li class="!text-base text-center td">XX,XXX.XXX</li>
      <li class="th">日漲跌幅</li>
      <li class="!text-base text-center td">X.XX%(A)</li>
      <li class="!text-base text-center td">X.XX%(B)</li>
      <li class="th">日追蹤差距(A)-(B)</li>
      <li class="flex items-center justify-center col-span-2 !text-base td">X.XX%</li>
      <li class="th">淨值/指數<br>(註1)</li>
      <li class="!text-base flex items-center justify-center td">XX.XX</li>
      <li class="!text-base flex items-center justify-center td">XX,XXX.XXXX</li>
      <li class="th">累積漲跌幅<br>(註2)</li>
      <li class="!text-base flex items-center justify-center td">X.XX% (C)</li>
      <li class="!text-base flex items-center justify-center td">X.XX% (D)</li>
      <li class="th">累積追蹤差距(C)-(D)</li>
      <li class="flex items-center justify-center col-span-2 !text-base td">X.XX%</li>
      <li class="th">資料日期</li>
      <li class="col-span-2 !text-base text-center td">YYYY/MM/DD</li>
    </ul>
   
    <!-- desktop -->
    <div class="overflow-x-auto shadow-2xl rounded-2xl visible-desktop-block">
      <table class="w-full overflow-hidden bg-white rounded-2xl whitespace-nowrap lg:whitespace-normal">
        <thead class="py-2 text-white bg-main">
          <tr>
            <th rowspan="2" class="p-2 align-middle border-r border-[#8bcaca] border-solid">基金/標的指數</th>
            <th rowspan="2" class="p-2 align-middle border-[#8bcaca] border-solid border-x">基準日</th>
            <th colspan="3" class="py-2 border-b border-r border-[#8bcaca] border-solid">最新</th>
            <th colspan="3" class="py-2 border-b border-[#8bcaca] border-solid">今年以來</th>
          </tr>
          <tr>
            <th class="p-2">淨值/指數</th>
            <th class="p-2 break-keep">日漲跌幅</th>
            <th class="p-2 border-r border-[#8bcaca] border-solid lg:whitespace-nowrap">日追蹤差距<br>(A)-(B)</th>
            <th class="p-2">淨值/指數<br>(註1)</th>
            <th class="p-2 lg:whitespace-nowrap">累積漲跌幅<br>(註2)</th>
            <th class="p-2 lg:whitespace-nowrap">累積追蹤差距<br>(C)-(D)</th>
          </tr>
        </thead>
        <tbody v-for="(fund, idx) in fakeData" :key="fund.code" class="py-2 text-center">
          <tr :class="{ 'bg-[#f4f4f4]': idx % 2 != 0}">
            <!-- 基金/標的指數 -->
            <td class="py-3 pl-4 pr-3 text-left align-middle">
              <p class="pb-3 border-b border-solid border-[#dfdfdf]">
                {{ fund.code }}{{ fund.name}}
                <span v-if="fund.warning" class="text-red">({{ fund.warning }})</span>
              </p>
            </td>
            <!-- 基準日 -->
            <td rowspan="2" class="px-4 align-middle" :class="{ 'bg-[#f4f4f4]': idx % 2 != 0}">
              <p>{{ fund.date }}</p>
            </td>
            <!-- 最新/基金/淨值/指數 -->
            <td class="align-middle">
              <p class="border-b border-solid pb-3 border-[#dfdfdf]">
                {{ fund.netValue }}
              </p>
            </td>
            <!-- 最新/基金/日漲跌幅 -->
            <td class="align-middle" :class="isUpOrDownClass(fund.Aday)">
              <p class="border-b border-solid pb-3 border-[#dfdfdf]">
                {{ fund.Aday }}%(A)
              </p>
            </td>
            <!-- 最新/基金/日追蹤差距 -->
            <td rowspan="2" class="align-middle" :class="isUpOrDownClass(fund.track)">{{ fund.track }}%</td>
            <!-- 今年以來/基金/淨值/指數 -->
            <td class="align-middle">
              <p class="border-b border-solid pb-3 border-[#dfdfdf]">
                {{ fund.yearNetValue }}
              </p>
            </td>
            <!-- 今年以來/基金/累積漲跌幅 -->
            <td class="align-middle" :class="isUpOrDownClass(fund.yearCday)">
              <p class="border-b border-solid pb-3 border-[#dfdfdf]">
                {{ fund.yearCday }}%(C)
              </p>
            </td>
            <!-- 今年以來/基金/累積追蹤差距 -->
            <td rowspan="2" class="align-middle" :class="isUpOrDownClass(fund.yearTrack)">{{ fund.yearTrack }}%</td>
          </tr>
          <tr :class="{ 'bg-[#f4f4f4]': idx % 2 != 0}">
            <!-- 指數名稱 -->
            <td class="pb-3 pl-4 text-left">{{ fund.indexName }}</td>
            <!-- 最新/指數/淨值/指數 -->
            <td class="px-3 pb-3 align-middle">{{ fund.indexNetValue }}</td>
            <!-- 最新/指數/日漲跌幅 -->
            <td class="pb-3 align-middle" :class="isUpOrDownClass(fund.Bday)">{{ fund.Bday }}%(B)</td>
            <!-- 今年以來/指數/淨值/指數 -->
            <td class="px-3 pb-3 align-middle">{{ fund.yearIndexNetValue }}</td>
            <!-- 今年以來/指數/累積漲跌幅 -->
            <td class="pb-3 align-middle" :class="isUpOrDownClass(fund.yearDday)">
              {{ fund.yearDday }}%(D)
            </td>
            
          </tr>
          
        </tbody>
      </table>
    </div>

    <Hr class="mb-10 mt-14" />

    <p class="mt-10 mb-2">註：</p>
    <ul class="mb-2 ml-5 text-sm font-medium list-decimal">
      <li>此淨值/指數之基準日為前一年度ETF最後一個營業日；若當年度掛牌之ETF則基準日為掛牌日。</li>
      <li>累積漲跌幅為ETF或指數當年度累積報酬率，並以含息淨值為計算基礎。</li>
      <li>原幣別係指基金及指數皆依原計價幣別進行計算；新台幣係指將指數轉換至新台幣後進行計算。其匯率取得係以基準日彭博資訊(Bloomberg)所取得匯率換算，詳細取價原則請詳基金公開說明書。</li>
    </ul>
    <p class="text-sm"><span class="text-main">*</span>當期基金含息報酬率%以本公司自公正第三方(例如：公會委請之專家學者、理柏（Lipper）、嘉實資訊（股）公司或彭博（Bloomberg）等基金評鑑機構)取得所計算之基金含息報酬率為標準。</p>


  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/track.png'
import { isUpOrDownClass } from '@/utils/is-up-or-down-class'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '追蹤差距', routeName: undefined },
]


// tabs
const tabs = ref([
  {
    name: 'all',
    label: '全部ETF'
  },
  {
    name: 'oversea',
    label: '海外ETF'
  },
  {
    name: 'domestic',
    label: '國內ETF'
  },
  {
    name: 'leveraged',
    label: '槓/反ETF'
  },
  {
    name: 'bond',
    label: '債券ETF'
  }
])
const currentTab = ref(tabs.value[0].name)
const handleTabClick = tab => {
  currentTab.value = tab
}


const fakeData = ref([
  {
    code: '(證券代碼)',
    name: '(證券簡稱)',
    warning: '警語',
    indexName: '(指數名稱)',
    date: 'yyyy/mm/dd',
    netValue: 'XX.XX',
    indexNetValue: 'XX,XXX.XXXX',
    Aday: 0,
    Bday: 0,
    track: 0,
    yearNetValue: 'XX.XX',
    yearIndexNetValue: 'XX,XXX.XXXX',
    yearCday: 0,
    yearDday: 0,
    yearTrack: 0,
  },
  {
    code: '00882',
    name: '中信中國高股息',
    warning: '基金之配息來源可能為收益平準金',
    indexName: '恒生中國高股息率指數',
    date: '2024/03/08',
    netValue: '10.38',
    indexNetValue: '10,337.10033',
    Aday: 1.16,
    Bday: 1.25,
    track: -0.09,
    yearNetValue: '10.40',
    yearIndexNetValue: '10,082.14153',
    yearCday: -0.19,
    yearDday: 2.52,
    yearTrack: -2.71,
  },
  {
    code: '00795B',
    name: '中信美國公債20年',
    warning: '基金之配息來源可能為收益平準金',
    indexName: '彭博20年期(以上)美國公債指數',
    date: '2024/03/08',
    netValue: '10.38',
    indexNetValue: '10,337.10033',
    Aday: 1.16,
    Bday: 1.25,
    track: -0.09,
    yearNetValue: '10.40',
    yearIndexNetValue: '10,082.14153',
    yearCday: -0.19,
    yearDday: 2.52,
    yearTrack: -2.71,
  },
  {
    code: '00934 中信成長高股息',
    name: '中信中國高股息',
    warning: '基金之配息來源可能為收益平準金',
    indexName: '恒生中國高股息率指數',
    date: '2024/03/08',
    netValue: '10.38',
    indexNetValue: '10,337.10033',
    Aday: 1.16,
    Bday: 1.25,
    track: -0.09,
    yearNetValue: '10.40',
    yearIndexNetValue: '10,082.14153',
    yearCday: -0.19,
    yearDday: 2.52,
    yearTrack: -2.71,
  },
  
])

const currentCurrency = ref('TWD')
</script>
