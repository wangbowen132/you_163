import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('@/views/Classify')
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('@/views/Topic')
  },
  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: () => import('@/views/Shoppingcart')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/views/Personal')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
