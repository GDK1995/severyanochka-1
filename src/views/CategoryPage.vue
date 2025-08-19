<script setup lang="ts">
import { ref } from 'vue'
import RangeItem from './../components/items/RangeItem.vue'

const rangeMax = ref(10000)
const rangeMin = ref(0)

function setPrice (e) {
  const [value, type] = e
  console.log('value', value, type)
}
</script>

<template>
  <main>
    {{rangeMax}}
    <range-item
      :maximum="rangeMax"
      :minimum="rangeMin"/>
  </main>
</template>