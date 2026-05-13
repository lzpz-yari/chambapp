<template>
  <DashboardShell
    :user="user"
    roleLabel="Panel del Cliente"
    title="Encuentra al profesional que necesitas"
    subtitle="Busca trabajadores por oficio o ubicación y contrata el servicio que requieres de forma segura."
    :menu="menu"
    heroClass="bg-gradient-to-r from-blue-600 to-cyan-500"
    @logout="handleLogout"
  >

    <!-- Tarjetas de estadísticas -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <StatCard
        title="Trabajadores disponibles"
        value="24"
        description="Profesionales activos en tu zona"
        icon="T"
        iconBg="bg-blue-100 text-blue-700"
      />
      <StatCard
        title="Contrataciones activas"
        value="2"
        description="Servicios en curso actualmente"
        icon="A"
        iconBg="bg-amber-100 text-amber-700"
      />
      <StatCard
        title="Historial de servicios"
        value="7"
        description="Servicios contratados en total"
        icon="H"
        iconBg="bg-green-100 text-green-700"
      />
    </div>

    <!-- Contenido principal -->
    <div class="grid lg:grid-cols-2 gap-6">

      <!-- Trabajadores disponibles -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 class="text-lg font-semibold text-slate-800 mb-4">Trabajadores disponibles</h2>
        <div class="space-y-3">
          <div
            v-for="trabajador in trabajadores"
            :key="trabajador.id"
            class="border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:bg-slate-50 transition"
          >
            <div>
              <h3 class="font-medium text-slate-800">{{ trabajador.nombre }}</h3>
              <p class="text-sm text-slate-500">{{ trabajador.oficio }}</p>
              <p class="text-xs text-slate-400 mt-0.5">{{ trabajador.ubicacion }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-semibold text-amber-500">{{ trabajador.calificacion }} / 5</p>
              <button class="mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium">
                Ver perfil
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Acciones rápidas -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 class="text-lg font-semibold text-slate-800 mb-4">Acciones rápidas</h2>
        <div class="grid gap-3">
          <button
            v-for="accion in acciones"
            :key="accion.label"
            class="border border-slate-200 rounded-xl px-4 py-3 text-left hover:bg-slate-50 transition"
          >
            <p class="font-medium text-slate-800">{{ accion.label }}</p>
            <p class="text-xs text-slate-500 mt-0.5">{{ accion.desc }}</p>
          </button>
        </div>
      </div>

    </div>
  </DashboardShell>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getCurrentUser, logout } from '../services/auth'
import DashboardShell from '../components/dashboard/DashboardShell.vue'
import StatCard from '../components/dashboard/StatCard.vue'

const router = useRouter()
const user = getCurrentUser()

const menu = [
  'Inicio',
  'Buscar trabajadores',
  'Mis contrataciones',
  'Historial de pagos',
  'Mi cuenta',
]

const trabajadores = [
  { id: 1, nombre: 'Carlos Mendoza', oficio: 'Electricista',   ubicacion: 'Oaxaca de Juárez', calificacion: 4.8 },
  { id: 2, nombre: 'María López',    oficio: 'Pintora',        ubicacion: 'Etla, Oaxaca',      calificacion: 4.6 },
  { id: 3, nombre: 'Juan Pérez',     oficio: 'Plomero',        ubicacion: 'Oaxaca de Juárez',  calificacion: 4.5 },
]

const acciones = [
  { label: 'Buscar trabajadores',    desc: 'Filtra por oficio o ubicación'         },
  { label: 'Mis contrataciones',     desc: 'Revisa el estado de tus servicios'     },
  { label: 'Historial de pagos',     desc: 'Pagos realizados en la plataforma'     },
  { label: 'Dejar una resena',       desc: 'Califica a los trabajadores contratados' },
]

function handleLogout() {
  logout()
  router.push('/login')
}
</script>