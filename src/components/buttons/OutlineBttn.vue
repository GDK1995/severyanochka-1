<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
}>()
</script>

<template>
  <button type="button" class="outline_bttn">
    <div class="inside_bttn_position_center">
      <p class="text_s">{{props.text}}</p>
    </div>
  </button>
</template>
