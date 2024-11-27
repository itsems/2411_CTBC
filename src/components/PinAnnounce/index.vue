<template>
  <div class="slide-announce lg:relative">
    <Transition>
      <div v-if="!(isScrolled && system.isCurrentMobile)" class="container fixed right-0 mx-auto button-wrap lg:relative " >
        <PinAnnounceButton @click="handleAnnounceToggle" :isShown="isShown"/>
      </div>
    </Transition>
    <div v-if="isShown" class="relative py-2 pl-4 pr-2 bg-white shadow-md announce text-font-color">
      <img
        v-if="system.isCurrentMobile"
        width="18"
        class="absolute top-3 right-5 z-[1]"
        src="@/assets/images/icon/close.png"
        alt=""
        @click="handleAnnounceToggle"
      />
      <div class="lg:max-w-[1110px] relative mx-auto announce-content customized-scrollbar max-h-[120px] overflow-y-auto text-sm border-l border-white border-solid pr-7 lg:pr-[150px]">
        <slot />
      </div>
    </div>
  </div>

</template>
<script setup>
import PinAnnounceButton from './PinAnnounceButton.vue'

const systemStatus = useStatusStore()
const system = useSystemStore()

const props = defineProps({
  announces: {
    type: Array,
    default: () => [],
  },
  isScrolled: Boolean
})

const hasNotSetPinAnnounceVisibility = computed(() => systemStatus.isPinAnnounceShown === undefined)

const isShown = computed(() => {
  if (hasNotSetPinAnnounceVisibility.value) {
    return props.announces.length > 0
  } else {
    return systemStatus.isPinAnnounceShown
  }
})

const handleAnnounceToggle = () => {
  systemStatus.togglePinAnnounceVisibility()
}


onMounted(() => {
  if (hasNotSetPinAnnounceVisibility.value && props.announces.length > 0) {
    systemStatus.setIsPinAnnounceShown(true)
  } 
  
})

let scrollTimeout
const isScrolled = ref(false)
const handleScroll = () => {
  if(window.pageYOffset <= 0) {
    isScrolled.value = false
    return
  }
  isScrolled.value = true
}
const debounceScroll = () => {
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    handleScroll()
  }, 300)
}
onMounted(() => {
  window.addEventListener('scroll', debounceScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', debounceScroll)
})

</script>

<style lang="scss" scoped>
.slide-announce {
  .button-wrap {
    z-index: 1;
    @media (max-width: 1024px) {
      width: 42px;
    }
  }
}
.announce:before {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 30px;
  background: linear-gradient(180deg, #f5f6fa00, #f5f6fa);
  pointer-events: none;
}
</style>