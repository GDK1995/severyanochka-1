<script setup lang="ts">
import { defineProps } from 'vue'
import SecondaryBttn from './../buttons/SecondaryBttn.vue'

const props = defineProps<{
  article: object
}>()
</script>

<template>
  <article class="article">
    <figure>
      <img width="375" height="160" :src="article.cover" :alt="article.title">
    </figure>
    <div class="article_more">
      <p class="article_date">{{article.date}}</p>
      <h3>{{article.title}}</h3>
      <p class="article_text">{{article.text}}</p>
      <SecondaryBttn :title="$t('more_details')"/>
    </div>
  </article>
</template>