<template>
  <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">

    <!-- Título -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold text-gray-800 mb-1">Crear cuenta</h1>
      <p class="text-sm text-gray-500">Regístrate como trabajador y empieza a ofrecer tus servicios</p>
    </div>

    <!-- Error -->
    <div v-if="errorMessage"
      class="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
      {{ errorMessage }}
    </div>

    <!-- Formulario -->
    <form @submit.prevent="handleRegister" class="space-y-4">

      <!-- Nombre completo -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.nombre"
          type="text"
          placeholder="Ej. Juan Pérez García"
          class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

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

      <!-- Teléfono -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Teléfono <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.telefono"
          type="tel"
          placeholder="Ej. 9511234567"
          class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <!-- Oficio -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Oficio o especialidad <span class="text-red-500">*</span>
        </label>
        <select
          v-model="form.oficio"
          class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
        >
          <option value="" disabled>Selecciona tu oficio</option>
          <option v-for="oficio in oficios" :key="oficio" :value="oficio">
            {{ oficio }}
          </option>
        </select>
      </div>

      <!-- Ubicación -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Ubicación <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.ubicacion"
          type="text"
          placeholder="Ej. Oaxaca de Juárez, Oaxaca"
          class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <!-- Descripción -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Descripción de tus servicios <span class="text-red-500">*</span>
        </label>
        <textarea
          v-model="form.descripcion"
          rows="3"
          placeholder="Describe tu experiencia, años trabajando, qué servicios ofreces..."
          class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        ></textarea>
        <!-- Contador de caracteres -->
        <p class="text-xs text-gray-400 text-right mt-1">
          {{ form.descripcion.length }} / 300 caracteres
        </p>
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
            placeholder="Mínimo 6 caracteres"
            class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-11"
          />
          <button type="button" @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.084-3.414M6.53 6.53A9.97 9.97 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-1.357 2.574M6.53 6.53L3 3m3.53 3.53l11.94 11.94M3 3l18 18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Confirmar contraseña -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Confirmar contraseña <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <input
            v-model="form.confirmPassword"
            :type="showConfirm ? 'text' : 'password'"
            placeholder="Repite tu contraseña"
            class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-11"
            :class="passwordMismatch ? 'border-red-400 focus:ring-red-400' : ''"
          />
          <button type="button" @click="showConfirm = !showConfirm"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg v-if="showConfirm" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.084-3.414M6.53 6.53A9.97 9.97 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-1.357 2.574M6.53 6.53L3 3m3.53 3.53l11.94 11.94M3 3l18 18"/>
            </svg>
          </button>
        </div>
        <!-- Aviso en tiempo real si no coinciden -->
        <p v-if="passwordMismatch" class="text-xs text-red-500 mt-1">
          Las contraseñas no coinciden
        </p>
      </div>

      <!-- Términos -->
      <div class="flex items-start gap-3 pt-1">
        <input
          v-model="form.terminos"
          type="checkbox"
          id="terminos"
          class="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label for="terminos" class="text-sm text-gray-500 cursor-pointer">
          Acepto los
          <a href="#" class="text-blue-600 hover:underline font-medium">Términos y condiciones</a>
          y la
          <a href="#" class="text-blue-600 hover:underline font-medium">Política de privacidad</a>
        </label>
      </div>

      <!-- Botón submit -->
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 text-sm mt-2"
      >
        Crear cuenta
      </button>

    </form>

    <!-- Link a login -->
    <p class="text-sm text-center text-gray-600 mt-5">
      ¿Ya tienes cuenta?
      <RouterLink to="/login" class="text-blue-600 hover:text-blue-700 font-medium">
        Inicia sesión
      </RouterLink>
    </p>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const oficios = [
  'Albañil', 'Carpintero', 'Electricista', 'Fontanero / Plomero',
  'Herrero', 'Jardinero', 'Mecánico', 'Pintor', 'Sastre / Costurero',
  'Técnico en computadoras', 'Técnico en refrigeración', 'Otro'
]

const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  oficio: '',
  ubicacion: '',
  descripcion: '',
  password: '',
  confirmPassword: '',
  terminos: false
})

const showPassword = ref(false)
const showConfirm  = ref(false)
const errorMessage = ref('')

// Computed: detecta en tiempo real si las contraseñas no coinciden
const passwordMismatch = computed(() =>
  form.confirmPassword.length > 0 && form.password !== form.confirmPassword
)

function handleRegister() {
  errorMessage.value = ''

  // Validar campos vacíos
  const { nombre, email, telefono, oficio, ubicacion, descripcion, password, confirmPassword, terminos } = form
  if (!nombre || !email || !telefono || !oficio || !ubicacion || !descripcion || !password || !confirmPassword) {
    errorMessage.value = 'Por favor completa todos los campos.'
    return
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    errorMessage.value = 'Ingresa un correo electrónico válido.'
    return
  }

  // Validar teléfono (10 dígitos)
  const telRegex = /^\d{10}$/
  if (!telRegex.test(telefono)) {
    errorMessage.value = 'El teléfono debe tener exactamente 10 dígitos.'
    return
  }

  // Validar contraseña
  if (password.length < 6) {
    errorMessage.value = 'La contraseña debe tener al menos 6 caracteres.'
    return
  }

  // Validar que coincidan
  if (password !== confirmPassword) {
    errorMessage.value = 'Las contraseñas no coinciden.'
    return
  }

  // Validar descripción máxima
  if (descripcion.length > 300) {
    errorMessage.value = 'La descripción no puede superar 300 caracteres.'
    return
  }

  // Validar términos
  if (!terminos) {
    errorMessage.value = 'Debes aceptar los términos y condiciones.'
    return
  }

  // Por ahora simulamos registro exitoso
  console.log('Registro:', form)
  router.push('/dashboard')
}
</script>