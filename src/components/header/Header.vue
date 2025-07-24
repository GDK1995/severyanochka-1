<script setup lang="ts">
import Logo from './Logo.vue'
import MainBttn from './../buttons/MainBttn.vue'
import LogInBttn from './../buttons/LogInBttn.vue'
import SearchInput from './../inputs/SearchInput.vue'
import NavItem from './NavItem.vue'
import ProfileNav from './ProfileNav.vue'
import { ref } from 'vue'

const isToggle = ref(false)

function toggle() {
  isToggle.value = !isToggle.value
}
</script>

<template>
  <header class="container header box_shadow_s">
    <logo class="header_logo"/>
    <div class="header_search">
      <MainBttn />
      <search-input />
    </div>
    <div class="header_nav">
      <nav-item />
      <profile-nav v-if="isToggle" />
      <log-in-bttn v-else/>
    </div>
  </header>
</template>
