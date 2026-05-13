<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Trabajador / Solicitudes</p>
        <h1 class="text-2xl font-bold text-gray-800">Solicitudes de servicio</h1>
        <p class="text-gray-500 mt-2">
          En esta sección el trabajador podrá revisar las solicitudes recibidas por parte de los clientes.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-4 mb-6">
        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Solicitudes pendientes</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">4</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Solicitudes aceptadas</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">3</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Solicitudes finalizadas</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">8</h2>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Solicitudes recientes</h2>

        <div class="space-y-4">
          <div
            v-for="solicitud in solicitudes"
            :key="solicitud.cliente"
            class="border border-gray-100 rounded-xl p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
          >
            <div>
              <h3 class="font-semibold text-gray-800">{{ solicitud.servicio }}</h3>
              <p class="text-sm text-gray-500 mt-1">
                Cliente: {{ solicitud.cliente }} · Zona: {{ solicitud.zona }}
              </p>
              <p class="text-sm text-gray-500 mt-1">
                Fecha solicitada: {{ solicitud.fecha }}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-2 sm:items-center">
              <span
                class="px-3 py-1 rounded-full text-xs font-medium text-center"
                :class="solicitud.clase"
              >
                {{ solicitud.estado }}
              </span>

              <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Ver detalle
              </button>
            </div>
          </div>
        </div>
      </div>

      <RouterLink
        to="/dashboard/trabajador"
        class="inline-block mt-6 text-blue-600 hover:underline"
      >
        Volver al dashboard
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const solicitudes = [
  {
    servicio: 'Reparación eléctrica',
    cliente: 'María López',
    zona: 'Oaxaca Centro',
    fecha: '22/04/2026',
    estado: 'Pendiente',
    clase: 'bg-yellow-100 text-yellow-700'
  },
  {
    servicio: 'Instalación de lámpara',
    cliente: 'Luis Hernández',
    zona: 'Col. Reforma',
    fecha: '23/04/2026',
    estado: 'Aceptada',
    clase: 'bg-green-100 text-green-700'
  },
  {
    servicio: 'Mantenimiento general',
    cliente: 'Ana Torres',
    zona: 'Xoxocotlán',
    fecha: '24/04/2026',
    estado: 'En proceso',
    clase: 'bg-blue-100 text-blue-700'
  },
  {
    servicio: 'Revisión de contactos',
    cliente: 'Carlos Pérez',
    zona: 'Santa Rosa',
    fecha: '25/04/2026',
    estado: 'Pendiente',
    clase: 'bg-yellow-100 text-yellow-700'
  }
]
</script>