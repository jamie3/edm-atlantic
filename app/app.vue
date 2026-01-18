<template>
  <div class="bg-white dark:bg-gray-900 transition-colors">
    <NuxtPage />
    
    <!-- Fixed Theme Toggle Button -->
    <div class="fixed bottom-6 right-6 z-50">
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup>
const { initTheme } = useDarkMode()

// Initialize theme on mount
onMounted(() => {
  initTheme()
})

useHead({
  title: 'EDM Atlantic - Electronic Music Artists',
  meta: [
    {
      name: 'description',
      content: 'Showcasing Electronic Music DJs and Artists from Atlantic Canada',
    },
  ],
});
</script>
