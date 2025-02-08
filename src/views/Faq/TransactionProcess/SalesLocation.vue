<template>
  <!-- 銷售機構 -->
  <div class="lg:px-8">
    <p class="mb-7">
      本公司發行之各系列基金，除可透過本公司線上交易平台或臨櫃書面、傳真申購外，亦可於以下銷售據點申購
    </p>
    <!-- Selects -->
    <div class="mb-9 lg:grid lg:grid-cols-2 lg:gap-8">
      <select v-model="query.fundName" name="FundName" class="mb-5 lg:mb-0 selects">
        <option selected value="-1">依基金名稱查詢銷售機構</option>
        <option v-for="option in fundNameOptions" :key="option.id" :value="option.id">
          {{ option.name }}
        </option>
      </select>
      <select v-model="query.placeName" name="PlaceName" class="selects">
        <option selected value="-1">依銷售機構查詢可申購基金</option>
        <option v-for="option in placeNameOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <!-- Table -->
    <div class="mb-10 mobile-th-row-table stripped-on-mobile-row desktop-fixed-head">
      <ul>
        <li class="thead">
          <div class="grid grid-cols-[1fr_1fr] fixed-th">
            <li class="text-left lg:!pl-5">基金名稱</li>
            <li class="text-left">銷售據點</li>
          </div>
        </li>
        <div
          v-for="fund in fakeData"
          :key="fund.name"
          class="data-row lg:grid-cols-[1fr_1fr]"
        >
          <div class="th">基金名稱</div>
          <div class="td lg:!pl-5">
            {{ fund.name }}
          </div>
          <div class="th">銷售據點</div>
          <div class="td">{{ fund.place }}</div>
          
        </div>
      </ul>
    </div>
    <hr>
    
  </div>
  <!-- Pagination -->
  <Pagination
    class="mt-10"
    :totalItems="65"
    @prev="navigate"
    @next="navigate"
    @page="handlePageClick"
  />

  
</template>
<script setup>
// Options
const placeNameOptions = ref([
  '三信商業銀行股份有限公司',
  '上海商業儲蓄銀行股份有限公司',
  '大昌證券股份有限公司',
  '中租證券投資顧問股份有限公司',
  '中國信託商業銀行股份有限公司',
  '中國信託綜合證券股份有限公司',
  '元大商業銀行股份有限公司',
  '元大證券股份有限公司',
  '元富證券股份有限公司',
  '王道商業銀行股份有限公司',
  '台中商業銀行股份有限公司',
  '台北富邦商業銀行股份有限公司',
  '台新國際商業銀行股份有限公司',
  '永豐金證券股份有限公司',
  '永豐商業銀行股份有限公司',
  '玉山商業銀行股份有限公司',
  '玉山綜合證券股份有限公司',
  '兆豐國際商業銀行股份有限公司',
  '兆豐證券股份有限公司',
  '合作金庫商業銀行股份有限公司',
  '合作金庫證券股份有限公司',
  '好好證券股份有限公司',
  '安泰商業銀行股份有限公司',
  '京城商業銀行股份有限公司',
  '板信商業銀行股份有限公司',
  '商業銀行股份有限公司',
  '保證責任高雄市第三信用合作社',
  '商業銀行股份有限公司',
  '容海國際證券投資顧問股份有限公司',
  '高雄銀行股份有限公司',
  '國泰世華商業銀行股份有限公司',
  '國泰綜合證券股份有限公司',
  '國票綜合證券股份有限公司',
  '基富通證券股份有限公司',
  '康和綜合證券股份有限公司',
  '第一金證券股份有限公司',
  '第一商業銀行股份有限公司',
  '統一綜合證券股份有限公司',
  '凱基商業銀行股份有限公司',
  '凱基證券股份有限公司',
  '富邦綜合證券股份有限公司',
  '華南永昌綜合證券股份有限公司',
  '華南商業銀行股份有限公司',
  '陽信商業銀行股份有限公司',
  '群益金鼎證券股份有限公司',
  '鉅亨證券投資顧問股份有限公司',
  '彰化商業銀行股份有限公司',
  '臺銀綜合證券股份有限公司',
  '臺灣土地銀行股份有限公司',
  '臺灣中小企業銀行股份有限公司',
  '臺灣新光商業銀行股份有限公司',
  '臺灣銀行股份有限公司',
  '聯邦商業銀行股份有限公司'
])
const fundNameOptions = ref([
  {
    name: '中國信託華盈貨幣市場基金',
    id: '80907786'
  },
  {
    name: '中國信託台灣活力基金',
    id: '48893417'
  },
  {
    name: '中國信託樂齡收益平衡基金',
    id: '42443702'
  },
  {
    name: '中國信託智慧城市建設基金',
    id: '72964670'
  },
  {
    name: '中國信託亞太實質收息多重資產基金',
    id: '77553985'
  },
  {
    name: '中國信託越南機會基金',
    id: '88095895'
  },
  {
    name: '中國信託科技趨勢多重資產基金',
    id: '88253351'
  },
  {
    name: '中國信託ESG碳商機多重資產基金',
    id: '88281188'
  },
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金',
    id: '88346529'
  },
  {
    name: '中國信託成長轉機多重資產證券投資信託基金',
    id: '93108097'
  }
])

// Query
const query = ref({
  placeName: -1,
  fundName: -1
})

// Data
const fakeData = ref([
  {
    name: '中國信託亞太實質收息多重資產基金',
    place: '中國信託商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託智慧城市建設基金',
    place: '第一商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託樂齡收益平衡基金',
    place: '中國信託商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託華盈貨幣市場基金',
    place: '中國信託商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託台灣活力基金',
    place: '中國信託商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託越南機會基金',
    place: '中國信託商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託科技趨勢多重資產基金',
    place: '中國信託商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託ESG金融收益多重資產證券投資信託基金',
    place: '中國信託商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託智慧城市建設基金',
    place: '鉅亨證券投資顧問股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  },
  {
    name: '中國信託亞太實質收息多重資產基金',
    place: '華南商業銀行股份有限公司',
    placeTel: '02-87808867',
    placeAddress:
      'https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597'
  }
])

// Pagination
const navigate = () => {}
const handlePageClick = number => {
  console.log(number)
}
</script>
