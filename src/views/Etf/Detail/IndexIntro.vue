<template>
  <!-- 指數介紹 -->
  <section class="mb-8">
    <VerticalBarTitle class="mb-5" textClass="text-2xl" title="指數介紹" />
    <table class="normal-table no-stripped-bg">
      <tr>
        <th>追蹤指數</th>
        <td>恒生中國高股息率指數(Hang Seng China High Dividend Yield Index)</td>
      </tr>
      <tr>
        <th>指數編製公司</th>
        <td>恒生指數有限公司</td>
      </tr>
      <tr>
        <th>指數發布日及點數</th>
        <td>
          <p>日期：2020/02/17</p>
          <p>點數：3,786.08點</p>
        </td>
      </tr>
      <tr>
        <th>基礎貨幣</th>
        <td>港幣</td>
      </tr>
      <tr>
        <th>Bloomberg代號</th>
        <td>HSCHDY Index</td>
      </tr>
      <tr>
        <th>指數編製規則摘要</th>
        <td>以恒生綜合指數為母指標，取其香港上市且50%以上的銷售收入來自中國的企業，經流動性以及指標篩選後，結合股息、波動度等投資因子，依照淨股息率排名較佳之50檔股票。成分股以淨股息率加權，以表彰香港上市兼具高股息及流動性之中國企業整體表現。
        </td>
      </tr>
      <tr>
        <th>指數編製規則</th>
        <td>
          <p>一、資產池篩選</p>
          <p>以恒生綜合指數為母指標，取其香港上市且50%以上的銷售收入來自中國的企業</p>
          <br>
          <p>二、市值要求</p>
          <p>恒生綜合指數成分股中的大型股及中型股(涵蓋在香港聯合交易所主板上市證券總市值最高的95%)</p>
          <br>
          <p>三、流動性檢驗</p>
          <p>最近6個月之日均成交值達 2,000萬港幣以上。</p>
          <br>
          <p>四、其他因子篩選</p>
          <p>1.配息要求：至少連續3個完整財政年度的現金股息派息記錄。</p>
          <p>2.業務子類別要求：剃除涉及博彩及煙草業務的證券。</p>
          <p>3.波動度要求：最近1年的波動率排序，首25%的證券將被剔除。</p>
          <br>
          <p>五、排序方式</p>
          <p>符合上述所有條件者，依照淨股息率由大至小進行排序，取其前50檔標的。</p>
          <br>
        </td>
      </tr>
      <tr>
        <th>計算方式</th>
        <td>指數計算方式採用淨股息率加權法計算，並為每檔成分股的比重上限設定為10%。計算基期為2013年12月31日，計算基期點數為3,000點(圖)</td>
      </tr>
      <tr>
        <th>調整頻率</th>
        <td>指數成分股每年檢討一次，數據截止日為每年三月底，根據指數編算細則會涉及選股範疇中股票的波動率、股息率的更新，並於該年度六月份第一個星期五之次一營業日調整成分股。</td>
      </tr>
      <tr>
        <th>客製化指數</th>
        <td>港幣</td>
      </tr>
      <tr>
        <th>客製化指數風險特性</th>
        <td>本基金以追蹤客製化指數「恒生中國高股息率指數」（即標的指數）報酬為操作目標，其指數算方式採用淨股息率加權法計算，相較於傳統市值型指數有所差異。而標的指數之成分證券價格波動將影響標的指數的走勢，當標的指數的成分證券價格波動劇烈或變化時，本基金之淨資產價值亦承受大幅波動的風險。有關客製化指數風險數據揭露，請參考
          <a href="#" class="underline text-main underline-offset-2">附件</a>
        </td>
      </tr>
    </table>
  </section>

  <!-- 指數定期審查 -->
  <VerticalBarTitle class="mb-5" textClass="text-2xl" title="指數定期審查" />
  <div class="mb-8 custom-table td-no-bg-mobile mobile-th-row-table text-md ">
    <ul class="desktop-th lg:grid-cols-[1fr_1fr_1fr_1fr_1fr]">
      <li>定審生效時間</li>
      <li>定審前成分股檔數</li>
      <li>新增成分股檔數</li>
      <li>刪除成分股檔數</li>
      <li>定審後成分股檔數</li>
    </ul>
    <div v-for="data in fakeData" :key="data.date" class="data-row lg:grid-cols-[1fr_1fr_1fr_1fr_1fr]">
      <div class="th">定審生效時間</div>
      <div class="td lg:text-center">{{ data.date }}</div>
      <div class="th">定審前成分股檔數</div>
      <div class="td lg:text-center">{{ data.before }}</div>
      <div class="th">新增成分股檔數</div>
      <div class="td lg:text-center">{{ data.new }}</div>
      <div class="th">刪除成分股檔數</div>
      <div class="td lg:text-center">{{ data.delete }}</div>
      <div class="th">定審後成分股檔數</div>
      <div class="td lg:text-center">{{ data.after }}</div>
    </div>
  </div>
  <Hr class="mb-8" />
  <p class="mb-2 text-sm text-main">註：</p>
  <p class="mb-10 text-sm">上表為追蹤指數定審換股資訊，並未涵蓋非定審、公司事件或其他事件之指數成分調整。以上指數之成分股/券新增或刪除之資訊來源為各指數編製公司，僅供各投資人參考。經理公司系列ETF 所追蹤指數之定審頻率請查閱各基金公開說明書。經理公司系列ETF 績效可能受定期審核或不定期審核換股/券成本以外等因素影響。</p>
</template>
<script setup>

defineProps({
  fund: {
    type: Object,
    required: true
  }
})

const fakeData = ref([
  {
    date: '2024/07/31',
    before: 30,
    new: 1,
    delete: 1,
    after: 30
  },
  {
    date: '2024/07/31',
    before: 30,
    new: 1,
    delete: 1,
    after: 30
  },
  {
    date: '2024/07/31',
    before: 30,
    new: 1,
    delete: 1,
    after: 30
  },
  {
    date: '2024/07/31',
    before: 30,
    new: 1,
    delete: 1,
    after: 30
  },
])

</script>
<style lang="scss" scoped>
.normal-table {
  th {
    vertical-align: middle;
    text-align: left;
    width: 40%;
    @media (min-width: 1024px) {
      word-break: keep-all;
      width: max-content;
      padding: 15px 25px;
    }
  }
  
}
</style>