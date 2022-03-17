import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Login from '../views/Login.vue'
import Cadastro from "../views/Cadastro.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: ' login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    }
  ]
})

export default router
