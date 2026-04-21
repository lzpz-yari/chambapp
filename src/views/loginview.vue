<template>
  <div class="min-h-screen flex">

    <!-- Panel izquierdo — Formulario -->
    <div class="flex flex-col flex-1 w-full lg:w-1/2 overflow-y-auto px-6 py-10 bg-white">
      <div class="w-full max-w-md mx-auto mb-6">
        <a href="#" class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          Volver al inicio
        </a>
      </div>

      <!-- Aquí se usa el componente -->
      <LoginForm />
    </div>

    <!-- Panel derecho — Branding -->
    <div class="hidden lg:flex flex-col items-center justify-center w-1/2 bg-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-8 grid-rows-8 h-full w-full">
          <div v-for="i in 64" :key="i" class="border border-white/20"></div>
        </div>
      </div>
      <div class="relative z-10 text-center px-10">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white mb-3">ChambApp</h2>
        <p class="text-gray-400 text-sm max-w-xs leading-relaxed">
          Plataforma web para la contratación de servicios técnicos y oficios en tu comunidad.
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
import LoginForm from '../components/auth/LoginForm.vue'
</script>