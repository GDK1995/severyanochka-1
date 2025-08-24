<script setup lang="ts">
import { defineProps, defineEmits, defineModel, ref } from 'vue'

const modelValue = defineModel<boolean>()
</script>

<template>
  <div class="toggle">
    <input :checked="modelValue" @change="modelValue = !modelValue" type="checkbox" id="check" role="switch" class="toggle-control">
    <label for="check"></label>
    <p class="text_s">{{$t('in_stock')}}</p>
  </div>
</template>