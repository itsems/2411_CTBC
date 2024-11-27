<template>
  <div>
    <TabWithBar :name="type" class="mb-6 lg:mb-8" isActive />
    <div class="py-4 pl-3 pr-2 bg-white shadow-xl rounded-3xl lg:px-8 lg:py-6">
      <slot />
      <ul>
        <li
          v-for="el in links"
          class="mb-1 cursor-pointer lg:mb-4 lg:last:mb-0 hover:text-main"
          :key="el.name"
          @click="navigate(el)"
        >
          {{ el.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
defineProps({
  type: String,
  links: {
    type: Array,
    default: () => []
  }
})

//navigate
const router = useRouter()
const navigate = page => {
  if (page.name) {
    router.push({ name: page.name })
  }
  if (page.link) {
    window.open(page.link)
  }
}
</script>
