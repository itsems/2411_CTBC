<template>
  <GradientBackground :mobile-position="150" :desktop-position="210" />
  <div class="page-layout">
    <Breadcrumb :list="breadCrumbList" />
    <PageTitle title="法定揭露專區" :imagePath="IconLockPath" />
    <div class="content">
      <ul>
        <DataListLi
          v-for="item in fakeData"
          :item="item"
          :key="item.id"
        />
      </ul>
      <Pagination
        class="mt-10"
        :totalItems="35"
        @prev="navigate"
        @next="navigate"
        @page="handlePageClick"
      />
    </div>
  </div>
</template>
<script setup>
import IconLockPath from '@/assets/images/icon/hammer.png'
const ROUTE_NAME = inject('ROUTE_NAME')

const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '法定揭露專區', routeName: undefined }
]

// fake data
const fakeData = [
  {
    date: '2023/02/21',
    content: '111年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2022/12/28',
    content: '112年_中國信託證券投資信託股份有限公司受理檢舉管道'
  },
  {
    date: '2022/04/01',
    content: '111年_中國信託證券投資信託股份有限公司受理檢舉管道'
  },
  {
    date: '2022/02/25',
    content: '110年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2021/02/22',
    content: '109年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2020/10/20',
    content: '中國信託證券投資信託股份有限公司性騷擾防治措施、申訴及懲戒辦法'
  },
  {
    date: '2020/07/23',
    content: '中國信託證券投資信託股份有限公司性騷擾防治措施、申訴及懲戒辦法'
  },
  {
    date: '2020/03/11',
    content: '108年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2020/01/07',
    content: '中國信託證券投資信託股份有限公司受理檢舉管道'
  },
  {
    date: '2019/03/18',
    content: '107年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2023/02/21',
    content: '111年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2022/12/28',
    content: '112年_中國信託證券投資信託股份有限公司受理檢舉管道'
  },
  {
    date: '2022/04/01',
    content: '111年_中國信託證券投資信託股份有限公司受理檢舉管道'
  },
  {
    date: '2022/02/25',
    content: '110年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2021/02/22',
    content: '109年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2020/10/20',
    content: '中國信託證券投資信託股份有限公司性騷擾防治措施、申訴及懲戒辦法'
  },
  {
    date: '2020/07/23',
    content: '中國信託證券投資信託股份有限公司性騷擾防治措施、申訴及懲戒辦法'
  },
  {
    date: '2020/03/11',
    content: '108年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
  {
    date: '2020/01/07',
    content: '中國信託證券投資信託股份有限公司受理檢舉管道'
  },
  {
    date: '2019/03/18',
    content: '107年_防制洗錢及打擊資恐內部控制制度聲明書'
  },
]

// Pagination
const navigate = () => {}
const handlePageClick = number => {
  console.log(number)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/footer-pages.scss';
</style>