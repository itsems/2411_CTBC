<template>
  <div class="justify-start lg:flex lg:items-center">
    <p v-if="type.label" class="mb-2 lg:mb-0 lg:mr-4">{{ type.label }}</p>
    <div class="badges">
      <SearchTag
        v-for="tag in type.tags"
        :key="tag"
        :label="tag.label"
        :selected="tag.selected"
        :badgeClass="badgeClass"
        @click="selectTag(tag.label)"
      >
        {{ tag.label }}
      </SearchTag>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  type: {
    type: Object,
    required: true,
  },
  badgeClass: String
})

const emit = defineEmits(['tab-click'])

const selectTag = label => {
  emit('tab-click', props.type, label)
}
</script>
