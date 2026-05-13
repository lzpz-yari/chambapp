<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <p class="text-sm text-gray-500">Cliente / Pagos</p>
        <h1 class="text-2xl font-bold text-gray-800">Pagos registrados</h1>
        <p class="text-gray-500 mt-2">
          Vista visual para revisar pagos realizados o pendientes.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-4 mb-6">
        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Total pagado</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">$1,730</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Pagos pendientes</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">$900</h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-5">
          <p class="text-sm text-gray-500">Método frecuente</p>
          <h2 class="text-2xl font-bold text-gray-800 mt-2">Efectivo</h2>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Detalle de pagos</h2>

        <div class="space-y-3">
          <div
            v-for="pago in pagos"
            :key="pago.concepto"
            class="border border-gray-100 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <div>
              <h3 class="font-medium text-gray-800">{{ pago.concepto }}</h3>
              <p class="text-sm text-gray-500">{{ pago.fecha }} · {{ pago.metodo }}</p>
            </div>

            <div class="flex items-center gap-3">
              <span class="font-semibold text-gray-800">{{ pago.monto }}</span>
              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="pago.clase"
              >
                {{ pago.estado }}
              </span>
            </div>
          </div>
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
const pagos = [
  {
    concepto: 'Reparación eléctrica',
    fecha: '20/04/2026',
    metodo: 'Tarjeta',
    monto: '$450',
    estado: 'Pagado',
    clase: 'bg-green-100 text-green-700'
  },
  {
    concepto: 'Mantenimiento de tuberías',
    fecha: '18/04/2026',
    metodo: 'Efectivo',
    monto: '$380',
    estado: 'Pagado',
    clase: 'bg-green-100 text-green-700'
  },
  {
    concepto: 'Pintura interior',
    fecha: '15/04/2026',
    metodo: 'Efectivo',
    monto: '$900',
    estado: 'Pendiente',
    clase: 'bg-yellow-100 text-yellow-700'
  }
]
</script>