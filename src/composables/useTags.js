export function useTags() {
  
  const selectTag = (type, label) => {
    const selectedItems = type.tags.filter(item => item.selected)
    const idx = type.tags.findIndex(tag => tag.label === label)
    if (selectedItems.length === 1 && type.tags[idx].selected) {
      return
    }
    type.tags[idx].selected = !type.tags[idx].selected
  }

  return { 
    selectTag,
   }
}