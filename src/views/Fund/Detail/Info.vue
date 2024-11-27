<template>
  <!-- 基金資訊 -->
  <div class="px-4 py-6 bg-white shadow-2xl lg:py-5 lg:px-9 mb-9 lg:items-center rounded-3xl">
    
    <!-- 基金特色 -->
    <div class="flex items-center gap-2 mb-3">
      <img width="18" src="@/assets/images/icon/target.png" alt="" />
      <p class="section-title">
        基金特色
      </p>
    </div>
    <div class="mb-4 lg:mb-10 lg:pl-6">
      <p class="mb-2 text-lg font-medium text-main">成份股高大上</p>
      <p class="mb-2">鎖定美國與香港掛牌的中國公司，產業分散並包含最具成長潛力之電子商務類股</p>
      <p class="mb-2 text-lg font-medium text-main">成份股高大上</p>
      <p class="mb-2">鎖定美國與香港掛牌的中國公司，產業分散並包含最具成長潛力之電子商務類股</p>
      <p class="mb-2 text-lg font-medium text-main">成份股高大上</p>
      <p>鎖定美國與香港掛牌的中國公司，產業分散並包含最具成長潛力之電子商務類股</p>
    </div>

    <!-- 基本資料 -->
    <div class="flex items-center gap-2 mb-3">
      <img width="15" src="@/assets/images/icon/scope-plus-b.png" alt="" />
      <p class="section-title">
        基本資料
      </p>
    </div>

    <!-- 境內 -->
    <ul class="grid grid-cols-[max-content_auto] lg:grid-cols-[20%_30%_20%_30%] two-col-to-four-table mb-8">
      <li class="th lg:!pl-6 lg:!pr-14">基金類型</li>
      <li class="td">股票型</li>
      <li class="th lg:!pl-6 lg:!pr-14">保管銀行</li>
      <li class="td">聯邦商業銀行</li>
      <li class="th lg:!pl-6 lg:!pr-14">成立日期</li>
      <li class="td">2007/06/14</li>
      <li class="th lg:!pl-6 lg:!pr-14">經理費率(%)</li>
      <li class="td">1.6%/年</li>
      <li class="th lg:!pl-6 lg:!pr-14">計價幣別</li>
      <li class="td">新臺幣</li>
      <li class="th lg:!pl-6 lg:!pr-14">保管費率(%)</li>
      <li class="td">0.15%/年</li>
      <li class="th lg:!pl-6 lg:!pr-14">基金規模</li>
      <li class="td">新台幣4.57億(2023/08/31)</li>
      <li class="th lg:!pl-6 lg:!pr-14">手續費(%)</li>
      <li class="td">最高不超過1.5%</li>
      <li class="th lg:!pl-6 lg:!pr-14">基金經理人</li>
      <li class="td">張逸敏(2022/8/19~迄今)</li>
      <li class="th lg:!pl-6 lg:!pr-14">績效指標</li>
      <li class="td">無</li>
      <li class="th lg:!pl-6 lg:!pr-14">配息頻率</li>
      <li class="td">本基金收益全部併入基金資產，不予分配</li>
      <li class="th lg:!pl-6 lg:!pr-14">買回付款日</li>
      <li class="td">T+5日內</li>
    </ul>

    <!-- 境外 -->
    <ul class="grid grid-cols-[max-content_auto] lg:grid-cols-[20%_30%_20%_30%] two-col-to-four-table mb-8">
      <li class="th lg:!pl-6 lg:!pr-14">基金類型</li>
      <li class="td">股票型</li>
      <li class="th lg:!pl-6 lg:!pr-14">基金保管機構</li>
      <li class="td">
        <p>布朗兄弟－哈里曼（盧森堡）</p>
        <p>Brown Brothers Harriman (Luxembourg) S.C.A.</p>
      </li>
      <li class="th lg:!pl-6 lg:!pr-14">成立日期</li>
      <li class="td">2016/06/08</li>
      <li class="th lg:!pl-6 lg:!pr-14">投資經理公司</li>
      <li class="td">盧米斯賽勒斯（Loomis Sayles）</li>
      <li class="th lg:!pl-6 lg:!pr-14">註冊地</li>
      <li class="td">盧森堡</li>
      <li class="th lg:!pl-6 lg:!pr-14">計價幣別</li>
      <li class="td">美元</li>
      <li class="th lg:!pl-6 lg:!pr-14">基金經理人</li>
      <li class="td">Aziz Hamzaogullari</li>
      <li class="th lg:!pl-6 lg:!pr-14">基金規模</li>
      <li class="td">3,571百萬美元 (yyyy/mm/dd)</li>
      <li class="th lg:!pl-6 lg:!pr-14">配息頻率</li>
      <li class="td">無</li>
      <li class="th lg:!pl-6 lg:!pr-14">績效指標</li>
      <li class="td">S&P 500 TR USD</li>
      <li class="th lg:!pl-6 lg:!pr-14">綜合費用(%)</li>
      <li class="td">
        <ul class="mb-6">
          <li class="ml-4 list-disc">I級別，每年基金淨資產價值之1.00%</li>
          <li class="ml-4 list-disc">R級別，每年基金淨資產價值之1.75%</li>
          <li class="ml-4 list-disc">RET級別，每年基金淨資產價值之2.25%</li>
          <li class="ml-4 list-disc">CT級別，每年基金淨資產價值之3.25%</li>
        </ul>
        <p>詳細費用請參考公開說明書</p>
      </li>
      <li class="th lg:!pl-6 lg:!pr-14">手續費用(%)</li>
      <li class="td">
        <ul class="mb-6">
          <li class="ml-4 list-disc">I 級別、R 級別為最高4%</li>
          <li class="ml-4 list-disc">RET級別為最高3%</li>
          <li class="ml-4 list-disc">CT級別無申購手續費，但需支付遞延銷售費用，於申購日起三年內為贖回申請時，需支付費用</li>
        </ul>
        <p>詳細費用請參考公開說明書</p>
      </li>
      <li class="th lg:!pl-6 lg:!pr-14">買回費用</li>
      <li class="td">無</li>
      <li class="th lg:!pl-6 lg:!pr-14">買回付款日</li>
      <li class="td">T+3</li>
    </ul>

    <!-- 檔案下載 -->
    <div class="flex items-center gap-2 mb-5">
      <img width="14" src="@/assets/images/icon/download3.png" alt="" />
      <p class="section-title">
        檔案下載
      </p>
    </div>
    <div class="mb-8 lg:grid lg:grid-cols-4 lg:gap-5">
      <FileList class="mb-3 lg:mb-0" name="投資月報" url="https://www.ctbcinvestments.com.tw/Product/GetPsProductFundOnlineT5?ProductFundNo=1&Kind=1" />
      <FileList class="mb-3 lg:mb-0" name="公開說明書" url="https://www.ctbcinvestments.com.tw/Product/GetPsProductFundOnlineT5?ProductFundNo=1&Kind=1" />
      <FileList class="mb-3 lg:mb-0" name="簡式公開說明書" url="https://www.ctbcinvestments.com.tw/Product/GetPsProductFundOnlineT5?ProductFundNo=1&Kind=1" />
      <FileList class="mb-3 lg:mb-0" name="近五年費用率及報酬率" url="https://www.ctbcinvestments.com.tw/fund/5Y_TER_AnnualReturn/%E4%B8%AD%E5%9C%8B%E4%BF%A1%E8%A8%97%E6%8A%95%E4%BF%A1%E7%B3%BB%E5%88%97%E5%9F%BA%E9%87%91_%E4%BA%94%E5%B9%B4%E8%B2%BB%E7%94%A8%E7%8E%87%E5%A0%B1%E9%85%AC%E7%8E%87%E8%B3%87%E8%A8%8A.pdf" />
      <FileList class="lg:mb-0" name="ESG定期揭露資訊" url="https://www.ctbcinvestments.com.tw/fund/5Y_TER_AnnualReturn/%E4%B8%AD%E5%9C%8B%E4%BF%A1%E8%A8%97%E6%8A%95%E4%BF%A1%E7%B3%BB%E5%88%97%E5%9F%BA%E9%87%91_%E4%BA%94%E5%B9%B4%E8%B2%BB%E7%94%A8%E7%8E%87%E5%A0%B1%E9%85%AC%E7%8E%87%E8%B3%87%E8%A8%8A.pdf" />
    </div>
    
    <!-- 銷售機構 -->
    <div class="flex items-center gap-2 mb-5">
      <img width="18" src="@/assets/images/icon/marker-b.png" alt="" />
      <p class="section-title">
        銷售機構
      </p>
    </div>

    <div class="mb-10 mobile-th-row-table text-md">
      <ul class="desktop-th lg:grid-cols-2">
        <li class="lg:text-left lg:!pl-6">公司名稱</li>
        <li class="lg:text-left">公司電話</li>
      </ul>
      <div v-for="(company, idx) in 5" :key="idx" class="data-row lg:grid-cols-2 !shadow-none border border-solid border-[#f4f4f4]">
        <div class="th">公司名稱</div>
        <div class="td border-b border-solid border-[#f4f4f4] lg:!pl-6">xxxx</div>
        <div class="th">公司電話</div>
        <div class="td">xxxx</div>
      </div>
    </div>

    
  </div>
  <RoutingButton
    class="block mx-auto mb-8"
    label="回基金列表"
    :arrow-direction="BUTTON_ARROW_DIRECTION.right"
    @click="router.push({ name: ROUTE_NAME.fund.index })"
  />
</template>

<script setup>
import { BUTTON_ARROW_DIRECTION } from '@/constants/layout'

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

defineProps({
  fund: {
    type: Object,
    default: undefined
  }
})
</script>

<style lang="scss" scoped>
.section-title {
  @apply text-lg font-medium lg:pb-0 lg:mb-0 text-[#333]
}
</style>