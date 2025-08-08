<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  catalogItem: object
}>()
</script>

<template>
  <div class="catalog_card-item">
    <div class="catalog_card-cover"/>
    <p>
      {{props.catalogItem.title}}
    </p>
    <figure>
      <img :src="props.catalogItem.cover" :alt="props.catalogItem.title">
    </figure>
  </div>
</template>