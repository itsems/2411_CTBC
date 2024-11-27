<template>
  <GradientBackground :mobile-position="240" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="認識法盛" :size="26" :imagePath="PageTitleIcon" />

    <div class="relative block image-text-wrap">
      <div class="relative block">
        <img
          class="block w-full mb-5 shadow-xl rounded-[20px] lg:hidden"
          src="@/assets/images/about/out-m.png"
          alt="法盛投資管理"
        />
        <img
          class="hidden w-full mb-12 shadow-xl rounded-[20px] lg:block"
          src="@/assets/images/about/out-d.png"
          alt="法盛投資管理"
        />
        <div class="leading-7 mb-14 lg:mb-24">
          <h3 class="mb-3 text-2xl font-bold title text-darkGreen">總代理伙伴一法盛投資管理</h3>
          <p class="mb-1 text-lg font-medium text-main">傳承百年金融智慧</p>
          <p class="mb-5 text-md lg:mb-10">
            法盛投資管理集團隸屬於超過200年歷史、法國第二大金融集團BPCE，旗下擁有超過20個資產管理公司及投資品牌，橫跨歐、亞、美三大洲，各自擅長不同投資風格及資產類別，運用「主動思維（Active
            Thinking℠）」創造前瞻性解決方案，帶領客戶追求出眾績效。自2012年以來，已獲得14座基金大獎肯定，顯示其管理能力備受客戶及專業機構肯定，資產管理規模近1.4兆美元(更新至2021/12/31)。
          </p>
          <p class="text-md">
            2018年3月15日，成為法盛資產管理在台灣總代理。目前在台灣註冊的品牌有法盛（Natixis）、盧米斯賽勒斯（Loomis
            Sayles）、漢瑞斯資產管理（Harris Associates）及Thematics資產管理等系列基金。
          </p>
        </div>

        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-[920px] lg:mx-auto">
          <LogoBoard
            :imageUrl="LsPath"
            name="盧米斯賽勒斯 (Loomis Sayles)"
            content="盧米斯賽勒斯（Loomis Sayles）擁有長達近百年的投資研究經驗，結合深入的專有研究及整合風險分析，投資研究據點遍布美、歐、亞等金融重鎮。值得一提的是，盧米斯賽勒斯為美國第一家建立內部信用評等制度的資產管理公司。"
          />
          <LogoBoard
            :imageUrl="haPath"
            name="漢瑞斯資產管理 (Harris Associates)"
            content="漢瑞斯資產管理（Harris Associates）管理美國、環球及國際策略，秉持著價值投資的精神與理念，透過紮實、嚴謹的基礎研究及選股策略，找尋價值被市場低估的投資標的公司，以滿足客戶利益為終極目標。"
          />
          <LogoBoard
            :imageUrl="tPath"
            name="Thematics資產管理"
            content="Thematics 資產管理成立於2019年，專長於創新主題投資策略，已發行產品包括智慧安保、水資源、人工智慧與機器人、訂閱經濟等；投資經理團隊不僅走在主題投資領域的前端同時也饒富經驗，並於投資流程及配置決策中納入環境、社會及公司治理(ESG)之考量因素。"
          />
          <LogoBoard
            :imageUrl="dncaPath"
            name="DNCA資產管理"
            content="DNCA Investments成立於2004年，以高信念進行跨資產、風格以及地域的投資管理聞名，並專精固定收益、全球總經、多元資產、股票等領域；管理方式將風險考量置於核心，並融入在投資流程的各個階段，且涵蓋財務及非財務面向。"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitleIcon from '@/assets/images/icon/search.png'
import LsMPath from '@/assets/images/about/ls.png'
import haMPath from '@/assets/images/about/ha.png'
import tMPath from '@/assets/images/about/t.png'
import dncaMPath from '@/assets/images/about/dnca.png'
import LsDPath from '@/assets/images/about/ls-d.png'
import haDPath from '@/assets/images/about/ha-d.png'
import tDPath from '@/assets/images/about/t-d.png'
import dncaDPath from '@/assets/images/about/dnca-d.png'

const ROUTE_NAME = inject('ROUTE_NAME')

const system = useSystemStore()
const LsPath = computed(() => (system.isCurrentMobile ? LsMPath : LsDPath))
const haPath = computed(() => (system.isCurrentMobile ? haMPath : haDPath))
const tPath = computed(() => (system.isCurrentMobile ? tMPath : tDPath))
const dncaPath = computed(() => (system.isCurrentMobile ? dncaMPath : dncaDPath))
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '關於我們', routeName: undefined },
  { name: '認識法盛', routeName: undefined }
]
</script>
