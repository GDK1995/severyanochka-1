<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <button type="button" class="primary_bttn">
    <div class="inside_bttn_position_center">
      <p class="text_s">{{props.title}}</p>
    </div>
  </button>
</template>
