import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', () => {
  const currentResolution = ref()
  const isCurrentMobile = computed(() => currentResolution.value <= 1024)
  const isCurrentDesktop = computed(() => currentResolution.value > 1024)
  const setCurrentResolution = value => {
    currentResolution.value = value
  }
  
  return { 
    currentResolution,
    isCurrentMobile, isCurrentDesktop,
    setCurrentResolution
  }
})
