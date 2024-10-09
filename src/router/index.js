import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatorView from '@/views/CreatorView.vue'
import CartView from '@/views/CartView.vue'
import EditView from '@/views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'creator',
      component: CreatorView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView
    }
  ]
})

export default router
