<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask modal" @click="$emit( 'close' )">
      <div class="modal-container" @click.stop>
        <img
          @click="$emit( 'close' )"
          class="closebtn"
          src="@/assets/images/closebtn.png"
          alt="" />
        <div class="!px-0 modal-header">
          <img class="block mx-auto mb-3 w-14" src="@/assets/images/icon/flight-s.png" alt="" />
          <p class="text-2xl font-bold text-[#3eb7b8] text-center mb-3">{{ header }}</p>
          <img class="lg:w-[364px]" src="@/assets/images/line-bg-h.png" alt="" />
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
const systemStore = useSystemStore()

const props = defineProps({
  show: Boolean,
  header: {
    type: String,
    default: undefined
  }
})

watch(
  () => props.show,
  newValue => {
    if (newValue) {
      if (systemStore.isCurrentDesktop) {
        document.body.classList.add('modal-open')
      }
      document.body.classList.add('overflow-hidden')
    } else {
      if (systemStore.isCurrentDesktop) {
        document.body.classList.remove('modal-open')
      }
      document.body.classList.remove('overflow-hidden')
    }
  }
)
</script>

<style lang="scss" scoped>
.modal-container {
  background-color: #ebffff;
  border: 2px solid $mainGreen;
  padding: 20px 30px;
  border-radius: 8px;
}
</style>
