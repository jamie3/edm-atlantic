<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-200 rounded-lg mb-3 bg-white hover:shadow-md transition-shadow"
  >
    <div class="flex-1 mb-3 sm:mb-0">
      <h3 class="text-lg font-semibold text-gray-900">{{ track.title }}</h3>
      <p v-if="track.year" class="text-sm text-gray-600 mt-1">{{ track.year }}</p>
    </div>
    <div class="flex items-center gap-4 w-full sm:w-auto sm:justify-end justify-between">
      <a
        v-if="track.url"
        :href="track.url"
        target="_blank"
        rel="noopener"
        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm font-medium transition-colors"
      >
        Listen
      </a>
      <button
        @click="handleLike"
        class="text-2xl p-1 hover:scale-125 transition-transform text-amber-400"
        :class="{ 'animate-bounce': liked }"
        :aria-label="liked ? 'Unlike track' : 'Like track'"
      >
        <span>{{ liked ? '★' : '☆' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Track {
  title: string;
  url?: string;
  year?: number;
}

const props = defineProps<{
  track: Track;
  artistSlug: string;
}>();

const { isLiked, toggleLike } = useLikes();
const liked = ref(false);

const trackId = computed(() => `${props.artistSlug}-track-${props.track.title}`);

onMounted(() => {
  liked.value = isLiked(trackId.value);
});

const handleLike = () => {
  liked.value = toggleLike(trackId.value);
};
</script>
