<template>
  <GradientBackground :mobile-position="275" :desktop-position="275" />
  <!-- 優惠活動內容頁 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="優惠活動" :size="25" :imagePath="PageTitleIcon" />

    <!-- Mobile image -->
    <div class="mb-5 shadow-xl lg:hidden rounded-3xl">
      <img class="block" src="@/assets/images/sample/promo-m.png" alt="" />
    </div>

    <!-- Desktop image -->
    <div class="hidden mb-5 shadow-xl lg:block rounded-3xl">
      <img class="block" src="@/assets/images/sample/promo-d.png" alt="" />
    </div>
    <div class="lg:flex lg:gap-6">
      <div>
        <ContentCard :actionsBar="false" :post="fakeData" class="mb-5">
          <template #content>
            <p>
              參加定期(不)定額「金力high優惠專案」長期
              投資，依每次扣款金額享信託(申購)手續費3~4折優惠(樂退GO專案不適用此優惠)
            </p>
            <p class="text-main">說明：</p>
            <p class="mb-2">(一) 每次扣款金額享有下表所列之折數：</p>
            <table class="w-full mb-8">
              <thead>
                <tr class="text-center text-white bg-main">
                  <th class="p-3">投資方式</th>
                  <th class="p-3">扣款金額</th>
                  <th class="p-3">扣款金額 信託 (申購) 手續費優惠</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-[#f4f4f4]">
                  <td class="px-2 py-3 text-left lg:text-center">定期(不)定額基金</td>
                  <td class="px-2 py-3 text-left lg:text-center">
                    同一筆當期扣款金額達第(二)項所訂金額
                  </td>
                  <td class="px-2 py-3 text-left lg:text-center">3 折</td>
                </tr>
                <tr class="bg-[#eaeaea]">
                  <td class="px-2 py-3 text-left lg:text-center">定期(不)定額基金</td>
                  <td class="px-2 py-3 text-left lg:text-center">
                    同一筆當期扣款金額未達第(二)項所訂金額
                  </td>
                  <td class="px-2 py-3 text-left lg:text-center">4 折</td>
                </tr>
              </tbody>
            </table>
            <p class="my-5">(二) 各幣別信託本金之扣款金額訂定如下表所示：</p>

            <table class="w-full mb-8">
              <thead>
                <tr class="text-center text-white bg-main">
                  <th class="p-3">投資方式</th>
                  <th class="p-3">扣款金額</th>
                  <th class="p-3">扣款金額 信託 (申購) 手續費優惠</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-[#f4f4f4]">
                  <td class="px-2 py-3 text-left lg:text-center">定期(不)定額基金</td>
                  <td class="px-2 py-3 text-left lg:text-center">
                    同一筆當期扣款金額達第(二)項所訂金額
                  </td>
                  <td class="px-2 py-3 text-left lg:text-center">3 折</td>
                </tr>
                <tr class="bg-[#eaeaea]">
                  <td class="px-2 py-3 text-left lg:text-center">定期(不)定額基金</td>
                  <td class="px-2 py-3 text-left lg:text-center">
                    同一筆當期扣款金額未達第(二)項所訂金額
                  </td>
                  <td class="px-2 py-3 text-left lg:text-center">4 折</td>
                </tr>
              </tbody>
            </table>

            <p class="text-main">注意事項：</p>
            <ul class="ml-5 list-decimal">
              <li>
                本優惠專案須先至臨櫃、網路銀行、行動銀行簽署特約事項，再於臨櫃、網路銀行、行動銀行申購時申請參加。以信用卡/郵局帳戶扣款申購不適用此優惠專案。
              </li>
              <li>
                台幣信託定期(不)定額信託申購手續費訂有最低收取限制(境外基金新台幣120元，境內基金新台幣50元)，若投資扣款金額x信託申購手續費率，未達最低收取限制，則依最低收取限制X優惠折扣後計收。
              </li>
              <li>定期(不)定額扣款金額如有異動，則依異動後之每次扣款金額適用申購手續費優惠。</li>
              <li>
                信託贖回手續費於贖回時，以贖回之信託本金乘上上表所載之信託贖回手續費率，於基金贖回時自贖回總額中扣除。
              </li>
              <li>
                參加上述方案之定期(不)定額若欲轉換，僅接受全部單位數轉換，轉換後仍可繼續計算累積扣款次數。累積扣款達37(含)次以上，將不收取贖回手續費。
              </li>
              <li>其他未盡事宜，詳見本行網站公告，本行保留隨時變更及停止本活動之權利。</li>
            </ul>
          </template>
        </ContentCard>

        <div class="grid grid-cols-2 gap-5 mb-8">
          <div>
            <ResponsiveCard
              :post="fadeAds[0]"
              class="mb-5"
              :contentClass="['!py-4 lg:!w-[280px] !px-5']"
            >
              <template #image>
                <div
                  class="w-full pb-[92%] lg:!pb-[78%] h-full bg-cover bg-no-repeat bg-center scale-110 group-hover:scale-100 transitions duration-1000"
                  :style="{ 'background-image': 'url(' + fadeAds[0].imageUrl + ')' }"
                />
              </template>
              <template #title>
                <p class="mb-2 leading-4 text-md lg:text-lg lg:font-bold" :title="fadeAds[0].title">
                  {{ fadeAds[0].title }}
                </p>
              </template>
              <template #content>
                <p :title="fadeAds[0].content" class="text-sm ad-text-ellipsis lg:text-md">
                  {{ fadeAds[0].content }}
                </p></template
              >
            </ResponsiveCard>
            <div class="flex items-center justify-end gap-3 cursor-pointer" @click="prevArticle">
              <img width="9" src="@/assets/images/icon/arrow-left.png" alt="" />
              <p class="text-main hover:underline">上一篇</p>
            </div>
          </div>
          <div>
            <ResponsiveCard
              :post="fadeAds[1]"
              class="mb-5"
              :contentClass="['!py-4 lg:!w-[280px] !px-5']"
            >
              <template #image>
                <div
                  class="w-full pb-[92%] lg:!pb-[78%] h-full bg-cover bg-no-repeat bg-center scale-110 group-hover:scale-100 transitions duration-1000"
                  :style="{ 'background-image': 'url(' + fadeAds[1].imageUrl + ')' }"
                />
              </template>
              <template #title>
                <p class="mb-2 leading-4 text-md lg:text-lg lg:font-bold" :title="fadeAds[1].title">
                  {{ fadeAds[1].title }}
                </p>
              </template>
              <template #content>
                <p :title="fadeAds[1].content" class="text-sm ad-text-ellipsis lg:text-md">
                  {{ fadeAds[1].content }}
                </p></template
              >
            </ResponsiveCard>
            <div class="flex items-center gap-3 cursor-pointer" @click="nextArticle">
              <p class="text-main hover:underline">下一篇</p>
              <img width="9" src="@/assets/images/icon/arrow-right.png" alt="" />
            </div>
          </div>
        </div>

        <RouterLink
          class="flex justify-center mt-10 mb-4"
          :to="{ name: ROUTE_NAME.faq.promotions.name }"
          v-slot="{ navigate }"
        >
          <button class="inline-block round-button" @click="navigate" role="link">回列表頁</button>
        </RouterLink>
      </div>

      <!-- Ads -->
      <div class="lg:w-[255px] shrink-0">
        <SubscribeBlock class="mb-5" />
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-1">
          <img class="cursor-pointer" src="@/assets/images/ad1.png" alt="" />
          <img class="cursor-pointer" src="@/assets/images/ad2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/speaker-s.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '優惠活動', routeName: ROUTE_NAME.faq.promotions.name }
]

const fakeData = ref({
  id: 0,
  title: 'gogoro輕鬆購、暢快騎',
  content: '【分期0利率】滿額登錄享最高1,250元刷卡金回饋，滿額登錄享最高1,250元刷卡金回饋',
  imageUrl: 'https://i.imgur.com/Gtd2q3p.png'
})

const fadeAds = ref([
  {
    id: 0,
    title: '到全家用LINE Pay',
    content: '本優惠專案須先至臨櫃、網路銀行、行動銀行簽署特約事項，申購不適用此優惠專案...,',
    imageUrl: 'https://i.imgur.com/zxy7v18.png'
  },
  {
    id: 0,
    title: '到全家用LINE Pay',
    content: '本優惠專案須先至臨櫃、網路銀行、行動銀行簽署特約事項，申購不適用此優惠專案...,',
    imageUrl: 'https://i.imgur.com/2snYzDv.png'
  }
])
</script>
<style lang="scss" scoped>
.ad-text-ellipsis {
  @include generateContentStyle(14px, 5, 1.3, 15px, 3);
}
</style>
