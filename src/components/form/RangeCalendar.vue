<template>
  <VDatePicker
    v-model.range="date"
    mode="date"
    color="teal"
    :update-on-input="false"
    :masks="masks"
    :popover="popover"
    @update:modelValue="handleUpdate"
  >
    <template #default="{ togglePopover, inputValue, inputEvents }">
      <div class="flex items-center gap-2 lg:gap-3">
        <div class="flex items-center justify-between gap-2 px-2 py-2 pl-3 bg-white shadow-xl rounded-3xl lg:gap-4 lg:px-5 lg:py-2">
          <img class="self-center w-4 lg:w-6" src="@/assets/images/icon/calendar.png" alt="" />
          <input
            v-on="inputEvents.start"
            :value="inputValue.start"
            class="w-full font-medium text-md"
            :class="inputClass"
            type="text"
            @click="togglePopover"
          />
        </div>

        <span> ~ </span>
        <div class="flex items-center justify-between gap-2 px-2 py-2 pl-3 bg-white shadow-xl rounded-3xl lg:gap-4 lg:px-5 lg:py-2">
          <img class="self-center w-4 lg:w-6" src="@/assets/images/icon/calendar.png" alt="" />
          <input
            v-on="inputEvents.end"
            :value="inputValue.end"
            class="w-full font-medium text-md"
            :class="inputClass"
            type="text"
            @click="togglePopover"
          />
        </div>
      </div>
    </template>
  </VDatePicker>
</template>
<script setup>
const props = defineProps({
  range: {
    type: Object,
    required: true
  },
  inputClass: String
})
const emit = defineEmits(['date-update'])

// Configurations
const popover = ref({
  visibility: 'click',
  placement: 'bottom'
})
const masks = ref({
  modelValue: 'YYYY/MM/DD'
})

const date = ref({
  start: props.range.start,
  end: props.range.end
})

const handleUpdate = () => {
  emit('date-update', date.value)
}

watch(
  () => props.range,
  newValue => {
    date.value = newValue
  },
  { deep: true }
)
</script>
