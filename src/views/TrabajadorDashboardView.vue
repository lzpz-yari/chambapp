<template>
  <DashboardShell
    :user="user"
    role-label="Panel del trabajador"
    title="Gestiona tus solicitudes y actividad profesional"
    subtitle="Consulta solicitudes recientes, revisa tu desempeño y accede a las herramientas visuales más importantes de tu perfil."
    :menu="menu"
    hero-class="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-500"
    @logout="handleLogout"
  >
    <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Solicitudes pendientes"
        value="7"
        description="Solicitudes recibidas que esperan revisión."
        icon="📥"
        iconBg="bg-yellow-100 text-yellow-700"
      />
      <StatCard
        title="Trabajos completados"
        value="26"
        description="Servicios marcados como realizados."
        icon="✅"
        iconBg="bg-emerald-100 text-emerald-700"
      />
      <StatCard
        title="Calificación promedio"
        value="4.8/5"
        description="Valoración general del trabajador."
        icon="⭐"
        iconBg="bg-violet-100 text-violet-700"
      />
      <StatCard
        title="Servicios activos"
        value="4"
        description="Solicitudes que se encuentran en proceso."
        icon="🧰"
        iconBg="bg-blue-100 text-blue-700"
      />
    </section>

    <section class="grid xl:grid-cols-3 gap-6">
      <!-- Solicitudes -->
      <div class="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-xl font-bold text-slate-800">Solicitudes recientes</h3>
            <p class="text-sm text-slate-500">Resumen de nuevos trabajos disponibles.</p>
          </div>
          <button class="text-sm bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition">
            Ver todas
          </button>
        </div>

        <div class="space-y-4">
          <div class="border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 class="font-semibold text-slate-800">Reparación eléctrica</h4>
              <p class="text-sm text-slate-500 mt-1">Cliente: María López · Zona: Oaxaca Centro</p>
            </div>
            <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs w-fit">Pendiente</span>
          </div>

          <div class="border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 class="font-semibold text-slate-800">Instalación de lámpara</h4>
              <p class="text-sm text-slate-500 mt-1">Cliente: Luis Hernández · Zona: Reforma</p>
            </div>
            <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs w-fit">En proceso</span>
          </div>

          <div class="border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 class="font-semibold text-slate-800">Mantenimiento general</h4>
              <p class="text-sm text-slate-500 mt-1">Cliente: Ana Torres · Zona: Xoxocotlán</p>
            </div>
            <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs w-fit">Aceptada</span>
          </div>
        </div>
      </div>

      <!-- Accesos -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-5">Accesos rápidos</h3>

        <div class="space-y-3">
          <button class="w-full text-left border border-slate-200 rounded-2xl px-4 py-4 hover:bg-slate-50 transition">
            Ver solicitudes
          </button>
          <button class="w-full text-left border border-slate-200 rounded-2xl px-4 py-4 hover:bg-slate-50 transition">
            Consultar historial
          </button>
          <button class="w-full text-left border border-slate-200 rounded-2xl px-4 py-4 hover:bg-slate-50 transition">
            Editar perfil profesional
          </button>
          <button class="w-full text-left border border-slate-200 rounded-2xl px-4 py-4 hover:bg-slate-50 transition">
            Ver estado de trabajos
          </button>
        </div>

        <div class="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
          <h4 class="font-semibold text-slate-800">Actividad destacada</h4>
          <p class="text-sm text-slate-500 mt-2">
            Has aumentado tu calificación y tu número de servicios completados esta semana.
          </p>
        </div>
      </div>
    </section>

    <section class="mt-6 grid lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-4">Resumen profesional</h3>
        <div class="space-y-4 text-sm text-slate-600">
          <div class="flex justify-between border-b pb-3">
            <span>Oficio principal</span>
            <span class="font-medium text-slate-800">Electricista</span>
          </div>
          <div class="flex justify-between border-b pb-3">
            <span>Experiencia</span>
            <span class="font-medium text-slate-800">5 años</span>
          </div>
          <div class="flex justify-between border-b pb-3">
            <span>Zona de trabajo</span>
            <span class="font-medium text-slate-800">Oaxaca de Juárez</span>
          </div>
          <div class="flex justify-between">
            <span>Disponibilidad</span>
            <span class="font-medium text-emerald-700">Disponible</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-4">Últimos trabajos</h3>
        <div class="space-y-4">
          <div class="border border-slate-200 rounded-2xl p-4">
            <h4 class="font-semibold text-slate-800">Revisión eléctrica de vivienda</h4>
            <p class="text-sm text-slate-500 mt-1">Completado hace 2 días</p>
          </div>
          <div class="border border-slate-200 rounded-2xl p-4">
            <h4 class="font-semibold text-slate-800">Cambio de instalación básica</h4>
            <p class="text-sm text-slate-500 mt-1">Completado hace 4 días</p>
          </div>
          <div class="border border-slate-200 rounded-2xl p-4">
            <h4 class="font-semibold text-slate-800">Mantenimiento preventivo</h4>
            <p class="text-sm text-slate-500 mt-1">Completado hace 1 semana</p>
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
  'Solicitudes',
  'Perfil profesional',
  'Historial',
  'Estado de trabajos'
]

function handleLogout() {
  logout()
  router.push('/login')
}
</script>