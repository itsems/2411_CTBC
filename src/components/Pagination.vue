<template>
  <ul class="flex items-center justify-center text-sm select-none pagination">
    <li class="pagination-element">
      <img
        @click="handlePrevClick"
        class="cursor-pointer pagination-arrow"
        src="@/assets/images/icon/arrow-left-grey.png"
        alt="">
    </li>
    <li 
      v-for="pageNumber in visiblePageNumbers" 
      :key="pageNumber"
      :class="{ active: currentPage === pageNumber }"
      @click="handleNumberClick(pageNumber)"
      class="p-1 cursor-pointer pagination-element pagination-number"
    >
      {{ pageNumber }}
    </li>
    <li class="pagination-element">
      <img
        @click="handleNextClick"
        class="cursor-pointer pagination-arrow"
        src="@/assets/images/icon/arrow-right-grey.png"
        alt="">
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  totalItems: {
    type: Number,
    default: undefined,
  },
  perPage: {
    type: Number,
    default: 10,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  maxDisplayPageCount: {
    type: Number,
    default: 9,
  }
})

const emit = defineEmits(['prev', 'next', 'page'])

const totalPage = computed(() => Math.ceil(props.totalItems / props.perPage))
const visiblePageNumbers = computed(() => {
  const total = totalPage.value
  const maxDisplay = props.maxDisplayPageCount
  const current = props.currentPage

  let start = Math.max(1, current - Math.floor(maxDisplay / 2))
  let end = start + maxDisplay - 1

  if (end > total) {
    end = total
    start = Math.max(1, end - maxDisplay + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})


// Switch page emits
const handlePrevClick = () => {
  if (props.currentPage !== 1) {
    emit('prev')
  }
}
const handleNextClick = () => {
  if (props.currentPage !== totalPage.value) {
    emit('next')
  }
}

// Paginate number
const handleNumberClick = pageNumber => {
  emit('page', pageNumber)
}

</script>
<style lang="scss" scoped>
.pagination {
  color: #999;
}
.pagination-arrow {
  width: 6px;
}
.pagination-element {
  margin: 0 5px;
  border-radius: 50%;
  min-width: 27px;
  height: 27px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  &.active,
  &.pagination-number:hover {
    background-color: $mainGreen;
    color: #fff;
  }
}
</style>