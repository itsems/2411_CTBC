<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="35" title="資料保密承諾" :imagePath="IconLockPath" />
    <div class="leading-7 content">
      <p class="block-with-bottom-space">
        中國信託金融控股股份有限公司暨所屬各子公司係依「金融控股公司法」、「金融控股公司子公司間共同行銷管理辦法」、「個人資料保護法」及其他相關法令函釋為蒐集、處理、儲存、整合及利用客戶資料，中國信託金融控股股份有限公司暨所屬各子公司謹聲明對於客戶資料之蒐集、處理及利用均採行嚴密之保護措施，並承諾依據下列內容履行客戶資料保密措施：
      </p>

      <div class="block-with-bottom-space">
        <PageSubTitle title="一、資料蒐集方式" />
        <p>
          中國信託金融控股股份有限公司暨各子公司擁有您的公司/個人資料，係因您是中國信託金融控股股份有限公司任一子公司之客戶，或係從其他合法管道所取得之資料，其中亦包括經公開資訊、經政府機關揭露或第三人有權提供之合法資料。
        </p>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="二、資料分類、利用範圍及項目" />
        <div class="block-indent">
          <ul class="list-custom-cjk">
            <li>
              中國信託金融控股股份有限公司暨各子公司會將您的資料進行分類，其中包括基本資料、帳務資料、信用資料、投資資料、保險資料，以及上述資料所衍生.之其他依法取得資料，並得於法令許可範圍內增刪上述資料之分類與內容。
              <ul class="list-decimal">
                <li>
                  基本資料：包括姓名、公司名稱、出生年月日、核准設立日期、身分證字號、統一編號、電話、地址及電子信箱、行為能力樣態、關係人/關係企業等資料。
                </li>
                <li>
                  帳務資料：包括帳戶號碼或類似功能號碼、信用卡(現金卡)帳號、存款帳號、交易帳戶號碼、存借款或轉帳/匯款交易資料、其他往來交易資料及財務
                  情況等資料。
                </li>
                <li>
                  信用資料：包括退票紀錄、註銷紀錄、拒絕往來紀錄、信用/保證交易及業務經營狀況等資料。
                </li>
                <li>投資資料：包括投資或出售投資之標的(含衍生性商品)、金額及時間等交易資料。</li>
                <li>
                  保險資料：包括投保保險種類、年期、保額、繳費方式、理賠狀況及拒保紀錄等相關資料。
                </li>
              </ul>
            </li>
            <li>
              中國信託金融控股股份有限公司暨各子公司僅於法令所允許及業務需要之必要範圍內，處理、利用您的資料。
            </li>
          </ul>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="三、客戶資料之儲存及保管方式" />
        <p>
          您的資料將被嚴密的保存在中國信託金融控股股份有限公司暨各子公司的資料處理系統中，必要時，中國信託金融控股股份有限公司暨各子公司可能依法委託具有高度安全性、穩定性且管理嚴格的資訊公司儲存及保管您的資料。同時，任何人皆須在中國信託金融控股股份有限公司暨各子公司訂定之資料管理規範下，始可取得與利用您的資料，未經授權者即無法通過資料處理系統取得、變更您的資料。
        </p>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="四、資料安全及保護方法" />
        <p>
          中國信託金融控股股份有限公司暨各子公司用以儲存及保管客戶資料的資料處理系統，皆建置有防火牆機制以防止入侵，並以安全之防護機制儲存密碼，以防止第三人不法入侵或內部之非法使用。
        </p>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="五、資料利用目的及揭露對象" />
        <div class="block-indent">
          <ul class="list-custom-cjk">
            <li>
              為符合相關法令函釋規定或相關政府機關之要求所為之揭露
              中國信託金融控股股份有限公司及各子公司為符合相關法令函釋規定或配合政府機關之調查，有可能將您的資料揭露予中國信託金融控股股份有限公司及各子公司、主管機關、稅捐稽徵機關、法院、司法機關，及其他依法有調查權之機關。
            </li>
            <li>
              子公司間之交互運用
              中國信託金融控股公司之各子公司為提供客戶更多元完整之金融商品或服務，在符合法規或取得客戶同意之前提下，得將您的資料提供予中國信託金融控股股份有限公司之其他子公司為行銷目的之建檔、揭露、轉介或交互運用。目前有進行客戶資料交互運用之子公司如下：
              <ul class="list-decimal">
                <li>中國信託商業銀行股份有限公司</li>
                <li>台灣人壽保險股份有限公司</li>
                <li>中國信託綜合證券股份有限公司</li>
                <li>中國信託創業投資股份有限公司</li>
                <li>中國信託資產管理股份有限公司</li>
                <li>中國信託證券投資信託股份有限公司</li>
                <li>中信保全股份有限公司</li>
                <li>台灣彩券股份有限公司</li>
                <li>中國信託產物保險股份有限公司</li>
                <li>中國信託資融股份有限公司</li>
                <li>中國信託證券投資顧問股份有限公司</li>
                <li>中信證創業投資股份有限公司</li>
              </ul>
            </li>
            <li>
              中國信託金融控股股份有限公司暨各子公司僅於法令所允許及業務需要之必要範圍內，處理、利用您的資料。
            </li>
          </ul>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="六、客戶資料變更修改方式" />
        <p>
          如您的資料有變更，您可透過往來之中國信託金融控股股份有限公司之子公司官方網站上所揭露之營業據點、電話、網路或其他服務管道，更正您的相關資料。
        </p>
      </div>
      <div class="block-with-bottom-space">
        <PageSubTitle title="七、選擇退出方式" />
        <p>
          您有權透過上開第六點所列之服務管道，向中國信託金融控股股份有限公司及各子公司請求停止交互運用您的資料，並自提出申請後三個工作天內生效。
        </p>
      </div>

      <div class="block-with-bottom-space text-[#28a7a8]">
        前述保密措施如有任何修改或變動，將於中國信託金融控股股份有限公司及各子公司之網頁或以其他主管機關認定之公開揭露管道辦理公告。
      </div>
    </div>
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/paper.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '資料保密承諾', routeName: undefined }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>