<script setup lang="ts">
import { LOGIN } from '../../store/icons'
</script>


<template>
  <button type="button" class="primary_bttn">
    <div class="inside_bttn_position">
      <p class="text_s">{{$t('login')}}</p>
      <div class="icon" v-html="LOGIN" />
    </div>
  </button>
</template>
