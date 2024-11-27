<template>
  <GradientBackground :mobile-position="145" :desktop-position="220" />
  <!-- 收益平準金專區 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle
      title="收益平準金專區"
      :size="34"
      class="lg:!mb-16"
      :imagePath="PageTitleIcon"
    />

    <FaqItem open question="什麼是收益平準金？">
      <p>收益平準金是基金淨值組成的主要項目之一，納入收益平準金機制的基金，其淨值組成項目可以分成三部分：「基本面額」、「收益平準金」及「資本平準金」。</p>
      <p>其中「基本面額」發行時即決定，基本上不會變動。而「收益平準金」及「資本平準金」則會隨著基金的申贖、交易及成分股的市場波動而變化。一般情形下，納入收益平準金機制的基金，其「收益平準金」部分亦為基金可用於配息的來源之一。</p>
    </FaqItem>
    
    <FaqItem open question="ETF納入收益平準金機制有哪些好處？">
      <p>收益平準金可防止ETF因規模增加而產生配息稀釋的狀況，具有「平穩配息」的作用！</p>
      <br>
      <p>特別是在投信宣告ETF配息金額到除息前這段時間，常發生投資人大量購入該ETF，導致每單位配息金額下降，造成原有配息率被稀釋的情況，影響原有投資人的現金管理規劃。為了公平對待投資人及穩定配息率，ETF納入收益平準金機制，可將部分收益平準金加入該期的配息中，讓基金配息金額不會因除息前夕的大量申購而被稀釋。釋例說明如下：</p>
      <br>
      <p>以下圖無收益平準金機制為例，若ETF於今年8月底前均維持100億的規模，期間領到的股利所得為5億，則9月配息時原本可配發的現金股息率為5%(=5億/100億)。然而，若9月除息前有大筆申購發生，將ETF規模擴大至500億，但此時帳上仍只有5億的股利所得，因此ETF現金股息率將從5%稀釋到1%(=5億/500億)。</p>
      <br>
      <img src="https://www.ctbcinvestments.com.tw/Content/images/ETFArea-LM1.JPG" alt="" />
      <br>
      <p>而在納入收益平準金機制下，當ETF因淨申購規模增加到500億元時，新申購資金將會依照當時的現金股息率等比例提撥收益平準金所得20億，故除息時可分配收入將同步由5億增加至25億，因此ETF現金股息率將可維持在5%(=25億/500億)。</p>
      <br>
      <img src="https://www.ctbcinvestments.com.tw/Content/images/ETFArea-LM2.JPG" alt="" />
      <br>
    </FaqItem>

    <FaqItem open question="收益平準金機制是為了提高ETF的配息率嗎？">
      <p>不是。由前述例子可知納入收益平準金制度，不是為了提升配息率，而是為了「穩定」配息率。</p>
      <br>
      <p>將收益平準金納入可分配範圍，可避免追求穩定現金流的投資人，因新投資人的加入，造成配息金額及配息率不穩定，合理且公平對待追求穩定配息之長期投資人。</p>
      <br>
    </FaqItem>
    <FaqItem open question="收益平準金機制會影響ETF的資產配置與績效表現嗎？">
      <p>不會。收益平準金是會計帳務分類的科目，對ETF帳列現金餘額並不會造成影響，因此不會使ETF可投資現金減少，也不會造成持股（債）比例降低，並無影響ETF資產配置的疑慮；且投資績效的衡量主要來自配息及價差，ETF分配收益平準金會反映在配息裡，因此投資績效也不會受到影響。</p>
      <br>
    </FaqItem>
    <FaqItem open question="每位投資人拿到的收益平準金比例都是一樣的嗎？">
      <p>是的。ETF的配息是依照次級市場交易的最後持有者來決定，並無先後之分，在ETF配息評價日時，會決定每一單位可分配收益項目的組合，因此每位投資人拿到的收益平準金比例都會是一樣的。</p>
      <br>
    </FaqItem>

    
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/money2.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.etf.index },
  { name: '收益平準金專區', routeName: undefined }
]


</script>

<!-- <style lang="scss">
.question {
  @apply mb-5 bg-white shadow-xl rounded-3xl text-md;
}
.question-block {
  @apply flex items-start justify-between p-3 lg:justify-normal lg:items-center lg:pl-2 lg:pr-3 lg:py-2 lg:gap-6;
}
.collapsed-block {
  @apply bg-[#e8f7f7] overflow-hidden rounded-b-3xl;
}
.ans-block {
  @apply flex gap-3 p-3 lg:p-2 lg:pt-3 lg:gap-6 lg:pr-6;
}
.ans-circle {
  @apply rounded-full shrink-0 bg-[#a6a6a6] text-white flex items-center justify-center w-[33px] h-[33px];
}
</style> -->
