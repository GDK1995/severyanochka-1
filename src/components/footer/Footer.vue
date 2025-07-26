<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { INSTAGRAM, TELEGRAM, WHATSAPP, YOUTUBE, PHONE } from './../../store/icons'

const { t } = useI18n()

const pageList = [`${t('about_company')}`, `${t('contacts')}`, `${t('vacancy')}`, `${t('policy_conf')}`]
const socialList = [INSTAGRAM, TELEGRAM, WHATSAPP, YOUTUBE]
</script>

<template>
  <footer>
    <figure>
      <img src="/short_logo.svg" alt="short-logo">
    </figure>
    <div class="footer_pages">
      <router-link v-for="page in pageList" :key="page" class="text_xs" to="/">
        {{page}}
      </router-link>
    </div>
    <div class="footer_contacts">
      <div class="footer_social">
        <div v-for="social in socialList" :key="social" v-html="social"/>
      </div>
      <div class="footer_phone">
        <div v-html="PHONE"/>
        <p>8 800 777 33 33</p>
      </div>
    </div>
  </footer>
</template>