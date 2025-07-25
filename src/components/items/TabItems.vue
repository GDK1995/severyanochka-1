<script setup lang="ts">
import { ref, computed } from 'vue'
import Almaty from './cities/Almaty.vue'
import Astana from './cities/Astana.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tabs = [
  {
    city: `${t('almaty')}`,
    component: Almaty
  },
  {
    city: `${t('astana')}`,
    component: Astana
  },
  {
    city: `${t('shymkent')}`,
    component: Almaty
  },
  {
    city: `${t('aktau')}`,
    component: Astana
  }
]

const activeComponent = ref(0)
const currentComponent = computed(() => tabs.find((tab, index) => activeComponent.value === index).component || null)

function activateTab(ind: number) {
  activeComponent.value = ind
}
</script>

<template>
  <div class="tabs">
    <div class="tabs_nav">
      <button
        v-for="(tab, index) in tabs"
        :key="tab + index"
        :class="{active: index === activeComponent}"
        @click="activateTab(index)">
        <span class="text_xs">{{tab.city}}</span>
      </button>
    </div>
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>