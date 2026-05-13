<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Cliente / Contratación</p>
        <h1 class="text-2xl font-bold text-gray-800">Solicitar un servicio</h1>
        <p class="text-gray-500 mt-2">
          Formulario visual para simular la solicitud de un servicio dentro de ChambApp.
        </p>
      </div>

      <form class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tipo de servicio</label>
          <select class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm">
            <option>Electricista</option>
            <option>Plomero</option>
            <option>Carpintero</option>
            <option>Pintor</option>
            <option>Albañil</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Descripción del problema</label>
          <textarea
            rows="4"
            class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
            placeholder="Describe brevemente el servicio que necesitas..."
          ></textarea>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Fecha tentativa</label>
            <input type="date" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Horario preferido</label>
            <input type="time" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Dirección aproximada</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
            placeholder="Ej. Oaxaca de Juárez, Centro"
          />
        </div>

        <div class="flex gap-3">
          <button
            type="button"
            class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm"
          >
            Enviar solicitud
          </button>

          <RouterLink
            to="/dashboard/cliente"
            class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm"
          >
            Cancelar
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>