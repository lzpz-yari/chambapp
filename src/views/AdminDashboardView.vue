<template>
  <DashboardShell :user="user" role-label="Panel del administrador"
    title="Supervisa la actividad general de la plataforma"
    subtitle="Visualiza usuarios, contrataciones y el estado general del sistema en un panel más claro y agradable."
    :menu="menu" hero-class="bg-gradient-to-r from-slate-800 via-slate-700 to-indigo-700" @logout="handleLogout">
    <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <StatCard title="Usuarios registrados" value="120" description="Total de cuentas creadas en la plataforma."
        icon="" iconBg="bg-blue-100 text-blue-700" />
      <StatCard title="Trabajadores activos" value="48" description="Usuarios trabajadores con actividad reciente."
        icon="" iconBg="bg-emerald-100 text-emerald-700" />
      <StatCard title="Contrataciones" value="67" description="Solicitudes registradas dentro del sistema." icon=""
        iconBg="bg-violet-100 text-violet-700" />
      <StatCard title="Pendientes de revisión" value="9" description="Registros o actividades por revisar." icon=""
        iconBg="bg-amber-100 text-amber-700" />
    </section>

    <section class="grid xl:grid-cols-3 gap-6">
      <div class="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-xl font-bold text-slate-800">Resumen del sistema</h3>
            <p class="text-sm text-slate-500">Vista general de los módulos principales.</p>
          </div>
          <button class="text-sm bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition">
            Ver detalles
          </button>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-2xl border border-slate-200 p-5 bg-slate-50">
            <h4 class="font-semibold text-slate-800">Gestión de usuarios</h4>
            <p class="text-sm text-slate-500 mt-2">Control general de clientes, trabajadores y administradores.</p>
          </div>

          <div class="rounded-2xl border border-slate-200 p-5 bg-slate-50">
            <h4 class="font-semibold text-slate-800">Validación de registros</h4>
            <p class="text-sm text-slate-500 mt-2">Seguimiento de altas, perfiles y consistencia de datos.</p>
          </div>

          <div class="rounded-2xl border border-slate-200 p-5 bg-slate-50">
            <h4 class="font-semibold text-slate-800">Supervisión de contrataciones</h4>
            <p class="text-sm text-slate-500 mt-2">Revisión general del flujo entre clientes y trabajadores.</p>
          </div>

          <div class="rounded-2xl border border-slate-200 p-5 bg-slate-50">
            <h4 class="font-semibold text-slate-800">Mantenimiento del sistema</h4>
            <p class="text-sm text-slate-500 mt-2">Monitoreo básico del comportamiento general de la plataforma.</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-5">Accesos rápidos</h3>

        <div class="space-y-3">
          <RouterLink to="/dashboard/admin/usuarios"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Administrar usuarios
          </RouterLink>

          <RouterLink to="/dashboard/admin/registros"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Revisar registros
          </RouterLink>

          <RouterLink to="/dashboard/admin/contrataciones"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Supervisar contrataciones
          </RouterLink>

          <RouterLink to="/dashboard/admin/sistema"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Mantenimiento del sistema
          </RouterLink>
        </div>

        <div class="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
          <h4 class="font-semibold text-slate-800">Estado general</h4>
          <p class="text-sm text-slate-500 mt-2">
            La plataforma presenta actividad estable y crecimiento continuo en registros.
          </p>
        </div>
      </div>
    </section>

    <section class="mt-6 grid lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-4">Actividad reciente</h3>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>
            <div>
              <p class="font-medium text-slate-800">Nuevo trabajador registrado</p>
              <p class="text-sm text-slate-500">Hace 10 minutos</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 rounded-full bg-emerald-500 mt-2"></div>
            <div>
              <p class="font-medium text-slate-800">Nueva contratación registrada</p>
              <p class="text-sm text-slate-500">Hace 35 minutos</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 rounded-full bg-violet-500 mt-2"></div>
            <div>
              <p class="font-medium text-slate-800">Perfil actualizado correctamente</p>
              <p class="text-sm text-slate-500">Hace 1 hora</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-4">Distribución de usuarios</h3>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-slate-600">Clientes</span>
              <span class="font-medium text-slate-800">55%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-3">
              <div class="bg-blue-600 h-3 rounded-full w-[55%]"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-slate-600">Trabajadores</span>
              <span class="font-medium text-slate-800">35%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-3">
              <div class="bg-emerald-600 h-3 rounded-full w-[35%]"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-slate-600">Administradores</span>
              <span class="font-medium text-slate-800">10%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-3">
              <div class="bg-violet-600 h-3 rounded-full w-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DashboardShell>
</template>

<script setup>
import { useRouter } from 'vue-router'
import DashboardShell from '../components/dashboard/DashboardShell.vue'
import StatCard from '../components/dashboard/StatCard.vue'
import { getCurrentUser, logout } from '../services/auth'

const router = useRouter()
const user = getCurrentUser()

const menu = [
  'Inicio',
  'Usuarios',
  'Registros',
  'Contrataciones',
  'Sistema'
]

function handleLogout() {
  logout()
  router.push('/login')
}
</script>