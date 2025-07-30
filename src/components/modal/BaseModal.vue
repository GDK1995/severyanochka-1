<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean
});
const emit = defineEmits(['update:modelValue'])

const close = () => emit('update:modelValue', false)

const handleEsc = (e) => {
  if (e.key === 'Escape') close()
};

onMounted(() => document.addEventListener('keydown', handleEsc))
onUnmounted(() => document.removeEventListener('keydown', handleEsc))
</script>

<template>
  <transition name="fade">
    <div v-if="modelValue" class="modal-overlay" @click.self="close">
      <div class="modal-window" ref="modalRef" tabindex="-1">
        <button class="modal-close" @click="close">×</button>
        <slot />
      </div>
    </div>
  </transition>
</template>