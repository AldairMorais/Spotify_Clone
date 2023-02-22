import { createRouter, createWebHistory } from 'vue-router'
import Spt from '../views/Spt.vue'
import pes from '../views/pes.vue';
import login from '../views/login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Spt',
      component: Spt
    },
    {
      path: '/pes',
      name: 'pes',
      component: pes
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router
