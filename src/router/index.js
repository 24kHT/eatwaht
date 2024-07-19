import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Layout
  }
]

const router = new VueRouter({
  routes
})

export default router
