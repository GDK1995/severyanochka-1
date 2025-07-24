<script setup lang="ts">
import { SEARCH } from './../../store/icons'
</script>

<template>
  <div class="search_input text_s">
    <label for="search-input" class="visually_hidden">{{$t('searching_by_product')}}</label>
    <input id="search-input" type="search" :placeholder="$t('search_item')">
    <div class="search_icon" v-html="SEARCH"/>
  </div>
</template>
