<template>
  <GradientBackground :mobile-position="185" :desktop-position="275" />
  <!-- 聯絡我們 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="聯絡我們" :imagePath="PageTitleIcon" />
    <img class="mb-5 text-md lg:text-base lg:hidden" src="@/assets/images/contact-m.png" alt="" />
    <img class="hidden mb-7 lg:block" src="@/assets/images/contact-d.png" alt="" />
    <p class="leading-7">
      若您有任何基金理財相關問題，歡迎您先參考『常見問題』，或填寫以下表單、或於上班時間來電，將由專人為您服務。
    </p>
    <p class="mb-7">
      客服諮詢專線
      <a class="hover:underline hover:text-main" href="tel:+88626526699">(02)2652-6699</a
      >（服務時間：9:00~17:00，週一至週五，例假日除外）
    </p>

    <form class="content-card" @submit.prevent="handleFormSubmit">
      <div class="lg:grid lg:grid-cols-[113px_1fr_113px_1fr] gap-4">
        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">姓名<Asterisk /></div>
        <input
          required
          v-model="formData.name"
          placeholder="姓名"
          class="mb-3 form-inputs lg:mb-0"
          type="text"
        />
        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">E-mail<Asterisk /></div>
        <input
          required
          v-model="formData.email"
          placeholder="E-mail信箱"
          class="mb-3 form-inputs lg:mb-0"
          type="email"
        />
        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">電話<Asterisk /></div>
        <input
          required
          v-model="formData.tel"
          placeholder="市話請加區域碼，範例 0226526699"
          class="mb-3 form-inputs lg:mb-0"
          type="tel"
        />
        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">問題主旨<Asterisk /></div>
        <input
          required
          v-model="formData.title"
          placeholder="問題主旨"
          class="mb-3 form-inputs lg:mb-0"
          type="tel"
        />
        <div class="mb-2 lg:mb-0 label lg:pl-4 lg:pt-3">問題/建議<Asterisk /></div>
        <textarea
          required
          v-model="formData.content"
          placeholder="請輸入您的問題或建議"
          cols="30"
          rows="7"
          class="w-full px-3 py-2 mb-3 border border-solid outline-none rounded-3xl lg:mb-0 lg:col-span-3 lg:py-2 lg:px-5 hover:border-main focus:border-main border-grey transitions"
        />
        <div class="mb-2 lg:mb-0 label lg:flex lg:items-center lg:pl-4">驗證碼<Asterisk /></div>
        <div class="flex items-center gap-3 mb-3 lg:col-span-3 lg:mb-0">
          <input
            required
            v-model="formData.validation"
            class="w-full lg:w-[140px] bg-white inputs border-grey rounded-3xl"
            type="tel"
          />
          <img src="@/assets/images/sample/validation.png" alt="" />
          <img
            width="34"
            class="cursor-pointer"
            src="@/assets/images/icon/refresh.png"
            alt="" />
        </div>
        <div class="lg:col-start-2 lg:col-end-5">
          <div class="mb-5 lg:flex lg:items-center">
            <input
              type="checkbox"
              required
              id="agree"
              v-model="agree"
              class="mr-2 w-[15px] h-[15px]"
            />
            <label for="agree" class="cursor-pointer">
              我已閱讀並同意接受
              <RouterLink class="underline underline-offset-4 text-main" :to="{ name: ROUTE_NAME.privacy }">
                「 中國信託投信隱私權政策 」
              </RouterLink>
              及
              <RouterLink class="underline underline-offset-4 text-main" :to="{ name: ROUTE_NAME.personal }">
                「中國信託投信個資運用聲明」
              </RouterLink>
              。
            </label>
          </div>
          <p class="text-md">
            您所填寫的個人資料，均受中華民國「電腦處理個人資料保密法」所保護，並且只會使用在傳送電子郵件、電子報及部分商業訊息，或參與本網站活動及網站調查之用，並不做其他用途。
          </p>
        </div>
      </div>

      <div class="flex justify-center gap-4 mt-7">
        <RoundButton submit label="確認送出" />
        <RoundButton grey label="清除重填" @click="clearFormData" />
      </div>
    </form>
  </div>
  <Teleport to="body">
    <Modal
      header="您已成功送出訊息！"
      :show="shouldModalShow"
      @close="closeModal"
    >
      <template #body>
        <Hr />
        <div class="pt-6 lg:text-center">
          <p>非常感謝您的來訊，我們將在最快的時間內盡速處理您的需求。</p>
          <p>若有需即時回覆問題，請直接撥打本公司客服專線，謝謝！</p>
        </div>
      </template>
    </Modal>
  </Teleport>

</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/dialog.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '聯絡我們', routeName: undefined }
]

// 燈箱
const { 
  shouldModalShow,
  closeModal,
  openModal
} = useModal()

const formData = ref({
  name: undefined,
  email: undefined,
  tel: undefined,
  title: undefined,
  content: undefined,
  validation: undefined,
})
const agree = ref(false)
const clearFormData = () => {
  Object.keys(formData.value).forEach(key => {
    formData.value[key] = undefined
  })
  agree.value = false
}
const handleFormSubmit = () => {
  openModal()
  clearFormData()
}
</script>
