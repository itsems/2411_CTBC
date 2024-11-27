<template>
  <GradientBackground :mobile-position="275" :desktop-position="275" />
  <div class="pt-0 page-layout">
    <!-- Banner -->
    <img
      class="block w-full mb-3 drop-shadow-xl lg:hidden"
      src="@/assets/images/speech/poster-m.png"
      alt=""
    />
    <img
      class="hidden mb-3 drop-shadow-xl lg:block"
      src="@/assets/images/speech/poster-d.png"
      alt=""
    />

    <!-- Hashtag -->
    <div class="flex flex-wrap items-center gap-1 mt-4 lg:mb-10 mb-14">
      <p class="font-medium text-main lg:mr-3">Hashtag:</p>
      <Badge v-for="hashtag in fakeData.hashtags" :title="hashtag" :key="hashtag" />
    </div>

    <!-- 活動介紹 -->
    <img
      class="block mb-6 px-4 lg:w-[300px]"
      src="@/assets/images/speech/speech-title-intro.png"
      alt="活動介紹"
    />
    <div class="relative px-4 py-5 overflow-hidden bg-white shadow-xl rounded-2xl mb-14">
      <p class="pt-2 tracking-wide">{{ fakeData.introduction }}</p>
      <div class="border-b-main triangle-right-bottom" />
    </div>

    <!-- 活動辦法 -->
    <img
      class="block mb-6 px-4 lg:w-[300px]"
      src="@/assets/images/speech/speech-title-method.png"
      alt="活動辦法"
    />
    <div class="relative px-4 py-5 mb-10 overflow-hidden bg-white shadow-xl rounded-2xl lg:py-8">
      <ul>
        <li class="lg:flex lg:gap-4 lg:items-center lg:mb-3">
          <span
            class="bg-main inline-block mb-3 lg:mb-0 rounded-2xl text-white px-4 py-[6px] lg:px-3 lg:rounded-3xl"
          >報名時間</span
          >
          <p class="pl-3 mb-3 lg:mb-0 lg:pl-0">{{ fakeData.info.registerTime }}</p>
        </li>
        <li class="lg:flex lg:gap-4 lg:items-center lg:mb-3">
          <span
            class="bg-main inline-block mb-3 lg:mb-0 rounded-2xl text-white px-4 py-[6px] lg:px-3 lg:rounded-3xl"
          >活動時間</span
          >
          <p class="pl-3 mb-3 lg:mb-0 lg:pl-0">{{ fakeData.info.eventTime }}</p>
        </li>
        <li class="lg:flex lg:gap-4 lg:items-center lg:mb-3">
          <span
            class="bg-main inline-block mb-3 lg:mb-0 rounded-2xl text-white px-4 py-[6px] lg:px-3 lg:rounded-3xl"
          >活動地點</span
          >
          <p class="pl-3 mb-3 lg:mb-0 lg:pl-0">{{ fakeData.info.place }}</p>
        </li>
        <li class="lg:flex lg:gap-4 lg:items-center">
          <span
            class="bg-main inline-block mb-3 lg:mb-0 rounded-2xl text-white px-4 py-[6px] lg:px-3 lg:rounded-3xl"
          >報名資格</span
          >
          <p class="pl-3 mb-3 lg:mb-0 lg:pl-0">{{ fakeData.info.qualification }}</p>
        </li>
      </ul>
      <div class="border-b-main triangle-right-bottom" />
    </div>
  </div>

  <!-- 講師 -->
  <div class="py-10 bg-cloud lg:py-14">
    <div class="lg:max-w-[1110px] mx-auto relative">
      <img
        class="block mb-7 lg:mb-0 px-4 w-[196px] lg:px-0 mx-auto lg:mx-0 lg:absolute lg:left-0"
        src="@/assets/images/speech/speech-title-speakers.png"
        alt="講師"
      />
      <div class="flex justify-center gap-4 mb-8 lg:mb-14">
        <DialogTab
          v-for="date in fakeData.dates"
          :name="date"
          :key="date"
          :isActive="currentDateTab === date"
          textClass="py-3 px-3 lg:px-5 lg:py-0 lg:text-lg"
          @click="currentDateTab = date"
        />
      </div>
      <div class="px-4 lg:px-16">
        <SpeakerSlider :speakers="fakeData.speakers" />
      </div>
    </div>
  </div>

  <!-- 活動議程 -->
  <div class="page-layout lg:py-16">
    <img
      class="block mb-6 px-4 w-[259px] mx-auto lg:mr-auto lg:ml-0 lg:mb-10"
      src="@/assets/images/speech/speech-title-agenda.png"
      alt="活動議程"
    />

    <!-- Agenda Table -->
    <div
      class="relative px-4 py-5 overflow-hidden bg-white shadow-xl lg:px-11 lg:pt-11 lg:pb-8 rounded-2xl"
    >
      <div
        class="line-bg hidden lg:block absolute w-[10px] bg-repeat-y bg-top bottom-11 top-11 left-[266px]"
      />
      <div>
        <AgendaRow v-for="session in fakeData.agenda" :info="session" :key="session.time">
          <template #default>
            <span class="block mr-3 lg:inline">{{ session.content.sessionTitle }}</span>
            <span class="block mr-3 lg:inline">{{ session.content.speaker }}</span>
            <span class="block mr-3 lg:inline">{{ session.content.speakerTitle }}</span>
          </template>
        </AgendaRow>
      </div>
      <div class="border-b-[#999] triangle-right-bottom hidden lg:block" />
    </div>
  </div>

  <!-- 報名表單 -->
  <div class="page-layout">
    <img
      class="w-[231px] block mx-auto mb-5 lg:ml-0"
      src="@/assets/images/speech/speech-title-signup.png"
      alt="報名表單"
    />

    <div class="form-table pt-5 lg:pt-8 lg:w-[630px] mx-auto">
      <div class="mb-2 lg:mb-6 lg:items-center lg:grid lg:grid-cols-[115px_auto]">
        <div class="mb-3 lg:pr-7 lg:mb-0">*姓名</div>
        <div class="lg:flex lg:items-center">
          <!-- 姓名 -->
          <input
            v-model="filledData.name"
            type="text"
            class="form-inputs w-full py-[10px] px-5 rounded-[30px] bg-white border border-solid border-[#cbecec] mb-3 lg:mb-0 lg:mr-3"
          />
          <div class="flex items-center mb-6 lg:mb-0 text-grey-999 lg:shrink-0">
            <!-- 先生/小姐 -->
            <input
              v-model="filledData.gender"
              value="male"
              type="radio"
              name="gender"
              id="male"
              class="w-[20px] h-[20px] mr-2"
              checked
            />
            <label class="mr-4 cursor-pointer" for="male">先生</label>
            <input
              v-model="filledData.gender"
              value="female"
              type="radio"
              name="gender"
              id="female"
              class="w-[20px] h-[20px] mr-2"
            />
            <label class="cursor-pointer" for="female">小姐</label>
          </div>
        </div>
      </div>
      <div class="mb-2 lg:mb-6 lg:items-center lg:grid lg:grid-cols-[115px_auto]">
        <div class="mb-3 lg:pr-7 lg:mb-0">公司/單位</div>
        <div>
          <!-- 公司/單位 -->
          <input
            v-model="filledData.company"
            type="text"
            class="form-inputs w-full py-[10px] px-5 rounded-[30px] bg-white border border-solid border-[#cbecec]"
          />
        </div>
      </div>
      <div class="mb-2 lg:mb-6 lg:items-center lg:grid lg:grid-cols-[115px_auto]">
        <div class="mb-3 lg:pr-7 lg:mb-0">職稱</div>
        <div>
          <!-- 職稱 -->
          <input
            v-model="filledData.title"
            type="text"
            class="form-inputs w-full py-[10px] px-5 rounded-[30px] bg-white border border-solid border-[#cbecec]"
          />
        </div>
      </div>
      <div class="mb-2 lg:mb-6 lg:items-center lg:grid lg:grid-cols-[115px_auto]">
        <div class="mb-3 lg:pr-7 lg:mb-0">*連絡電話</div>
        <div>
          <!-- 連絡電話 -->
          <input
            v-model="filledData.tel"
            type="tel"
            class="form-inputs w-full py-[10px] px-5 rounded-[30px] bg-white border border-solid border-[#cbecec]"
          />
        </div>
      </div>
      <div class="mb-2 lg:mb-6 lg:items-center lg:grid lg:grid-cols-[115px_auto]">
        <div class="mb-3 lg:pr-7 lg:mb-0">*電子信箱</div>
        <div>
          <!-- 電子信箱 -->
          <input
            v-model="filledData.email"
            type="text"
            class="form-inputs w-full py-[10px] px-5 rounded-[30px] bg-white border border-solid border-[#cbecec]"
          />
        </div>
      </div>

      <div class="w-full h-1 mt-8 mb-6 bg-no-repeat line-bg-h" />

      <div class="mb-8 lg:mb-14 lg:flex lg:items-center">
        <input
          v-model="checkedAgree"
          class="w-4 h-4"
          type="checkbox"
          id="agree" />
        <label
          class="ml-2 cursor-pointer"
          for="agree"
        >我已閱讀並同意 <span class="underline text-main underline-offset-4"> 隱私權政策 </span>及
          <span class="underline text-main underline-offset-4"> 個資運用聲明 </span>
          內容所有條款
        </label>
      </div>
      <div class="flex justify-center mb-10">
        <div
          @click="validateFilledData"
          class="flex items-center justify-center px-8 py-[9px] text-lg text-white rounded-full cursor-pointer bg-main hover:brightness-105"
        >
          <img src="@/assets/images/icon/flight.png" class="w-8 mr-6" alt="" />
          <p>送出表單</p>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <ModalWithPaperPlane :show="shouldModalShow" header="感謝您的報名" @close="shouldModalShow = false">
      <template #body>
        <div class="text-center">
          <p class="mb-1">我們已收到您的報名</p>
          <p class="mb-1">後續將以電子郵件寄送活動相關通知</p>
          <p class="mb-1">請留意您的電子信箱</p>
        </div>
      </template>
    </ModalWithPaperPlane>
  </Teleport>
