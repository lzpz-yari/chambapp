<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Administrador / Registros</p>
        <h1 class="text-2xl font-bold text-gray-800">Revisar registros</h1>
        <p class="text-gray-500 mt-2">
          Vista visual para revisar altas, perfiles y movimientos recientes dentro de ChambApp.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-4 mb-6">
        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Registros nuevos</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">18</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Pendientes de validación</p>
          <h2 class="text-2xl font-bold text-yellow-600 mt-2">7</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Registros aprobados</p>
          <h2 class="text-2xl font-bold text-green-600 mt-2">11</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Registros recientes</h2>

          <div class="space-y-4">
            <div
              v-for="registro in registros"
              :key="registro.titulo"
              class="border border-gray-100 rounded-xl p-4"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="font-semibold text-gray-800">{{ registro.titulo }}</h3>
                  <p class="text-sm text-gray-500 mt-1">{{ registro.descripcion }}</p>
                  <p class="text-xs text-gray-400 mt-2">{{ registro.fecha }}</p>
                </div>

                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="registro.clase"
                >
                  {{ registro.estado }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Validaciones pendientes</h2>

          <div class="space-y-3">
            <div
              v-for="pendiente in pendientes"
              :key="pendiente.nombre"
              class="border border-gray-100 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
            >
              <div>
                <h3 class="font-medium text-gray-800">{{ pendiente.nombre }}</h3>
                <p class="text-sm text-gray-500">{{ pendiente.tipo }}</p>
              </div>

              <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Revisar
              </button>
            </div>
          </div>
        </div>
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
const registros = [
  {
    titulo: 'Nuevo trabajador registrado',
    descripcion: 'José Martínez completó su información profesional.',
    fecha: 'Hace 10 minutos',
    estado: 'Pendiente',
    clase: 'bg-yellow-100 text-yellow-700'
  },
  {
    titulo: 'Perfil actualizado',
    descripcion: 'Luis Pérez actualizó su zona de trabajo.',
    fecha: 'Hace 35 minutos',
    estado: 'Aprobado',
    clase: 'bg-green-100 text-green-700'
  },
  {
    titulo: 'Nuevo cliente registrado',
    descripcion: 'María López creó una cuenta dentro de la plataforma.',
    fecha: 'Hace 1 hora',
    estado: 'Activo',
    clase: 'bg-blue-100 text-blue-700'
  }
]

const pendientes = [
  {
    nombre: 'Carlos Ramírez',
    tipo: 'Validación de perfil de trabajador'
  },
  {
    nombre: 'Andrea Torres',
    tipo: 'Actualización de datos profesionales'
  },
  {
    nombre: 'Roberto García',
    tipo: 'Revisión de información de contacto'
  }
]
</script>