import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/presentation/pages/Home/HomeView.vue'
import RegisterView from '@/presentation/pages/Register/RegisterView.vue'
import CreateRegister from '@/presentation/pages/Register/CreateRegister.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registers',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/register-create',
    name: 'CreateRegister',
    component: CreateRegister
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
