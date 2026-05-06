<template>
  <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-slate-500">{{ title }}</p>
        <h3 class="text-2xl font-bold text-slate-800 mt-2">{{ value }}</h3>
      </div>

      <div class="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold" :class="iconBg">
        {{ icon }}
      </div>
    </div>

    <p class="text-sm text-slate-500 mt-4">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  description: String,
  icon: {
    type: String,
    default: '•'
  },
  iconBg: {
    type: String,
    default: 'bg-blue-100 text-blue-700'
  }
})
</script>