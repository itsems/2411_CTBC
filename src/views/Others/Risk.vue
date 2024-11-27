<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="35" title="風險預告說明" :imagePath="IconLockPath" />
    <div class="content">
      <div class="block-with-bottom-space">
        <ul class="list-disc">
          <li>
            本風險預告書內容係依中華民國證券投資信託暨顧問商業同業公會「證券投資信託基金募集發行銷售及申購或買回作業程序」第十七條、「會員及其銷售機構通路報酬支付暨銷售行為準則」第八條及「會員及其銷售機構從事廣告及營業活動行為規範」第十條規定訂定之。
          </li>
          <li>
            基金之交易特性與存款、股票及其他投資工具不同，台端於開戶及決定交易前，應審慎評估本身之財務狀況與風險承受能力是否適合此種交易，並充分瞭解下列事項：
          </li>
        </ul>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle
          title="一、基金之買賣係以自己之判斷為之，台端應瞭解並承擔交易可能產生之損益，且最大可能損失達原始投資金額。"
        />
      </div>
      <div class="block-with-bottom-space">
        <PageSubTitle
          title="二、基金經金管會核准，惟不表示絕無風險，本公司以往之經理績效不保證基金之最低投資收益，本公司除盡善良管理人之注意義務外，不負責基金之盈虧，亦不保證最低之收益，台端申購前應詳閱基金公開說明書。"
        />
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="三、基金交易應考量之風險因素如下：" />
        <div class="block-indent">
          <ul class="list-custom-cjk">
            <li>
              投資標的及投資地區可能產生之風險：市場（政治、經濟、社會變動、匯率、利率、股價、指數或其他標的資產之價格波動）風險、流動性風險、信用風險、產業景氣循環變動、證券相關商品交易、法令、貨幣等風險。
            </li>
            <li>
              因前述風險、受益人大量買回或基金暫停計算買回價格等因素，或有延遲給付買回價金之可能。
            </li>
          </ul>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="四、投資非投資等級債券為訴求之基金之特有風險如下：" />
        <div class="block-indent">
          <ul class="list-custom-cjk">
            <li>
              信用風險：由於非投資等級債券之信用評等未達投資等級或未經信用評等，可能面臨債券發行機構違約不支付本金、利息或破產之風險。
            </li>
            <li>
              利率風險：由於債券易受利率之變動而影響其價格，故可能因利率上升導致債券價格下跌，而蒙受虧損之風險，非投資等級債券亦然。
            </li>
            <li>
              流動性風險：非投資等級債券可能因市場交易不活絡而造成流動性下降，而有無法在短期內依合理價格出售的風險。
            </li>
            <li>
              投資人投資以非投資等級債券為訴求之基金不宜占其投資組合過高之比重，且不適合無法承擔相關風險之投資人。
            </li>
            <li>
              若基金為配息型，基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。本基金進行配息前未先扣除應負擔之相關費用。
            </li>
            <li>
              基金可能投資美國 R144A
              債券，該債券屬私募性質，易發生流動性不足，財務訊息揭露不完整或價格不透明導致高波動性之風險。
            </li>
          </ul>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="五、投資配息型基金之特有風險如下：" />
        <div class="block-indent">
          <ul class="list-custom-cjk">
            <li>
              基金配息率不代表基金報酬率，且過去配息率不代表未來配息率，基金淨值可能因市場因素而上下波動，於獲配息時須一併注意基金淨值之變動。
            </li>
            <li>
              配息型基金其配息可能由基金的收益或本金中支付，任何涉及由本金支出的部份，可能導致原始投資金額減損；基金進行配息前未扣除應負擔之相關費用。
            </li>
            <li>
              配息型基金之配息政策可能影響涉及本金支出程度公告於中國信託投信網站（<a
                href="http://www.ctbcinvestments.com"
                target="_blank"
              >http://www.ctbcinvestments.com</a
              >），供投資人查詢。
            </li>
          </ul>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle
          title="六、基金交易係以長期投資為目的，不宜期待於短期內獲取高收益。任何基金單位之價格及其收益均可能漲或跌，故不一定能取回全部之投資金額。"
        />
      </div>
      <div class="block-with-bottom-space">
        <PageSubTitle title="七、基金不受存款保險、保險安定基金或其他相關保障機制。" />
      </div>
      <div class="block-with-bottom-space">
        <PageSubTitle
          title="八、如因基金交易所生紛爭，台端可向中華民國證券投資信託暨顧問商業同業公會或財團法人金融消費評議中心提出申訴。"
        />
      </div>
      <div class="block-with-bottom-space text-[#28a7a8]">
        * 若您對上述有任何疑問或欲索取本公司基金公開說明書，歡迎致電中國信託投信客戶服務專線
        <a href="tel:+886226526699" class="underline">(02)2652-6699</a> 或本公司網站下載。
      </div>
    </div>
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/book.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '風險預告說明', routeName: undefined }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>