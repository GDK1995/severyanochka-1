<script setup lang="ts">
import CatalogCard from './../components/items/CatalogCard.vue'
import { catalogList } from './../store/data'
import { onMounted, ref, nextTick } from 'vue'

const width = ref<number | null>(null)
const mainEl = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    width.value = mainEl.value.offsetWidth
    console.dir(mainEl.value)
    console.log(mainEl.value.offsetWidth)
  })
})
</script>

<template>
  <main class="catalog" ref="mainEl">
    <div></div>
    <h1 class="text_m_header">{{$t('catalog')}}</h1>
    <router-link
      v-for="catalog in catalogList"
      :key="catalog"
      :to="{ name: 'category page', params: { id: catalog.id } }">
      <catalog-card
        :catalog-item="catalog"
        :width="width"/>
    </router-link>
  </main>
</template>