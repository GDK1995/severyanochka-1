<script setup lang="ts">
import { BURGER } from './../../store/icons'
</script>


<template>
  <router-link to="/catalog" class="secondary_bttn">
    <div class="inside_bttn_position">
      <div class="icon" v-html="BURGER" />
      <p class="text_s">{{$t('catalog')}}</p>
    </div>
  </router-link>
</template>
