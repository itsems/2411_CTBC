<template>
  <div class="relative flex justify-start gap-2 mx-auto">
    <DialogTab
      :isActive="isCurrentTuesday"
      name="週二 Fund 愛講"
      tabClass="lg:w-[302px]"
      @click="handleTabClick( VIDEO_TABS.tuesday )"
    >
      <img
        v-show="isCurrentTuesday"
        class="w-5 mr-3 lg:w-10"
        src="@/assets/images/icon/ppl-dialog-w.png"
      />
      <img
        v-show="!isCurrentTuesday"
        class="w-5 mr-3 lg:w-10"
        src="@/assets/images/icon/ppl-dialog-s.png"
      />
    </DialogTab>
    <DialogTab
      :isActive="isCurrentStrategy"
      name="投資攻略"
      tabClass="lg:w-[302px]"
      @click="handleTabClick( VIDEO_TABS.strategy )"
    >
      <img v-show="isCurrentStrategy" class="w-5 mr-3 lg:w-10" src="@/assets/images/icon/target-w.png" />
      <img
        v-show="!isCurrentStrategy"
        class="w-5 mr-3 lg:w-10"
        src="@/assets/images/icon/target-s.png"
      />
    </DialogTab>
  </div>
</template>
<script setup>
import { VIDEO_TABS } from '@/constants/home'

const emit = defineEmits(['tab-click'])

const props = defineProps({
  currentTab: {
    type: String,
    default: undefined
  }
})
const handleTabClick = tab => {
  emit('tab-click', tab)
}
const isCurrentTuesday = computed(() => props.currentTab === VIDEO_TABS.tuesday)
const isCurrentStrategy = computed(() => props.currentTab === VIDEO_TABS.strategy)
</script>
