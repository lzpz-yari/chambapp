<template>
  <DashboardShell :user="user" role-label="Panel del cliente"
    title="Encuentra trabajadores y administra tus solicitudes"
    subtitle="Consulta servicios disponibles, revisa tus contrataciones recientes y accede rápidamente a las secciones más importantes."
    :menu="menu" hero-class="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500" @logout="handleLogout">
    <!-- Cards -->
    <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <StatCard title="Servicios solicitados" value="12" description="Solicitudes realizadas dentro de la plataforma."
        icon="" iconBg="bg-blue-100 text-blue-700" />
      <StatCard title="Pagos registrados" value="5" description="Pagos guardados como referencia del cliente." icon=""
        iconBg="bg-emerald-100 text-emerald-700" />
      <StatCard title="Trabajadores guardados" value="8" description="Perfiles que el cliente ha revisado o guardado."
        icon="" iconBg="bg-violet-100 text-violet-700" />
      <StatCard title="Servicios activos" value="3" description="Solicitudes que actualmente están en proceso."
        icon="" iconBg="bg-amber-100 text-amber-700" />
    </section>

    <section class="grid xl:grid-cols-3 gap-6">
      <!-- Oficios -->
      <div class="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-xl font-bold text-slate-800">Servicios y oficios disponibles</h3>
            <p class="text-sm text-slate-500">Explora las categorías más consultadas.</p>
          </div>
          <button class="text-sm bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition">
            Ver más
          </button>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="border border-slate-200 rounded-2xl p-4 hover:border-blue-300 hover:bg-slate-50 transition">
            <h4 class="font-semibold text-slate-800">Electricista</h4>
            <p class="text-sm text-slate-500 mt-2">Instalaciones, reparaciones, mantenimiento general y revisiones.</p>
            <span class="inline-block mt-3 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Alta demanda</span>
          </div>

          <div class="border border-slate-200 rounded-2xl p-4 hover:border-blue-300 hover:bg-slate-50 transition">
            <h4 class="font-semibold text-slate-800">Plomero</h4>
            <p class="text-sm text-slate-500 mt-2">Reparación de fugas, tuberías, drenaje y mantenimiento.</p>
            <span
              class="inline-block mt-3 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Disponible</span>
          </div>

          <div class="border border-slate-200 rounded-2xl p-4 hover:border-blue-300 hover:bg-slate-50 transition">
            <h4 class="font-semibold text-slate-800">Carpintero</h4>
            <p class="text-sm text-slate-500 mt-2">Diseño, ajuste, reparación de muebles y trabajos en madera.</p>
            <span
              class="inline-block mt-3 text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full">Recomendado</span>
          </div>

          <div class="border border-slate-200 rounded-2xl p-4 hover:border-blue-300 hover:bg-slate-50 transition">
            <h4 class="font-semibold text-slate-800">Pintor</h4>
            <p class="text-sm text-slate-500 mt-2">Pintura interior, exterior, acabados y mantenimiento estético.</p>
            <span class="inline-block mt-3 text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full">Nuevo</span>
          </div>
        </div>
      </div>

      <!-- Accesos -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-5">Accesos rápidos</h3>

        <div class="space-y-3">
          <RouterLink to="/dashboard/cliente/servicios"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Buscar trabajadores
          </RouterLink>

          <RouterLink to="/dashboard/cliente/perfiles"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Ver perfiles
          </RouterLink>

          <RouterLink to="/dashboard/cliente/solicitar"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Solicitar contratación
          </RouterLink>

          <RouterLink to="/dashboard/cliente/historial"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Ver historial
          </RouterLink>

          <RouterLink to="/dashboard/cliente/pagos"
            class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50 block">
            Revisar pagos
          </RouterLink>
        </div>

        <div class="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
          <h4 class="font-semibold text-slate-800">Tip</h4>
          <p class="text-sm text-slate-500 mt-2">
            Revisa varios perfiles antes de contratar para comparar experiencia, oficio y disponibilidad.
          </p>
        </div>
      </div>
    </section>

    <!-- Solicitudes recientes -->
    <section class="mt-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div class="flex items-center justify-between mb-5">
        <div>
          <h3 class="text-xl font-bold text-slate-800">Solicitudes recientes</h3>
          <p class="text-sm text-slate-500">Resumen visual de tus últimas contrataciones.</p>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="text-left text-slate-500 border-b">
              <th class="py-3">Servicio</th>
              <th class="py-3">Trabajador</th>
              <th class="py-3">Fecha</th>
              <th class="py-3">Estado</th>
            </tr>
          </thead>
          <tbody class="text-slate-700">
            <tr class="border-b">
              <td class="py-4">Reparación eléctrica</td>
              <td class="py-4">José Martínez</td>
              <td class="py-4">20/04/2026</td>
              <td class="py-4"><span
                  class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Pendiente</span></td>
            </tr>
            <tr class="border-b">
              <td class="py-4">Mantenimiento de tuberías</td>
              <td class="py-4">Luis Pérez</td>
              <td class="py-4">18/04/2026</td>
              <td class="py-4"><span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">En proceso</span>
              </td>
            </tr>
            <tr>
              <td class="py-4">Pintura interior</td>
              <td class="py-4">Andrea López</td>
              <td class="py-4">15/04/2026</td>
              <td class="py-4"><span
                  class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">Completado</span></td>
            </tr>
          </tbody>
        </table>
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
  'Buscar trabajadores',
  'Mis solicitudes',
  'Historial',
  'Pagos'
]

function handleLogout() {
  logout()
  router.push('/login')
}
</script>