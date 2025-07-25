<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  rate: number
}>()

const emit = defineEmits<{
  (e: 'update:rate', value: number): void
}>()

const hoverValue = ref<number | null>(null)
const isHovering = ref(false)

function getStarClass(index: number) {
  return 'star'
}

function getFill(index: number): string {
  const value = isHovering.value && hoverValue.value !== null ? hoverValue.value : props.rate
  if (value >= index) return 'var(--primaryColor)'
  if (value >= index - 0.5) return url(`#grad-${index}`)
  return 'var(--grayColor)'
}

function onMouseMove(e: MouseEvent, index: number) {
  const { left, width } = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const percent = (e.clientX - left) / width
  const starValue = percent <= 0.5 ? index - 0.5 : index
  hoverValue.value = starValue
  isHovering.value = true
}

function resetHover() {
  isHovering.value = false
  hoverValue.value = null
}

function onClick(index: number) {
  const hovered = hoverValue.value
  emit('update:rate', hovered ?? index)
}
</script>

<template>
  <div class="rate" @mouseleave="resetHover">
    <svg
      v-for="index in 5"
      :key="index"
      class="star"
      @mousemove="onMouseMove($event, index)"
      @click="onClick(index)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <defs>
        <linearGradient :id="`grad-${index}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stop-color="var(--primaryColor)" />
          <stop offset="50%" stop-color="var(--grayColor)" />
        </linearGradient>
      </defs>
      <path :fill="getFill(index)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.88 1.448 8.265L12 18.896l-7.384 4.555 1.448-8.265L0 9.306l8.332-1.151z"/>
    </svg>
  </div>
</template>