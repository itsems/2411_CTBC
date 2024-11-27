<template>
  <WarningArea :isShown="isWarningShown" @toggle-warning-area="handleToggleWarningArea" />
  <footer class="relative text-white footer">
    <div class="px-3 py-6 lg:p-6 bg-darkGreen lg:pb-12">
      <div class="mx-auto lg:grid max-w-[1110px] lg:grid-cols-2">
        <!-- Email -->
        <div class="px-4 mb-4 lg:hidden lg:ml-20">
          <SubscribeEmailInput
            placeholder="輸入Email訂閱最新投資理財訊息"
            :inputClass="'lg:w-[350px]'"
          />
        </div>

        <!-- Logo -->
        <img
          width="46"
          class="block mx-auto mb-4 lg:hidden"
          src="@/assets/images/logo-ball.png"
          alt="中國證券投資信託股份有限公司" />
        <img
          class="footer-logo mb-4 hidden lg:block lg:w-[350px] lg:col-span-2"
          src="@/assets/images/footer-logo.png"
          alt="中國信託證券投資信託股份有限公司"
        />

        <!-- 文字 -->
        <div class="block contact-block lg:ml-[74px] mb-6 lg:mb-0 text-center lg:text-left">
          <div class="text-[13px]">
            <p class="mb-1">營業人：中信證券投資信託股份有限公司</p>
            <p class="mb-1">營利事業統一編號：16439219</p>
            <p class="mb-1">
              台北總公司：
              <a
                class="hover:underline"
                href="https://www.google.com.tw/maps/place/115%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E7%B6%93%E8%B2%BF%E4%BA%8C%E8%B7%AF188%E8%99%9F/25.059107,121.6129637,17z/data=!4m5!3m4!1s0x3442aca7b3424eb7:0x5ecd63f48f8ed396!8m2!3d25.0588446!4d121.6152597"
                target="blank"
              >
                115台北市南港區經貿二路188號12樓
              </a>
              <a class="hover:underline" href="tel:+886226526688">(02)2652-6688</a>
            </p>
            <p class="mb-1">
              台中分公司：
              <a
                href="https://www.google.com.tw/maps/place/403%E5%8F%B0%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%8D%80%E5%BF%A0%E6%98%8E%E5%8D%97%E8%B7%AF499%E8%99%9F/24.1356179,120.655471,17z/data=!3m1!4b1!4m5!3m4!1s0x34693daf79e6671f:0x706427f007dcb98!8m2!3d24.135613!4d120.657665"
                class="hover:underline"
                target="_blank"
              >
                403台中市西區忠明南路499號9樓之1
              </a>
              <a class="hover:underline" href="tel:+886423725199">(04)2372-5199</a>
            </p>
            <p class="mb-1">本公司營業執照文號：110金管投信新字第012號</p>
            <p class="mb-1">本公司兼營投顧業務核准文號：金管證投字第1060004317號</p>
          </div>
        </div>

        <!-- 客服 -->
        <div class="grid grid-cols-2 lg:block link-block lg:ml-20">
          <div class="mb-1 lg:items-center lg:flex">
            <img class="block mx-auto lg:ml-0 lg:mr-5 w-[22px] pt-2 lg:pt-0 " src="@/assets/images/icon/service.png" alt="客服專線" />
            <div class="flex flex-wrap justify-center text-[15px] lg:text-base">
              <p class="w-full text-lg text-center lg:w-auto tel-text lg:text-base">客服專線</p>
              <a
                class="block w-full text-center lg:w-auto hover:underline lg:text-left text-[12px] lg:text-base"
                href="tel:+886226526699"
              >
                (02)2652-6699<span class="block lg:inline">(每營業日9:00-18:00)</span>
              </a>
            </div>
          </div>
          <div class="mb-1 lg:items-center lg:flex">
            <img class="block mx-auto lg:ml-0 lg:mr-5 w-[22px] pt-2 lg:pt-0 " src="@/assets/images/icon/mail.png" alt="客服信箱" />
            <div class="flex flex-wrap justify-center text-[15px] lg:text-base">
              <p class="w-full text-lg text-center lg:w-auto tel-text lg:text-base">客服信箱</p>
              <a
                class="block text-center hover:underline lg:text-left text-[12px] lg:text-base pt-2 lg:pt-0"
                href="mailto:cs@ctbcinvestments.com"
              >
                cs@ctbcinvestments.com
              </a>
            </div>
          </div>
          <div class="hidden mt-10 lg:block">
            <SubscribeEmailInput
              placeholder="輸入Email訂閱最新投資理財訊息"
              :inputClass="'lg:w-[350px]'"
            />
          </div>
        </div>
      </div>
    </div>
    <CopyRights />
  </footer>
  <GoTop />
</template>
<script setup>
const handleToggleWarningArea = () => {
  isWarningShown.value = !isWarningShown.value
}
const isWarningShown = ref(false)
</script>
<style lang="scss" scoped>
.tel-text {
  @media (min-width: 1024px) {
    &:after {
      content: '';
      width: 1px;
      height: 15px;
      background-color: rgba(255, 255, 255, 0.6);
      display: inline-block;
      position: relative;
      margin: 0 20px;
      top: 2px;
    }
  }
}
</style>
