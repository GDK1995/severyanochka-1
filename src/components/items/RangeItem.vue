<script setup lang="ts">
import { defineProps, defineEmits, ref, watchEffect } from 'vue'
import { MAXIMUM_PRICE } from './../../store/data'

const props = defineProps({
  maximum: {
    type: Number,
    default: MAXIMUM_PRICE
  },
  minimum: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits<{
  (e: 'range-max', value: number): void
  (e: 'range-min', value: number): void
}>()

const updMax = ref(null)
const updMin = ref(null)

watchEffect(() => {
  updMax.value = props.maximum
  updMin.value = props.minimum
})

function setPriceMax () {
  emit('range-max', updMax.value)
}

function setPriceMin () {
  emit('range-min', updMin.value)
}
</script>

<template>
  <div class="range">
    <div class="range-text">
      <p class="text_s">
        {{$t('price')}}
      </p>
      <button class="text_xs">
        {{$t('clear')}}
      </button>
    </div>
    <div class="range-number">
      <input v-model="updMin" @input="setPriceMin" type="number" name="from" id="from">
      <span>-</span>
      <input v-model="updMax" @input="setPriceMax" type="number" name="to" id="to">
    </div>
    <div class="range-slider">
      <input v-model="updMin" @change="setPriceMin" type="range" class="min" min="0" :max="MAXIMUM_PRICE" step="10">
      <input v-model="updMax" @change="setPriceMax" type="range" class="max" min="0" max="10000" step="10">
    </div>
  </div>
</template>