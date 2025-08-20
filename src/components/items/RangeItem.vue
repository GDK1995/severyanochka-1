<script setup lang="ts">
import debounce from 'lodash/debounce'
import { defineProps, defineEmits, ref, computed } from 'vue'
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

const updMax = ref<number>(props.maximum)
const updMin = ref<number>(props.minimum)

const progressStyle = computed(() => {
  const minPercent = (updMin.value / MAXIMUM_PRICE) * 100
  const maxPercent = (updMax.value / MAXIMUM_PRICE) * 100
  return {
    left: minPercent + '%',
    right: (100 - maxPercent) + '%'
  }
})

const debouncedSetPriceMax = debounce(() => {
  setPriceMax()
}, 300)

const debouncedSetPriceMin = debounce(() => {
  setPriceMin()
}, 300)

function setPriceMax () {
  if (updMax.value < updMin.value) {
    updMax.value = updMin.value
  }
  emit('range-max', updMax.value)
}

function setPriceMin () {
  if (updMax.value < updMin.value) {
    updMin.value = updMax.value
  }
  emit('range-min', updMin.value)
}

function resetSlider () {
  updMin.value = MINIMUM_PRICE
  updMax.value = MAXIMUM_PRICE
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
      <input
        v-model="updMin"
        @input="debouncedSetPriceMin"
        type="number"
        name="from"
        id="from"
        :min="MINIMUM_PRICE"
        :max="MAXIMUM_PRICE">
      <span>-</span>
      <input
        v-model="updMax"
        @input="debouncedSetPriceMax"
        type="number"
        name="to"
        id="to"
        :min="MINIMUM_PRICE"
        :max="MAXIMUM_PRICE">
    </div>
    <div class="range-slider">
      <input
        v-model="updMin"
        @change="setPriceMin"
        type="range"
        class="min"
        :min="MINIMUM_PRICE"
        :max="MAXIMUM_PRICE">
      <input
        v-model="updMax"
        @change="setPriceMax"
        type="range"
        class="max"
        :min="MINIMUM_PRICE"
        :max="MAXIMUM_PRICE">
      <div class="progress" :style="progressStyle"></div>
    </div>
  </div>
</template>