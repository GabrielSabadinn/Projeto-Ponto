import { createRouter, createWebHistory } from 'vue-router';
import Login from "../views/Login.vue"
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false } 
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false } 
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } 
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const userDataCookie = document.cookie.split('; ').find(row => row.startsWith('userData='));
    if (userDataCookie) {
      // Cookie encontrado, o usuário está autenticado
      next(); 
    } else {
      // Cookie não encontrado, redirecionar para a página de login
      next('/Login'); 
    }
  } else {
    // Página não requer autenticação, continuar
    next(); 
  }
});

export default router;