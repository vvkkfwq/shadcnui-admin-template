import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/components/LayoutView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: LayoutView,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/authorization',
        name: 'authorization',
        component: () => import('../views/AuthorizationView.vue')
      },
      {
        path: '/component',
        name: 'component',
        component: () => import('../views/ComponentView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