</template>
<script setup>

const fakeData = ref({
  dates: ['01/27', '01/28'],
  hashtags: ['中國信託', '不敗教主', 'ETF'],
  introduction:
    '2012年11月正式納入中信金控旗下，並於2013年1月更名為中國信託投信，身為金控關鍵成員，中國信託投信以基金投資管理見長，整合集團資源，研擬以客戶需求為核心的產品發展策略，豐富旗下產品線多元性，兼具主動操作基金及被動管理之指數股票型基金、到近年廣受國際市場注重的目標到期類型之固定收益基金，更透過與境外策略聯盟夥伴密切合作，打造優秀的專業投資團隊。隨業務快速成長並為加強在地化經營，於2020年2月成立台中分公司，提供更全方位的投資管理服務。',
  info: {
    registerTime: '即日起至1月20日',
    eventTime: '111年1月28日19:00',
    place: '線上辦理',
    qualification: '元大證券 府城分公司 (台南市中西區民生路一段165號)'
  },
  speakers: [
    {
      imagePath: 'https://i.imgur.com/GA1WHxi.png',
      name: '詹佳峯',
      title: '中信中國50經理人'
    },
    {
      imagePath: 'https://i.imgur.com/HDOraLq.png',
      name: '陳重銘',
      title: '不敗教主'
    },
    {
      imagePath: 'https://i.imgur.com/GA1WHxi.png',
      name: '詹佳峯',
      title: '中信中國50經理人'
    },
    {
      imagePath: 'https://i.imgur.com/HDOraLq.png',
      name: '陳重銘',
      title: '不敗教主'
    },
    {
      imagePath: 'https://i.imgur.com/GA1WHxi.png',
      name: '詹佳峯',
      title: '中信中國50經理人'
    },
    {
      imagePath: 'https://i.imgur.com/HDOraLq.png',
      name: '陳重銘',
      title: '不敗教主'
    }
  ],
  agenda: [
    {
      time: '19:30-20:00',
      content: {
        sessionTitle: '開幕式',
        speaker: '',
        speakerTitle: ''
      }
    },
    {
      time: '20:00-20:15',
      content: {
        sessionTitle: '講座一',
        speaker: '劉子琦',
        speakerTitle: '亞洲大學國際企業學系助理教授'
      }
    },
    {
      time: '20:15-20:30',
      content: {
        sessionTitle: '講座二',
        speaker: '劉子琦',
        speakerTitle: '亞洲大學國際企業學系助理教授'
      }
    },
    {
      time: '20:15-20:30',
      content: {
        sessionTitle: '講座三',
        speaker: '劉子琦',
        speakerTitle: '亞洲大學國際企業學系助理教授'
      }
    },
    {
      time: '20:15-20:30',
      content: {
        sessionTitle: '講座四',
        speaker: '劉子琦',
        speakerTitle: '亞洲大學國際企業學系助理教授'
      }
    },
    {
      time: '20:15-20:30',
      content: {
        sessionTitle: '綜合座談會',
        speaker: '',
        speakerTitle: ''
      }
    }
  ]
})

