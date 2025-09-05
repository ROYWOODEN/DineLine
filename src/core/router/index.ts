import BookingPage from '@/pages/BookingPage/BookingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BookingPage,
    },
  ],
})

export default router
