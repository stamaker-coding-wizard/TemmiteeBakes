import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import Products from '../views/Products.vue'
import PastOrders from '../views/PastOrders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    
    {
      path: '/About',
      name: 'AboutView',
      component: AboutView
    },
    
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/PastOrders',
      name: 'PastOrders',
      component: PastOrders
    }
  ]
})

export default router
