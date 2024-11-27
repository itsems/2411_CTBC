<template>
  <div class="relative block">
    
    <!-- Image -->
    <div 
      :class="[
        'z-[1] relative bg-cover bg-no-repeat bg-center rounded-md shadow-md',
        'w-[89%] pb-[49%]',
        'lg:w-[57%] lg:pb-[31%] lg:mb-20'
      ]"
      :style="{ 'background-image': 'url(' + data.imageUrl + ')' }"
    />

    <!-- Content  -->
    <div class="pl-4">
      <div 
        :class="[
          'rounded-md shadow-md bg-white',
          'px-4 pb-20 -mt-[17%] pt-[23%]',
          'lg:w-[666px] lg:h-[352px]',
          'lg:absolute lg:mt-0 lg:top-[17%] lg:left-[39%] ',
          'lg:pr-10 lg:pt-[75px] lg:pl-[20%]'
        ]"
      >
        <!-- date -->
        <p class="text-[13px] text-main mb-3 lg:mb-1">{{ data.date }}</p>
        
        <!-- title -->
        <p
          @click="handleTitleClick( data )"
          class="mb-5 text-2xl font-bold tracking-wide cursor-pointer hover:underline lg:mb-2 title lg:tracking-normal text-darkGreen"
          :title="data.title"
        >
          {{ data.title }}
        </p>
        
        <!-- content -->
        <div
          :title="data.content"
          class="leading-6 text-justify content text-md lg:text-base"
        >
          {{ data.content }}
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: undefined,
  },
})
const emit = defineEmits(['redirect'])
const handleTitleClick = () => {
  emit('redirect', props.data)
}


</script>
<style lang="scss" scoped>
.content {
  display: -webkit-box;
  max-width: 100%;
  height: 15px*1.5*5;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  @media (min-width: 1023px) {
    height: 16px*1.5*5;
  }
}
.title {
  display: -webkit-box;
  max-width: 100%;
  max-height: 24px*1.5*2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
}
</style>
