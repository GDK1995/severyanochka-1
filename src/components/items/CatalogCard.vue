<script setup lang="ts">
import { defineProps, ref, onMounted, computed, nextTick } from 'vue'

const props = defineProps({
  catalogItem: Object,
  width: {
    type: Number,
    required: true,
    default: 0
  }
})

const imgEl = ref<HTMLElement | null>(null)

const cssSmall = computed(() => {
  const deltaWidth = props.width - 120
  const widthOfImg = deltaWidth * 0.2
  return { width: `${widthOfImg}px` }
})

const cssBig = computed(() => {
  const deltaWidth = props.width - 120
  const widthOfImg = deltaWidth * 0.4
  return { width: `${widthOfImg}px` }
})

onMounted(() => {
  if (imgEl.value) {

  }
})
</script>

<template>
  <div class="catalog_card-item">
    <div class="catalog_card-cover"/>
    <p>
      {{props.catalogItem.title}}
    </p>
    <figure>
      <img
        ref="imgEl"
        :src="props.catalogItem.cover"
        :alt="props.catalogItem.title"
        :class="[imgEl.clientWidth < 200 ? 'cssSmall' : 'cssBig']">
    </figure>
  </div>
</template>