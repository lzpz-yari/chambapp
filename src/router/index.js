import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/loginview.vue'
import RegisterView from '../views/RegisterView.vue'

import ClienteDashboardView from '../views/ClienteDashboardView.vue'
import TrabajadorDashboardView from '../views/TrabajadorDashboardView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'

import ClienteServiciosView from '../views/cliente/ClienteServiciosView.vue'
import ClientePerfilesView from '../views/cliente/ClientePerfilesView.vue'
import ClienteSolicitarView from '../views/cliente/ClienteSolicitarView.vue'
import ClienteHistorialView from '../views/cliente/ClienteHistorialView.vue'
import ClientePagosView from '../views/cliente/ClientePagosView.vue'

import TrabajadorSolicitudesView from '../views/trabajador/TrabajadorSolicitudesView.vue'
import TrabajadorPerfilView from '../views/trabajador/TrabajadorPerfilView.vue'
import TrabajadorHistorialView from '../views/trabajador/TrabajadorHistorialView.vue'
import TrabajadorEstadoView from '../views/trabajador/TrabajadorEstadoView.vue'

import AdminUsuariosView from '../views/admin/AdminUsuariosView.vue'
import AdminRegistrosView from '../views/admin/AdminRegistrosView.vue'
import AdminContratacionesView from '../views/admin/AdminContratacionesView.vue'
import AdminSistemaView from '../views/admin/AdminSistemaView.vue'

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
  path: '/dashboard/cliente/servicios',
  name: 'ClienteServicios',
  component: ClienteServiciosView,
  meta: {
    requiresAuth: true,
    role: 'cliente'
  }
},
{
  path: '/dashboard/cliente/perfiles',
  name: 'ClientePerfiles',
  component: ClientePerfilesView,
  meta: {
    requiresAuth: true,
    role: 'cliente'
  }
},
{
  path: '/dashboard/cliente/solicitar',
  name: 'ClienteSolicitar',
  component: ClienteSolicitarView,
  meta: {
    requiresAuth: true,
    role: 'cliente'
  }
},
{
  path: '/dashboard/cliente/historial',
  name: 'ClienteHistorial',
  component: ClienteHistorialView,
  meta: {
    requiresAuth: true,
    role: 'cliente'
  }
},
{
  path: '/dashboard/cliente/pagos',
  name: 'ClientePagos',
  component: ClientePagosView,
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
  path: '/dashboard/trabajador/solicitudes',
  name: 'TrabajadorSolicitudes',
  component: TrabajadorSolicitudesView,
  meta: {
    requiresAuth: true,
    role: 'trabajador'
  }
},
{
  path: '/dashboard/trabajador/perfil',
  name: 'TrabajadorPerfil',
  component: TrabajadorPerfilView,
  meta: {
    requiresAuth: true,
    role: 'trabajador'
  }
},
{
  path: '/dashboard/trabajador/historial',
  name: 'TrabajadorHistorial',
  component: TrabajadorHistorialView,
  meta: {
    requiresAuth: true,
    role: 'trabajador'
  }
},
{
  path: '/dashboard/trabajador/estado',
  name: 'TrabajadorEstado',
  component: TrabajadorEstadoView,
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
  },
  {
  path: '/dashboard/admin/usuarios',
  name: 'AdminUsuarios',
  component: AdminUsuariosView,
  meta: {
    requiresAuth: true,
    role: 'admin'
  }
},
{
  path: '/dashboard/admin/registros',
  name: 'AdminRegistros',
  component: AdminRegistrosView,
  meta: {
    requiresAuth: true,
    role: 'admin'
  }
},
{
  path: '/dashboard/admin/contrataciones',
  name: 'AdminContrataciones',
  component: AdminContratacionesView,
  meta: {
    requiresAuth: true,
    role: 'admin'
  }
},
{
  path: '/dashboard/admin/sistema',
  name: 'AdminSistema',
  component: AdminSistemaView,
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