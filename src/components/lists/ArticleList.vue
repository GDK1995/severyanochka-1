<script lang="ts" setup>
import { defineProps } from 'vue'
import { ARROW } from './../../store/icons'
import ArticleCard from './../items/ArticleCard.vue'

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
  products: productItem[],
  type: String,
  title: String,
  linkTitle: String,
  link: String
}>()
</script>

<template>
  <div class="parts">
    <div class="parts_header">
      <h1>{{props.title}}</h1>
      <router-link :to="props.link">
        {{props.linkTitle}}
        <div v-html="ARROW"/>
      </router-link>
    </div>
    <ul class="parts_list">
      <li v-for="(product, index) in props.products" :key="product + index">
        <ArticleCard />
      </li>
    </ul>
  </div>
</template>