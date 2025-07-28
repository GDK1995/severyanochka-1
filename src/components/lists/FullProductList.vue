<script lang="ts" setup>
import { defineProps } from 'vue'
import { ARROW } from './../../store/icons'
import Card from './../../components/items/Card.vue'

type productItem = {
  id: number,
  title: string,
  desc: string,
  rate: number,
  price: number,
  sale_price: number,
  currency: string,
  image: string
}

const props = defineProps<{
  list: productItem[]
}>()
</script>

<template>
  <div class="full_product">
    <ul class="full_product_list">
      <li v-for="(product, index) in props.list" :key="product + index">
        <Card :product="product" :type="type"/>
      </li>
    </ul>
  </div>
</template>