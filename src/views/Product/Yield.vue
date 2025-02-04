<template>
  <!-- 配息專區 -->
  <GradientBackground :mobile-position="190" :desktop-position="275" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle
      title="配息專區"
      :imagePath="PageTitleIcon"
      :size="28"
      class="!mb-4 lg:!mb-8" />

    <section class="py-4 bg-white shadow-2xl rounded-3xl lg:py-7">
      <!-- 搜尋基金 -->
      <div class="px-4 mb-6 lg:grid lg:grid-cols-[max-content_1fr] lg:gap-5 items-center lg:px-8">
        <p class="mb-4 lg:mb-0 lg:mr-1">搜尋基金</p>
        <inputButtonGroup
          class="mb-4 lg:mb-0 lg:mr-1 lg:w-[576px]"
          placeholder="搜尋基金名稱 / 證券代碼"
          button-text="送出"
          @button-click="handleSearchBtnClick" />
        <p class="mb-4 lg:mb-0 lg:mr-1">基金名稱</p>
      
        <select name="FID" class="mb-4 selects lg:mb-0">
          <option value="-1">全部</option>
          <option value="10">中國信託樂齡收益平衡基金</option>
          <option value="18">中國信託2024年到期新興主權債券基金</option>
          <option value="26">中國信託亞太實質收息多重資產基金</option>
          <option value="36">中國信託科技趨勢多重資產基金</option>
          <option value="37">中國信託ESG碳商機多重資產基金</option>
          <option value="41">中國信託ESG金融收益多重資產證券投資信託基金</option>
          <option value="50003">中國信託10年期以上高評級美元公司債券ETF基金</option>
          <option value="50004">中國信託10年期以上優先順位金融債券ETF基金</option>
          <option value="50007">中國信託美國政府20年期以上債券ETF基金</option>
          <option value="50010">中國信託美國高評級市政債券ETF基金</option>
          <option value="50011">中國信託新興亞洲(不含中國)美元精選綜合債券ETF基金</option>
          <option value="50012">中國信託新興市場0-5年期美元政府債券ETF基金</option>
          <option value="50013">中國信託20年期以上BBB級美元公司債券ETF基金</option>
          <option value="50014">中國信託10年期以上電信業美元公司債券ETF基金</option>
          <option value="50016">中國信託恒生中國高股息ETF基金</option>
          <option value="50017">中國信託15年期以上已開發市場ESG投資級美元公司債券ETF基金</option>
          <option value="50018">中國信託15年期以上新興市場美元主權低碳債券ETF基金(本基金非屬環境、社會及治理相關主題基金)</option>
          <option value="50019">中國信託臺灣ESG永續關鍵半導體ETF基金</option>
          <option value="50020">中國信託特選小資高價30ETF基金</option>
          <option value="50021">中國信託臺灣綠能及電動車ETF基金(本基金非屬環境、社會及治理相關主題基金)</option>
          <option value="50026">中國信託臺灣智慧50ETF基金</option>
        </select>
        <SearchTags class="col-span-2 mb-3" :type="fundType" @tab-click="selectTag" />
        <SearchTags class="col-span-2 mb-3" :type="frequency" @tab-click="selectTag" />
      </div>
      <div class="w-full h-[1px] bg-[#efefef]"></div>

      <!-- 搜尋結果 -->
      <div class="p-4 lg:py-9 lg:px-8">

        <!-- mobile: card -->
        <div class="lg:hidden">
          <div class="grid gap-6 md:grid-cols-2">
            <YieldFundCard v-for="fund in fakeData" :key="fund.id" :fund="fund" />
          </div>
        </div>
        
        <!-- Desktop: fixed head table -->
        <table class="w-full overflow-auto border-collapse normal-table">
          <thead>
            <tr>
              <th width="30%" class="sticky top-[75px] rounded-tl-2xl">基金名稱</th>
              <th class="sticky top-[75px]">配息年月</th>
              <th class="sticky top-[75px]">最新配息金額</th>
              <th class="sticky top-[75px]">當期配息率</th>
              <th class="sticky top-[75px]">當期含息報酬率</th>
              <th class="sticky top-[75px]">配息頻率</th>
              <th class="sticky top-[75px] rounded-tr-2xl"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fund in fakeData" :key="fund.id">
              <td>{{ fund.name }}</td>
              <td class="text-center">{{ fund.month }}</td>
              <td class="text-center">
                <p>{{ fund.dividend }}</p>
                <RoundButton
                  label="配息紀錄"
                  text
                  small
                  class="!inline-block" />
              </td>
              <td class="text-center">{{ fund.ratio }}</td>
              <td class="text-center">{{ fund.return }}</td>
              <td class="text-center">{{ fund.frequency }}</td>
              <td>
                <a :href="fund.onlineApply" class="break-keep">
                  <RoundButton label="線上申購" class="!px-4" />
                </a>
              </td>

            </tr>
          </tbody>
        </table>

        <p class="mt-10 mb-2">註：</p>
        <ul class="mb-2 ml-5 text-sm list-decimal">
          <li>當期配息率計算方式：每單位配息金額÷除息日前一日之淨值×100%。</li>
          <li>當期含息報酬率計算方式：[(當次除息日淨值+每單位配息金額)÷前次除息日淨值-1]×100%。基金成立未滿六個月者，依規定不得揭露績效。</li>
          <li>個別投資人之原始投入本金不同，上表之本金佔配息金額比率並非代表本次配息金額皆涉及每一投資人之原始投入本金，如配息後淨值仍高於個別投資人之原始投入本金，代表本次配息金額並未涉及該投資人之投入本金，而個別投資人投資本基金之盈虧仍應依累積配息金額加計出售價款減除原始投入本金而定。</li>
          <li>上述資料僅供參考，各基金相關配息時間，依本公司公告之實際配息日期為準，實際配息金額與時間將視狀況而可能調整；各基金配息原則請詳閱基金公開說明書。</li>
          <li class="font-medium text-red">基金配息率不代表基金報酬率，於獲配息時，宜一併注意基金淨值之變化，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。</li>
          <li class="font-medium text-red">基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。</li>
        </ul>
      </div>
    </section>
    
  </div>
  
  
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/dividend.png'

