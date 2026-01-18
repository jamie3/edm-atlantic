<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <header class="text-center py-12 px-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <h1 class="text-5xl md:text-6xl font-black mb-2 tracking-tight">EDM Atlantic</h1>
      <p class="text-xl md:text-2xl font-light opacity-95">Showcasing Electronic Music DJs and Artists from the Atlantic Region</p>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-12">
      <div v-if="artists && artists.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArtistCard 
          v-for="artist in artists" 
          :key="artist._path" 
          :artist="artist" 
        />
      </div>
      <div v-else class="text-center py-16 text-gray-600 text-lg">
        <p>No artists found. Check back soon!</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { data: artists } = await useAsyncData('artists', () => 
  queryContent('artists').find()
)
</script>
