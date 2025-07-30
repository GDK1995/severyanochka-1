<script setup lang="ts">
import { ref, computed } from 'vue'
import Logo from './Logo.vue'
import MainBttn from './../buttons/MainBttn.vue'
import LogInBttn from './../buttons/LogInBttn.vue'
import SearchInput from './../inputs/SearchInput.vue'
import NavItem from './NavItem.vue'
import ProfileNav from './ProfileNav.vue'
import BaseModal from './../../components/modal/BaseModal.vue'
import AuthBlock from './../auth/AuthBlock.vue'
import { useAuthSetupStore } from './../../store/auth'

const authStore = useAuthSetupStore()
const isToggle = computed(() => authStore.token)

const isModal = ref(false)

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
      <log-in-bttn v-else @click="openModal" />
    </div>
    <base-modal v-model="isModal">
      <AuthBlock v-model="isModal" />
    </base-modal>
  </header>
</template>
