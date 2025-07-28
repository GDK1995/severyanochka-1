<script setup lang="ts">
import FullProductList from './../components/lists/FullProductList.vue'
import { useProductStore } from './../store/product'

const productStore = useProductStore()
</script>

<template>
  <main class="search_page">
    <div class="titels">
      <h1>{{$t('results_of_search')}}</h1>
      <p>
        {{$t('on_request')}}
        <span>{{productStore.query}}</span>
      </p>
    </div>
    <full-product-list :list="productStore.searchedProducts"/>
  </main>
</template>