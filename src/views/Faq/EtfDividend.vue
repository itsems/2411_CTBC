<template>
  <GradientBackground :mobile-position="275" :desktop-position="275" />
  <!-- ETF客戶配息查詢 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="ETF客戶配息查詢" :imagePath="PageTitleIcon" />
    <div class="content-card mb-9">
      <div class="lg:gap-4 lg:grid lg:grid-cols-[max-content_auto] lg:max-w-[675px] lg:py-3 lg:mx-auto">
        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">統編/身分證字號</div>
        <input
          type="text"
          class="w-full mb-3 bg-white border border-solid lg:mb-0 inputs rounded-3xl border-grey focus:border-main"
          placeholder="請輸入統編/身分證字號"
        />

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">扣繳年度</div>
        <select class="mb-3 form-selects lg:mb-0">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">生日</div>
        <input type="text" class="mb-3 lg:mb-0 form-inputs" placeholder="2023/10/18" />

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">基金名稱</div>
        <select class="mb-3 form-selects lg:mb-0">
          <option>全部基金</option>
          <option>全部基金</option>
          <option>全部基金</option>
        </select>

        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">
          證券帳號(需參與過本公司配息)
        </div>
        <input type="text" class="mb-3 lg:mb-0 form-inputs" placeholder="請輸入證券帳號" />
      </div>
      <div class="flex justify-between mb-10 md:justify-center md:gap-8 lg:col-span-2 lg:pt-4">
        <RoundButton label="搜尋" class="lg:!px-[3.9rem]" />
        <RoundButton label="下載查詢結果" />
      </div>

      
      <div class="lg:flex lg:gap-8 lg:justify-center lg:items-center">
        <div class="flex items-center justify-center gap-3 mb-9 lg:mb-0">
          <img src="@/assets/images/icon/qa.png" class="self-center block w-10" alt="" />
          <p class="text-xl text-main">ETF收益分配報稅Q&A</p>
        </div>
        <QaDownloadList class="mb-6 lg:mb-0" title="2024年Q&A" />
        <QaDownloadList title="2023年Q&A" />
      </div>
    </div>

    <div class="mb-10 overflow-x-auto shadow-2xl rounded-2xl">
      <table class="normal-table condensed">
        <thead>
          <tr>
            <th>評價日</th>
            <th>除息日</th>
            <th>發放日</th>
            <th class="min-w-[230px]">基金名稱</th>
            <th>扣繳單位<br>統一編號</th>
            <th class="min-w-[150px]">所得類型</th>
            <th class="min-w-[60px]">給付<br>總額(A)</th>
            <th class="min-w-[60px]">已扣繳<br>稅額(B)</th>
            <th class="min-w-[60px]">補扣繳<br>稅額(C)</th>
            <th class="min-w-[80px]">給付淨額<br>(D=A-B-C)</th>
            <th class="min-w-[80px]">補充保費<br>扣繳金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023/01/31</td>
            <td>2023/02/16</td>
            <td>2023/03/20</td>
            <td>(00891)中信關鍵半導體ETF基金</td>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="text-center">121</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">121</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td>2023/04/30</td>
            <td>2023/05/17</td>
            <td>2023/06/12</td>
            <td>(00891)中信關鍵半導體ETF基金</td>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="text-center">5</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">5</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td>2023/01/31</td>
            <td>2023/02/16</td>
            <td>2023/03/20</td>
            <td>(00891)中信關鍵半導體ETF基金</td>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="text-center">121</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">121</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td>2023/04/30</td>
            <td>2023/05/17</td>
            <td>2023/06/12</td>
            <td>(00891)中信關鍵半導體ETF基金</td>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="text-center">5</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">5</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td>2023/01/31</td>
            <td>2023/02/16</td>
            <td>2023/03/20</td>
            <td>(00891)中信關鍵半導體ETF基金</td>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="text-center">121</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">121</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td>2023/04/30</td>
            <td>2023/05/17</td>
            <td>2023/06/12</td>
            <td>(00891)中信關鍵半導體ETF基金</td>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="text-center">5</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">5</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td colspan="4" rowspan="2" class="!bg-[#dbedeb] text-center">小計</td>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="font-bold text-center">887</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="font-bold text-center">887</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">88182265</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="font-bold text-center">336</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="font-bold text-center">336</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td colspan="5" rowspan="3" class="!bg-[#b1dede] text-center">總計</td>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="font-bold text-center">887</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="font-bold text-center">887</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">87年度以後股利或<br>盈餘所得/54C</td>
            <td class="font-bold text-center">336</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="font-bold text-center">336</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="!bg-main text-center text-white">合計</td>
            <td class="font-bold text-center">1,223</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="font-bold text-center">1,223</td>
            <td class="text-center">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/transaction.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: 'ETF客戶配息查詢', routeName: undefined },
]
</script>
