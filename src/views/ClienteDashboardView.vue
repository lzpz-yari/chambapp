<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Dashboard</p>
          <h1 class="text-2xl font-bold text-gray-800">Panel del cliente</h1>
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
          <p class="text-sm text-gray-500">Servicios solicitados</p>
          <h3 class="text-2xl font-bold mt-2">3</h3>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm">
          <p class="text-sm text-gray-500">Pagos registrados</p>
          <h3 class="text-2xl font-bold mt-2">2</h3>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm">
          <p class="text-sm text-gray-500">Trabajadores guardados</p>
          <h3 class="text-2xl font-bold mt-2">5</h3>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Servicios u oficios disponibles</h2>

          <div class="space-y-3">
            <div class="border rounded-xl p-4">
              <h3 class="font-medium text-gray-800">Electricista</h3>
              <p class="text-sm text-gray-500">Instalaciones, mantenimiento y reparaciones.</p>
            </div>

            <div class="border rounded-xl p-4">
              <h3 class="font-medium text-gray-800">Plomero</h3>
              <p class="text-sm text-gray-500">Tuberías, fugas y mantenimiento general.</p>
            </div>

            <div class="border rounded-xl p-4">
              <h3 class="font-medium text-gray-800">Carpintero</h3>
              <p class="text-sm text-gray-500">Fabricación y reparación de muebles.</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Accesos rápidos</h2>

          <div class="grid gap-3">
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Buscar trabajadores
            </button>
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Ver perfiles
            </button>
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Solicitar contratación
            </button>
            <button class="border rounded-xl px-4 py-3 text-left hover:bg-gray-50">
              Revisar historial y pagos
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