<template>
  <button
    @click="toggleDarkMode"
    class="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span v-if="isDark" class="text-2xl">☀️</span>
    <span v-else class="text-2xl">🌙</span>
  </button>
</template>

<script setup lang="ts">
const { isDark, toggleDarkMode } = useDarkMode()
</script>
