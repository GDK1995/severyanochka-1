<script setup lang="ts">
import { CART, BOX, FAV } from './../../store/icons'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const icons = [FAV, BOX, CART]
const titles = [`${t('fav')}`, `${t('order')}`, `${t('cart')}`]
</script>

<template>
  <nav class="navigate">
    <ul>
      <li v-for="(icon, index) in icons" :key="icon">
        <div v-html="icon"/>
        <p class="text_xs">{{ titles[index] }}</p>
      </li>
    </ul>
  </nav>
</template>