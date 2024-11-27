<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
    <div v-for="speech in speeches" :key="speech.id" class="speech">
      <!-- ID Link -->
      <RouterLink :to="{ name: ROUTE_NAME.speech.detail.name,  params: { id: speech.id }}">
        <div class="mb-8">
          <!-- 圖片 path -->
          <div class="mb-4 rounded-md shadow-xl image-box">
            <div class="bg-center bg-no-repeat bg-cover image" :style="{ 'background-image': 'url(' + speech.imageUrl + ')' }"/>
          </div>

          <div class="flex justify-between info-box">
            <div>
              <!-- 講座名稱 -->
              <div class="mb-1 font-bold text-main pr-7">{{ speech.title }}</div>

              <!-- 講座日期 -->
              活動日期：<span>{{ speech.date }}</span>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')

// 講座活動的資料來自 Home.vue
defineProps({
  speeches: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
.speech {
  .image-box {
    overflow: hidden;
  }
  .image {
    min-height: 175px;
    transition: all .7s;
    transform: scale(1.1);
    @media (min-width: 1024px) {
      min-height: 193px;
    }
  }
  &:hover {
    .image-box .image {
      transform: scale(1);
    }
    .info-box {
      background-image: url('@/assets/images/more-button.png');
    }
  }
  .info-box {
    background-image: url('@/assets/images/icon/navigate-r.png');
    background-repeat: no-repeat;
    background-position: right 1px center;
    background-size: 30px auto;
  }
}
</style>
