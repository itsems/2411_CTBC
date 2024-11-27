<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle :size="30" title="個資運用聲明" :imagePath="IconLockPath" />
    <div class="leading-7 content">
      <p class="block-with-bottom-space">
        中國信託證券投資信託股份有限公司（以下稱本公司）依據個人資料保護法（以下稱個資法）第八條第一項及第九條規定，向台端告知下列事項，請台端詳閱：
      </p>

      <div class="block-with-bottom-space">
        <PageSubTitle title="一、蒐集之目的" />
        <p>
          為辦理證券投資信託相關業務及其他合於本公司之營業登記項目或主管機關所核准之業務，以及基於營業目的、風險控管、稽核、客戶服務、管理、資訊提供、或本公司組織章程所定業務、金融爭議處理業務、金融監督管理與檢查、其他依法令規定或法定義務或金融監理之需要及非公務機關依法定義務所進行個人資料之蒐集處理及利用(包含國際傳輸)。
        </p>
      </div>
      <div class="block-with-bottom-space">
        <PageSubTitle title="二、蒐集之個人資料類別" />
        <p>
          包括足以辨識個人、個人描述、辨識財務、家庭情形、家庭成員、財產、職業、資格、所得收入、資產
          與投資等。
        </p>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="三、個人資料利用之期間、地區、對象及方式" />
        <div class="block-indent">
          <ul class="list-custom-cjk">
            <li>
              期間：自本公司開始蒐集個人資料時起，至蒐集之特定目的消失，經本公司主動或經台端以書面向本公司請求停止蒐集、處理、利用或刪除台端之個人資料；但因本公司執行職務或業務所必須或經台端書面同意者，不在此限。
            </li>
            <li>
              地區：中華民國、本公司、本公司與提供業務或服務有關之業務往來或委外機構所在地、依法提供第三方之所在地或經台端書面同意對象之所在地。
            </li>
            <li>
              對象：本公司、與提供業務或服務有關之業務往來或委外機構、依法提供之第三方或台端書面同意之對象。
            </li>
            <li>
              方式：以書面、電話、傳真、電子文件、網際網路或其他適當方式為蒐集、處理及利用(包含國際傳輸。
            </li>
          </ul>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle
          title="四、依據個資法第三條規定，台端就本公司保有台端之個人資料得行使下列權利"
        />
        <div class="block-indent">
          <ul class="list-custom-cjk">
            <li>得向本公司查詢、請求閱覽或請求製給複製本，而本公司依法得酌收必要成本費用。</li>
            <li>得向本公司請求補充或更正，惟依法台端應為適當之釋明。</li>
            <li>
              得向本公司請求停止蒐集、處理或利用及請求刪除，惟依法本公司因執行業務所必須者，得不依台端請求為之。
            </li>
          </ul>
        </div>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle
          title="五、依據個資法第九條規定，就本公司保有台端之間接蒐集個人資料之告知義務"
        />
        <p>
          台端如提供非屬本人個人資料予本公司，台端應代為向該等當事人告知個資運用聲明相關事項，詳細內容得於本公司網站查詢。
        </p>
      </div>

      <div class="block-with-bottom-space">
        <PageSubTitle title="六、台端不提供個人資料所致權益之影響" />
        <p>
          台端得自由選擇是否提供相關個人資料，惟台端若拒絕提供相關個人資料，本公司將無法進行必要之審核及處理作業，致無法提供台端相關服務。
        </p>
      </div>
      <div class="block-with-bottom-space text-[#28a7a8]">
        * 以上個人資料保護法應告知投資人事項內容如有更新，更新內容請詳見本公司網站公告
      </div>
    </div>
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/shield.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '個資運用聲明', routeName: undefined }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>