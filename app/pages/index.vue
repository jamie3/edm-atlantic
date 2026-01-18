<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <header class="text-center py-12 px-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <h1 class="text-5xl md:text-6xl font-black mb-2 tracking-tight">EDM Atlantic</h1>
      <p class="text-xl md:text-2xl font-light opacity-95">Showcasing Electronic Music DJs and Artists from the Atlantic Canada</p>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-12">
      <!-- Search and Filter Controls -->
      <div class="mb-8 space-y-4">
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Search -->
          <div class="flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search artists..."
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <!-- Genre Filter -->
          <div class="md:w-64">
            <select
              v-model="selectedGenre"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">All Genres</option>
              <option v-for="genre in allGenres" :key="genre" :value="genre">
                {{ genre }}
              </option>
            </select>
          </div>
          
          <!-- Sort -->
          <div class="md:w-48">
            <select
              v-model="sortOrder"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
        </div>
        
        <!-- Results count -->
        <div class="text-gray-600">
          Showing {{ filteredArtists.length }} of {{ artists?.length || 0 }} artists
        </div>
      </div>

      <!-- Artist Grid -->
      <div v-if="filteredArtists.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArtistCard 
          v-for="artist in filteredArtists" 
          :key="artist.path || artist.slug" 
          :artist="artist" 
        />
      </div>
      <div v-else-if="artists && artists.length" class="text-center py-16 text-gray-600 text-lg">
        <p>No artists found matching your criteria.</p>
      </div>
      <div v-else class="text-center py-16 text-gray-600 text-lg">
        <p>Loading artists...</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Query content directly - no server API needed
const { data: artists } = await useAsyncData('artists', () =>
  queryCollection('artists').all()
)

// Reactive filter state
const searchQuery = ref('')
const selectedGenre = ref('')
const sortOrder = ref('a-z')

// Get all unique genres from artists
const allGenres = computed(() => {
  if (!artists.value) return []
  
  const genresSet = new Set<string>()
  artists.value.forEach(artist => {
    if (artist.genres) {
      artist.genres.forEach(genre => genresSet.add(genre))
    }
  })
  
  return Array.from(genresSet).sort()
})

// Filter and sort artists
const filteredArtists = computed(() => {
  if (!artists.value) return []
  
  let result = [...artists.value]
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(artist => {
      const titleMatch = artist.title?.toLowerCase().includes(query)
      const realNameMatch = artist.realName?.toLowerCase().includes(query)
      const descriptionMatch = artist.description?.toLowerCase().includes(query)
      return titleMatch || realNameMatch || descriptionMatch
    })
  }
  
  // Apply genre filter
  if (selectedGenre.value) {
    result = result.filter(artist => 
      artist.genres?.includes(selectedGenre.value)
    )
  }
  
  // Apply sort
  result.sort((a, b) => {
    const titleA = a.title?.toLowerCase() || ''
    const titleB = b.title?.toLowerCase() || ''
    
    if (sortOrder.value === 'a-z') {
      return titleA.localeCompare(titleB)
    } else {
      return titleB.localeCompare(titleA)
    }
  })
  
  return result
})

watch(artists, (newValue) => {
  console.log('Artists loaded:', newValue?.length)
  if (newValue && newValue.length > 0) {
    console.log('First artist:', newValue[0])
  }
}, { immediate: true })
</script>
