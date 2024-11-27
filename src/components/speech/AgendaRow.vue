<template>
  <div class="agenda-row">
    <div
      class="time-col relative text-white rounded-3xl flex justify-center items-center py-3 mb-4 lg:w-[200px] lg:mb-0 lg:mr-16"
    >
      {{ info.time }}
    </div>
    <div
      class="bg-white border border-solid rounded-3xl flex justify-center items-center py-3 border-[#dedede] lg:w-[786px] lg:justify-start"
    >
      <div class="px-5 text-center lg:pl-10">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  info: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
@mixin triangle {
  @apply w-0 h-0 border-solid absolute;
}
.agenda-row {
  @apply mb-4 lg:flex;
  &:nth-child(even) .time-col {
    @apply bg-[#b9b9b9];
    &:after {
      border-color: #b9b9b9 transparent transparent transparent;
    }
    @media (min-width: 1024px) {
      &:after {
        border-color: transparent transparent transparent #b9b9b9;
      }
    }
  }
  &:nth-child(odd) .time-col {
    @apply bg-[#3eb7b8];
    &:after {
      border-color: #3eb7b8 transparent transparent transparent;
    }
    @media (min-width: 1024px) {
      &:after {
        border-color: transparent transparent transparent #3eb7b8;
      }
    }
  }
}
.time-col {
  &:after {
    content: '';
    border-width: 10px 6px 0 6px;
    @include triangle;
    @apply left-1/2 -bottom-[10px] -translate-x-[50%];
    @media (min-width: 1024px) {
      left: auto;
      right: -8px;
      top: 50%;
      transform: translateY(-50%);
      border-width: 7px 0 7px 10px;
    }
  }
}
</style>
