import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home/index.vue'
import TaskPage from '@/pages/Task/index.vue'
import CreateTaskPage from '@/pages/Task/Create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/task/:id',
      name: 'task',
      // component: () => import('../views/AboutView.vue')
      component: TaskPage
    },
    {
      path: '/task/create',
      name: 'task-create',
      // component: () => import('../views/AboutView.vue')
      component: CreateTaskPage
    },
  ]
})

export default router
