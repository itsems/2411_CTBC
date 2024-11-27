<template>
  <div class="gap-3 lg:flex lg:items-center lg:bg-white lg:rounded-3xl lg:pl-4">
    <div class="mb-4 lg:mb-0">
      <NewsRangeCalendar :range="range" @date-update="handleCalendarUpdate" />
    </div>
    <div class="flex flex-grow">
      <input
        type="email"
        class="inputs rounded-sm text-[#666] rounded-l-3xl lg:rounded-none flex-grow py-3"
        placeholder="輸入關鍵字 / 基金名稱或代號"
      />
      <div class="flex items-center justify-center px-4 text-white border border-solid cursor-pointer select-none lg:px-7 rounded-r-3xl text-md hover:bg-darkGreen hover:border-main transitions border-main shrink-0 bg-main lg:text-base">
        搜尋
      </div>
    </div>
  </div>
</template>
<script setup>
// Calendar
const range = ref({
  start: new Date(),
  end: new Date().setMonth(new Date().getMonth() - 1)
})
const selectedDate = ref()
const handleCalendarUpdate = value => {
  selectedDate.value = value
}

</script>
