import Vue from 'vue'
import VueRouter from 'vue-router'
import App_index from '@/views/App_index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App_index',
    component: App_index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
