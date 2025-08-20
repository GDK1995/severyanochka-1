<script setup lang="ts">
import { defineProps, defineEmits, ref, watchEffect, computed } from 'vue'
import { MAXIMUM_PRICE, MINIMUM_PRICE } from './../../store/data'

const props = defineProps({
  maximum: {
    type: Number,
    default: MAXIMUM_PRICE
  },
  minimum: {
    type: Number,
    default: MINIMUM_PRICE
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

const progressStyle = computed(() => {
  const minPercent = (updMin.value / MAXIMUM_PRICE) * 100
  const maxPercent = (updMax.value / MAXIMUM_PRICE) * 100
  return {
    left: minPercent + '%',
    right: (100 - maxPercent) + '%'
  }
})

function setPriceMax () {
  emit('range-max', updMax.value)
}

function setPriceMin () {
  emit('range-min', updMin.value)
}

function resetSlider () {
  emit('range-min', MINIMUM_PRICE)
  emit('range-max', MAXIMUM_PRICE)
}
</script>

<template>
  <div class="range">
    <div class="range-text">
      <p class="text_s">
        {{$t('price')}}
      </p>
      <button @click="resetSlider" class="text_xs">
        {{$t('clear')}}
      </button>
    </div>
    <div class="range-number">
      <input v-model="updMin" @input="setPriceMin" type="number" name="from" id="from">
      <span>-</span>
      <input v-model="updMax" @input="setPriceMax" type="number" name="to" id="to">
    </div>
    <div class="range-slider">
      <input v-model="updMin" @change="setPriceMin" type="range" class="min" :min="MINIMUM_PRICE" :max="MAXIMUM_PRICE" step="10">
      <input v-model="updMax" @change="setPriceMax" type="range" class="max" :min="MINIMUM_PRICE" :max="MAXIMUM_PRICE" step="10">
      <div class="progress" :style="progressStyle"></div>
    </div>
  </div>
</template>