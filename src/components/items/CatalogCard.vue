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

const cssItem = computed(() => {
  let widthOfImg: number
  if (imgEl.value) {
    console.log('>>', imgEl.value.clientWidth, props.width)
    const deltaWidth = props.width - 120
    if (imgEl.value.clientWidth < 200) {
      widthOfImg = deltaWidth * 0.2
    } else {
      widthOfImg = deltaWidth * 0.4
    }
  }
  return { width: `${widthOfImg}px` }
})

onMounted(() => {
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
        :class="cssItem">
    </figure>
  </div>
</template> 