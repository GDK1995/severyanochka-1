import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from './store/i18n.js'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const translate = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: messages
})

createApp(App).use(router).use(pinia).use(translate).mount('#app')
