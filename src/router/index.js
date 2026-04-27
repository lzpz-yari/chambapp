import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/loginview.vue'
import RegisterView from '../views/RegisterView.vue'

import ClienteDashboardView from '../views/ClienteDashboardView.vue'
import TrabajadorDashboardView from '../views/TrabajadorDashboardView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'

import { getCurrentUser, getDashboardPath } from '../services/auth'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      guestOnly: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: {
      guestOnly: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    beforeEnter: (to, from, next) => {
      const user = getCurrentUser()

      if (!user) {
        return next('/login')
      }

      return next(getDashboardPath(user.role))
    }
  },
  {
    path: '/dashboard/cliente',
    name: 'DashboardCliente',
    component: ClienteDashboardView,
    meta: {
      requiresAuth: true,
      role: 'cliente'
    }
  },
  {
    path: '/dashboard/trabajador',
    name: 'DashboardTrabajador',
    component: TrabajadorDashboardView,
    meta: {
      requiresAuth: true,
      role: 'trabajador'
    }
  },
  {
    path: '/dashboard/admin',
    name: 'DashboardAdmin',
    component: AdminDashboardView,
    meta: {
      requiresAuth: true,
      role: 'admin'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const user = getCurrentUser()

  if (to.meta.requiresAuth && !user) {
    return next('/login')
  }

  if (to.meta.role && user && user.role !== to.meta.role) {
    return next(getDashboardPath(user.role))
  }

  if (to.meta.guestOnly && user) {
    return next(getDashboardPath(user.role))
  }

  return next()
})

export default router