<template>
  <TabWithBar
    :name="HOME_RECOMMEND_TABS[0].label"
    :is-active="currentRecommendTab === HOME_RECOMMEND_TABS[0].name"
    is-icon-displayed-in-mobile
    @click="tabClick(HOME_RECOMMEND_TABS[0].name)"
  >
    <template #activeIcon>
      <img class="w-4 lg:w-6" src="@/assets/images/icon/heart-with-hand-a.png" alt="" />
    </template>
    <template #inactiveIcon>
      <img class="w-4 lg:w-6" src="@/assets/images/icon/heart-with-hand.png" alt="" />
    </template>
  </TabWithBar>
  <TabWithBar
    :name="HOME_RECOMMEND_TABS[1].label"
    :is-active="currentRecommendTab === HOME_RECOMMEND_TABS[1].name"
    @click="tabClick(HOME_RECOMMEND_TABS[1].name)"
  >
    <template #activeIcon>
      <img class="w-5 lg:w-7" src="@/assets/images/icon/earth2-a.png" alt="" />
    </template>
    <template #inactiveIcon>
      <img class="w-5 lg:w-7" src="@/assets/images/icon/earth2.png" alt="" />
    </template>
  </TabWithBar>
  <TabWithBar
    :name="HOME_RECOMMEND_TABS[2].label"
    :is-active="currentRecommendTab === HOME_RECOMMEND_TABS[2].name"
    @click="tabClick(HOME_RECOMMEND_TABS[2].name)"
  >
    <template #activeIcon>
      <img class="w-6 lg:w-8" src="@/assets/images/icon/piggy-bank-s.png" alt="" />
    </template>
    <template #inactiveIcon>
      <img class="w-6 lg:w-8" src="@/assets/images/icon/piggy-bank.png" alt="" />
    </template>
  </TabWithBar>
</template>
<script setup>
import TabWithBar from '@/components/tabs/TabWithBar.vue'
import { HOME_RECOMMEND_TABS } from '@/constants/etf'

defineProps({
  currentRecommendTab: {
    type: String,
    default: undefined,
  },
})
const emit = defineEmits(['tab-click'])

const tabClick = tabName => {
  emit('tab-click', tabName)
}



</script>
