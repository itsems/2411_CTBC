<template>
  <!-- 申辦ETF電子帳單 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="申辦ETF電子帳單" :imagePath="PageTitleIcon" />

    <TabWithBar isActive name="申辦ETF電子帳單" class="mb-6" />

    <div class="px-3 gradient-text-square">
      <div class="gap-4 lg:grid lg:grid-cols-[113px_auto] lg:max-w-[550px] lg:py-3 lg:mx-auto">
        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">身分證字號</div>
        <input type="text" class="mb-3 lg:mb-0 form-inputs" />

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">發證日期</div>
        <div class="flex items-center justify-between gap-1 mb-3 lg:mb-0">
          <select class="form-selects">
            <option value="100">100</option>
            <option value="99">99</option>
            <option value="98">98</option>
          </select>
          <label>年</label>
          <select class="form-selects">
            <option v-for="i in 12" :value="i" :key="i">{{ String( i ).padStart( 2, '0' ) }}</option>
          </select>
          <label>月</label>
          <select class="form-selects">
            <option v-for="i in 31" :value="i" :key="i">{{ String( i ).padStart( 2, '0' ) }}</option>
          </select>
          <label>日</label>
        </div>

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">發證地點</div>
        <select class="mb-3 form-selects lg:mb-0">
          <option value="" disabled="">請選擇</option>
          <option value="10017">基市</option>
          <option value="10001">北縣</option>
          <option value="65000">新北市</option>
          <option value="63000">北市</option>
          <option value="10002">宜縣</option>
          <option value="10003">桃縣</option>
          <option value="68000">桃市</option>
          <option value="10004">竹縣</option>
          <option value="10018">竹市</option>
          <option value="10005">苗縣</option>
          <option value="10006">中縣</option>
          <option value="66000">中市</option>
          <option value="10007">彰縣</option>
          <option value="10008">投縣</option>
          <option value="10009">雲縣</option>
          <option value="10010">嘉縣</option>
          <option value="10020">嘉市</option>
          <option value="10011">南縣</option>
          <option value="67000">南市</option>
          <option value="10012">高縣</option>
          <option value="64000">高市</option>
          <option value="10013">屏縣</option>
          <option value="10014">東縣</option>
          <option value="10015">花縣</option>
          <option value="10016">澎縣</option>
          <option value="09007">連江</option>
          <option value="09020">金門</option>
        </select>

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">發行狀態</div>
        <select class="mb-3 form-selects lg:mb-0">
          <option disabled="" value="">請選擇</option>
          <option value="1">初發</option>
          <option value="2">補發</option>
          <option value="3">換發</option>
        </select>

        <div class="lg:col-span-2 lg:pl-4">
          <input type="checkbox" id="checkedItems" class="mr-2 w-[15px] h-[15px]" />
          <label for="checkedItems" class="cursor-pointer">
            <Asterisk />已確實逐項核對輸入項目
          </label>
        </div>

        <label for="agree" class="mb-5 cursor-pointer lg:col-span-2 lg:pl-4">
          <input type="checkbox" id="agree" class="mr-2 w-[15px] h-[15px]" />
          <Asterisk />我已詳細閱讀並同意
          <RouterLink
            class="underline underline-offset-4 text-main"
            :to="{ name: ROUTE_NAME.personal }"
          >
            個人資料運用告知聲明
          </RouterLink>
          內容所有條款
        </label>

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">驗證碼</div>
        <div class="flex items-center mb-7 lg:mb-0">
          <input type="tel" class="lg:w-[140px] form-inputs" />
          <img src="@/assets/images/sample/validation.png" alt="" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div
        class="bg-main cursor-pointer hover:bg-darkGreen text-white lg:w-[156px] mx-auto rounded-3xl px-10 py-2 mt-6 mb-20 flex justify-center"
      >
        下一步
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/transaction.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '申辦ETF電子帳單', routeName: undefined }
]
</script>
