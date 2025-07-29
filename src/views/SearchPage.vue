<script setup lang="ts">
import FullProductList from './../components/lists/FullProductList.vue'
import { useProductStore } from './../store/product'

const productStore = useProductStore()
</script>

<template>
  <main class="search_page">
    <div class="titels">
      <h1 class="text_m_header">{{$t('results_of_search')}}</h1>
      <p class="text_l">
        {{$t('on_request')}}
        <span v-if="productStore.query">{{productStore.query}}</span>
        <span v-else>{{$t('nothing_found')}}</span>
      </p>
    </div>
    <full-product-list :list="productStore.searched"/>
  </main>
</template>