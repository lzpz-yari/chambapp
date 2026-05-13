<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Cliente / Historial</p>
        <h1 class="text-2xl font-bold text-gray-800">Historial de contrataciones</h1>
        <p class="text-gray-500 mt-2">
          Consulta visual de los servicios solicitados anteriormente.
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b">
              <th class="py-3">Servicio</th>
              <th class="py-3">Trabajador</th>
              <th class="py-3">Fecha</th>
              <th class="py-3">Costo</th>
              <th class="py-3">Estado</th>
            </tr>
          </thead>

          <tbody class="text-gray-700">
            <tr
              v-for="item in historial"
              :key="item.servicio"
              class="border-b last:border-b-0"
            >
              <td class="py-4">{{ item.servicio }}</td>
              <td class="py-4">{{ item.trabajador }}</td>
              <td class="py-4">{{ item.fecha }}</td>
              <td class="py-4">{{ item.costo }}</td>
              <td class="py-4">
                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="item.clase"
                >
                  {{ item.estado }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
const historial = [
  {
    servicio: 'Reparación eléctrica',
    trabajador: 'José Martínez',
    fecha: '20/04/2026',
    costo: '$450',
    estado: 'Completado',
    clase: 'bg-green-100 text-green-700'
  },
  {
    servicio: 'Mantenimiento de tuberías',
    trabajador: 'Luis Pérez',
    fecha: '18/04/2026',
    costo: '$380',
    estado: 'En proceso',
    clase: 'bg-blue-100 text-blue-700'
  },
  {
    servicio: 'Pintura interior',
    trabajador: 'Andrea Torres',
    fecha: '15/04/2026',
    costo: '$900',
    estado: 'Pendiente',
    clase: 'bg-yellow-100 text-yellow-700'
  }
]
</script>