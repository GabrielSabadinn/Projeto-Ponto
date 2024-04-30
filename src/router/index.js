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
    const isAuthenticated = localStorage.getItem('token'); 
    if (isAuthenticated) {
      next(); 
    } else {
      next('/Login'); 
    }
  } else {
    next(); 
  }
});

export default router;
