<template>
  <!-- 開戶表單 -->
  <div class="grid gap-6 lg:grid-cols-3">
    <DownloadFormLink v-for="file in fakeData" :key="file.name" :file="file" />
  </div>
  <hr class="mt-10 mb-5" />
  <div class="text-md">
    <p class="text-main">註：</p>
    <ul class="ml-5 list-decimal">
      <li>
        自然人客戶(年滿18歲之成年人)，請填寫表單A-1
        <ul class="custom-decimal">
          <li>欲申購本公司代理之境外基金，請加填表單A-3</li>
          <li>國中學歷(含)、全民健保重大傷病、70歲(含)以上，請加填表單A-5</li>
          <li>美國稅務居民請加填表單A-8</li>
          <li>非美國稅務居民但具美國身分跡象者，請加填表單A-10</li>
          <li>若未成年人僅有1位法定代理人者，請加填表單A-4</li>
        </ul>
      </li>
      <li>
        法人客戶，請填寫表單A-2
        <ul class="custom-decimal">
          <li>欲同時申購本公司代理之境外基金，請加填表單A-3</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>

const fakeData = ref([
  {
    type: 'A-1',
    name: '基金開戶及交易同意書_自然人',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=1'
  },
  {
    type: 'A-2',
    name: '基金開戶及交易同意書-法人',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=2'
  },
  {
    type: 'A-3',
    name: '境外基金電子暨傳真交易約定書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=3'
  },
  {
    type: 'A-4',
    name: '未成年受益人法定代理人同意書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=4'
  },
  {
    type: 'A-6',
    name: 'FATCA身份聲明書-自然人',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=6'
  },
  {
    type: 'A-7',
    name: 'CRS稅務居住者之國家/地區身分聲明書-具控制權之人適用',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=7'
  },
  {
    type: 'A-8',
    name: 'W-9',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=8'
  },
  {
    type: 'A-9',
    name: 'W-8BEN-E',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=9'
  },
  {
    type: 'A-10',
    name: 'W-8BEN',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=10'
  },
  {
    type: 'A-11',
    name: 'CRS稅務居住者之國家/地區身分聲明書-自然人適用',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=39'
  },
  {
    type: 'A-12',
    name: '美國海外帳戶稅收遵循法(FATCA)及CRS稅務居住者身分聲明書-法人適用  ',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=40'
  }
])
</script>
<style lang="scss" scoped>
.custom-decimal {
  margin-left: 25px;
  counter-reset: list;
  > li {
    list-style: none;
    position: relative;
    &:before {
      content: '0' counter(list, decimal) '.';
      counter-increment: list;
      position: absolute;
      left: -1.5rem;
    }
  }
  @media (min-width: 1024px) {
    margin-left: 30px;
  }
}
</style>
