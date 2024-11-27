import * as pages from '@/constants/page' 
const { ROUTE_NAME } = pages

export const homePages = [
  {
    label: '隱私權政策',
    name: ROUTE_NAME.privacy
  },
  {
    label: '資料保密承諾',
    name: ROUTE_NAME.dataConfidentiality
  },
  {
    label: '個資運用說明',
    name: ROUTE_NAME.personal
  },
  {
    label: '風險預告說明',
    name: ROUTE_NAME.risk
  },
  {
    label: '網路防偽聲明',
    name: ROUTE_NAME.antiCounterfeiting
  },
  {
    label: '法定揭露專區',
    name: ROUTE_NAME.legalDisclaimers
  },
  {
    label: '交易安全機制',
    name: ROUTE_NAME.security
  },
  {
    label: '金融消費爭議處理專區',
    name: ROUTE_NAME.consumerDispute
  },
  {
    label: '金融友善專區',
    name: ROUTE_NAME.accessibility
  },
  {
    label: '機構投資人盡職治理揭露',
    name: ROUTE_NAME.esg.stewardship.name
  },
]

// 關於我們
export const aboutSubPages = [
  {
    label: '集團簡介',
    name: ROUTE_NAME.about.groupProfile.name
  },
  {
    label: '公司簡介',
    name: ROUTE_NAME.about.companyIntro.name
  },
  {
    label: '得獎紀錄',
    name: ROUTE_NAME.about.award.name
  },
  {
    label: '認識法盛',
    name: ROUTE_NAME.about.outsidePartner.name
  }
]

// 基金資訊
export const fundSubPages = [
  {
    label: '基金總覽',
    name: ROUTE_NAME.fund.list.name
  },
  {
    label: '基金行事曆',
    name: ROUTE_NAME.fund.calendar.name
  },
  {
    label: '配息專區',
    name: ROUTE_NAME.fund.yield.name
  },
  {
    label: 'ETF最新配息公告',
    name: ROUTE_NAME.etf.latestDividend.name,
    shouldOpenNewTab: true
  }
]

// ETF 專區
export const etfSubPages = [
  {
    label: 'ETF總覽',
    name: ROUTE_NAME.etf.list.name
  },
  {
    label: '即時預估淨值',
    name: ROUTE_NAME.etf.realTime.name
  },
  {
    label: '配息資訊',
    name: ROUTE_NAME.etf.dividend.name
  },
  {
    label: '申購買回清單',
    name: ROUTE_NAME.etf.buyback.name
  },
  {
    label: '追蹤差距',
    name: ROUTE_NAME.etf.track.name
  },
  {
    label: '交易資訊',
    name: ROUTE_NAME.etf.rate.name,
    subPages: [
      {
        label: '交易費率',
        name: ROUTE_NAME.etf.rate.name,
      },
      {
        label: '表單下載',
        name: ROUTE_NAME.etf.download.name,
      },
      // {
      //   label: 'ETF客戶配息查詢',
      //   name: ROUTE_NAME.faq.etfDividend.name
      // },
      {
        label: 'ETF電子帳單/配息帳號',
        link: 'https://etrade.ctbcinvestments.com.tw/ebill/'
      },
      {
        label: 'ETF配息帳號異動',
        link: 'https://etrade.ctbcinvestments.com.tw/ebill/'
      },
    ]
  },
  {
    label: '收益平準金專區',
    name: ROUTE_NAME.etf.income.name
  },
]

// 投資觀點
export const focusSubPages = [
  {
    label: '市場快訊',
    name: ROUTE_NAME.focus.market.name
  },
  {
    label: '專家評論',
    name: ROUTE_NAME.focus.expert.name
  },
  {
    label: '基金透視',
    name: ROUTE_NAME.focus.perspective.name
  },
  {
    label: '大師開講',
    name: ROUTE_NAME.focus.master.name
  },
  {
    label: '錢進越南',
    name: 'ETF'
  }
]

// 永續責任
export const esgSubPages = [
  {
    label: '企業永續',
    name: ROUTE_NAME.esg.corporate.name
  },
  {
    label: 'ESG基金',
    name: ROUTE_NAME.esg.fund.name
  },
  {
    label: '盡職治理揭露',
    name: ROUTE_NAME.esg.stewardship.name
  },
  {
    label: '永續報告',
    name: ROUTE_NAME.esg.report.name
  }
]

// 客服中心
export const faqSubPages = [
  {
    label: '常見問題',
    name: ROUTE_NAME.faq.list.name
  },
  {
    label: '交易資訊',
    name: ROUTE_NAME.faq.transactionProcess.name
  },
  {
    label: '表單下載',
    name: ROUTE_NAME.faq.download.name
  },
  {
    label: 'ETF客戶配息查詢',
    name: ROUTE_NAME.faq.etfDividend.name
  },
  {
    label: 'ETF電子帳單/配息帳號',
    link: 'https://etrade.ctbcinvestments.com.tw/ebill/'
  },
  {
    label: '統一證號換發',
    link: 'https://www.ctbcinvestments.com/fund/pdf/ForeignNationals.pdf'
  },
  {
    label: '優惠活動',
    name: ROUTE_NAME.faq.promotions.name
  },
  {
    label: '講座報名',
    name: ROUTE_NAME.speech.list.name
  },
  {
    label: '聯絡我們',
    name: ROUTE_NAME.faq.contact.name
  },
  {
    label: '服務據點',
    name: ROUTE_NAME.faq.branch.name
  }
]