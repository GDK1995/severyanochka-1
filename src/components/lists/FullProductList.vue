<script lang="ts" setup>
import { defineProps } from 'vue'
import { ARROW } from './../../store/icons'
import Card from './../../components/items/Card.vue'
import type { Product } from './../../store/types'

const props = defineProps<{
  list: Product[]
}>()
</script>

<template>
  <div class="full_product">
    <ul class="full_product_list">
      <li v-for="(product, index) in props.list" :key="product + index">
        <Card :product="product"/>
      </li>
    </ul>
  </div>
</template>