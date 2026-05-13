<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Trabajador / Perfil</p>
        <h1 class="text-2xl font-bold text-gray-800">Perfil profesional</h1>
        <p class="text-gray-500 mt-2">
          Vista visual donde el trabajador podrá editar su información profesional.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div class="w-20 h-20 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold mb-4">
            TD
          </div>

          <h2 class="text-xl font-bold text-gray-800">Trabajador Demo</h2>
          <p class="text-sm text-blue-600 mt-1">Electricista</p>

          <div class="mt-5 space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-500">Experiencia</span>
              <span class="font-medium text-gray-800">5 años</span>
            </div>

            <div class="flex justify-between">
              <span class="text-gray-500">Calificación</span>
              <span class="font-medium text-yellow-600">4.8/5</span>
            </div>

            <div class="flex justify-between">
              <span class="text-gray-500">Estado</span>
              <span class="font-medium text-green-600">Disponible</span>
            </div>
          </div>
        </div>

        <form class="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100 space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                value="Trabajador Demo"
                class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Oficio principal
              </label>
              <select class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm">
                <option>Electricista</option>
                <option>Plomero</option>
                <option>Carpintero</option>
                <option>Pintor</option>
                <option>Albañil</option>
              </select>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Años de experiencia
              </label>
              <input
                type="number"
                value="5"
                class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Teléfono de contacto
              </label>
              <input
                type="text"
                value="9511234567"
                class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Zona de trabajo
            </label>
            <input
              type="text"
              value="Oaxaca de Juárez"
              class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Descripción profesional
            </label>
            <textarea
              rows="4"
              class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
            >Especialista en instalaciones eléctricas residenciales, mantenimiento preventivo y reparaciones generales.</textarea>
          </div>

          <div class="flex gap-3">
            <button
              type="button"
              class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm"
            >
              Guardar cambios
            </button>

            <RouterLink
              to="/dashboard/trabajador"
              class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm"
            >
              Cancelar
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>