<script setup lang="ts">
import { BURGER } from './../../store/icons'
</script>


<template>
  <button type="button" class="secondary_bttn">
    <div class="inside_bttn_position">
      <div class="icon" v-html="BURGER" />
      <p class="text_s">{{$t('catalog')}}</p>
    </div>
  </button>
</template>
