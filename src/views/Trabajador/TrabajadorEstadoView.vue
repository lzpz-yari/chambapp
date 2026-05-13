<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Trabajador / Estado</p>
        <h1 class="text-2xl font-bold text-gray-800">Estado de trabajos</h1>
        <p class="text-gray-500 mt-2">
          Seguimiento visual de los trabajos actuales del trabajador.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <div
          v-for="columna in columnas"
          :key="columna.titulo"
          class="bg-white rounded-2xl shadow-sm p-5 border border-gray-100"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="font-semibold text-gray-800">{{ columna.titulo }}</h2>
            <span
              class="px-3 py-1 rounded-full text-xs font-medium"
              :class="columna.clase"
            >
              {{ columna.trabajos.length }}
            </span>
          </div>

          <div class="space-y-3">
            <div
              v-for="trabajo in columna.trabajos"
              :key="trabajo.servicio"
              class="border border-gray-100 rounded-xl p-4"
            >
              <h3 class="font-medium text-gray-800">{{ trabajo.servicio }}</h3>
              <p class="text-sm text-gray-500 mt-1">Cliente: {{ trabajo.cliente }}</p>
              <p class="text-sm text-gray-500 mt-1">Fecha: {{ trabajo.fecha }}</p>

              <button class="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">
                Ver seguimiento
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
const columnas = [
  {
    titulo: 'Pendientes',
    clase: 'bg-yellow-100 text-yellow-700',
    trabajos: [
      {
        servicio: 'Reparación eléctrica',
        cliente: 'María López',
        fecha: '22/04/2026'
      },
      {
        servicio: 'Revisión de contactos',
        cliente: 'Carlos Pérez',
        fecha: '25/04/2026'
      }
    ]
  },
  {
    titulo: 'En proceso',
    clase: 'bg-blue-100 text-blue-700',
    trabajos: [
      {
        servicio: 'Mantenimiento general',
        cliente: 'Ana Torres',
        fecha: '24/04/2026'
      }
    ]
  },
  {
    titulo: 'Completados',
    clase: 'bg-green-100 text-green-700',
    trabajos: [
      {
        servicio: 'Instalación de lámpara',
        cliente: 'Luis Hernández',
        fecha: '18/04/2026'
      },
      {
        servicio: 'Cambio de apagadores',
        cliente: 'Roberto García',
        fecha: '15/04/2026'
      }
    ]
  }
]
</script>