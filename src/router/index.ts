import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Main from './../views/Main.vue'
import SearchPage from './../views/SearchPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/results',
    name: 'Search page',
    component: SearchPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router