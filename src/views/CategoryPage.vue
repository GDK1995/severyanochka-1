<script setup lang="ts">
import { ref } from 'vue'
import RangeItem from './../components/items/RangeItem.vue'
import ToggleItem from './../components/items/ToggleItem.vue'
import { MAXIMUM_PRICE, MINIMUM_PRICE } from './../store/data'

const rangeMax = ref<number>(MAXIMUM_PRICE)
const rangeMin = ref<number>(MINIMUM_PRICE)
const isExist = ref<boolean>(false)

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
    <toggle-item
      v-model="isExist"/>
  </main>
</template>