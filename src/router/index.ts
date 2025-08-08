import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Main from './../views/Main.vue'
import SearchPage from './../views/SearchPage.vue'
import CatalogPage from './../views/CatalogPage.vue'

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
  },
  {
    path: '/catalog',
    name: 'Catalog page',
    component: CatalogPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router