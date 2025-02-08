<template>
  <!-- 基金匯款帳號 -->
  <div class="items-center lg:px-8 lg:flex">
    <p class="mb-3 mr-6 lg:mb-0">基金名稱</p>
    <select v-model="query.fundName" name="FundName" class="w-full lg:w-auto selects">
      <option selected value="-1">請選擇基金名稱</option>
      <option v-for="option in fundNameOptions" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
  <div class="mt-4 mb-8 break-words lg:px-8">
    <p>若您要透過臨櫃或傳真方式申購本公司所發行之基金，基金款項之繳費請依據各基金之匯款銀行、戶名、帳號與最低申購金額辦理</p>
    <p>若您是本公司電子交易戶，可透過線上交易平台 <a class="hover:underline text-main" href="https://etrade.ctbcinvestments.com.tw/CTBC.EC/" target="_blank"> https://etrade.ctbcinvestments.com.tw/CTBC.EC/</a> 申購</p>
  </div>
  <hr class="mb-10">


  <!-- Table -->
  <div class="mb-10 mobile-th-row-table stripped-on-mobile-row desktop-fixed-head">
    <ul>
      <li class="thead">
        <div class="grid lg:grid-cols-[300px_100px_130px_180px_1fr_1fr_1fr] fixed-th">
          <div>基金名稱</div>
          <div>級別</div>
          <div>匯款銀行</div>
          <div>匯款戶名</div>
          <div>匯款帳號</div>
          <div>單筆申購<br />最低金額</div>
          <div>定期定額申購<br />每次最低金額</div>
        </div>
      </li>
      <!-- Data row start -->
      <div class="data-row lg:grid-cols-[300px_100px_130px_180px_1fr_1fr_1fr]">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td"><p>中國信託銀行<br>營業部</p></div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">中國信託ESG碳商機多重資產基金專戶</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <!-- Data row end -->
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">B. 月配息型</div>
        <div class="th">匯款銀行</div>
        <div class="td"><p>中國信託銀行<br>營業部</p></div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">中國信託ESG碳商機多重資產基金專戶</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td">
          <ul class="ml-4 list-disc">
            <li>CTBC BANK Co.,Ltd</li>
            <li>SWIFT CODE：CTCBTWTPXXX</li>
          </ul>
        </div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">CTBC ESG Carbon Transition Multi-Asset Fund</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td">
          <ul class="ml-4 list-disc">
            <li>CTBC BANK Co.,Ltd</li>
            <li>SWIFT CODE：CTCBTWTPXXX</li>
          </ul>
        </div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">CTBC ESG Carbon Transition Multi-Asset Fund</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td"><p>中國信託銀行<br>營業部</p></div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">中國信託ESG碳商機多重資產基金專戶</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">B. 月配息型</div>
        <div class="th">匯款銀行</div>
        <div class="td"><p>中國信託銀行<br>營業部</p></div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">中國信託ESG碳商機多重資產基金專戶</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td">
          <ul class="ml-4 list-disc">
            <li>CTBC BANK Co.,Ltd</li>
            <li>SWIFT CODE：CTCBTWTPXXX</li>
          </ul>
        </div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">CTBC ESG Carbon Transition Multi-Asset Fund</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td">
          <ul class="ml-4 list-disc">
            <li>CTBC BANK Co.,Ltd</li>
            <li>SWIFT CODE：CTCBTWTPXXX</li>
          </ul>
        </div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">CTBC ESG Carbon Transition Multi-Asset Fund</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td">
          <ul class="ml-4 list-disc">
            <li>CTBC BANK Co.,Ltd</li>
            <li>SWIFT CODE：CTCBTWTPXXX</li>
          </ul>
        </div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">CTBC ESG Carbon Transition Multi-Asset Fund</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
      <div class="data-row row-align">
        <div class="th">基金名稱</div>
        <div class="flex items-center td">
          <div>
            中國信託ESG碳商機多重資產基金-台幣<p class="font-bold text-red">(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)</p>
          </div>
        </div>
        <div class="th">級別</div>
        <div class="td">A. 累積型</div>
        <div class="th">匯款銀行</div>
        <div class="td"><p>中國信託銀行<br>營業部</p></div>
        <div class="th">匯款戶名</div>
        <div class="break-normal td">中國信託ESG碳商機多重資產基金專戶</div>
        <div class="th">匯款帳號</div>
        <div class="td border-r border-b border-solid !border-[#f4f4f4] lg:border-0">9013-5001-8498</div>
        <div class="th">單筆申購<br />最低金額</div>
        <div class="td lg:text-center">10000</div>
        <div class="th">定期定額申購<br />每次最低金額</div>
        <div class="td lg:text-center">3000</div>
      </div>
    </ul>
  </div>

  <div class="lg:px-8">
    <hr class="mb-8" />
    <p class="mt-5 mb-1 font-bold text-md text-font-color">註：外幣計價基金匯款注意事項</p>
    <ul class="text-sm font-medium list">
      <li>1) 外幣計價基金匯款時，請銀行務必註明『當日匯款』及全額到付。</li>
      <li>2) 受益人須留意外幣匯款到達時點，可能因銀行作業時間而遞延，並確認款項需全額匯至基金專戶。</li>
      <li>3) 備註欄或附言：申購匯款請填寫申購人之身分證字號/統一編號或英文姓名。</li>
    </ul>
  </div>

  <!-- Pagination -->
  <Pagination
    class="my-14"
    :totalItems="65"
    @prev="navigate"
    @next="navigate"
    @page="handlePageClick"
  />
</template>
<script setup>
// Query
const query = ref({
  fundName: -1
})

const fundNameOptions = ref([
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金',
    id: '88346529'
  },
  {
    name: '中國信託ESG碳商機多重資產基金',
    id: '88281188'
  },
  {
    name: '中國信託台灣活力基金',
    id: '48893417'
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金',
    id: '93108097'
  },
  {
    name: '中國信託亞太實質收息多重資產基金',
    id: '77553985'
  },
  {
    name: '中國信託科技趨勢多重資產基金',
    id: '88253351'
  },
  {
    name: '中國信託智慧城市建設基金',
    id: '72964670'
  },
  {
    name: '中國信託華盈貨幣市場基金',
    id: '80907786'
  },
  {
    name: '中國信託越南機會基金',
    id: '88095895'
  },
  {
    name: '中國信託樂齡收益平衡基金',
    id: '42443702'
  }
])

// Pagination
const navigate = () => {}
const handlePageClick = number => {
  console.log(number)
}
</script>