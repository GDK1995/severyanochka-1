<script setup lang="ts">
import { ref } from 'vue'
import { ARROW } from './../../store/icons'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isDropped = ref(false)

const titles = [`${t('profile')}`, `${t('logout')}`]

function toggle() {
  isDropped.value = !isDropped.value
}
</script>

<template>
  <div class="user_widget">
    <div @click="toggle" class="user_widget-main">
      <img class="avatar" src="/logo2.png" alt="avatar">
      <h2 class="username text_s">Mia</h2>
      <div
        class="arrow_icon"
        :class="{'arrow_icon_rotate' : isDropped}"
        v-html="ARROW" />
    </div>
    <transition name="fade-slide">
      <ul v-if="isDropped" class="dropdown box_shadow_m">
        <li v-for="title in titles" :key="title">
          <p class="text_s">{{title}}</p>
        </li>
      </ul>
    </transition>
  </div>
</template>
