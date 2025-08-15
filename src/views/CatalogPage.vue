<script setup lang="ts">
import CatalogCard from './../components/items/CatalogCard.vue'
import { catalogList } from './../store/data'
import { onMounted, ref } from 'vue'

const width = ref<number | null>(null)

onMounted(() => {
  width.value = document.querySelector('main').offsetWidth
  console.dir('<<', width.value)
})
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
        :catalog-item="catalog"
        :width="width"/>
    </div>
  </main>
</template>