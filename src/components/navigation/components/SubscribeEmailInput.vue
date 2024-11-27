<template>
  <div class="flex">
    <input
      type="email"
      class="rounded-l-3xl w-0 rounded-r-none inputs text-[#666] flex-grow"
      :placeholder="placeholder"
      :class="inputClass"
    />
    <div
      @click="handleSubscribeButtonClick"
      class="flex items-center justify-center px-4 text-white border border-solid cursor-pointer select-none rounded-r-3xl text-md hover:bg-darkGreen hover:border-main transitions border-main shrink-0 bg-main"
      :class="btnClass"
    >
      訂閱
    </div>
  </div>
  <Teleport to="body">
    <ModalWithPaperPlane :show="shouldModalShow" header="訂閱成功" @close="shouldModalShow = false">
      <template #body>
        <div class="text-center">
          <p class="mb-1">感謝您的支持！</p>
        </div>
      </template>
    </ModalWithPaperPlane>
  </Teleport>
</template>
<script setup>
defineProps({
  placeholder: {
    type: String,
    default: undefined
  },
  inputClass: {
    type: String,
    default: undefined
  },
  btnClass: {
    type: String,
    default: undefined
  }
})
const handleSubscribeButtonClick = () => {
  openModal()
}

// 燈箱
const { shouldModalShow, openModal } = useModal()
</script>
