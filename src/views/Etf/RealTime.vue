<template>
  <GradientBackground :mobile-position="190" :desktop-position="280" />
  <!-- 即時預估淨值 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="即時預估淨值" :size="30" :imagePath="PageTitleIcon" />

    <div class="hidden mb-5 lg:grid lg:grid-cols-5 lg:gap-10">
      <TabWithBar
        v-for="name in tabs"
        class="shrink-0"
        :key="name"
        :is-active="currentTab === name.name"
        :name="name.label"
        @click="handleTabClick(name.name)"
      />
    </div>
    
    <select v-model="currentTab" class="mb-5 selects lg:hidden" @change="handlePageChange(currentTab)">
      <option v-for="tab in tabs" :value="tab.name" :key="tab.label">
        {{ tab.label }}
      </option>
    </select>
    
    <p class="mb-6 lg:text-right text-md">更新時間 2022/12/14 14:39:40</p>
    
    <!-- Card -->
    <div class="grid-cols-2 gap-6 mb-8 md:grid lg:hidden">
      <RealtimeCard 
        v-for="fund in fakeData"
        :fund="fund"
        :key="fund.code"
      />
    </div>

    <!-- Table -->
    <div class="hidden mb-10 overflow-x-auto shadow-2xl rounded-3xl lg:block">
      <table class="normal-table rounded-3xl">
        <thead>
          <tr>
            <th rowspan="2" class="min-w-[150px] border-r border-[#8bcaca] border-solid text-left">ETF名稱</th>
            <th colspan="4" class="border-b border-[#8bcaca] border-solid">淨值</th>
            <th colspan="4" class="border-b border-[#8bcaca] border-solid border-x">市價</th>
            <th colspan="2" class="border-b border-[#8bcaca] border-solid">折溢價</th>
            <th rowspan="2" class="border-l border-[#8bcaca] border-solid">即時追<br>蹤差距</th>
          </tr>
          <tr>
            <th class="break-keep">昨收淨值</th>
            <th><p class="break-keep">預估淨值</p></th>
            <th>漲跌</th>
            <th class="border-r border-[#8bcaca] border-solid">漲跌幅</th>
            <th><p class="break-keep">昨收市價</p></th>
            <th><p class="break-keep">最新市價</p></th>
            <th>漲跌</th>
            <th class="border-r border-[#8bcaca] border-solid break-keep">漲跌幅</th>
            <th>即時<br><p class="break-keep">折溢價</p></th>
            <th class="break-keep">
              折溢<br>價幅度
            </th>
          </tr>
        </thead>
        <tbody>
          <RealtimeTableTr v-for="fund in fakeData" :fund="fund" :key="fund.code" />
        </tbody>

      </table>
    </div>
    
    <div class="items-center lg:flex lg:gap-6 rounded-2xl content-card">
      <div class="flex items-center gap-4 mb-4 lg:mb-0 shrink-0">
        <img src="@/assets/images/icon/estimate2.png" alt="" />
        <div class="text-2xl text-main">參考匯率
          <p class="text-sm">(2024/1/15)</p>
        </div>
      </div>
      
      <div class="text-lg font-medium lg:flex lg:flex-wrap">
        <ReferenceRate class="mr-2" number="7.2369" currency="CNH"/>
        <ReferenceRate class="mr-2" number="7.7834" currency="HKD" />
        <ReferenceRate class="mr-2" number="156.1000" currency="JPY" />
        <ReferenceRate class="mr-2" number="1,396.9400" currency="KRW"  />
        <ReferenceRate class="mr-2" number="32.4720" currency="TWD" />
        <ReferenceRate class="mr-2" number="1.0000" currency="USD" />
      </div>
    </div>

    <Hr class="my-8" />

    <p class="mb-2 text-main">說明：</p>
    <ul class="mb-5 text-sm font-medium">
      <li>
        (1)預估淨值：根據基金投資組合中的股票即時成交價格乘上前一日基金投資組合乘上即時匯率所計算出的單位淨值，約每15秒即時更新一次。
      </li>
      <li>(2)最新市價：投資人於次級市場進行基金買賣，即時撮合的交易價格。</li>
      <li>(3)折溢價幅度：( 最新市價–預估淨值 ) / 預估淨值。</li>
      <li>
        (4)即時追蹤差距：即時基金績效與標的指數表現之偏離度。若標的指數於資料更新時間未有即時報價，則以前一營業日之基金績效與標的指數表現，加計即時匯率計算之。前述標的指數為新台幣計價參考。
      </li>
      <li>(5)即時參考匯率：上列即時參考匯率僅供參考。基金淨值之匯率依基金信託契約相關條款所訂，以計算日中華民國時間下午三時彭博資訊(Bloomberg)所示收盤匯率為計算依據。如計算日當日無法取得彭博資訊(Bloomberg)所提供之收盤匯率時，以路透社(Reuters)所提供之資訊代之。如計算日無收盤匯率或無法取得者，則以最近之收盤匯率為準。</li>
    </ul>
    <p class="mb-2 text-main">備註：</p>
    <ul class="mb-5 text-sm font-medium">
      <li>
        (1)上述各項數據僅供參考，市價之各項數據為基金在台灣掛牌交易的狀況，以新台幣計價；該價格及漲跌幅部分仍應以台灣證券交易所公佈為準；淨值則應以中國信託投信最終公佈之每日淨值為準。
      </li>
      <li>(2)台灣證券交易所交易時間：週一～週五9：00～13：30</li>
      <li>
        (3)中華民國證券市場交易日休市時，將停止提供及更新淨值及其漲跌幅。交易所休市時、開盤前或開盤後尚未成交前，相對應的「資料時間」欄位將以空白呈現。
      </li>
      <li>
        (4)資料更新時間為每營業日8：30～17：00，台灣地區若為非營業日，當日停止提供及更新資料。惟因使用者個別網路傳輸品質速度不同可能影響更新頻率或時間。
      </li>
      <li>
        (5)以上交易資訊(包含ETF現貨及ETF期貨)係中國信託投信為服務投資人所提供，內容僅供參考，中國信託投信不負擔保其正確性或即時性之責任，如有任何疏漏、錯誤，或因網路、系統問題，包括但不限於斷線、壅塞、延宕等情事，或者其他因使用、取得、下載本網頁資料所造成之任何損害，中國信託投信、台灣證券交易所、台灣期貨交易所均不負賠償責任。使用以上資料請投資人自行評估考量並承擔風險。
      </li>
    </ul>
    <p class="text-main">警語：</p>
    <p class="mb-10 text-sm">
      因即時追蹤差距之計算來源，將包含基金即時估計淨值、即時指數值、即時匯率等元素，若為跨國投資的海外市場ETF，
      <span class="font-medium text-red">則可能因國內外股/債/匯金融市場暫停交易、指數公司發布指數值時間延遲或不正確、資訊傳輸中斷等因素，無法取得以上元素，進而提供最新即時追蹤差距。</span>
      其中若無法取得即時指數資料時，將以前一營業日之基金績效與標的指數表現，加計即時匯率計算並呈現之。
    </p>
  </div>
  <Modal
    :show="shouldModalShow"
    :is-closable="false"
    header="本網站資料風險預告及免責條款"
  >
    <template #body>
      <p>本網站內任何由中國信託投信(下稱本公司)為服務投資人而製作之報價資料，僅供投資人參考使用。盤中預估淨值雖然每15秒更新，但因基金所持有之成份股差異甚大、價格波動迅速，且投資人個別使用網路連線情形或傳輸品質狀況，亦可能影響其更新頻率時間差異。故請注意，以上資料僅供參考，盤中最新市價、漲跌幅以臺灣證券交易所公佈為準；基金淨值則以本公司最終公佈之每日淨值為準。</p>
      <br>
      <p>本公司不擔保資料完全正確無誤，且對於本網站所提供之資訊內容，本公司有權隨時修改或刪除。若因任何資料之不正確、疏漏，或如遇網路斷線、股價報價延遲、系統延宕...等不可抗力之情事，所衍生之損害或損失，本公司均不負法律責任。</p>
      <br>
      <p>投資人在做任何相關規劃與決定之前，應請教專業人員，並針對投資人自身個別的情況，提供專業意見，以符合投資人專屬的投資需求。依據本網站取得任何資料，應由投資人自行判斷投資標的、投資風險，承擔投資損益結果，不應將本資料內容引為投資的唯一依據，如因任何資料下載而導致投資人電腦系統任何損壞或資料流失，應由下載人自負完全責任。</p>
      <Hr class="mt-8 mb-10" />

      <div class="flex items-center justify-center gap-2 mb-6">
        <input
          v-model="isChecked"
          type="checkbox"
          id="agree"
          class="w-4 h-4">
        <label for="agree">我已詳細閱讀以上文字並了解上述風險</label>
      </div>
      <div class="flex justify-center gap-4">
        <RoundButton
          :disabled="!isChecked"
          :grey="!isChecked"
          label="同意"
          @click="closeModal" />
        <RouterLink :to="{ name: ROUTE_NAME.etf.index }">
          <RoundButton grey label="不同意" />
        </RouterLink>
      </div>
    </template>
  </Modal>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/estimate.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '即時預估淨值', routeName: undefined },
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
const router = useRouter()
const currentTab = ref(tabs.value[0].name)
const handlePageChange = tabName => {
  currentTab.value = tabName
  router.push({ name: tabName })
}

