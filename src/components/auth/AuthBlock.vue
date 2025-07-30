<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthSetupStore } from './../../store/auth'

const authStore = useAuthSetupStore()

const { t } = useI18n()

const authLabel = [`${t('log_in')}`, `${t('password')}`]
const authId = ['login', 'password']
const authType = ['text', 'password']

const emit = defineEmits(['update:modelValue'])

async function handleSignIn() {
  const isAuth = await authStore.signIn()

  if (isAuth) {
    emit('update:modelValue', false)
  }
}
</script>

<template>
  <div class="auth">
    <h2>{{$t('login')}}</h2>
    <form action="#" @submit.prevent="handleSignIn">
      <div v-for="(elem, index) in authId" :key="elem" class="form_inputs">
        <label :for="elem" class="text_m">{{authLabel[index]}}</label>
        <input
          v-model="authStore[elem]"
          :type="authType[index]"
          :id="elem"
          class="text_l"
          required>
      </div>
      <button type="submit">{{$t('login')}}</button>
    </form>
    <div class="auth_link">
      <router-link class="outline_bttn text_s" to="/">
        {{$t('signup')}}
      </router-link>
      <router-link class="text_xs" to="/">
        {{$t('forget_password')}}
      </router-link>
    </div>
  </div>
</template>