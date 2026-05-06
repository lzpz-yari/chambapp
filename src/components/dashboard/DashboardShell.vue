<template>
  <div class="min-h-screen bg-slate-100">
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="hidden lg:flex w-72 flex-col bg-slate-900 text-white p-6">
        <div class="mb-8">
          <h1 class="text-2xl font-bold tracking-wide">ChambApp</h1>
          <p class="text-slate-400 text-sm mt-1">{{ roleLabel }}</p>
        </div>

        <div class="bg-slate-800 border border-slate-700 rounded-2xl p-4 mb-6">
          <p class="text-sm text-slate-400">Sesión activa</p>
          <h2 class="text-lg font-semibold mt-1">{{ user?.name || 'Usuario' }}</h2>
          <p class="text-sm text-slate-400 mt-1">{{ user?.email }}</p>
        </div>

        <nav class="space-y-2">
          <div
            v-for="item in menu"
            :key="item"
            class="px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-slate-200"
          >
            {{ item }}
          </div>
        </nav>

        <div class="mt-auto pt-6">
          <button
            @click="$emit('logout')"
            class="w-full bg-red-500 hover:bg-red-600 transition text-white px-4 py-3 rounded-xl font-medium"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      <!-- Contenido -->
      <main class="flex-1 p-4 md:p-6 lg:p-8">
        <!-- Header mobile -->
        <div class="lg:hidden bg-white rounded-2xl shadow-sm p-4 mb-6 flex items-center justify-between">
          <div>
            <h1 class="text-xl font-bold text-slate-800">ChambApp</h1>
            <p class="text-sm text-slate-500">{{ roleLabel }}</p>
          </div>

          <button
            @click="$emit('logout')"
            class="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-xl text-sm"
          >
            Salir
          </button>
        </div>

        <!-- Hero -->
        <section
          class="rounded-3xl p-6 md:p-8 text-white shadow-sm mb-6"
          :class="heroClass"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p class="text-sm uppercase tracking-widest opacity-80 mb-2">{{ roleLabel }}</p>
              <h2 class="text-2xl md:text-3xl font-bold mb-2">
                {{ title }}
              </h2>
              <p class="text-sm md:text-base text-white/90 max-w-2xl">
                {{ subtitle }}
              </p>
            </div>

            <div class="bg-white/15 backdrop-blur-sm rounded-2xl px-5 py-4 min-w-[220px]">
              <p class="text-sm text-white/80">Bienvenido</p>
              <h3 class="text-lg font-semibold mt-1">{{ user?.name || 'Usuario Demo' }}</h3>
              <p class="text-sm text-white/80 mt-1">{{ user?.email }}</p>
            </div>
          </div>
        </section>

        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: Object,
  roleLabel: String,
  title: String,
  subtitle: String,
  menu: {
    type: Array,
    default: () => []
  },
  heroClass: {
    type: String,
    default: 'bg-gradient-to-r from-blue-700 to-indigo-600'
  }
})

defineEmits(['logout'])
</script>