// 燈箱
const { 
  shouldModalShow,
  closeModal,
  openModal
} = useModal()
openModal()

const isChecked = ref(false)

const fakeData = ref([
  {
    code: '00882',
    name: '中信中國高股息',
    warning: '基金之配息來源可能為收益平準金',
    current: 11.64,
    currentChange: 0.25,
    currentChangePercent: 0.1,
    expectValue: 16.83,
    expectValueChange: -0.02,
    expectValueChangePercent: -0.01,
    yesterday1: 16.82,
    yesterday2: 16.82,
    discount: 0.04,
    discountChange: 0.25,
    track: -0.11,
    date: '03/06'
  },
  {
    code: '00882',
    name: '中信中國高股息',
    warning: '基金之配息來源可能為收益平準金',
    current: 11.64,
    currentChange: 0.25,
    currentChangePercent: 0.1,
    expectValue: 16.83,
    expectValueChange: -0.02,
    expectValueChangePercent: -0.01,
    yesterday1: 16.82,
    yesterday2: 16.82,
    discount: 0.04,
    discountChange: 0.25,
    track: -0.11,
    date: '03/06'
  },
  {
    code: '00882',
    name: '中信中國高股息',
    warning: '基金之配息來源可能為收益平準金',
    current: 11.64,
    currentChange: 0.25,
    currentChangePercent: 0.1,
    expectValue: 16.83,
    expectValueChange: -0.02,
    expectValueChangePercent: -0.01,
    yesterday1: 16.82,
    yesterday2: 16.82,
    discount: 0.04,
    discountChange: 0.25,
    track: -0.11,
    date: '03/06'
  },
])

</script>
<style lang="scss" scoped>
.text-ellipsis {
  @include generateContentStyle(15px, 2);
}
</style>