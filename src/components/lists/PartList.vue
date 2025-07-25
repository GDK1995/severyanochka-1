<script lang="ts" setup>
import { computed } from 'vue'
import { useProductStore } from './../../store/product'
import { ARROW } from './../../store/icons'
import Card from './../../components/items/Card.vue'

const productStore = useProductStore()
const limited = computed(() => productStore.limitedSaleProducts)
</script>

<template>
  <div class="parts">
    <div class="parts_header">
      <h1>Акции</h1>
      <router-link to="">
        Все акции
        <div v-html="ARROW"/>
      </router-link>
    </div>
    <ul class="parts_list">
      <li v-for="(product, index) in limited" :key="product + index">
        <Card :product="product"/>
      </li>
    </ul>
  </div>
</template>