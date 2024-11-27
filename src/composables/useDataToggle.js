export function useDataToggle() {
  const isCollapsed = ref(true)

  const toggleData = (allData, displayedData, defaultDisplayRow = 3) => {
    const currentDisplayDataLen = displayedData.length
    if (currentDisplayDataLen === allData.length) {
      displayedData.splice(0, displayedData.length, ...allData.slice(0, defaultDisplayRow))
      isCollapsed.value = true
    } else {
      displayedData.splice(0, displayedData.length, ...allData)
      isCollapsed.value = false
    }
  }


  return { 
    toggleData,
    isCollapsed
   }
}