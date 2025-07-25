<script setup lang="ts">
import Header from './components/header/Header.vue'
</script>

<template>
  <div class="container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "assets/css/index.scss";
</style>
