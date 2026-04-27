<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Dashboard</p>
          <h1 class="text-2xl font-bold text-gray-800">Panel del administrador</h1>
          <p class="text-sm text-gray-500">Bienvenido, {{ user?.name }}</p>
        </div>

        <button
          @click="handleLogout"
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Cerrar sesión
        </button>
      </div>

      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white p-5 rounded-2xl shadow-sm">
          <p class="text-sm text-gray-500">Usuarios registrados</p>
          <h3 class="text-2xl font-bold mt-2">20</h3>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm">
          <p class="text-sm text-gray-500">Trabajadores activos</p>
          <h3 class="text-2xl font-bold mt-2">8</h3>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm">
          <p class="text-sm text-gray-500">Contrataciones registradas</p>
          <h3 class="text-2xl font-bold mt-2">14</h3>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Panel general</h2>

          <div class="space-y-3">
            <div class="border rounded-xl p-4">
              <h3 class="font-medium text-gray-800">Usuarios del sistema</h3>
              <p class="text-sm text-gray-500">Revisión y control general de usuarios.</p>
            </div>

            <div class="border rounded-xl p-4">
              <h3 class="font-medium text-gray-800">Validación de información</h3>
              <p class="text-sm text-gray-500">Seguimiento básico de perfiles y registros.</p>
            </div>

            <div class="border rounded-xl p-4">
              <h3 class="font-medium text-gray-800">Contrataciones</h3>
              <p class="text-sm text-gray-500">Supervisión general del flujo de servicios.</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Accesos rápidos</h2>

          <div class="grid gap-3">
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Administrar usuarios
            </button>
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Revisar registros
            </button>
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Dar seguimiento a contrataciones
            </button>
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Mantenimiento general del sistema
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getCurrentUser, logout } from '../services/auth'

const router = useRouter()
const user = getCurrentUser()

function handleLogout() {
  logout()
  router.push('/login')
}
</script>