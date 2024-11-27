<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask modal" @click="$emit( 'close' )">
      <div class="bg-white modal-container" @click.stop>
        <div class="modal-header !px-0">
          <div class="flex">
            <div class="flex-1 flex pl-6 h-[60px] text-xl items-center bg-main text-white">
              <slot name="header" />
            </div>
            <img
              @click="$emit( 'close' )"
              class="w-[60px] cursor-pointer"
              src="@/assets/images/closebtn2.png"
              alt=""
            />
          </div>
        </div>

        <div class="modal-body lg:!px-8">
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
  max-width: 90vw;
  padding: 0;
  border-radius: 0;
  @media (min-width: 1024px) {
    max-width: 730px;
  }
}

</style>
