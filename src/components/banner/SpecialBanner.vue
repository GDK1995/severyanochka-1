<script setup lang="ts">
const imgs = ['/banners/banner1.png', '/banners/banner2.png']
</script>

<template>
  <div class="special_banner">
    <h2 class="text_m_header">Специальные предложения</h2>
    <figure class="special_banner_img">
      <img
        v-for="img in imgs"
        :key="img"
        :src="img"
        alt="special">
    </figure>
  </div>
</template>