const filledData = ref({
  name: '',
  gender: '',
  company: '',
  title: '',
  tel: '',
  email: ''
})
const checkedAgree = ref(false)

const validateFilledData = () => {
  openModal()
}
const { shouldModalShow, openModal } = useModal()

const currentDateTab = ref(fakeData.value.dates[0])
</script>
<style lang="scss" scoped>
.text-square {
  @apply pb-5 mb-12 tracking-wide relative px-5 border-l-2 border-b-2 border-r-2 rounded-md border-solid lg:px-10 lg:pb-8;
  border-top-width: 2px;
  &:not(.full) {
    border-top-width: 0px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      height: 2px;
      width: 60px;
      display: inline-block;
      @media (min-width: 1024px) {
        width: 435px;
      }
    }
  }
  &:before {
    left: 1px;
  }
  &:after {
    right: 1px;
  }
  .title {
    @apply w-[234px] relative block mx-auto;
  }
}
@mixin triangle {
  @apply w-0 h-0 border-solid absolute;
}
.triangle-right-bottom {
  @include triangle;
  border-width: 0 0 44px 44px;
  border-bottom-right-radius: 3px;
  @apply border-r-transparent  border-t-transparent border-l-transparent right-0 bottom-0;
}
.triangle-left-top {
  @include triangle;
  border-width: 44px 44px 0 0;
  border-top-right-left: 3px;
  @apply border-r-transparent border-b-transparent border-l-transparent -left-[1px] -top-[1px];
}
.line-bg {
  background-size: 2px auto;
  background-image: url('@/assets/images/line-bg.png');
}
.line-bg-h {
  background-size: auto 2px;
  background-repeat: repeat-x;
  background-image: url('@/assets/images/line-bg-h.png');
}
</style>
