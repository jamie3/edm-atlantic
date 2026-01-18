<template>
  <NuxtLink
    :to="`/artists/${artist.slug || artist.path?.split('/').pop()}`"
    class="block border border-gray-200 rounded-xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
  >
    <div class="flex flex-col items-center pt-8 pb-4">
      <!-- Circular Artist Image -->
      <div
        class="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
      >
        <img
          v-if="artist.image"
          :src="artist.image"
          :alt="artist.title"
          class="w-full h-full object-cover"
        />
        <span v-else class="text-white text-4xl font-bold">
          {{ getInitials(artist.title) }}
        </span>
      </div>

      <!-- Artist Info -->
      <div class="px-6 pb-4 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ artist.title }}</h2>
        <p v-if="artist.description" class="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {{ artist.description }}
        </p>
        <div
          v-if="artist.genres && artist.genres.length"
          class="flex flex-wrap gap-2 justify-center"
        >
          <span
            v-for="genre in artist.genres"
            :key="genre"
            class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-medium"
          >
            {{ genre }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Artist {
  title: string;
  slug?: string;
  path?: string;
  _path?: string;
  description?: string;
  genres?: string[];
  image?: string;
}

defineProps<{
  artist: Artist;
}>();

const getInitials = (name: string): string => {
  if (!name) return '?';

  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0][0]?.toUpperCase() || '?';
  }

  // Get first letter of first word and first letter of last word
  const first = words[0][0]?.toUpperCase() || '';
  const last = words[words.length - 1][0]?.toUpperCase() || '';
  return first + last;
};
</script>
