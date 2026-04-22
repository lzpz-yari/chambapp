<template>
  <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">

    <!-- Título -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold text-gray-800 mb-1">Iniciar sesión</h1>
      <p class="text-sm text-gray-500">Ingresa tu correo y contraseña para continuar</p>
    </div>

    <!-- Botones sociales -->
    <div class="grid grid-cols-2 gap-3 mb-5">
      <button class="inline-flex items-center justify-center gap-2 py-3 text-sm font-normal text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.75 10.19c0-.72-.06-1.24-.19-1.79H10.18v3.25h4.92c-.1.81-.63 2.02-1.82 2.84l-.02.11 2.65 2.01.18.02C17.78 15.1 18.75 12.86 18.75 10.19z" fill="#4285F4"/>
          <path d="M10.18 18.75c2.41 0 4.43-.78 5.91-2.12l-2.82-2.14c-.75.52-1.76.88-3.09.88-2.36 0-4.37-1.53-5.08-3.63l-.1.01-2.76 2.09-.04.1C3.67 16.79 6.69 18.75 10.18 18.75z" fill="#34A853"/>
          <path d="M5.1 11.73c-.19-.55-.3-1.13-.3-1.73s.11-1.18.29-1.73l-.01-.12L2.29 6.03l-.09.04A8.75 8.75 0 001.25 10c0 1.41.34 2.74.95 3.93l2.9-2.2z" fill="#FBBC05"/>
          <path d="M10.18 4.63c1.68 0 2.81.71 3.45 1.3l2.52-2.41C14.6 2.12 12.59 1.25 10.18 1.25c-3.49 0-6.51 1.96-7.98 4.82l2.89 2.2c.72-2.11 2.72-3.64 5.09-3.64z" fill="#EB4335"/>
        </svg>
        Entrar con Google
      </button>
      <button class="inline-flex items-center justify-center gap-2 py-3 text-sm font-normal text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
        <svg width="18" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.67 1.875h2.757L12.405 8.758 19.49 18.125h-5.548l-4.345-5.681-4.971 5.681H1.867l6.442-7.362L1.512 1.875H7.2l3.928 5.192 4.542-5.192zM14.703 16.475h1.528L6.371 3.438H4.731l9.972 13.037z" fill="currentColor"/>
        </svg>
        Entrar con X
      </button>
    </div>

    <!-- Separador -->
    <div class="relative py-4">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-200"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-4 py-1 text-gray-400 bg-white">O</span>
      </div>
    </div>

    <!-- Error -->
    <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
      {{ errorMessage }}
    </div>

    <!-- Formulario -->
    <form @submit.prevent="handleLogin" class="space-y-5">

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.email"
          type="email"
          placeholder="ejemplo@correo.com"
          class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <!-- Contraseña -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Contraseña <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Ingresa tu contraseña"
            class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-11"
          />
          <button type="button" @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.084-3.414M6.53 6.53A9.97 9.97 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-1.357 2.574M6.53 6.53L3 3m3.53 3.53l11.94 11.94M3 3l18 18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Recordarme + Olvidé -->
      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2 cursor-pointer">
          <input v-model="form.remember" type="checkbox"
            class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
          <span class="text-sm text-gray-600">Mantener sesión</span>
        </label>
        <a href="#" class="text-sm text-blue-600 hover:text-blue-700 font-medium">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <!-- Botón submit -->
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition duration-200 text-sm"
      >
        {{ isLoading ? 'Validando...' : 'Iniciar sesión' }}
      </button>

    </form>

    <!-- Link registro -->
    <p class="text-sm text-center text-gray-600 mt-5">
      ¿No tienes cuenta?
      <RouterLink to="/register" class="text-blue-600 hover:text-blue-700 font-medium">
        Regístrate
      </RouterLink>
    </p>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { loginWithEmail } from '../../services/auth'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const showPassword = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)

async function handleLogin() {
  errorMessage.value = ''

  if (!form.email || !form.password) {
    errorMessage.value = 'Por favor completa todos los campos.'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errorMessage.value = 'Ingresa un correo electrónico válido.'
    return
  }

  if (form.password.length < 6) {
    errorMessage.value = 'La contraseña debe tener al menos 6 caracteres.'
    return
  }

  isLoading.value = true

  try {
    await loginWithEmail(form.email, form.password, form.remember)
    router.push('/dashboard')
  } catch (error) {
    errorMessage.value = error.message || 'No fue posible iniciar sesión.'
  } finally {
    isLoading.value = false
  }
}
</script>
