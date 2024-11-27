<template>
  <div class="flex items-center gap-8">
    <EventTab
      :name="tabs[0].label"
      :is-active="current === tabs[0].name"
      :link="ROUTE_NAME.news.index"
      @tab-click="tabClick( tabs[0].name )"
    >
      <img v-show="isCurrentNews" class="mr-3 w-7" src="@/assets/images/icon/speaker-s.png" />
      <img v-show="isCurrentSpeech" class="mr-3 w-7" src="@/assets/images/icon/speaker-g.png" />
    </EventTab>
    <EventTab
      :name="tabs[1].label"
      :is-active="current === tabs[1].name"
      :link="ROUTE_NAME.speech.index"
      @tab-click="tabClick( tabs[1].name )"
    >
      <img v-show="isCurrentNews" class="mr-3 w-7" src="@/assets/images/icon/addresser-s.png" />
      <img v-show="isCurrentSpeech" class="mr-3 w-7" src="@/assets/images/icon/addresser-g.png" />
    </EventTab>
  </div>
</template>
<script setup>
import { EVENT_TABS } from '@/constants/home'

const ROUTE_NAME = inject('ROUTE_NAME')
const props = defineProps({
  current: String,
  tabs: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['tab-click'])

const isCurrentNews = computed(() => props.current === EVENT_TABS.news)
const isCurrentSpeech = computed(() => props.current === EVENT_TABS.speech)

const tabClick = name => {
  emit('tab-click', name)
}
</script>
