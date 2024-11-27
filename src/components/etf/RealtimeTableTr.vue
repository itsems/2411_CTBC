<template>
  <tr class="text-center">
    <td class="text-left">
      <EtfName :fund="fund" />
    </td>
    <td>
      <p>{{ fund.yesterday2 }}</p>
      <p class="text-[12px]">({{ fund.date }})</p>
    </td>
    <td><p>{{ fund.expectValue }}</p></td>
    <td><p :class="textClass(fund.expectValueChange)" class="font-medium">{{ fund.expectValueChange }}</p></td>
    <td><p :class="textClass(fund.expectValueChangePercent)" class="font-medium">{{ fund.expectValueChangePercent }}%</p></td>
    <td><p>{{ fund.yesterday1 }}</p></td>
    <td><p>{{ fund.current }}</p></td>
    <td><p :class="textClass(fund.currentChange)" class="font-medium">{{ fund.currentChange }}</p></td>
    <td><p :class="textClass(fund.currentChangePercent)" class="font-medium">{{ fund.currentChangePercent }}%</p></td>
    <td><p :class="textClass(fund.discount)" class="font-medium">{{ fund.discount }}</p></td>
    <td><p :class="textClass(fund.discountChange)" class="font-medium">{{ fund.discountChange }}%</p></td>
    <td><p :class="textClass(fund.track)" class="font-medium">{{ fund.track }}%</p></td>
  </tr>
</template>
<script setup>
defineProps({
  fund: Object
})

const textClass = computed(() => number => {
  const value = parseFloat(number)
  if (value > 0) return 'text-dark-red'
  else if (value < 0) return 'text-light-green'
  else return ''
})
</script>
