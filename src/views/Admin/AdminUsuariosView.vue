<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Administrador / Usuarios</p>
        <h1 class="text-2xl font-bold text-gray-800">Administrar usuarios</h1>
        <p class="text-gray-500 mt-2">
          En esta sección el administrador podrá visualizar y controlar los usuarios registrados en la plataforma.
        </p>
      </div>

      <div class="grid lg:grid-cols-4 gap-4 mb-6">
        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Total de usuarios</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">120</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Clientes</p>
          <h2 class="text-2xl font-bold text-blue-600 mt-2">66</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Trabajadores</p>
          <h2 class="text-2xl font-bold text-green-600 mt-2">48</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Administradores</p>
          <h2 class="text-2xl font-bold text-purple-600 mt-2">6</h2>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 overflow-x-auto">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <div>
            <h2 class="text-lg font-semibold text-gray-800">Lista de usuarios</h2>
            <p class="text-sm text-gray-500">Información visual de usuarios registrados.</p>
          </div>

          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
            Nuevo usuario
          </button>
        </div>

        <table class="min-w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b">
              <th class="py-3">Usuario</th>
              <th class="py-3">Correo</th>
              <th class="py-3">Rol</th>
              <th class="py-3">Estado</th>
              <th class="py-3">Acción</th>
            </tr>
          </thead>

          <tbody class="text-gray-700">
            <tr
              v-for="usuario in usuarios"
              :key="usuario.correo"
              class="border-b last:border-b-0"
            >
              <td class="py-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    {{ usuario.iniciales }}
                  </div>
                  <span class="font-medium text-gray-800">{{ usuario.nombre }}</span>
                </div>
              </td>
              <td class="py-4">{{ usuario.correo }}</td>
              <td class="py-4">{{ usuario.rol }}</td>
              <td class="py-4">
                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="usuario.clase"
                >
                  {{ usuario.estado }}
                </span>
              </td>
              <td class="py-4">
                <button class="text-blue-600 hover:underline">
                  Ver detalle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
const usuarios = [
  {
    iniciales: 'CL',
    nombre: 'Cliente Demo',
    correo: 'usuario1@edu.com',
    rol: 'Cliente',
    estado: 'Activo',
    clase: 'bg-green-100 text-green-700'
  },
  {
    iniciales: 'TR',
    nombre: 'Trabajador Demo',
    correo: 'usuario2@edu.com',
    rol: 'Trabajador',
    estado: 'Activo',
    clase: 'bg-green-100 text-green-700'
  },
  {
    iniciales: 'AD',
    nombre: 'Administrador Demo',
    correo: 'usuario3@edu.com',
    rol: 'Administrador',
    estado: 'Activo',
    clase: 'bg-blue-100 text-blue-700'
  },
  {
    iniciales: 'ML',
    nombre: 'María López',
    correo: 'maria@example.com',
    rol: 'Cliente',
    estado: 'Pendiente',
    clase: 'bg-yellow-100 text-yellow-700'
  }
]
</script>