<template>
  <ul class="event-list">
    <li v-for="news in newsList" :key="news.id" class="mb-10 cursor-pointer news lg:flex lg:mb-4">
      <RouterLink :to="{ name: ROUTE_NAME.news.detail.name,  params: { id: news.id }}" class="link lg:flex">
        <div class="flex items-center justify-start w-full lg:w-auto">
          <div class="mr-3 lg:mr-5">{{ news.dates }}</div>
          <span
            v-if="news.isNew"
            class="flex items-center justify-center px-1 text-white badge-new lg:mr-2 bg-main"
          >NEW</span
          >
        </div>
        <div>{{ news.content }}</div>
      </RouterLink>
    </li>
  </ul>
</template>
<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')

// 講座活動的資料來自 Home.vue
defineProps({
  newsList: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
.event-list {
  .link {
    transition: all .3s;
  }
  .news {
    &:hover .link {
      color: $mainGreen;
    }
  }
  .badge-new {
    border-radius: 10px;
    font-size: 10px;
  }
}
</style>
