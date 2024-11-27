<template>
  <GradientBackground :mobile-position="275" :desktop-position="275" />
  <!-- 優惠活動 -->
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="優惠活動" :size="25" :imagePath="PageTitleIcon" />

    <div class="grid gap-5 mb-3 lg:grid-cols-3 lg:gap-7">
      <PromoCard
        v-for="post in fakeData"
        :key="post.id"
        @redirect="handleRedirect( post )"
        :post="post"
      />
    </div>

    <!-- Pagination -->
    <Pagination
      class="my-14"
      :totalItems="65"
      @prev="navigate"
      @next="navigate"
      @page="handlePageClick"
    />
  </div>
</template>
<script setup>
import PageTitleIcon from '@/assets/images/icon/speaker-s.png'

const router = useRouter()
const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '客服中心', routeName: undefined },
  { name: '優惠活動', routeName: undefined }
]

const fakeData = ref([
  {
    id: 0,
    title: 'gogoro輕鬆購、暢快騎',
    content: '【分期0利率】滿額登錄享最高1,250元刷卡金回饋，滿額登錄享最高1,250元刷卡金回饋',
    imageUrl: 'https://i.imgur.com/A6GhScX.png'
  },
  {
    id: 1,
    title: '金力high優惠',
    content: '金力high優惠專案，每次扣款金額享申購手續費3~4折優惠',
    imageUrl: 'https://i.imgur.com/WNjnvLf.png'
  },
  {
    id: 2,
    title: '全新戶優惠',
    content: '首次申購，當日信託 (申購) 手續費3.8折',
    imageUrl: 'https://i.imgur.com/kqzyZr6.png'
  },
  {
    id: 3,
    title: '全新戶優惠',
    content: '首次申購，當日信託 (申購) 手續費3.8折',
    imageUrl: 'https://i.imgur.com/kqzyZr6.png'
  },
  {
    id: 4,
    title: '金力high優惠',
    content: '金力high優惠專案，每次扣款金額享申購手續費3~4折優惠',
    imageUrl: 'https://i.imgur.com/WNjnvLf.png'
  },
  {
    id: 5,
    title: 'gogoro輕鬆購、暢快騎',
    content: '【分期0利率】滿額登錄享最高1,250元刷卡金回饋，滿額登錄享最高1,250元刷卡金回饋',
    imageUrl: 'https://i.imgur.com/A6GhScX.png'
  },
  {
    id: 6,
    title: '金力high優惠',
    content: '金力high優惠專案，每次扣款金額享申購手續費3~4折優惠',
    imageUrl: 'https://i.imgur.com/WNjnvLf.png'
  },
  {
    id: 7,
    title: 'gogoro輕鬆購、暢快騎',
    content: '【分期0利率】滿額登錄享最高1,250元刷卡金回饋，滿額登錄享最高1,250元刷卡金回饋',
    imageUrl: 'https://i.imgur.com/A6GhScX.png'
  },
  {
    id: 8,
    title: '全新戶優惠',
    content: '首次申購，當日信託 (申購) 手續費3.8折',
    imageUrl: 'https://i.imgur.com/kqzyZr6.png'
  }
])

const handleRedirect = post => {
  router.push({ name: ROUTE_NAME.faq.promotionsDetail.name, params: { id: post.id } })
}

// Pagination
const navigate = () => {}
const handlePageClick = number => {
  console.log(number)
}
</script>
