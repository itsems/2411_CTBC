<template>
  <div class="relative">
    <div class="px-4 py-6 bg-white shadow-xl lg:px-8 rounded-xl lg:pb-10">
      <!-- content -->
      <div class="leading-6 text-justify content text-md lg:text-base">
        <template v-if="actionsBar">
          <!-- editor actions bar -->
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <img width="27" src="@/assets/images/icon/text.png" alt="" />
              <FontSizeButton
                text="小"
                :is-active="current === FONT_SIZE.small"
                @button-click="current = FONT_SIZE.small"
              />
              <FontSizeButton
                text="中"
                :is-active="current === FONT_SIZE.medium"
                @button-click="current = FONT_SIZE.medium"
              />
              <FontSizeButton
                text="大"
                :is-active="current === FONT_SIZE.big"
                @button-click="current = FONT_SIZE.big"
              />
            </div>
            <!-- share -->
            <div class="flex items-center gap-2">
              <p>分享至</p>
              <img
                width="38"
                @click="lineShare"
                class="cursor-pointer"
                src="@/assets/images/icon/line-c.png"
                alt=""
              />
              <img
                width="38"
                @click="fbShare"
                class="cursor-pointer"
                src="@/assets/images/icon/fb-c.png"
                alt=""
              />
            </div>
          </div>

          <hr class="my-5" />
        </template>
        
        <slot name="info" />
        
        <!-- title -->
        <p
          class="mb-3 font-bold tracking-wide lg:mb-2 title lg:tracking-normal text-darkGreen"
          :class="{
            'text-sm': current === FONT_SIZE.small,
            'text-2xl': current === FONT_SIZE.medium,
            'text-3xl': current === FONT_SIZE.big
          }"
        >
          <slot name="title" >{{ post.title }}</slot>
        </p>
        <div
          class="leading-7"
          :class="{
            'text-sm': current === FONT_SIZE.small,
            'text-base': current === FONT_SIZE.medium,
            'text-xl': current === FONT_SIZE.big
          }"
        >
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  actionsBar: {
    type: Boolean,
    default: true
  }
})
const FONT_SIZE = {
  small: 'small',
  medium: 'medium',
  big: 'big'
}

const current = ref(FONT_SIZE.medium)

const lineShare = () => {
  window.open(
    `http://line.naver.jp/R/msg/text/?中國信託投信%0D%0A${props.post.title}%0D%0A` + window.location
  )
}
const fbShare = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location)
}
</script>
