<template>
  <!-- 產品特色 -->
  <section class="mb-8">
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="產品特色" />
    <div class="mb-4 lg:py-6 content-card lg:mb-10 lg:pl-7">
      <p class="text-lg font-medium text-main">成份股高大上</p>
      <p class="mb-2 text-md">鎖定美國與香港掛牌的中國公司，產業分散並包含最具成長潛力之電子商務類股</p>
      <p class="text-lg font-medium text-main">成份股高大上</p>
      <p class="mb-2 text-md">鎖定美國與香港掛牌的中國公司，產業分散並包含最具成長潛力之電子商務類股</p>
      <p class="text-lg font-medium text-main">成份股高大上</p>
      <p class="text-md">鎖定美國與香港掛牌的中國公司，產業分散並包含最具成長潛力之電子商務類股</p>
    </div>
  </section>

  <!-- 基本資料 -->
  <section class="mb-8">
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="基本資料" />
    <ul class="grid grid-cols-[max-content_auto] lg:grid-cols-[20%_30%_20%_30%] two-col-to-four-table mb-8">
      <li class="th">成立日期</li>
      <li class="td">2021/01/27</li>
      <li class="th">掛牌日期</li>
      <li class="td">2021/02/04</li>
      <li class="flex items-center th">經理費(年)</li>
      <li class="td">
        <div>
          <p>基金淨資產規模</p>
          <ul class="ml-6 list-disc">
            <li>50億以下(含)：0.50%</li>
            <li>50億(不含)以上：0.45%</li>
          </ul>
        </div>
      </li>
      <li class="flex items-center th">保管費(年)</li>
      <li class="td">
        <p>基金淨資產規模</p>
        <ul class="ml-6 list-disc">
          <li>50億以下(含)：0.18%</li>
          <li>50億(不含)以上：0.16%</li>
        </ul>
      </li>
      <li class="th">保管銀行</li>
      <li class="td">兆豐國際商業銀行</li>
      <li class="th">基金經理人</li>
      <li class="td">葉松炫</li>
      <li class="th">計價幣別</li>
      <li class="td">新台幣</li>
      <li class="th">收益分配</li>
      <li class="td">半年配</li>
      <li class="th">風險報酬等級</li>
      <li class="td">RR5</li>
      <li class="th">證券代碼</li>
      <li class="td">00882</li>
      <li class="th">Bloomberg代號</li>
      <li class="td">00882 TT</li>
      <li class="th">ISIN代號</li>
      <li class="td">TW0000088208</li>
    </ul>
    
   
  </section>

  <!-- 交易資訊 -->
  <section class="mb-8">
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="交易資訊" />
    <div class="shadow-2xl rounded-3xl">
      <ul class="grid grid-cols-[max-content_auto] lg:grid-cols-[20%_30%_20%_30%] two-col-to-four-table mb-8">
        <li class="th">交易單位</li>
        <li class="td">1,000受益權單位為基準</li>
        <li class="th">升降單位</li>
        <li class="td">未滿50元者為0.01元；50元以上為0.05元</li>
        <li class="th">漲跌幅限制</li>
        <li class="td">無</li>
        <li class="th">信用交易</li>
        <li class="td">上市當日即開放信用交易且無平盤下不得融券放空的限制</li>
        <li class="th">證券交易稅</li>
        <li class="td">1‰</li>
        <li class="th">次級市場交易手續費</li>
        <li class="td">最高 1.425 ‰</li>
        <li class="th">申購 / 買回方式</li>
        <li class="td">現金(新台幣)</li>
        <li class="th">買回付款日</li>
        <li class="td">自買回完成日之次一營業日起3個營業日內付款</li>
        <li class="th">現金申購 / 買回基數</li>
        <li class="td">50 萬個受益權單位數或其整倍數</li>
        <li class="th">現金申購 / 買回手續費</li>
        <li class="td">最高不得超過 2%</li>
      </ul>
    </div>
  </section>

  <!-- 檔案下載 -->
  <section class="mb-8">
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="檔案下載" />
    <div class="lg:flex lg:flex-wrap lg:gap-6 content-card">
      <FileDownloadList class="mb-6 lg:mb-0" text="基金月報" />
      <FileDownloadList class="mb-6 lg:mb-0" text="公開說明書" />
      <FileDownloadList class="mb-6 lg:mb-0" text="簡式公開說明書" />
      <FileDownloadList class="mb-6 lg:mb-0" text="近五年費用率" />
      <FileDownloadList class="mb-6 lg:mb-0" text="交易表單" />
      <FileDownloadList text="ESG定期揭露資訊" />
    </div>
  </section>

  <!-- 參與卷商 -->
  <section class="mb-8">
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="參與卷商" />
    <table class="normal-table">
      <thead>
        <tr>
          <th class="text-left"><p class="lg:pl-5">公司名稱</p></th>
          <th class="text-left lg:hidden">公司電話/地址</th>
          <th class="hidden text-left lg:table-cell">公司電話</th>
          <th class="hidden text-left lg:table-cell">公司地址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in fakeData" :key="company.name">
          <td><p class="lg:pl-5">{{ company.name }}</p></td>
          <td>
            <p>{{ company.tel }}</p>
            <p class="lg:hidden">{{ company.address }}</p>
          </td>
          <td class="hidden lg:table-cell">
            {{ company.address }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- 流動量提供者 -->
  <section class="mb-8">
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="流動量提供者" />
    <table class="normal-table">
      <thead>
        <tr>
          <th class="text-left"><p class="lg:pl-5">公司名稱</p></th>
          <th class="text-left lg:hidden">公司電話/地址</th>
          <th class="hidden text-left lg:table-cell">公司電話</th>
          <th class="hidden text-left lg:table-cell">公司地址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in fakeData2" :key="company.name">
          <td><p class="lg:pl-5">{{ company.name }}</p></td>
          <td>
            <p>{{ company.tel }}</p>
            <p class="lg:hidden">{{ company.address }}</p>
          </td>
          <td class="hidden lg:table-cell">
            {{ company.address }}
          </td>
        </tr>
      </tbody>
    </table>
    
  </section>
</template>
<script setup>

defineProps({
  fund: {
    type: Object,
    required: true
  }
})

const fakeData = ref([
  {
    name: '中國信託綜合證券股份有限公司',
    tel: '(02)6639-2000',
    address: '臺北市南港區經貿二路168號3樓'
  },
  {
    name: '凱基證券股份有限公司',
    tel: '(02)2181-8888',
    address: '臺北市中山區成功里明水路698號3樓、700號3樓'
  },
  {
    name: '富邦綜合證券股份有限公司',
    tel: '(02)2771-6699',
    address: '臺北市大安區仁愛路4段169號15樓'
  },
  {
    name: '元大證券股份有限公司',
    tel: '(02)2718-1234',
    address: '臺北市南京東路三段225號13、14樓'
  },
  {
    name: '永豐金證券股份有限公司',
    tel: '(02)2311-4345',
    address: '臺北市中正區重慶南路1段2號7樓、18樓及20樓'
  },
  {
    name: '兆豐證券股份有限公司',
    tel: '(02)3393-6001',
    address: '臺北市忠孝東路二段95號'
  },
  {
    name: '統一綜合證券股份有限公司',
    tel: '(02)2747-8266',
    address: '臺北市松山區東興路8號'
  },
  {
    name: '台新綜合證券股份有限公司',
    tel: '(02)2181-5888',
    address: '臺北市中山北路二段44號2樓'
  },
  {
    name: '合作金庫證券股份有限公司',
    tel: '(02)2752-8000',
    address: '臺北市松山區長安東路二段225號C棟6號'
  },
  {
    name: '康和綜合證券股份有限公司',
    tel: '(02)8787-1888',
    address: '臺北市信義區基隆路一段176號B1、B2'
  },
  {
    name: '群益金鼎證券股份有限公司',
    tel: '(02)8789-8888',
    address: '臺北市松山區民生東路三段156號11樓'
  },
  {
    name: '玉山綜合證券股份有限公司',
    tel: '(02)5556-1313',
    address: '臺北市松山區民生東路三段158號6樓'
  },
  {
    name: '國票綜合證券股份有限公司',
    tel: '(02)8502-0912',
    address: '台北市重慶北路三段199號地下一樓'
  },
  {
    name: '元富證券股份有限公司',
    tel: '(02)2325-5818',
    address: '臺北市大安區敦化南路二段97號18樓'
  }
])

const fakeData2 = ref([
  {
    name: '中國信託綜合證券股份有限公司',
    tel: '(02)6639-2000',
    address: '臺北市南港區經貿二路168號3樓'
  },
  {
    name: '凱基證券股份有限公司',
    tel: '(02)2181-8888',
    address: '臺北市中山區成功里明水路698號3樓、700號3樓'
  },
  {
    name: '富邦綜合證券股份有限公司',
    tel: '(02)2771-6699',
    address: '臺北市大安區仁愛路4段169號15樓'
  },
  {
    name: '元大證券股份有限公司',
    tel: '(02)2718-1234',
    address: '臺北市南京東路三段225號13、14樓'
  },
  {
    name: '永豐金證券股份有限公司',
    tel: '(02)2311-4345',
    address: '臺北市中正區重慶南路1段2號7樓、18樓及20樓'
  },
  {
    name: '台新綜合證券股份有限公司',
    tel: '(02)2181-5888',
    address: '臺北市中山北路二段44號2樓'
  }
])
</script>
