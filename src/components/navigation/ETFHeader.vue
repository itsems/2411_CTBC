<template>
  <nav class="header">
    <div class="hidden header-d lg:block">
      <div class="container relative mx-auto">
        <div class="flex items-center justify-between w-full">
          <LogoLink class="logo" />
          
          <div class="flex items-center">
            <ul class="ml-auto header-list etf-header">
              <li
                v-for="page in etfSubPages"
                :key="page.name"
                @click="navigate(page)"
              >
                <span class="label">{{ page.label }}</span>
                <ul v-if="page.subPages" class="sub-menu">
                  <li
                    v-for="page in page.subPages"
                    :key="page.name"
                    @click.stop="navigate(page)"
                  >
                    <span class="label">{{ page.label }}</span>
                  </li>
                </ul>
              </li>
            </ul>
            <LanguageSelect />
            <ReferenceLinks />
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between header-m lg:hidden">
      <LogoLink class="logo" :routeName="ROUTE_NAME.etf.index" />
      <TheHamburger @click="toggleMenu" :class="{ active: shouldMenuShow }" />
    </div>
  </nav>

  <HamHeader :is-visible="shouldMenuShow" :should-show-search-input="false" @page-click="toggleMenu" >
    <MobileHeaderListItem title="ETF總覽" :to="ROUTE_NAME.etf.list.name" @click="toggleMenu"  />
    <MobileHeaderListItem title="即時預估淨值" :to="ROUTE_NAME.etf.realTime.name" @click="toggleMenu" />
    <MobileHeaderListItem title="配息資訊" :sub-pages="etfDividendSubPages" @page-click="toggleMenu" />
    <MobileHeaderListItem title="申購買回清單" :to="ROUTE_NAME.etf.buyback.name" @click="toggleMenu" />
    <MobileHeaderListItem title="追蹤差距" :to="ROUTE_NAME.etf.track.name" @click="toggleMenu" />
    <MobileHeaderListItem title="交易資訊" :sub-pages="etfTransactionSubPages" @page-click="toggleMenu" />
    <MobileHeaderListItem title="收益平準金專區" :to="ROUTE_NAME.etf.income.name" @click="toggleMenu" />
  </HamHeader>

</template>
<script setup>
import { etfSubPages } from '@/constants/header-links'

const etfTransactionSubPages = etfSubPages[5].subPages
const etfDividendSubPages = etfSubPages[2].subPages

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

const shouldMenuShow = ref(false)
const toggleMenu = () => {
  shouldMenuShow.value = !shouldMenuShow.value
  document.body.classList.toggle('overflow-hidden')
}

// navigate
const navigate = page => {
  if (page.name) {
    router.push({ name: page.name })
  }
  if (page.link) {
    window.open(page.link)
  }
}
</script>
