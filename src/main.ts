import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from './store/i18n.js'

const pinia = createPinia()

const translate = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: messages
})

createApp(App).use(pinia).use(translate).mount('#app')
