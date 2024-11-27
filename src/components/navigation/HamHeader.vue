<template>
  <div @click="toggleMenu" class="z-[11] opacity-0 invisible fixed top-0 bottom-0 left-0 right-0 bg-black/50 transitions" :class="{ 'opacity-100 !visible' : isVisible }"></div>
  <div class="ham-content" :class="{ 'active': isVisible }">
    <div class="bg-[#017f7b] h-[66px] w-full flex gap-2 items-center justify-center relative">
      <a
        href="https://etrade.ctbcinvestments.com.tw/OpenOnline/"
        target="_blank"
      >
        <RoundButton
          label="線上開戶"
          light
          small
          text
          class="!px-3 !py-1"
        />
      </a>
      <a
        href="https://etrade.ctbcinvestments.com.tw/OpenOnline/"
        target="_blank"
      >
        <RoundButton
          label="線上交易"
          light
          small
          text
          class="!px-3 !py-1"
        />
      </a>
      <TheHamburger class="absolute right-4 top-5" @click="toggleMenu" :class="{ active: isVisible }" />
    </div>
    <div class="h-full pt-4 pr-2">
      <div class="h-[90%] pr-2 overflow-y-scroll customized-scrollbar">
        <div v-if="shouldShowSearchInput" class="px-4 pt-2 mb-2">
          <inputButtonGroup
            placeholder="搜尋基金名稱 / 證券代碼"
            button-text="送出"
          />
        </div>
        <div class="mb-4">
          <slot />
        </div>

        <div class="px-4 mb-8">
          <inputButtonGroup
            placeholder="輸入Email訂閱電子報"
            button-text="訂閱"
          />
        </div>

        <ReferenceLinks class="mb-6" />
        <div class="flex justify-center gap-3">
          <RoundButton
            label="中文"
            text
            small
            class="!px-4 !py-0.5" />
          <RoundButton
            label="EN"
            text
            small
            class="!px-4 !py-0.5" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  isVisible: Boolean,
  shouldShowSearchInput: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['page-click'])

const toggleMenu = () => {
  emit('page-click')
}
</script>
