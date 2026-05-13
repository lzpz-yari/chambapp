<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Administrador / Sistema</p>
        <h1 class="text-2xl font-bold text-gray-800">Mantenimiento del sistema</h1>
        <p class="text-gray-500 mt-2">
          Vista visual para representar acciones generales de administración, revisión y mantenimiento.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-4 mb-6">
        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Estado general</p>
          <h2 class="text-2xl font-bold text-green-600 mt-2">Activo</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Alertas</p>
          <h2 class="text-2xl font-bold text-yellow-600 mt-2">3</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Última revisión</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">Hoy</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Opciones de mantenimiento</h2>

          <div class="space-y-3">
            <button class="w-full text-left border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
              Revisar estado de usuarios
            </button>

            <button class="w-full text-left border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
              Ver actividad general
            </button>

            <button class="w-full text-left border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
              Consultar reportes visuales
            </button>

            <button class="w-full text-left border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
              Revisar alertas del sistema
            </button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Bitácora del sistema</h2>

          <div class="space-y-4">
            <div
              v-for="evento in eventos"
              :key="evento.titulo"
              class="flex items-start gap-3"
            >
              <span
                class="w-3 h-3 rounded-full mt-2"
                :class="evento.color"
              ></span>

              <div>
                <h3 class="font-medium text-gray-800">{{ evento.titulo }}</h3>
                <p class="text-sm text-gray-500">{{ evento.descripcion }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ evento.tiempo }}</p>
              </div>
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
const eventos = [
  {
    titulo: 'Sistema revisado',
    descripcion: 'La plataforma se encuentra operando correctamente.',
    tiempo: 'Hace 15 minutos',
    color: 'bg-green-500'
  },
  {
    titulo: 'Nuevo registro pendiente',
    descripcion: 'Un trabajador requiere revisión de información.',
    tiempo: 'Hace 1 hora',
    color: 'bg-yellow-500'
  },
  {
    titulo: 'Actividad actualizada',
    descripcion: 'Se actualizaron datos visuales del panel administrativo.',
    tiempo: 'Hace 2 horas',
    color: 'bg-blue-500'
  }
]
</script>