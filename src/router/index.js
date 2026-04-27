import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/loginview.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import { isAuthenticated } from '../services/auth'

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
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: {
      guestOnly: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const loggedIn = isAuthenticated()

  if (to.meta.requiresAuth && !loggedIn) {
    return {
      path: '/login'
    }
  }

  if (to.meta.guestOnly && loggedIn) {
    return {
      path: '/dashboard'
    }
  }

  return true
})

export default router
