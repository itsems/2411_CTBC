<template>
  <div @click="openModal" class="p-3 bg-white cursor-pointer group rounded-xl lg:p-3 text-font-color hover:text-darkGreen">
    
    <div class="relative">
      <img class="block w-full mx-auto" :src="videoThumbnail" alt="" />
      <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 transitions group-hover:opacity-100 mask bg-black/50">
        <img class="w-8" src="@/assets/images/icon/video-play.png" alt="" />
      </div>
    </div>
    <div class="pt-2 pb-3">
      <p class="mt-1 text-lg cursor-pointer video-title">
        {{ video.title }}
      </p>
    </div>
    
  </div>
  <Teleport to="body">
    <Modal
      :show="shouldModalShow"
      containerClass="lg:w-[920px] lg:!max-w-[920px] !p-0"
      bodyClass="!p-0 !m-0"
      @close="closeModal"
    >
      <template #body>
        <div class="aspect-video">
          <iframe
            class="w-full h-full"
            :src="`https://www.youtube.com/embed/${video.id}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
      </template>
    </Modal>
  </Teleport>
</template>
<script setup>
const props = defineProps({
  video: Object
})

const videoThumbnail = computed(() => `https://img.youtube.com/vi/${props.video.id}/mqdefault.jpg`)

// 燈箱
const { shouldModalShow, closeModal, openModal } = useModal()

</script>
<style lang="scss" scoped>
.video-title {
  display: -webkit-box;
  max-width: 100%;
  height: 18px * 1.5 * 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
}
</style>
