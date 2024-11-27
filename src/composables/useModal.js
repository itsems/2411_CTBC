import { ref } from 'vue'

export function useModal() {
  const shouldModalShow = ref(false)
  const closeModal = () => {
    shouldModalShow.value = false
  }
  const openModal = () => {
    shouldModalShow.value = true
  }

  return { 
    shouldModalShow,
    closeModal,
    openModal
   }
}