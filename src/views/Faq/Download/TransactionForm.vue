<template>
  <!-- 交易表單 -->
  <div class="grid gap-6 lg:grid-cols-3">
    <DownloadFormLink v-for="file in fakeData" :key="file.name" :file="file" />
  </div>
  <hr class="mt-10 mb-5" />
  <div class="text-md">
    <p class="text-main">註：</p>
    <ul class="ml-5 list-decimal">
      <li>申購、買回、轉申購由中國信託投信發行之新台幣計價基金，請填寫表單B-1</li>
      <li>申購、買回、轉申購由中國信託投信發行之外幣計價基金，請填寫表單B-2</li>
      <li>定期定額申購由中國信託投信發行之新台幣計價基金，請填寫表單B-3</li>
    </ul>
  </div>
</template>
<script setup>

const fakeData = ref([
  {
    type: 'B-1',
    name: '受益權單位交易申請書(新臺幣計價)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=11'
  },
  {
    type: 'B-2',
    name: '受益權單位交易申請書(外幣計價)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=12'
  },
  {
    type: 'B-3',
    name: '定期定額申購書暨轉帳付款授權書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=13'
  },
  {
    type: 'B-4',
    name: '基金交易委託代扣款授權書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=14'
  },
  {
    type: 'B-5',
    name: '基金風險預告書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=15'
  },
  {
    type: 'B-6',
    name: '境外基金交易申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=16'
  },
  {
    type: 'B-8',
    name: '境外基金扣款轉帳授權書-全國性繳費',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=18'
  },
  {
    type: 'B-9',
    name: '境外基金扣款轉帳授權書-款項收付銀行',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=19'
  },
  {
    type: 'B-10',
    name: '境外基金扣款轉帳授權書-郵局專用',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=20'
  },
  {
    type: 'B-11',
    name: '境外基金指定扣款銀行說明',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=21'
  },
  {
    type: 'B-12',
    name: '境外基金通路報酬揭露',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=22'
  },
  {
    type: 'B-13',
    name: 'ETF現金申購申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=36'
  },
  {
    type: 'B-14',
    name: 'ETF現金買回申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=37'
  },
  {
    type: 'B-15',
    name: 'ETF現金申購買回撤銷申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=38'
  },
  {
    type: 'B-16',
    name: '定期定額申購書暨轉帳付款授權書(外幣限越南機會基金)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=45'
  },
  {
    type: 'B-17',
    name: '基金交易委託代扣款授權書(美元中信銀專用)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=47'
  }
])
</script>
