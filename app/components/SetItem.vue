<template>
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-200 rounded-lg mb-3 bg-white hover:shadow-md transition-shadow">
    <div class="flex-1 mb-3 sm:mb-0">
      <h3 class="text-lg font-semibold text-gray-900">{{ set.title }}</h3>
      <p v-if="set.date" class="text-sm text-gray-600 mt-1">{{ formatDate(set.date) }}</p>
    </div>
    <div class="flex items-center gap-4 w-full sm:w-auto sm:justify-end justify-between">
      <a 
        v-if="set.url" 
        :href="set.url" 
        target="_blank" 
        rel="noopener" 
        class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors"
      >
        Listen
      </a>
      <button 
        @click="handleLike" 
        class="text-2xl p-1 hover:scale-125 transition-transform text-amber-400"
        :class="{ 'animate-bounce': liked }"
        :aria-label="liked ? 'Unlike set' : 'Like set'"
      >
        <span>{{ liked ? '★' : '☆' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Set {
  title: string
  url?: string
  date?: string
}

const props = defineProps<{
  set: Set
  artistSlug: string
}>()

const { isLiked, toggleLike } = useLikes()
const liked = ref(false)

const setId = computed(() => `${props.artistSlug}-set-${props.set.title}`)

onMounted(() => {
  liked.value = isLiked(setId.value)
})

const handleLike = () => {
  liked.value = toggleLike(setId.value)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
