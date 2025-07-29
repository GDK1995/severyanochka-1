<script setup lang="ts">
import { computed } from 'vue'
import { SEARCH } from './../../store/icons'
import { useRouter } from 'vue-router'
import { useProductStore } from './../../store/product'

const productStore = useProductStore()
const searched = computed(() => productStore.searched)

const router = useRouter()

function highlightMatch(text: string, query: string) {
  if (!query) return text

  const regex = new RegExp(`(${query})`, 'ig')
  return text.replace(regex, '<strong>$1</strong>')
}

function handleClick(q: string) {
  productStore.searchProduct(q)
  router.push('/results')
  productStore.setQuery('')
}
</script>

<template>
  <div class="to_search">
    <div
      class="search_input text_s"
      :class="[searched.length ? 'search_not_empty' : 'search_empty']">
      <label for="search-input" class="visually_hidden">{{$t('searching_by_product')}}</label>
      <input
        id="search-input"
        type="search"
        :placeholder="$t('search_item')"
        v-model="productStore.query"
        @input="productStore.searchProduct($event.target.value)">
      <div class="search_icon" v-html="SEARCH"/>
    </div>
    <ul :class="[searched.length && productStore.query ? 'search_list_not_empty' : 'search_list_empty']">
      <li
        v-for="item in searched"
        :key="item.id"
        v-html="highlightMatch(item.title, productStore.query)"
        @click="handleClick(item.title)">
      </li>
    </ul>
  </div>
</template>
