<template>
  <!-- 聚焦ETF內容頁 -->
  <div class="page-layout">
    <PageTitle title="聚焦ETF" :imagePath="PageTitleIcon" />
    <Breadcrumb :list="breadCrumbList" />

    <ContentCard :post="fakeData">
      <template #content>
        <p>美股因聯準會(Fed放鷹及經濟展望欠佳連跌數周·上周出現技術性反彈·拉抬新興股回穩·其中泰國印度上周別上漲2%與1.7%·越股下跌2.5·觀上周資金流入最多的前三新興亞股為印度印尼及菲律賓·金額分別為 6.2億美元、3 億美元及2千萬美元·台股連6周淨流出、越南也3周流出。</p>
        <br>
        <p>台股加權指數上周收在1458.4點周幅0.6中信智慧50E00912經理人張圭慧表示美股上週技術性彈、但仍有通膨、升息等不確定性主導依據芝易所CE)數據.預美國聯準會月升息幅度以3碼為主.股市基本面表現、仍利率政策與經濟前景為驅動引擎。月台目前電子類股修正.半導體與航運類價格調整.在上週蘋果舉辦秋季發表會後.預購熱潮湧入.針對受惠蘋果新品光環的半導體、光學類.以及政策支持性產業.如能、電動車類仍待。</p>
        <br>
        <p>越指上周處於震盪格局,中國信託越南機會基金經理人張晨瑋指出·越南在上半年疫情穩定後復甦趨勢仍不變.國際貨幣基金組織(IMF近期報告將越南今年經濟長率從6%上調至7%仍為亞洲唯一大幅上的經濟體另依據越南計劃投資部(MPI統計總局月公饰經濟數據顯示今年月份越南商品零售額和消費服務收額比上月增長0.6%,比去年同期增長50.2%增長規模和速度高於疫情前歷年同期另8月份業生產指數比增長15.6%年初至今·越南新註冊與恢復營業之企業約15萬家.年增31.1%。</p>
      </template>
    </ContentCard>


  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/scope-etf.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '投資觀點', routeName: undefined },
  { name: '聚焦ETF', routeName: ROUTE_NAME.focus.etf.name },
]

const fakeData = ref({
  id: 0,
  date: '2022/10/02',
  title: '法盛投資管理2022年10月投資展望',
  content: '美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼美股因聯準會（Fed）放鷹及經濟展望欠佳連跌數周，上周出現技術性反彈，拉抬新興亞股回穩，其中泰國、印度上周各別上漲 2%與 1.7%，惟越股下跌 2.5%，綜觀上周資金流入最多的前三新興亞股為印度、印尼',
  imageUrl: 'https://i.imgur.com/ws9HmSS.png'
})


</script>