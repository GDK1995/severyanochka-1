<script lang="ts" setup>
import { ARROW } from './../../store/icons'
import ArticleCard from './../items/ArticleCard.vue'
import { articles } from './../../store/data'
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
      <li v-for="(article, index) in articles" :key="article + index">
        <ArticleCard :article="article"/>
      </li>
    </ul>
  </div>
</template>