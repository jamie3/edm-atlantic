<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-8 px-6">
      <div class="max-w-7xl mx-auto">
        <NuxtLink to="/" class="inline-block text-white/90 hover:text-white mb-8 transition-colors">
          ← Back to Artists
        </NuxtLink>
        <div class="flex flex-col md:flex-row items-center md:items-center gap-8">
          <div
            v-if="artist?.image"
            class="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 shadow-xl"
          >
            <img :src="artist.image" :alt="artist.title" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-black mb-2 tracking-tight">{{ artist?.title }}</h1>
            <p v-if="artist?.realName" class="text-xl text-white/80 mb-4">{{ artist.realName }}</p>
            <div class="flex flex-col gap-2 mb-4 text-white/90">
              <p v-if="artist?.city && artist?.province" class="text-lg">
                📍 {{ artist.city }}, {{ artist.province }}
              </p>
              <p v-if="artist?.yearsActive" class="text-lg">🎵 {{ artist.yearsActive }}</p>
            </div>
            <div
              v-if="artist?.genres && artist.genres.length"
              class="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              <span
                v-for="genre in artist.genres"
                :key="genre"
                class="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium"
              >
                {{ genre }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-6 py-12">
      <!-- Links Section -->
      <section v-if="artist?.links" class="mb-12 bg-white p-8 rounded-xl shadow-sm">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Links</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <a
            v-if="artist.links.website"
            :href="artist.links.website"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium"
          >
            🌐 Website
          </a>
          <a
            v-if="artist.links.soundcloud"
            :href="artist.links.soundcloud"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
          >
            🎵 SoundCloud
          </a>
          <a
            v-if="artist.links.mixcloud"
            :href="artist.links.mixcloud"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
          >
            🎧 Mixcloud
          </a>
          <a
            v-if="artist.links.bandcamp"
            :href="artist.links.bandcamp"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium"
          >
            💿 Bandcamp
          </a>
          <a
            v-if="artist.links.beatport"
            :href="artist.links.beatport"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
          >
            ▶️ Beatport
          </a>
        </div>
      </section>

      <!-- Biography Section -->
      <section v-if="artist?.body" class="mb-12 bg-white p-8 rounded-xl shadow-sm">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
        <div class="prose prose-lg max-w-none text-gray-700">
          <ContentRenderer :value="artist" />
        </div>
      </section>

      <!-- Music Section -->
      <section
        v-if="artist?.music && artist.music.length"
        class="mb-12 bg-white p-8 rounded-xl shadow-sm"
      >
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Music</h2>
        <div class="flex flex-col">
          <MusicTrack
            v-for="(track, index) in artist.music"
            :key="index"
            :track="track"
            :artist-slug="artist.path?.split('/').pop() || artist.slug || ''"
          />
        </div>
      </section>

      <!-- DJ Sets Section -->
      <section
        v-if="artist?.sets && artist.sets.length"
        class="mb-12 bg-white p-8 rounded-xl shadow-sm"
      >
        <h2 class="text-3xl font-bold text-gray-900 mb-6">DJ Sets</h2>
        <div class="flex flex-col">
          <SetItem
            v-for="(set, index) in artist.sets"
            :key="index"
            :set="set"
            :artist-slug="artist.path?.split('/').pop() || artist.slug || ''"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { getArtist } = useArtist();
const artist = await getArtist(slug);
</script>

<style>
.prose h1 {
  @apply text-3xl font-bold mt-8 mb-4;
}

.prose h2 {
  @apply text-2xl font-bold mt-6 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose ul {
  @apply list-disc ml-6 mb-4;
}

.prose li {
  @apply mb-2;
}
</style>
