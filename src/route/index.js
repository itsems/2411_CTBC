import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTE_NAME } from '@/constants/page'
import HomeView from '@/views/Home/index.vue'

const router = createRouter({
  // https://router.vuejs.org/guide/essentials/history-mode.html
  // history mode need host configuration
  history: createWebHashHistory(),
  // history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: ROUTE_NAME.home.name,
      meta: { title: '首頁' },
      component: HomeView
    },
    {
      path: `/${ROUTE_NAME.siteMap}`,
      name: ROUTE_NAME.siteMap,
      meta: { title: '網站地圖' },
      component: () => import('@/views/Others/Sitemap.vue')
    },
    {
      path: `/${ROUTE_NAME.privacy}`,
      name: ROUTE_NAME.privacy,
      meta: { title: '隱私權政策' },
      component: () => import('@/views/Others/Privacy.vue')
    },
    {
      path: `/${ROUTE_NAME.risk}`,
      name: ROUTE_NAME.risk,
      meta: { title: '風險預告說明' },
      component: () => import('@/views/Others/Risk.vue')
    },
    {
      path: `/${ROUTE_NAME.personal}`,
      name: ROUTE_NAME.personal,
      meta: { title: '個資運用說明' },
      component: () => import('@/views/Others/Personal.vue')
    },
    {
      path: `/${ROUTE_NAME.legalDisclaimers}`,
      name: ROUTE_NAME.legalDisclaimers,
      meta: { title: '法定揭露專區' },
      component: () => import('@/views/Others/LegalDisclaimers.vue')
    },
    {
      path: `/${ROUTE_NAME.dataConfidentiality}`,
      name: ROUTE_NAME.dataConfidentiality,
      meta: { title: '資料保密承諾' },
      component: () => import('@/views/Others/DataConfidentiality.vue')
    },
    {
      path: `/${ROUTE_NAME.security}`,
      name: ROUTE_NAME.security,
      meta: { title: '交易安全機制' },
      component: () => import('@/views/Others/Security.vue')
    },
    {
      path: `/${ROUTE_NAME.consumerDispute}`,
      name: ROUTE_NAME.consumerDispute,
      meta: { title: '金融消費爭議處理專區' },
      component: () => import('@/views/Others/ConsumerDispute.vue')
    },
    {
      path: `/${ROUTE_NAME.antiCounterfeiting}`,
      name: ROUTE_NAME.antiCounterfeiting,
      meta: { title: '網路防偽聲明' },
      component: () => import('@/views/Others/AntiCounterfeiting.vue')
    },
    {
      path: `/${ROUTE_NAME.accessibility}`,
      name: ROUTE_NAME.accessibility,
      meta: { title: '友善專區' },
      component: () => import('@/views/Others/Accessibility.vue')
    },
    {
      path: `/${ROUTE_NAME.news.index}`,
      name: ROUTE_NAME.news.index,
      meta: { title: '最新公告' },
      redirect: `/${ROUTE_NAME.news.index}/${ROUTE_NAME.news.list.path}`,
      children: [
        {
          path: ROUTE_NAME.news.list.path,
          name: ROUTE_NAME.news.list.name,
          component: () => import('@/views/News/index.vue')
        },
        {
          path: ':id',
          name: ROUTE_NAME.news.detail.name,
          component: () => import('@/views/News/NewsDetail.vue')
        },
        {
          path: '/specialNews/:id',
          name: ROUTE_NAME.news.specialNewsDetail.name,
          component: () => import('@/views/News/SpecialNewsDetail.vue')
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.speech.index}`,
      name: ROUTE_NAME.speech.index,
      meta: { title: '講座活動' },
      component: () => import('@/views/Speech/index.vue'),
      redirect: `/${ROUTE_NAME.speech.index}/${ROUTE_NAME.speech.list.path}`,
      children: [
        {
          path: ROUTE_NAME.speech.list.path,
          name: ROUTE_NAME.speech.list.name,
          component: () => import('@/views/Speech/List.vue')
        },
        {
          path: ':id',
          name: ROUTE_NAME.speech.detail.name,
          component: () => import('@/views/Speech/SpeechDetail.vue')
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.about.index}`,
      name: ROUTE_NAME.about.index,
      component: () => import('@/views/About/index.vue'),
      redirect: `/${ROUTE_NAME.about.index}/${ROUTE_NAME.about.groupProfile.path}`,
      children: [
        {
          path: ROUTE_NAME.about.groupProfile.path,
          name: ROUTE_NAME.about.groupProfile.name,
          meta: { title: '集團簡介' },
          component: () => import('@/views/About/GroupProfile.vue')
        },
        {
          path: ROUTE_NAME.about.companyIntro.path,
          name: ROUTE_NAME.about.companyIntro.name,
          meta: { title: '公司簡介' },
          component: () => import('@/views/About/CompanyIntro.vue')
        },
        {
          path: ROUTE_NAME.about.award.path,
          name: ROUTE_NAME.about.award.name,
          meta: { title: '得獎紀錄' },
          component: () => import('@/views/About/Award.vue')
        },
        {
          path: ROUTE_NAME.about.outsidePartner.path,
          name: ROUTE_NAME.about.outsidePartner.name,
          meta: { title: '認識法盛' },
          component: () => import('@/views/About/OutsidePartner.vue')
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.fund.index}`,
      name: ROUTE_NAME.fund.index,
      meta: { title: '基金總覽' },
      redirect: `/${ROUTE_NAME.fund.index}/${ROUTE_NAME.fund.list.path}`,
      children: [
        {
          path: ROUTE_NAME.fund.list.path,
          name: ROUTE_NAME.fund.list.name,
          component: () => import('@/views/Product/List.vue')
        },
        {
          path: ROUTE_NAME.fund.fee.path,
          name: ROUTE_NAME.fund.fee.name,
          meta: { title: '基金匯款帳號暨手續費率表' },
          component: () => import('@/views/Product/Fee.vue'),
          redirect: { name: ROUTE_NAME.fund.account.name },
          children: [
            {
              path: ROUTE_NAME.fund.account.path,
              name: ROUTE_NAME.fund.account.name,
              component: () => import('@/views/Product/Fee/Account.vue')
            },
            {
              path: ROUTE_NAME.fund.rate.path,
              name: ROUTE_NAME.fund.rate.name,
              component: () => import('@/views/Product/Fee/Rate.vue')
            }
          ]
        },
        {
          path: ROUTE_NAME.fund.yield.path,
          name: ROUTE_NAME.fund.yield.name,
          meta: { title: '配息專區' },
          component: () => import('@/views/Product/Yield.vue')
        },
        {
          path: ROUTE_NAME.fund.calendar.path,
          name: ROUTE_NAME.fund.calendar.name,
          meta: { title: '基金行事曆' },
          component: () => import('@/views/Product/Calendar.vue')
        },
        {
          path: ':id',
          name: ROUTE_NAME.fund.detail.name,
          component: () => import('@/views/Product/Detail.vue'),
          redirect: { name: ROUTE_NAME.fund.info.name },
          children: [
            {
              path: ROUTE_NAME.fund.info.path,
              name: ROUTE_NAME.fund.info.name,
              component: () => import('@/views/Product/Detail/Info.vue')
            },
            {
              path: ROUTE_NAME.fund.trend.path,
              name: ROUTE_NAME.fund.trend.name,
              component: () => import('@/views/Product/Detail/Trend.vue')
            },
            {
              path: ROUTE_NAME.fund.performance.path,
              name: ROUTE_NAME.fund.performance.name,
              component: () => import('@/views/Product/Detail/Performance.vue')
            },
            {
              path: ROUTE_NAME.fund.shareHolding.path,
              name: ROUTE_NAME.fund.shareHolding.name,
              component: () => import('@/views/Product/Detail/ShareHolding.vue')
            },
            {
              path: ROUTE_NAME.fund.dividend.path,
              name: ROUTE_NAME.fund.dividend.name,
              component: () => import('@/views/Product/Detail/Dividend.vue')
            }
          ]
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.etf.index}`,
      name: ROUTE_NAME.etf.index,
      meta: { title: 'ETF專區' },
      component: () => import('@/views/Etf/EtfIndex.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.list.path}`,
      meta: { title: 'ETF總覽' },
      name: ROUTE_NAME.etf.list.name,
      component: () => import('@/views/Etf/List.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.realTime.path}`,
      name: ROUTE_NAME.etf.realTime.name,
      meta: { title: '即時預估淨值' },
      component: () => import('@/views/Etf/RealTime.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.dividend.path}`,
      name: ROUTE_NAME.etf.dividend.name,
      meta: { title: '配息資訊' },
      component: () => import('@/views/Etf/Dividend.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.calendar.path}`,
      name: ROUTE_NAME.etf.calendar.name,
      meta: { title: '配息行事曆' },
      component: () => import('@/views/Etf/Calendar.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.buyback.path}`,
      name: ROUTE_NAME.etf.buyback.name,
      meta: { title: '申購買回清單' },
      component: () => import('@/views/Etf/Buyback.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.track.path}`,
      name: ROUTE_NAME.etf.track.name,
      meta: { title: '追蹤差距' },
      component: () => import('@/views/Etf/Track.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.rate.path}`,
      name: ROUTE_NAME.etf.rate.name,
      meta: { title: '交易費率' },
      component: () => import('@/views/Etf/Rate.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.download.path}`,
      name: ROUTE_NAME.etf.download.name,
      meta: { title: '表單下載' },
      component: () => import('@/views/Etf/Download.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.income.path}`,
      name: ROUTE_NAME.etf.income.name,
      meta: { title: '收益平準金專區' },
      component: () => import('@/views/Etf/IncomeEqualization.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.etf.latestDividend.path}`,
      name: ROUTE_NAME.etf.latestDividend.name,
      meta: { title: 'ETF最新配息公告' },
      component: () => import('@/views/Etf/LatestDividend.vue'),
    },
    {
      path: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.news.index}`,
      name: ROUTE_NAME.etf.news.index,
      meta: { title: 'ETF最新公告' },
      redirect: `/${ROUTE_NAME.etf.index}/${ROUTE_NAME.news.index}/${ROUTE_NAME.news.list.path}`,
      children: [
        {
          path: ROUTE_NAME.etf.news.list.path,
          name: ROUTE_NAME.etf.news.list.name,
          component: () => import('@/views/Etf/News/index.vue')
        },
        {
          path: ':id',
          name: ROUTE_NAME.etf.news.detail.name,
          component: () => import('@/views/Etf/News/NewsDetail.vue')
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.etf.index}/:id`,
      name: ROUTE_NAME.etfDetail.index.name,
      component: () => import('@/views/Etf/Detail/index.vue'),
      redirect: { name: ROUTE_NAME.etfDetail.info.name },
      children: [
        {
          path: ROUTE_NAME.etfDetail.info.path,
          name: ROUTE_NAME.etfDetail.info.name,
          meta: { title: '基金資訊' },
          component: () => import('@/views/Etf/Detail/Info.vue')
        },
        {
          path: ROUTE_NAME.etfDetail.indexIntro.path,
          name: ROUTE_NAME.etfDetail.indexIntro.name,
          meta: { title: '指數介紹' },
          component: () => import('@/views/Etf/Detail/IndexIntro.vue')
        },
        {
          path: ROUTE_NAME.etfDetail.trend.path,
          name: ROUTE_NAME.etfDetail.trend.name,
          meta: { title: '基金淨值' },
          component: () => import('@/views/Etf/Detail/Trend.vue')
        },
        {
          path: ROUTE_NAME.etfDetail.performance.path,
          name: ROUTE_NAME.etfDetail.performance.name,
          meta: { title: '績效表現' },
          component: () => import('@/views/Etf/Detail/Performance.vue')
        },
        {
          path: ROUTE_NAME.etfDetail.combination.path,
          name: ROUTE_NAME.etfDetail.combination.name,
          meta: { title: '投資組合' },
          component: () => import('@/views/Etf/Detail/Combination.vue')
        },
        {
          path: ROUTE_NAME.etfDetail.dividend.path,
          name: ROUTE_NAME.etfDetail.dividend.name,
          meta: { title: '配息紀錄' },
          component: () => import('@/views/Etf/Detail/Dividend.vue')
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.focus.index}`,
      name: ROUTE_NAME.focus.index,
      redirect: `/${ROUTE_NAME.focus.index}/${ROUTE_NAME.focus.market.path}`,
      children: [
        {
          path: ROUTE_NAME.focus.market.path,
          name: ROUTE_NAME.focus.market.name,
          meta: { title: '市場快訊' },
          component: () => import('@/views/Focus/Market/index.vue')
        },
        {
          path: `${ROUTE_NAME.focus.market.path}/:id`,
          name: ROUTE_NAME.focus.marketDetail.name,
          meta: { title: '市場快訊' },
          component: () => import('@/views/Focus/Market/Detail.vue')
        },
        {
          path: ROUTE_NAME.focus.expert.path,
          name: ROUTE_NAME.focus.expert.name,
          meta: { title: '專家評論' },
          component: () => import('@/views/Focus/Expert/index.vue')
        },
        {
          path: `${ROUTE_NAME.focus.expert.path}/:id`,
          name: ROUTE_NAME.focus.expertDetail.name,
          meta: { title: '專家評論' },
          component: () => import('@/views/Focus/Expert/Detail.vue')
        },
        {
          path: ROUTE_NAME.focus.perspective.path,
          name: ROUTE_NAME.focus.perspective.name,
          meta: { title: '基金透視' },
          component: () => import('@/views/Focus/Perspective/index.vue')
        },
        {
          path: ROUTE_NAME.focus.master.path,
          name: ROUTE_NAME.focus.master.name,
          meta: { title: '大師開講' },
          component: () => import('@/views/Focus/Master/index.vue')
        },
        {
          path: `${ROUTE_NAME.focus.master.path}/:id`,
          name: ROUTE_NAME.focus.masterDetail.name,
          meta: { title: '大師開講' },
          component: () => import('@/views/Focus/Master/Detail.vue')
        },
        {
          path: ROUTE_NAME.focus.etf.path,
          name: ROUTE_NAME.focus.etf.name,
          meta: { title: '聚焦ETF' },
          component: () => import('@/views/Focus/ETF/index.vue')
        },
        {
          path: `${ROUTE_NAME.focus.etf.path}/:id`,
          name: ROUTE_NAME.focus.etfDetail.name,
          meta: { title: '聚焦ETF內容頁' },
          component: () => import('@/views/Focus/ETF/Detail.vue')
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.video.index}`,
      name: ROUTE_NAME.video.index,
      meta: { title: '影音專區' },
      component: () => import('@/views/Video/index.vue'),
      redirect: `/${ROUTE_NAME.video.index}/${ROUTE_NAME.video.tuesday.path}`
    },
    {
      path: `/${ROUTE_NAME.esg.index}/index`,
      name: ROUTE_NAME.esg.index,
      meta: { title: '永續責任' },
      component: () => import('@/views/Esg/EsgIndex.vue'),
    },
    {
      path: `/${ROUTE_NAME.esg.index}/`,
      name: ROUTE_NAME.esg.layout,
      component: () => import('@/views/Esg/index.vue'),
      redirect: `/${ROUTE_NAME.esg.index}/${ROUTE_NAME.esg.corporate.path}`,
      children: [
        {
          path: ROUTE_NAME.esg.corporate.path,
          name: ROUTE_NAME.esg.corporate.name,
          meta: { title: '企業永續' },
          component: () => import('@/views/Esg/corporate/index.vue'),
          redirect: `/${ROUTE_NAME.esg.index}/${ROUTE_NAME.esg.corporate.path}/${ROUTE_NAME.esg.environment.path}`,
          children: [
            {
              path: ROUTE_NAME.esg.environment.path,
              name: ROUTE_NAME.esg.environment.name,
              component: () => import('@/views/Esg/corporate/environment.vue')
            },
            {
              path: ROUTE_NAME.esg.society.path,
              name: ROUTE_NAME.esg.society.name,
              component: () => import('@/views/Esg/corporate/society.vue')
            },
            {
              path: ROUTE_NAME.esg.corporateGovernance.path,
              name: ROUTE_NAME.esg.corporateGovernance.name,
              component: () => import('@/views/Esg/corporate/corporateGovernance.vue')
            },
          ]
        },
        {
          path: ROUTE_NAME.esg.fund.path,
          name: ROUTE_NAME.esg.fund.name,
          meta: { title: 'ESG基金' },
          component: () => import('@/views/Esg/fund.vue')
        },
        {
          path: ROUTE_NAME.esg.stewardship.path,
          name: ROUTE_NAME.esg.stewardship.name,
          meta: { title: '盡職治理接露' },
          component: () => import('@/views/Esg/stewardship.vue')
        },
        {
          path: ROUTE_NAME.esg.report.path,
          name: ROUTE_NAME.esg.report.name,
          meta: { title: '永續報告' },
          component: () => import('@/views/Esg/report.vue')
        }
      ]
    },
    {
      path: `/${ROUTE_NAME.faq.index}`,
      name: ROUTE_NAME.faq.index,
      redirect: `/${ROUTE_NAME.faq.index}/${ROUTE_NAME.faq.list.path}`,
      children: [
        {
          path: ROUTE_NAME.faq.list.path,
          name: ROUTE_NAME.faq.list.name,
          meta: { title: '常見問題' },
          component: () => import('@/views/Faq/List.vue')
        },
        {
          path: ROUTE_NAME.faq.transactionProcess.path,
          name: ROUTE_NAME.faq.transactionProcess.name,
          meta: { title: '交易流程' },
          component: () => import('@/views/Faq/TransactionProcess/index.vue'),
          redirect: `/${ROUTE_NAME.faq.index}/${ROUTE_NAME.faq.transactionProcess.path}/${ROUTE_NAME.faq.transferAccount.path}`,
          children: [
            {
              path: ROUTE_NAME.faq.transferAccount.path,
              name: ROUTE_NAME.faq.transferAccount.name,
              meta: { title: '基金匯款帳號' },
              component: () => import('@/views/Faq/TransactionProcess/TransferAccount.vue')
            },
            {
              path: ROUTE_NAME.faq.feeRate.path,
              name: ROUTE_NAME.faq.feeRate.name,
              meta: { title: '手續費率表' },
              component: () => import('@/views/Faq/TransactionProcess/FeeRate.vue')
            },
            {
              path: ROUTE_NAME.faq.salesLocation.path,
              name: ROUTE_NAME.faq.salesLocation.name,
              meta: { title: '銷售機構' },
              component: () => import('@/views/Faq/TransactionProcess/SalesLocation.vue')
            },
            {
              path: ROUTE_NAME.faq.etfMail.path,
              name: ROUTE_NAME.faq.etfMail.name,
              component: () => import('@/views/Faq/EtfMail.vue')
            },

          ]
        },
        {
          path: ROUTE_NAME.faq.download.path,
          name: ROUTE_NAME.faq.download.name,
          meta: { title: '表單下載' },
          component: () => import('@/views/Faq/Download/index.vue'),
          redirect: `/${ROUTE_NAME.faq.index}/${ROUTE_NAME.faq.download.path}/${ROUTE_NAME.faq.openForm.path}`,
          children: [
            {
              path: ROUTE_NAME.faq.openForm.path,
              name: ROUTE_NAME.faq.openForm.name,
              component: () => import('@/views/Faq/Download/OpenForm.vue')
            },
            {
              path: ROUTE_NAME.faq.transactionForm.path,
              name: ROUTE_NAME.faq.transactionForm.name,
              component: () => import('@/views/Faq/Download/TransactionForm.vue')
            },
            {
              path: ROUTE_NAME.faq.otherForm.path,
              name: ROUTE_NAME.faq.otherForm.name,
              component: () => import('@/views/Faq/Download/OtherForm.vue')
            }
          ]
        },
        {
          path: ROUTE_NAME.faq.etfDividend.path,
          name: ROUTE_NAME.faq.etfDividend.name,
          meta: { title: 'ETF 客戶配息查詢' },
          component: () => import('@/views/Faq/EtfDividend.vue')
        },
        {
          path: ROUTE_NAME.faq.etfMail.path,
          name: ROUTE_NAME.faq.etfMail.name,
          meta: { title: '申辦 ETF 電子帳單' },
          component: () => import('@/views/Faq/EtfMail.vue')
        },
        {
          path: ROUTE_NAME.faq.promotions.path,
          name: ROUTE_NAME.faq.promotions.name,
          meta: { title: '優惠活動' },
          component: () => import('@/views/Faq/Promotions/index.vue')
        },
        {
          path: `${ROUTE_NAME.faq.promotions.path}/:id`,
          name: ROUTE_NAME.faq.promotionsDetail.name,
          meta: { title: '優惠活動' },
          component: () => import('@/views/Faq/Promotions/Detail.vue')
        },
        {
          path: ROUTE_NAME.faq.contact.path,
          name: ROUTE_NAME.faq.contact.name,
          meta: { title: '聯絡我們' },
          component: () => import('@/views/Faq/Contact.vue')
        },
        {
          path: ROUTE_NAME.faq.branch.path,
          name: ROUTE_NAME.faq.branch.name,
          meta: { title: '服務據點' },
          component: () => import('@/views/Faq/Branch.vue')
        }
      ]
    },
    {
      path: '/NAVBoard',
      name: ROUTE_NAME.navBoard,
      meta: { title: '最新參考淨值' },
      component: () => import('@/views/Home/NAVBoard.vue')
    },
    {
      path: '/IvrDoc',
      name: ROUTE_NAME.ivrDoc,
      meta: { title: '語音查詢功能' },
      component: () => import('@/views/Others/IvrDoc.vue')
    },
    {
      path: '/SalesRewardDisclosure',
      name: ROUTE_NAME.salesRewardDisclosure,
      meta: { title: '銷售通路報酬揭露' },
      component: () => import('@/views/Others/SalesRewardDisclosure.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/",
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.params.id && !Number.isFinite(+to.params.id)) {
    next({ name: ROUTE_NAME.home.name })
  } else {
    next()
  }
  
  window.document.title = `中國信託投信 | ${to.meta.title}`
})

export default router
