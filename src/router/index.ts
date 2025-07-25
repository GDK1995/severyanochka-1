import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Main from './../views/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router