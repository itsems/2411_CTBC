<template>
  <!-- Image -->
  <div 
    :class="[
      'z-[1] relative bg-cover bg-no-repeat bg-center rounded-md shadow-md',
      'w-full pb-[59%] mb-5',
      'lg:pb-[54%]'
    ]"
    :style="{ 'background-image': 'url(' + post.imageUrl + ')' }"
  />
  
  <!-- Content  -->
  <div class="pb-4">
    <!-- date -->
    <p class="mb-3 text-sm text-main lg:mb-1">{{ post.date }}</p>
    
    <!-- title -->
    <p
      @click="handleRedirect( post )"
      class="mb-3 text-xl font-bold tracking-wide cursor-pointer lg:truncate hover:underline lg:mb-2 title lg:tracking-normal text-darkGreen"
      :title="post.title"
    >
      {{ post.title }}
    </p>
    
    <!-- content -->
    <div
      class="leading-6 text-justify content text-md lg:text-base"
      :title="post.content"
    >
      {{ post.content }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['redirect'])
const handleRedirect = () => {
  emit('redirect', props.post)
}
</script>
