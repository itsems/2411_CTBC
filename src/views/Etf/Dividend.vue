<template>
  <GradientBackground class="customized-height" :mobile-position="625" :desktop-position="460" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="配息資訊" :imagePath="PageTitleIcon" />
    
    <!-- ETF搜尋 -->
    <section class="mb-6 lg:mb-10 lg:w-[60%]">
      <div class="items-center mb-4 lg:flex">
        <p class="mb-3 lg:mb-0 lg:whitespace-nowrap lg:mr-6">ETF搜尋</p>
        <inputButtonGroup
          class="mb-4 lg:mb-0 lg:mr-1 lg:w-full"
          placeholder="搜尋基金名稱 / 證券代碼"
          button-text="送出"
        />
      </div>

      <div class="items-center mb-4 lg:flex">
        <p class="mb-3 lg:mb-0 lg:whitespace-nowrap lg:mr-6">ETF名稱</p>
        <select class="selects">
          <option>請選擇ETF</option>
          <option value="E0001">中信中國50ETF基金</option>
          <option value="E0014">中信中國高股息ETF基金</option>
          <option value="E0020">中信電池及儲能ETF基金</option>
          <option value="E0022">中信特選金融ETF基金</option>
          <option value="E0025">中信上游半導體ETF基金</option>
        </select>
      </div>

      <div class="items-center mb-4 lg:flex">
        <SearchTags class="col-span-2" :type="typeTags" @tab-click="selectTag" />
      </div>
      <div class="items-center mb-4 lg:flex">
        <SearchTags class="col-span-2" :type="frequencyTags" @tab-click="selectTag" />
      </div>
    </section>

    <!-- Card -->
    <div class="grid-cols-2 gap-8 lg:hidden md:grid">
      <DividendCard
        v-for="etf in fakeData"
        :key="etf.code"
        :fund="etf"
        class="mb-5 shadow-xl"
      />
    </div>

    <!-- Table -->
    <div class="overflow-auto shadow-xl visible-desktop-block fix-head-table-wrap rounded-xl">
      <table class="normal-table fix-head-table has-fix-first-col">
        <thead>
          <tr>
            <th class="text-left fix-first-col">基金名稱</th>
            <th class="break-keep">配息年月</th>
            <th class="break-keep">最新配息金額</th>
            <th class="break-keep">除息交易日</th>
            <th class="break-keep">配息發放日</th>
            <th class="break-keep">當期配息率</th>
            <th class="break-keep">當期含息報酬率</th>
            <th class="break-keep">配息頻率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="etf in fakeData" :key="etf.code">
            <td><EtfName :fund="etf" /></td>
            <td>{{ etf.month }}</td>
            <td>
              <p class="mb-2 text-center">{{ etf.latestShare }}</p>
              <RouterLink :to="{ name: ROUTE_NAME.etfDetail.dividend.name, params: { id: 0 } }">
                <RoundButton
                  class="mx-auto"
                  text
                  label="配息紀錄"
                  small 
                />
              </RouterLink>
            </td>
            <td>{{ etf.exDate }}</td>
            <td>{{ etf.distributionDay }}</td>
            <td>{{ etf.ratio }}</td>
            <td>{{ etf.ratio2 }}</td>
            <td>{{ etf.frequency }}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
    <RoutingButton class="block mx-auto my-10" />

    <Hr class="my-10" />
      
    <p class="mt-10 mb-2 ">註：</p>
    <ul class="mb-2 ml-5 text-sm list-decimal">
      <li>當期配息率計算方式：每單位配息金額÷除息日前一日之淨值×100%。</li>
      <li>當期含息報酬率計算方式：[(當次除息日淨值+每單位配息金額)÷前次除息日淨值-1]×100%。基金成立未滿六個月者，依規定不得揭露績效。</li>
      <li>個別投資人之原始投入本金不同，上表之本金佔配息金額比率並非代表本次配息金額皆涉及每一投資人之原始投入本金，如配息後淨值仍高於個別投資人之原始投入本金，代表本次配息金額並未涉及該投資人之投入本金，而個別投資人投資本基金之盈虧仍應依累積配息金額加計出售價款減除原始投入本金而定。</li>
      <li>上述資料僅供參考，各基金相關配息時間，依本公司公告之實際配息日期為準，實際配息金額與時間將視狀況而可能調整；各基金配息原則請詳閱基金公開說明書。</li>
      <li class="font-medium text-red">基金配息率不代表基金報酬率，於獲配息時，宜一併注意基金淨值之變化，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。</li>
      <li class="font-medium text-red">基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。</li>
    </ul>
    
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/etf-dividend-s.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '配息資訊', routeName: undefined },
]

const fakeData = ref([
  {
    code: '00772B',
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金',
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2024/01',
    latestShare: '0.0195',
    exDate: '2022/02/27',
    distributionDay: '2022/10/05',
    ratio: '0.99%',
    ratio2: '5.87%',
    frequency: '月配',
  },
  {
    code: '00772B',
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金',
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2024/01',
    latestShare: '0.0195',
    exDate: '2022/02/27',
    distributionDay: '2022/10/05',
    ratio: '0.99%',
    ratio2: '5.87%',
    frequency: '月配',
  },
  {
    code: '00772B',
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金',
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2024/01',
    latestShare: '0.0195',
    exDate: '2022/02/27',
    distributionDay: '2022/10/05',
    ratio: '0.99%',
    ratio2: '5.87%',
    frequency: '月配',
  },
  {
    code: '00772B',
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金',
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2024/01',
    latestShare: '0.0195',
    exDate: '2022/02/27',
    distributionDay: '2022/10/05',
    ratio: '0.99%',
    ratio2: '5.87%',
    frequency: '月配',
  },
])

const typeTags = ref({
  label: 'ETF類型',
  tags: [
  { label: '不限', selected: true },
  { label: '國內ETF', selected: false },
  { label: '海外ETF', selected: false },
  { label: '債券ETF', selected: false },
  { label: '槓/反ETF', selected: false },
  ]
})
const frequencyTags = ref({
  label: '配息頻率',
  tags: [
    { label: '不限', selected: true },
    { label: '月配', selected: false },
    { label: '季配', selected: false },
    { label: '半年配', selected: false },
    { label: '年配', selected: false },
    { label: '不配息', selected: false },
  ]
})

const { selectTag } = useTags()
</script>
<style lang="scss" scoped>
.customized-height {
  @media (min-width: 480px) and (max-width: 500px)  {
    top: 585px;
  }
  @media (min-width: 500px) and (max-width: 1024px)  {
    top: 540px;
  }
}
</style>