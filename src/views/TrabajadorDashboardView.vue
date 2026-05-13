<template>
  <DashboardShell
    :user="user"
    roleLabel="Panel del Trabajador"
    title="Gestiona tus servicios y solicitudes"
    subtitle="Administra tu perfil profesional, revisa las solicitudes que recibes y consulta tu historial de trabajos."
    :menu="menu"
    heroClass="bg-gradient-to-r from-emerald-600 to-teal-500"
    @logout="handleLogout"
  >

    <!-- Tarjetas de estadísticas -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <StatCard
        title="Solicitudes recibidas"
        value="5"
        description="Solicitudes pendientes de respuesta"
        icon="S"
        iconBg="bg-amber-100 text-amber-700"
      />
      <StatCard
        title="Trabajos completados"
        value="12"
        description="Total de servicios finalizados"
        icon="C"
        iconBg="bg-green-100 text-green-700"
      />
      <StatCard
        title="Calificacion promedio"
        value="4.7"
        description="Basado en resenas de clientes"
        icon="R"
        iconBg="bg-blue-100 text-blue-700"
      />
    </div>

    <!-- Contenido principal -->
    <div class="grid lg:grid-cols-2 gap-6">

      <!-- Mi perfil profesional -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-slate-800">Mi perfil profesional</h2>
          <button class="text-sm text-blue-600 hover:text-blue-700 font-medium border border-blue-200 rounded-lg px-3 py-1.5 hover:bg-blue-50 transition">
            Editar
          </button>
        </div>
        <div class="space-y-3">
          <div class="border border-slate-200 rounded-xl p-4">
            <p class="text-xs text-slate-500 mb-1">Oficio</p>
            <p class="font-medium text-slate-800">{{ perfil.oficio }}</p>
          </div>
          <div class="border border-slate-200 rounded-xl p-4">
            <p class="text-xs text-slate-500 mb-1">Ubicacion</p>
            <p class="font-medium text-slate-800">{{ perfil.ubicacion }}</p>
          </div>
          <div class="border border-slate-200 rounded-xl p-4">
            <p class="text-xs text-slate-500 mb-1">Descripcion del servicio</p>
            <p class="text-sm text-slate-700 leading-relaxed">{{ perfil.descripcion }}</p>
          </div>
        </div>
      </div>

      <!-- Panel derecho -->
      <div class="space-y-6">

        <!-- Solicitudes recientes -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 class="text-lg font-semibold text-slate-800 mb-4">Solicitudes recientes</h2>
          <div class="space-y-3">
            <div
              v-for="solicitud in solicitudes"
              :key="solicitud.id"
              class="border border-slate-200 rounded-xl p-4 flex items-center justify-between"
            >
              <div>
                <p class="font-medium text-slate-800">{{ solicitud.cliente }}</p>
                <p class="text-xs text-slate-500 mt-0.5">{{ solicitud.servicio }}</p>
              </div>
              <span
                class="text-xs font-semibold px-3 py-1 rounded-full"
                :class="solicitud.estado === 'Pendiente'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-green-100 text-green-700'"
              >
                {{ solicitud.estado }}
              </span>
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
  'Mis servicios',
  'Solicitudes recibidas',
  'Historial de trabajos',
  'Mi cuenta',
]

const perfil = {
  oficio:      'Electricista',
  ubicacion:   'Oaxaca de Juárez, Oaxaca',
  descripcion: 'Instalaciones eléctricas residenciales y comerciales con mas de 5 años de experiencia. Trabajo garantizado y a precios accesibles.',
}

const solicitudes = [
  { id: 1, cliente: 'Ana García',     servicio: 'Instalacion de contactos',  estado: 'Pendiente' },
  { id: 2, cliente: 'Roberto Díaz',   servicio: 'Revision de tablero',       estado: 'Aceptado'  },
  { id: 3, cliente: 'Sofia Morales',  servicio: 'Instalacion de luminarias', estado: 'Pendiente' },
]

const acciones = [
  { label: 'Mis servicios publicados', desc: 'Gestiona los servicios que ofreces'    },
  { label: 'Historial de trabajos',    desc: 'Revisa tus contrataciones pasadas'     },
]

function handleLogout() {
  logout()
  router.push('/login')
}
</script>