<script setup lang="ts">
import { computed } from 'vue'

const logo = computed(() => window.innerWidth >= 768 ? '/logo.png' : '/logo2.png')
</script>

<template>
  <div>
    <h1 class="visually_hidden">{{$t('sever')}}</h1>
    <img class="logo" :src="logo" alt="logo">
  </div>
</template>
