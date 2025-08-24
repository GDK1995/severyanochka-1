<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import RangeItem from './../components/items/RangeItem.vue'
import ToggleItem from './../components/items/ToggleItem.vue'
import CategoryList from './../components/items/CategoryList.vue'
import PrimaryBttn from './../components/buttons/PrimaryBttn.vue'
import FullProductList from './../components/lists/FullProductList.vue'
import { MAXIMUM_PRICE, MINIMUM_PRICE } from './../store/data'
import { useProductStore } from './../store/product'

const route = useRoute()
const productStore = useProductStore()

const categoryId = Number(route.params.id)

const rangeMax = ref<number>(MAXIMUM_PRICE)
const rangeMin = ref<number>(MINIMUM_PRICE)
const isExist = ref<boolean>(false)

function setPrice (e: number, type: string): void {
  type === 'maximum' ? rangeMax.value = e : rangeMin.value = e
}
</script>

<template>
  <main class="category">
    <article class="filter">
      <range-item
        :maximum="rangeMax"
        :minimum="rangeMin"
        @range-max="setPrice($event, 'maximum')"
        @range-min="setPrice($event, 'minimum')"/>
      <category-list
        class="category"
        :category-list="productStore.filterCategory(categoryId)"/>
      <toggle-item
        v-model="isExist"/>
      <primary-bttn :title="$t('apply')"/>
    </article>
    <full-product-list :list="productStore.filterProductByCategory(categoryId)"/>
  </main>
</template>