<script setup lang="ts">
import Logo from './Logo.vue'
import MainBttn from './../buttons/MainBttn.vue'
import LogInBttn from './../buttons/LogInBttn.vue'
import SearchInput from './../inputs/SearchInput.vue'
import NavItem from './NavItem.vue'
import ProfileNav from './ProfileNav.vue'
import BaseModal from './../../components/modal/BaseModal.vue'
import { ref } from 'vue'

const isToggle = ref(false)
const isModal = ref(false)

function toggle() {
  isToggle.value = !isToggle.value
}

function openModal() {
  isModal.value = !isModal.value
}
</script>

<template>
  <header class="header box_shadow_s">
    <logo class="header_logo"/>
    <div class="header_search">
      <MainBttn />
      <search-input />
    </div>
    <div class="header_nav">
      <nav-item />
      <profile-nav v-if="isToggle" />
      <log-in-bttn @click="openModal" v-else/>
    </div>
    <base-modal v-model="isModal">
      <h2>ghjk</h2>
    </base-modal>
  </header>
</template>
