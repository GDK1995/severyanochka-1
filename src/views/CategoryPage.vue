<script setup lang="ts">
import { ref } from 'vue'
import RangeItem from './../components/items/RangeItem.vue'
import { MAXIMUM_PRICE } from './../store/data'

const rangeMax = ref(MAXIMUM_PRICE)
const rangeMin = ref(0)

function setPrice (e: number, type: string): void {
  type === 'maximum' ? rangeMax.value = e : rangeMin.value = e
}
</script>

<template>
  <main>
    <range-item
      :maximum="rangeMax"
      :minimum="rangeMin"
      @range-max="setPrice($event, 'maximum')"
      @range-min="setPrice($event, 'minimum')"/>
  </main>
</template>