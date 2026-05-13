<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Trabajador / Historial</p>
        <h1 class="text-2xl font-bold text-gray-800">Historial de trabajos</h1>
        <p class="text-gray-500 mt-2">
          Consulta visual de los servicios realizados por el trabajador.
        </p>
      </div>

      <div class="grid lg:grid-cols-4 gap-4 mb-6">
        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Trabajos totales</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">26</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Completados</p>
          <h2 class="text-2xl font-bold text-green-600 mt-2">22</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">En proceso</p>
          <h2 class="text-2xl font-bold text-blue-600 mt-2">3</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Cancelados</p>
          <h2 class="text-2xl font-bold text-red-600 mt-2">1</h2>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b">
              <th class="py-3">Servicio</th>
              <th class="py-3">Cliente</th>
              <th class="py-3">Fecha</th>
              <th class="py-3">Pago</th>
              <th class="py-3">Estado</th>
            </tr>
          </thead>

          <tbody class="text-gray-700">
            <tr
              v-for="trabajo in historial"
              :key="trabajo.servicio"
              class="border-b last:border-b-0"
            >
              <td class="py-4">{{ trabajo.servicio }}</td>
              <td class="py-4">{{ trabajo.cliente }}</td>
              <td class="py-4">{{ trabajo.fecha }}</td>
              <td class="py-4">{{ trabajo.pago }}</td>
              <td class="py-4">
                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="trabajo.clase"
                >
                  {{ trabajo.estado }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
const historial = [
  {
    servicio: 'Revisión eléctrica de vivienda',
    cliente: 'María López',
    fecha: '20/04/2026',
    pago: '$450',
    estado: 'Completado',
    clase: 'bg-green-100 text-green-700'
  },
  {
    servicio: 'Instalación de lámpara',
    cliente: 'Luis Hernández',
    fecha: '18/04/2026',
    pago: '$300',
    estado: 'Completado',
    clase: 'bg-green-100 text-green-700'
  },
  {
    servicio: 'Mantenimiento preventivo',
    cliente: 'Ana Torres',
    fecha: '15/04/2026',
    pago: '$600',
    estado: 'En proceso',
    clase: 'bg-blue-100 text-blue-700'
  },
  {
    servicio: 'Cambio de contactos',
    cliente: 'Carlos Pérez',
    fecha: '12/04/2026',
    pago: '$250',
    estado: 'Cancelado',
    clase: 'bg-red-100 text-red-700'
  }
]
</script>