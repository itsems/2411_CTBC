<template>
  <nav class="sticky z-10 header">
    <div class="hidden header-d lg:block">
      <div class="container relative mx-auto">
        <div class="flex items-center justify-between w-full">
          <LogoLink class="logo" />
          <div class="flex items-center">
            <ul class="ml-auto header-list">
              <li>
                <span class="label">關於我們</span>
                <ul class="sub-menu">
                  <li
                    v-for="page in aboutSubPages"
                    :key="page.name"
                    @click="navigate(page)"
                  >
                    <span class="label">{{ page.label }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <span class="label">基金資訊</span>
                <ul class="sub-menu">
                  <li
                    v-for="page in fundSubPages"
                    :key="page.name"
                    @click="navigate(page)"
                  >
                    <span class="label">{{ page.label }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <span class="label">
                  <RouterLink :to="{ name: ROUTE_NAME.etf.index }" target="_blank">
                    ETF專區
                  </RouterLink>
                </span>
                <ul class="sub-menu">
                  <li
                    v-for="page in etfSubPages"
                    :key="page.name"
                    @click="navigate(page, true)"
                  >
                    <span class="label">{{ page.label }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <span class="label">投資觀點</span>
                <ul class="sub-menu">
                  <li
                    v-for="page in focusSubPages"
                    :key="page.name"
                    @click="navigate(page)"
                  >
                    <span class="label">{{ page.label }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <span class="label" @click="navigate(esgIndex)">永續責任</span>
                <ul class="sub-menu">
                  <li
                    v-for="page in esgSubPages"
                    :key="page.name"
                    @click="navigate(page)"
                  >
                    <span class="label">{{ page.label }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <span class="label">客服中心</span>
                <ul class="sub-menu">
                  <li
                    v-for="page in faqSubPages"
                    :key="page.name"
                    @click="navigate(page)"
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
      <LogoLink class="logo" />
      <TheHamburger @click="toggleMenu" />
    </div>
  </nav>

  <HamHeader :is-visible="shouldMenuShow" @page-click="toggleMenu" >
    <MobileHeaderListItem title="關於我們" :sub-pages="aboutSubPages" @page-click="toggleMenu" />
    <MobileHeaderListItem title="基金資訊" :sub-pages="fundSubPages" @page-click="toggleMenu" />
    <MobileHeaderListItem
      title="ETF專區"
      is-new-tab
      :sub-pages="etfSubPages"
      @page-click="toggleMenu" />
    <MobileHeaderListItem title="投資觀點" :sub-pages="focusSubPages" @page-click="toggleMenu" />
    <MobileHeaderListItem title="永續責任" :sub-pages="esgSubPages" @page-click="toggleMenu" />
    <MobileHeaderListItem title="客服中心" :sub-pages="faqSubPages" @page-click="toggleMenu" />
  </HamHeader>

</template>
<script setup>
import { 
  aboutSubPages,
  fundSubPages,
  etfSubPages,
  focusSubPages,
  esgSubPages,
  faqSubPages,
} from '@/constants/header-links'

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

const shouldMenuShow = ref(false)
const toggleMenu = () => {
  shouldMenuShow.value = !shouldMenuShow.value
  document.body.classList.toggle('overflow-hidden')
}

const esgIndex = {
  name: ROUTE_NAME.esg.index
}

// navigate
const navigate = (page, shouldOpenNewTab = false) => {
  if (page.name) {
    if (shouldOpenNewTab || page.shouldOpenNewTab) {
      const { href } = router.resolve({ name: page.name })
      window.open(href, '_blank')
    } else {
      router.push({ name: page.name })
    }
  }
  if (page.link) {
    window.open(page.link)
  }
}
</script>
