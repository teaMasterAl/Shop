import { createRouter, createWebHashHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
  ],
})

export default router
