<template>
  <div class="flex gap-3">
    <div v-if="partner===PARTNER.LOOMIS_SAYLES">
      <img
        width="122"
        src="@/assets/images/about/ls.png"
        :alt="PARTNER.LOOMIS_SAYLES"
      />
    </div>
    <div v-else-if="partner===PARTNER.HARRIS_ASSOCIATES">
      <img
        width="122"
        src="@/assets/images/about/ha.png"
        :alt="PARTNER.HARRIS_ASSOCIATES"
      />
    </div>
    <div v-else-if="partner===PARTNER.THEMATICS">
      <img
        width="122"
        src="@/assets/images/about/t.png"
        :alt="PARTNER.THEMATICS"
      />
    </div>
    <div v-else-if="partner===PARTNER.DNCA">
      <img
        width="122"
        src="@/assets/images/about/dnca.png"
        :alt="PARTNER.DNCA"
      />
    </div>
    
    <div v-if="type" class="px-3 py-[3px] text-white rounded-lg bg-main cursor-default">
      {{ type }}
    </div>
    <span v-if="type">|</span>
    <span>{{ date }}</span>
  </div>
</template>
<script setup>
import { PARTNER } from '@/constants/partner'

defineProps({
  type: String,
  date: String,
  partner: {
    type: PARTNER,
    default: undefined
  }
})
</script>
