<script lang="ts" setup>
import { computed } from 'vue'
import { ARROW } from './../../store/icons'
import ArticleCard from './../items/ArticleCard.vue'
import { useArticleStore } from './../../store/articles'

const articlesStore = useArticleStore()
const limitedArticles = computed(() => articlesStore.limitedArticles)
</script>

<template>
  <div class="parts">
    <div class="parts_header">
      <h1>{{$t('articles')}}</h1>
      <router-link to="/">
        {{$t('more_articles')}}
        <div v-html="ARROW"/>
      </router-link>
    </div>
    <ul class="parts_list">
      <li v-for="(article, index) in limitedArticles" :key="article + index">
        <ArticleCard :article="article"/>
      </li>
    </ul>
  </div>
</template>