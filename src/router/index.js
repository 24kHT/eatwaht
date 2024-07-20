import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import rankIndex from '@/views/rank/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'rank',
        name: 'rank',
        component: rankIndex
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
