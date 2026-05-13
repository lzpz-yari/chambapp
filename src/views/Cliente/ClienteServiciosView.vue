<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Cliente / Servicios</p>
        <h1 class="text-2xl font-bold text-gray-800">Buscar trabajadores y servicios</h1>
        <p class="text-gray-500 mt-2">
          En esta sección el cliente podrá consultar los oficios disponibles dentro de ChambApp.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <div
          v-for="servicio in servicios"
          :key="servicio.nombre"
          class="bg-white rounded-2xl shadow-sm p-5 border border-gray-100"
        >
          <h2 class="font-semibold text-gray-800">{{ servicio.nombre }}</h2>
          <p class="text-sm text-gray-500 mt-2">{{ servicio.descripcion }}</p>

          <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
            Ver trabajadores
          </button>
        </div>
      </div>

      <RouterLink
        to="/dashboard/cliente"
        class="inline-block mt-6 text-blue-600 hover:underline"
      >
        Volver al dashboard
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const servicios = [
  {
    nombre: 'Electricista',
    descripcion: 'Instalaciones, reparaciones eléctricas y mantenimiento general.'
  },
  {
    nombre: 'Plomero',
    descripcion: 'Reparación de fugas, tuberías, drenaje y mantenimiento.'
  },
  {
    nombre: 'Carpintero',
    descripcion: 'Fabricación, reparación y ajuste de muebles o estructuras de madera.'
  },
  {
    nombre: 'Pintor',
    descripcion: 'Pintura interior, exterior, acabados y mantenimiento estético.'
  },
  {
    nombre: 'Albañil',
    descripcion: 'Construcción, reparaciones y trabajos generales de obra.'
  },
  {
    nombre: 'Jardinero',
    descripcion: 'Limpieza, mantenimiento y diseño básico de jardines.'
  }
]
</script>