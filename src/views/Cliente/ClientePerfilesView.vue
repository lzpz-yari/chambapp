<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Cliente / Perfiles</p>
        <h1 class="text-2xl font-bold text-gray-800">Perfiles de trabajadores</h1>
        <p class="text-gray-500 mt-2">
          Aquí el cliente podrá revisar información básica de trabajadores disponibles.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-4">
        <div
          v-for="trabajador in trabajadores"
          :key="trabajador.nombre"
          class="bg-white rounded-2xl shadow-sm p-5 border border-gray-100"
        >
          <div class="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
            {{ trabajador.iniciales }}
          </div>

          <h2 class="font-semibold text-gray-800">{{ trabajador.nombre }}</h2>
          <p class="text-sm text-blue-600 mt-1">{{ trabajador.oficio }}</p>
          <p class="text-sm text-gray-500 mt-2">{{ trabajador.descripcion }}</p>

          <div class="mt-4 flex items-center justify-between text-sm">
            <span class="text-gray-500">Experiencia</span>
            <span class="font-medium text-gray-800">{{ trabajador.experiencia }}</span>
          </div>

          <div class="mt-2 flex items-center justify-between text-sm">
            <span class="text-gray-500">Calificación</span>
            <span class="font-medium text-yellow-600">{{ trabajador.calificacion }}</span>
          </div>

          <button class="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
            Ver perfil
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
const trabajadores = [
  {
    iniciales: 'JM',
    nombre: 'José Martínez',
    oficio: 'Electricista',
    descripcion: 'Especialista en instalaciones eléctricas residenciales.',
    experiencia: '5 años',
    calificacion: '4.8/5'
  },
  {
    iniciales: 'LP',
    nombre: 'Luis Pérez',
    oficio: 'Plomero',
    descripcion: 'Atención de fugas, mantenimiento y reparación de tuberías.',
    experiencia: '4 años',
    calificacion: '4.6/5'
  },
  {
    iniciales: 'AT',
    nombre: 'Andrea Torres',
    oficio: 'Pintora',
    descripcion: 'Trabajos de pintura interior, exterior y acabados decorativos.',
    experiencia: '3 años',
    calificacion: '4.9/5'
  }
]
</script>