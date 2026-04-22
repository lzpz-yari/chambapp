<template>
  <div class="min-h-screen bg-slate-100">
    <header class="bg-white border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <p class="text-sm text-slate-500">Dashboard</p>
          <h1 class="text-2xl font-semibold text-slate-800">Bienvenido a ChambApp</h1>
        </div>

        <button
          @click="handleLogout"
          class="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Cerrar sesión
        </button>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-8">
      <div v-if="loading" class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-slate-600">
        Cargando información del usuario...
      </div>

      <div
        v-else-if="errorMessage"
        class="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-5 py-4"
      >
        {{ errorMessage }}
      </div>

      <div v-else class="grid gap-6 md:grid-cols-[320px_1fr]">
        <section class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div class="flex flex-col items-center text-center">
            <img
              :src="user.image"
              :alt="`Foto de ${fullName}`"
              class="w-24 h-24 rounded-full object-cover border border-slate-200 mb-4"
            />
            <h2 class="text-xl font-semibold text-slate-800">{{ fullName }}</h2>
            <p class="text-sm text-slate-500">@{{ user.username }}</p>
          </div>
        </section>

        <section class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 class="text-lg font-semibold text-slate-800 mb-5">Datos de la sesión</h3>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="rounded-xl border border-slate-200 p-4">
              <p class="text-sm text-slate-500 mb-1">Nombre</p>
              <p class="font-medium text-slate-800">{{ user.firstName }}</p>
            </div>

            <div class="rounded-xl border border-slate-200 p-4">
              <p class="text-sm text-slate-500 mb-1">Apellido</p>
              <p class="font-medium text-slate-800">{{ user.lastName }}</p>
            </div>

            <div class="rounded-xl border border-slate-200 p-4">
              <p class="text-sm text-slate-500 mb-1">Correo</p>
              <p class="font-medium text-slate-800 break-all">{{ user.email }}</p>
            </div>

            <div class="rounded-xl border border-slate-200 p-4">
              <p class="text-sm text-slate-500 mb-1">Género</p>
              <p class="font-medium text-slate-800">{{ user.gender || 'No especificado' }}</p>
            </div>

            <div class="rounded-xl border border-slate-200 p-4 sm:col-span-2">
              <p class="text-sm text-slate-500 mb-1">Estado</p>
              <p class="font-medium text-emerald-600">Sesión validada correctamente con la API</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentAuthUser, getStoredUser, logout } from '../services/auth'

const router = useRouter()
const loading = ref(true)
const errorMessage = ref('')
const user = ref(
  getStoredUser() || {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: '',
    image: 'https://dummyjson.com/icon/user/128'
  }
)

const fullName = computed(() => `${user.value.firstName} ${user.value.lastName}`.trim())

async function loadUser() {
  loading.value = true
  errorMessage.value = ''

  try {
    user.value = await getCurrentAuthUser()
  } catch (error) {
    errorMessage.value = error.message || 'No fue posible validar la sesión.'
    logout()
    router.replace('/login')
  } finally {
    loading.value = false
  }
}

function handleLogout() {
  logout()
  router.replace('/login')
}

onMounted(() => {
  loadUser()
})
</script>
