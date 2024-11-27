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
      v-for="pageNumber in totalPage" 
      :key="pageNumber"
      :class="{ active: currentPage === pageNumber }"
      @click="handleNumberClick( pageNumber )"
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
})

const emit = defineEmits(['prev', 'next', 'page'])

// totalPage
const totalPage = parseInt(props.totalItems / props.perPage, 10)

// Switch page emits
const handlePrevClick = () => {
  emit('prev')
}
const handleNextClick = () => {
  emit('next')
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