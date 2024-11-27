<template>
  <div class="bg-[#d5e9ed]">
    <Banner title="永續責任" :mobile-image="mobileImageBn" :desktop-image="desktopImageBn" />
    <div class="page-layout">
      <Breadcrumb :list="breadCrumbList" />
      <div class="lg:grid lg:grid-cols-2 lg:gap-7">
        
        <RouterLink :to="{ name: ROUTE_NAME.esg.environment.name }">
          <ImageLinkBlock
            class="mb-5 lg:mb-0"
            title="企業永續"
            :mobile-image="mobileImage1"
            :desktop-image="desktopImage1" 
          />
        </RouterLink>
        <RouterLink :to="{ name: ROUTE_NAME.esg.fund.name }">
          <ImageLinkBlock
            class="mb-5 lg:mb-0"
            title="ESG基金"
            :mobile-image="mobileImage2"
            :desktop-image="desktopImage2"
          />
        </RouterLink>
        <RouterLink :to="{ name: ROUTE_NAME.esg.stewardship.name }">
          <ImageLinkBlock
            class="mb-5 lg:mb-0"
            title="盡職治理揭露"
            :mobile-image="mobileImage3"
            :desktop-image="desktopImage3"
          />
        </RouterLink>
        <RouterLink :to="{ name: ROUTE_NAME.esg.report.name }">
          <ImageLinkBlock
            class="mb-5 lg:mb-0"
            title="永續報告"
            :mobile-image="mobileImage4"
            :desktop-image="desktopImage4"
          />
        </RouterLink>
      </div>

    </div>

  </div>
</template>
<script setup>
import mobileImageBn from '@/assets/images/esg/0-bn-m.png'
import desktopImageBn from '@/assets/images/esg/0-bn-d.jpg'

import mobileImage1 from '@/assets/images/esg/0-1-m.png'
import desktopImage1 from '@/assets/images/esg/0-1-d.png'
import mobileImage2 from '@/assets/images/esg/0-2-m.png'
import desktopImage2 from '@/assets/images/esg/0-2-d.png'
import mobileImage3 from '@/assets/images/esg/0-3-m.png'
import desktopImage3 from '@/assets/images/esg/0-3-d.png'
import mobileImage4 from '@/assets/images/esg/0-4-m.png'
import desktopImage4 from '@/assets/images/esg/0-4-d.png'

const ROUTE_NAME = inject('ROUTE_NAME')
const breadCrumbList = [
  { name: '首頁', routeName: ROUTE_NAME.home.name },
  { name: '永續責任', routeName: undefined }
]
</script>
