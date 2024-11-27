import { DURATION } from '@/constants/fund'

export function useDateRange(currentDuration, range) {
  const handleDurationSelect = duration => {
    currentDuration.value = duration
    updateRangeDate()
  }
  const updateRangeDate = () => {
    let newRange = null
    if (currentDuration.value === DURATION.oneMonth.value) {
      newRange = { start: new Date(), end: new Date().setMonth(new Date().getMonth() - 1) }
    } else if (currentDuration.value === DURATION.threeMonth.value) {
      newRange = { start: new Date(), end: new Date().setMonth(new Date().getMonth() - 3) }
    } else if (currentDuration.value === DURATION.sixMonth.value) {
      newRange = { start: new Date(), end: new Date().setMonth(new Date().getMonth() - 6) }
    } else if (currentDuration.value === DURATION.ytd.value) {
      const today = new Date()
      const currentYear = today.getFullYear()
      const start = new Date(currentYear, 0, 1)
      newRange = { start, end: new Date() }
    } else if (currentDuration.value === DURATION.oneYear.value) {
      var d = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate())
      d.setFullYear(d.getFullYear() - 1)
      newRange = { start: d, end: new Date() }
    } else if (currentDuration.value === DURATION.twoYear.value) {
      const d = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate())
      d.setFullYear(d.getFullYear() - 2)
      newRange = {start: d, end: new Date()}
    } else if (currentDuration.value === DURATION.threeYear.value) {
      const d = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate())
      d.setFullYear(d.getFullYear() - 3)
      newRange = {start: d, end: new Date()}
    } else {
      newRange = {start: new Date(), end: new Date()}
    }
    range.value = newRange
  }

  
  return { 
    handleDurationSelect,
   }
}