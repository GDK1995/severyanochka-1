<script setup lang="ts">
import { defineProps } from 'vue'
import type { Item } from './../../store/types'

const props = defineProps<{
  categoryList: Item[]
}>()
</script>

<template>
  <ul>
    <li
      v-for="category in categoryList"
      :key="category"
      class="text_s">
      {{category.name}}
    </li>
  </ul>
</template>