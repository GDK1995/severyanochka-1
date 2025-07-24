<script setup lang="ts">
import { computed } from 'vue'

const banner = computed(() => window.innerWidth > 768 ? '/banners/banner_1440.png' : '/banners/banner_768.png')
</script>

<template>
  <div class="banner">
    <img :src="banner" alt="banner">
  </div>
</template>
