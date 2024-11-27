<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask modal" @click="$emit( 'close' )">
      <div class="modal-container" @click.stop :class="containerClass">
        <img
          v-if="isClosable"
          class="closebtn"
          src="@/assets/images/closebtn.png"
          alt="" 
          @click="$emit('close')"
        />
        <div v-if="slots.header || header" class="modal-header">
          <slot name="header">
            <p class="mb-4 text-2xl font-bold text-center text-darkGreen">{{ header }}</p>
          </slot>
        </div>
        <div class="modal-body" :class="bodyClass">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
const slots = useSlots()
const systemStore = useSystemStore()

const props = defineProps({
  show: Boolean,
  header: String,
  bodyClass: String,
  containerClass: String,
  isClosable: {
    type: Boolean,
    default: true
  }
})

onMounted(() => {
  if (props.show) {
    document.body.classList.add('overflow-hidden')
    if (systemStore.isCurrentDesktop) {
      document.body.classList.add('modal-open')
    }
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
