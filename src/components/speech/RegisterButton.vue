<template>
  <div
    :style="{ 'background-color': bgColor }"
    :class="{ 'cursor-pointer hover:brightness-105': props.status === props.eventStatus.ongoing }"
    class="flex items-center justify-center w-full py-2 text-lg font-bold text-white cursor-default rounded-3xl"
  >
    <img
      v-if="props.status === eventStatus.ongoing"
      src="@/assets/images/icon/flight.png"
      class="w-8 mr-3"
      alt=""
    />
    <p>{{ eventStatusText }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  status: {
    type: [Number, String],
    required: true
  },
  eventStatus: {
    type: Object,
    required: true
  }
})

const eventStatusText = computed(() => {
  if (props.status === props.eventStatus.ongoing) return '活動報名中'
  else if (props.status === props.eventStatus.full) return '報名額滿'
  else return '活動已截止'
})

const bgColor = computed(() => {
  if (props.status === props.eventStatus.ongoing) return '#007c7d'
  else if (props.status === props.eventStatus.full) return '#3eb7b8'
  else return '#bcbcbc'
})
</script>
