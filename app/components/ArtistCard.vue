<template>
  <NuxtLink 
    :to="`/artists/${artist._path?.split('/').pop()}`" 
    class="block border border-gray-200 rounded-xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
  >
    <div 
      v-if="artist.image" 
      class="w-full h-48 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600"
    >
      <img :src="artist.image" :alt="artist.title" class="w-full h-full object-cover" />
    </div>
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ artist.title }}</h2>
      <p v-if="artist.description" class="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{{ artist.description }}</p>
      <div v-if="artist.genres && artist.genres.length" class="flex flex-wrap gap-2">
        <span 
          v-for="genre in artist.genres" 
          :key="genre" 
          class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-medium"
        >
          {{ genre }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Artist {
  title: string
  _path?: string
  description?: string
  genres?: string[]
  image?: string
}

defineProps<{
  artist: Artist
}>()
</script>
