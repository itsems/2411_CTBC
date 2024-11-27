export const ROUTE_NAME = {
  home: {
    path: '/',
    name: 'Home'
  },
  siteMap: 'SiteMap',
  privacy: 'Privacy',
  risk: 'Risk',
  personal: 'Personal',
  legalDisclaimers: 'LegalDisclaimers',
  dataConfidentiality: 'DataConfidentiality',
  security: 'Security',
  consumerDispute: 'ConsumerDispute',
  antiCounterfeiting: 'AntiCounterfeiting',
  accessibility: 'Accessibility',
  news: {
    index: 'News',
    list: { name: 'NewsList', path: 'List' },
    detail: { name: 'NewsDetail', path: 'Detail' },
    specialNewsDetail: { name: 'SpecialNewsDetail', path: 'SpecialDetail' }
  },
  speech: {
    index: 'Speech',
    list: { name: 'SpeechList', path: 'List' },
    detail: { name: 'SpeechDetail' }
  },
  about: {
    index: 'About',
    groupProfile: { name: 'AboutGroupProfile', path: 'GroupProfile' },
    companyIntro: { name: 'AboutCompanyIntro', path: 'CompanyIntro' },
    award: { name: 'AboutAward', path: 'Award' },
    outsidePartner: { name: 'AboutOutsidePartner', path: 'OutsidePartner' }
  },
  fund: {
    index: 'Fund',
    list: { name: 'FundList', path: 'List' },
    detail: { name: 'FundDetail' },
    info: { name: 'FundInfo', path: 'Info' },
    trend: { name: 'FundTrend', path: 'Trend' },
    performance: { name: 'FundPerformance', path: 'Performance' },
    shareHolding: { name: 'FundShareHolding', path: 'ShareHolding' },
    dividend: { name: 'FundDividend', path: 'Dividend' },
    fee: { name: 'FundFee', path: 'Fee' },
    account: { name: 'FundFeeAccount', path: 'Account' },
    rate: { name: 'FundFeeRate', path: 'Rate' },
    yield: { name: 'FundYield', path: 'Yield' },
    calendar: { name: 'FundCalendar', path: 'Calendar' }
  },
  etf: {
    index: 'Etf',
    layout: 'EtfLayout',
    rank: { name: 'EtfRank', path: 'Rank' },
    list: { name: 'EtfList', path: 'List' },
    detail: { name: 'EtfDetail', path: 'Detail' },
    realTime: { name: 'EtfRealTime', path: 'RealTime' },
    dividend: { name: 'EtfDividend', path: 'Dividend' },
    buyback: { name: 'EtfBuyback', path: 'Buyback' },
    track: { name: 'EtfTrack', path: 'Track' },
    rate: { name: 'EtfRate', path: 'Rate' },
    download: { name: 'EtfDownload', path: 'Download' },
    income: { name: 'EtfIncomeEqualization', path: 'IncomeEqualization' },
    latestDividend: { name: 'EtfLatestDividend', path: 'LatestDividend' },
    news: {
      index: 'EtfNews',
      list: { name: 'EtfNewsList', path: 'List' },
      detail: { name: 'EtfNewsDetail', path: 'Detail' },
    }
  },
  etfDetail: {
    index: { name: 'EtfDetail' },
    info: { name: 'EtfDetailInfo', path: 'Info' },
    indexIntro: { name: 'EtfDetailIndexIntro', path: 'IndexIntro' },
    trend: { name: 'EtfDetailTrend', path: 'Trend' },
    performance: { name: 'EtfDetailPerformance', path: 'Performance' },
    combination: { name: 'EtfDetailCombination', path: 'Combination' },
    dividend: { name: 'EtfDetailDividend', path: 'Dividend' },
  },
  focus: {
    index: 'Focus',
    market: { name: 'FocusMarket', path: 'Market' },
    marketDetail: { name: 'FocusMarketDetail', path: 'Detail' },
    expert: { name: 'FocusExpert', path: 'Expert' },
    expertDetail: { name: 'FocusExpertDetail', path: 'Detail' },
    perspective: { name: 'FocusPerspective', path: 'Perspective' },
    master: { name: 'FocusMaster', path: 'Master' },
    masterDetail: { name: 'FocusMasterDetail', path: 'Detail' },
    etf: { name: 'FocusETF', path: 'ETF' },
    etfDetail: { name: 'FocusETFDetail', path: 'Detail' }
  },
  esg: {
    index: 'ESG',
    layout: 'ESGLayout',
    corporate: { name: 'EsgCorporate', path: 'Corporate' },
    society: { name: 'EsgSociety', path: 'Society' },
    corporateGovernance: { name: 'EsgCorporateGovernance', path: 'CorporateGovernance' },
    environment: { name: 'EsgEnvironment', path: 'Environment' },
    fund: { name: 'EsgFund', path: 'Fund' },
    stewardship: { name: 'EsgStewardship', path: 'Stewardship' },
    report: { name: 'EsgReport', path: 'Report' }
  },
  video: {
    index: 'Video',
    tuesday: {
      path: 'Tuesday',
      name: 'VideoTuesday'
    },
    investmentStrategy: {
      path: 'Strategy',
      name: 'VideoInvestmentStrategy'
    }
  },
  faq: {
    index: 'Faq',
    list: { name: 'FaqList', path: 'List' },
    transactionProcess: { name: 'FaqTransactionProcess', path: 'TransactionProcess' },
    feeRate: { name: 'faqFeeRate', path: 'FeeRate' },
    transferAccount: { name: 'faqTransferAccount', path: 'TransferAccount' },
    etfMail: { name: 'faqEtfMail', path: 'EtfMail' },
    etfDividend: { name: 'faqEtfDividend', path: 'EtfDividend' },
    download: { name: 'FaqDownload', path: 'Download' },
    openForm: { name: 'FaqOpenForm', path: 'OpenForm' },
    transactionForm: { name: 'FaqTransactionForm', path: 'TransactionForm' },
    otherForm: { name: 'FaqOtherForm', path: 'OtherForm' },
    salesLocation: { name: 'FaqSalesLocation', path: 'SalesLocation' },
    promotions: { name: 'FaqPromotions', path: 'Promotions' },
    promotionsDetail: { name: 'FaqPromotionsDetail', path: 'Detail' },
    contact: { name: 'FaqContact', path: 'Contact' },
    branch: { name: 'FaqBranch', path: 'Branch' }
  }
}
