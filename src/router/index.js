import { createRouter, createWebHistory } from 'vue-router'
import DownloadPage from '../components/DownloadPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'DownloadPage',
      component:DownloadPage
    },
  ]
})

export default router
