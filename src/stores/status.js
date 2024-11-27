import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', () => {
  const isPinAnnounceShown = ref(true)
  const setIsPinAnnounceShown = value => {
    isPinAnnounceShown.value = value
  }
  const togglePinAnnounceVisibility = () => {
    isPinAnnounceShown.value = !isPinAnnounceShown.value
  }

  return {
    isPinAnnounceShown,
    setIsPinAnnounceShown,
    togglePinAnnounceVisibility
  }
})
