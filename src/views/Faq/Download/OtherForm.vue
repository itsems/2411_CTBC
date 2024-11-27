<template>
  <!-- 交易表單 -->
  <div class="grid gap-6 lg:grid-cols-3">
    <DownloadFormLink v-for="file in fakeData" :key="file.name" :file="file" />
  </div>
  <hr class="mt-10 mb-5" />
  <div class="text-md">
    <p class="text-main">註：</p>
    <ul class="ml-6 list-decimal">
      <li>申購、買回、轉申購由中國信託投信發行之新台幣計價基金，請填寫表單B-1</li>
      <li>申購、買回、轉申購由中國信託投信發行之外幣計價基金，請填寫表單B-2</li>
      <li>定期定額申購由中國信託投信發行之新台幣計價基金，請填寫表單B-3</li>
    </ul>
  </div>
</template>
<script setup>

const fakeData = ref([
  {
    type: 'C-1',
    name: '受益人基本資料變更申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=23'
  },
  {
    type: 'C-2',
    name: '受益人交易方式異動申請書-自然人',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=24'
  },
  {
    type: 'C-3',
    name: '受益人交易方式異動申請書-法人',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=25'
  },
  {
    type: 'C-4',
    name: '定期定額授權異動申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=26'
  },
  {
    type: 'C-4-1',
    name: '基金交易委託代扣款授權書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=43'
  },
  {
    type: 'C-4-2',
    name: '定期定額自動轉帳付款授權書(郵局專用)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=44'
  },
  {
    type: 'C-5',
    name: '投資適性評估調查表-自然人',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=27'
  },
  {
    type: 'C-6',
    name: '投資適性評估調查表-法人',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=28'
  },
  {
    type: 'C-7',
    name: '委託代理同意書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=29'
  },
  {
    type: 'C-8',
    name: '自然人聲明書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=30'
  },
  {
    type: 'C-9',
    name: '法人客戶聲明書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=31'
  },
  {
    type: 'C-10',
    name: '法人印鑑授權聲明書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=32'
  },
  {
    type: 'C-11',
    name: '法人印鑑授權書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=33'
  },
  {
    type: 'C-12',
    name: '境外基金受益人交易方式異動申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=34'
  },
  {
    type: 'C-14',
    name: '統一證號資料異動申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=46'
  },
  {
    type: 'C-15',
    name: '定期定額授權異動申請書(外幣限越南機會基金)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=48'
  },
  {
    type: 'C-15-1',
    name: '基金交易委託代扣款授權書(美元中信銀專用)',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=49'
  },
  {
    type: 'C-16',
    name: 'ETF基金收益分配資料異動申請書',
    link: 'https://www.ctbcinvestments.com.tw/Home/GetPsDocDownloadOnlineT2?DocNo=50'
  }
])
</script>
