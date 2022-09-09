import { createRouter, createWebHistory } from 'vue-router'
import MovieView from '../components/MovieView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'MovieView',
      component:MovieView
    },
  ]
})

export default router
