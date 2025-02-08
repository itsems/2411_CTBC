<template>
  <div v-if="!isNAVBoard">
    <div class="relative" :class="{'!fixed': systemStatus.isLoading}">
      <!-- <TheHeader /> -->
      <ETFHeader v-if="isCurrentETFPages" />
      <AccessibilityHeader v-else-if="isCurrentAccessibilityPages" />
      <TheHeader v-else />

      <!-- 公告 -->
      <div v-if="isCurrentPageHome && isShowAnnounce" class="relative w-full z-[3] top-[66px] lg:top-[75px]">
        <PinAnnounce>
          <template #default>
            <p v-for="item in lstAnnounce" :key="item.SNO" class="mb-1 text-sm font-medium text-[#017f7b] leading-[1.8]">
              {{ item.Title }}
              <span class="font-normal text-font-color" v-html="item.Content"></span>
            </p>
          </template>
        </PinAnnounce>
      </div>
      <main class="relative main bg-gray-base">
        <RouterView />
      </main>
      <TheAccessibilityFooter v-if="isCurrentAccessibilityPages" />
      <TheFooter v-else />
    </div>
    <RouterLink v-if="isCurrentETFPages" :to="{name: ROUTE_NAME.etf.index}">
      <img
        width="51"
        src="@/assets/images/icon/home.png"
        class="fixed z-10 cursor-pointer right-5 bottom-40 lg:bottom-20"
        alt=""
        @click="goTop" />
    </RouterLink>
  </div>
  <div v-else>
    <RouterView />
  </div>
  <Loading v-if="systemStatus.isLoading" />
</template>

<script setup>
import {computed} from 'vue'
// import axios from 'axios'

const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()
const route = useRoute()
const system = useSystemStore()
const systemStatus = useStatusStore()
/*
use loading:
systemStatus.setIsLoading(true) / systemStatus.setIsLoading(false)
*/
const currenPath = ref()
watchEffect(() => (currenPath.value = route.path))
const isNAVBoard = computed(() => currenPath.value.startsWith('/NAVBoard'))
const isCurrentETFPages = computed(() => currenPath.value.startsWith('/Etf'))
const isCurrentPageHome = computed(() => router.currentRoute.value.name === ROUTE_NAME.home.name || router.currentRoute.value.name === ROUTE_NAME.etf.index)
const isCurrentAccessibilityPages = computed(() => currenPath.value.startsWith('/Accessibility'))

let resizeTimeout
const handleResize = () => {
  system.setCurrentResolution(window.innerWidth)
}
handleResize()

const debounceResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    handleResize()
  }, 300)
}

//Hook
// onBeforeMount(async () => {
//   tokenStore.setToken('www.ctbcinvestments.com')
//   await getToken()
// })

onMounted(() => {
  window.addEventListener('resize', debounceResize)
//   getAnnounceWebTop()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', debounceResize)
})

//Lib
// const {$_get, $_post, $_showErr, $_showMsg} = useAxios()

//Page Data
// const tokenStore = useTokenStore()
// const token = ref('')
const lstAnnounce = ref([])
const isShowAnnounce = computed(() => lstAnnounce.value.length > 0)

//Page Method
// async function getToken() {
//   const param = {}
//   await $_post('home/AuthToken', param)
//     .then(result => {
//       token.Value = result.token
//       tokenStore.setToken(result.token)
//     })
//     .catch(error => {
//       $_showErr(error)
//     })
// }
//API home/GetAnnounce
// function getAnnounceWebTop() {
//   $_post('home/Announce', {}, {KeyList: 'WEB-TOP'})
//     .then(result => {
//       lstAnnounce.value = result.Data
//     })
//     .catch(error => {
//       $_showErr(error)
//     })
// }
</script>