const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '基金資訊', routeName: undefined },
  { name: '配息專區', routeName: undefined }
]

// fakeData
const fakeData = [
  {
    id: 0,
    name: '中國信託台灣活力證券投資信託基金',
    netWorth: 15.74,
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2022/10',
    date: '2022/10/05',
    dividend: 0.0195,
    ratio: '0.99%',
    return: '5.87%',
    frequency: '月配',
    onlineApply: 'javascript:;',
  },
  {
    id: 1,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: 18.64,
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2022/10',
    date: '2022/10/05',
    dividend: 0.0195,
    ratio: '0.99%',
    return: '5.87%',
    frequency: '月配',
    onlineApply: null,
  },
  {
    id: 2,
    name: '00882 中國信託恒生中國高股息ETF基金',
    netWorth: 19.0,
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2022/10',
    date: '2022/10/05',
    dividend: 0.0195,
    ratio: '0.99%',
    return: '5.87%',
    frequency: '月配',
    onlineApply: 'javascript:;',
  },
  {
    id: 3,
    name: '中國信託智慧城市建設證券投資信託基金',
    netWorth: 217.82,
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2022/11',
    date: '2022/11/05',
    dividend: 0.0195,
    ratio: '0.99%',
    return: '5.87%',
    frequency: '月配',
    onlineApply: null,
  },
  {
    id: 4,
    name: '中國信託2026年到期新興優先順位債券證券投資信託基金-人民幣(避險)A',
    netWorth: 111.74,
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2022/10',
    date: '2022/10/05',
    dividend: 0.0195,
    ratio: '0.99%',
    return: '5.87%',
    frequency: '月配',
    onlineApply: 'javascript:;',
  },
  {
    id: 5,
    name: '中國信託智慧城市建設證券投資信託基金-新台幣',
    netWorth: 11.64,
    warning: '名稱後警語名稱後警語名稱後警語',
    month: '2022/10',
    date: '2022/10/05',
    dividend: 0.0195,
    ratio: '0.99%',
    return: '5.87%',
    frequency: '月配',
    onlineApply: null,
  }
]

// 搜尋類型
const fundType = ref({
  label: '基金類型',
  tags: [
    { label: '不限', selected: true },
    { label: '國內股票', selected: false },
    { label: '海外股票', selected: false },
    { label: '海外債券', selected: false },
    { label: '平衡型', selected: false },
    { label: '多重資產', selected: false },
    { label: '組合型', selected: false },
    { label: '貨幣型', selected: false },
    { label: 'ETF', selected: false },
  ]
})
const frequency = ref({
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

// 搜尋基金 Click 送出
const handleSearchBtnClick = () => {}


</script>
