import { createRouter, createWebHistory } from 'vue-router';
import Login from "../views/Login.vue"
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;