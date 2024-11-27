<template>
  <div class="link-item" :class="{ 'active': isActive, 'has-sub-pages': subPages }">
    <div class="title" @click="toggleActive">
      {{ title }}
    </div>
    <Collapse :when="isActive" class="v-collapse">
      <ul class="sub-menu">
        <li
          v-for="page in subPages"
          :key="page.name"
          class="li"
          @click="navigate(page)"
        >
          <span class="label">{{ page.label }}</span>
        </li>
      </ul>
    </Collapse>
  </div>
</template>
<script setup>
import { Collapse } from 'vue-collapsed'

const props = defineProps({
  title: String,
  subPages: Array,
  to: String,
  isNewTab: Boolean
})

const emit = defineEmits(['page-click'])

// navigate
const router = useRouter()
const navigate = page => {
  if (page.name) {
    if (props.isNewTab || page.shouldOpenNewTab) {
      const { href } = router.resolve({ name: page.name })
      window.open(href, '_blank')
    } else {
      router.push({ name: page.name })
    }
    emit('page-click')
    if (page.link) {
      window.open(page.link)
    }
  }
}

const isActive = ref(false)
const toggleActive = () => {
  if (!props.subPages) {
    router.push({ name: props.to })
    emit('page-click')
    return
  }
  isActive.value = !isActive.value
}
</script>
<style lang="scss" scoped>
.link-item {
  font-size: 17px;
  color: $darkGreen;
  border-bottom: 1px solid #ddd;
  @apply text-center block ;
}
.has-sub-pages {
  &.active {
    .title {
      background: #017f7b;
      color: white;
      &:after {
        background-image: url('@/assets/images/icon/arrow-down-w.png');
      }
    }
  }
}

.sub-menu {
  background-color: $mainGreen;
  color: white;
  font-size: 15px;
  padding: 10px 0;
  .li {
    padding: 5px 0;

  }
}

.title {
  position: relative;
  padding: 11px 0;
  transition: all .3s;
  font-weight: 500;
}
.has-sub-pages .title {
  &:after {
    content: '';
    width: 14px;
    height: 9px;
    position: absolute;
    background-image: url('@/assets/images/icon/arrow-down.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    right: 35px;
    top: 21px;
    transition: all .3s;
  }
}

.v-collapse {
  transition: height .3s;
}
</style>