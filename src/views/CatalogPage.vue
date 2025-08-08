<script setup lang="ts">
import CatalogCard from './../components/items/CatalogCard.vue'
import { catalogList } from './../store/data' 
</script>

<template>
  <main class="catalog">
    <div></div>
    <h1 class="text_m_header">{{$t('catalog')}}</h1>
    <div
      class="catalog_card">
      <catalog-card
        v-for="catalog in catalogList"
        :key="catalog"
        :catalog-item="catalog"/>
    </div>
  </main>
</template>