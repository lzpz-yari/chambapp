<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Administrador / Contrataciones</p>
        <h1 class="text-2xl font-bold text-gray-800">Supervisar contrataciones</h1>
        <p class="text-gray-500 mt-2">
          En esta sección se muestra una vista general de los servicios solicitados dentro de la plataforma.
        </p>
      </div>

      <div class="grid lg:grid-cols-4 gap-4 mb-6">
        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Contrataciones totales</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">67</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Pendientes</p>
          <h2 class="text-2xl font-bold text-yellow-600 mt-2">12</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">En proceso</p>
          <h2 class="text-2xl font-bold text-blue-600 mt-2">14</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Completadas</p>
          <h2 class="text-2xl font-bold text-green-600 mt-2">41</h2>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 overflow-x-auto">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <div>
            <h2 class="text-lg font-semibold text-gray-800">Listado de contrataciones</h2>
            <p class="text-sm text-gray-500">Seguimiento visual de solicitudes entre clientes y trabajadores.</p>
          </div>

          <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">
            Filtrar
          </button>
        </div>

        <table class="min-w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b">
              <th class="py-3">Servicio</th>
              <th class="py-3">Cliente</th>
              <th class="py-3">Trabajador</th>
              <th class="py-3">Fecha</th>
              <th class="py-3">Estado</th>
            </tr>
          </thead>

          <tbody class="text-gray-700">
            <tr
              v-for="contratacion in contrataciones"
              :key="contratacion.servicio"
              class="border-b last:border-b-0"
            >
              <td class="py-4">{{ contratacion.servicio }}</td>
              <td class="py-4">{{ contratacion.cliente }}</td>
              <td class="py-4">{{ contratacion.trabajador }}</td>
              <td class="py-4">{{ contratacion.fecha }}</td>
              <td class="py-4">
                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="contratacion.clase"
                >
                  {{ contratacion.estado }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <RouterLink
        to="/dashboard/admin"
        class="inline-block mt-6 text-blue-600 hover:underline"
      >
        Volver al dashboard
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const contrataciones = [
  {
    servicio: 'Reparación eléctrica',
    cliente: 'María López',
    trabajador: 'José Martínez',
    fecha: '22/04/2026',
    estado: 'Pendiente',
    clase: 'bg-yellow-100 text-yellow-700'
  },
  {
    servicio: 'Mantenimiento de tuberías',
    cliente: 'Ana Torres',
    trabajador: 'Luis Pérez',
    fecha: '21/04/2026',
    estado: 'En proceso',
    clase: 'bg-blue-100 text-blue-700'
  },
  {
    servicio: 'Pintura interior',
    cliente: 'Carlos Ramírez',
    trabajador: 'Andrea Torres',
    fecha: '20/04/2026',
    estado: 'Completada',
    clase: 'bg-green-100 text-green-700'
  },
  {
    servicio: 'Carpintería básica',
    cliente: 'Roberto García',
    trabajador: 'Miguel Sánchez',
    fecha: '18/04/2026',
    estado: 'Completada',
    clase: 'bg-green-100 text-green-700'
  }
]
</script>