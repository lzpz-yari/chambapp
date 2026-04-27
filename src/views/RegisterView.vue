<template>
  <div class="min-h-screen flex">

    <!-- Panel izquierdo — Formulario -->
    <div class="flex flex-col w-full lg:w-1/2 min-h-screen bg-white px-6 py-10 overflow-y-auto">

      <!-- Volver -->
      <div class="w-full max-w-md mx-auto mb-8">
        <RouterLink to="/login"
          class="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-blue-600 transition-colors duration-200 group">
          <svg class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          Volver al login
        </RouterLink>
      </div>

      <!-- Componente del formulario -->
      <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto animate-fadein">
        <RegisterForm />
      </div>

    </div>

    <!-- Panel derecho — Branding -->
    <div class="hidden lg:flex flex-col items-center justify-center w-1/2 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1d4ed8 100%);">

      <!-- Círculos decorativos -->
      <div class="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-10"
        style="background: radial-gradient(circle, #60a5fa, transparent);">
      </div>
      <div class="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full opacity-10"
        style="background: radial-gradient(circle, #818cf8, transparent);">
      </div>

      <!-- Cuadrícula -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-8 grid-rows-8 h-full w-full">
          <div v-for="i in 64" :key="i" class="border border-white"></div>
        </div>
      </div>

      <!-- Contenido -->
      <div class="relative z-10 text-center px-12 animate-fadein">
        <div class="flex items-center justify-center mb-6">
          <div class="absolute w-24 h-24 rounded-full bg-blue-500 opacity-20 animate-ping-slow"></div>
          <div class="relative w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
        </div>

        <h2 class="text-4xl font-extrabold text-white mb-3 tracking-tight">Únete a ChambApp</h2>
        <p class="text-blue-200 text-sm max-w-xs leading-relaxed mx-auto mb-10">
          Crea tu perfil de trabajador y empieza a recibir solicitudes de clientes en tu área.
        </p>

        <!-- Pasos del registro -->
        <div class="space-y-3 text-left">
          <div v-for="paso in pasos" :key="paso.text"
            class="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <span class="text-xl">{{ paso.icon }}</span>
            <span class="text-white/80 text-sm">{{ paso.text }}</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import RegisterForm from '../components/auth/RegisterForm.vue'

const pasos = [
  { text: 'Completa tu perfil con tu oficio y experiencia' },
  {  text: 'Tu cuenta se activa de inmediato' },
  {  text: 'Recibe solicitudes de clientes cercanos' },
]
</script>

<style scoped>
@keyframes fadein {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes ping-slow {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50%       { transform: scale(1.4); opacity: 0; }
}
.animate-fadein { animation: fadein 0.6s ease both; }
.animate-ping-slow { animation: ping-slow 2.5s ease-in-out infinite; }
</style>