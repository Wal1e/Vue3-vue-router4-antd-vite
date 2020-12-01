import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// createRouter创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/',
      component: Home,
      name: "Home"
    }
  ]
})

export default router