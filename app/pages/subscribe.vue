<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <header 
      class="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-12 px-6 overflow-hidden"
      style="background-image: url('/images/a-dj-playing-on-turntables.png'); background-size: cover; background-position: center;"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80"></div>
      
      <div class="max-w-3xl mx-auto text-center relative z-10">
        <NuxtLink to="/" class="inline-block text-white/90 hover:text-white mb-6 transition-colors">
          ← Back to Home
        </NuxtLink>
        <h1 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">Subscribe</h1>
        <p class="text-xl md:text-2xl font-light opacity-95">
          Stay updated with the latest artists, events, and music from Atlantic Canada
        </p>
      </div>
    </header>

    <main class="max-w-2xl mx-auto px-6 py-16">
      <div v-if="submitted" class="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div class="text-6xl mb-4">✓</div>
        <h2 class="text-2xl font-bold text-green-900 mb-2">Thank You!</h2>
        <p class="text-green-700">
          You've been successfully added to our mailing list. Check your email for confirmation.
        </p>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            I'm interested in: (optional)
          </label>
          <div class="space-y-2">
            <label class="flex items-center">
              <input
                v-model="form.interests"
                type="checkbox"
                value="events"
                class="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
              />
              <span class="ml-2 text-gray-700 dark:text-gray-300">Upcoming events</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="form.interests"
                type="checkbox"
                value="newArtists"
                class="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
              />
              <span class="ml-2 text-gray-700 dark:text-gray-300">New artists</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="form.interests"
                type="checkbox"
                value="releases"
                class="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
              />
              <span class="ml-2 text-gray-700 dark:text-gray-300">Music releases</span>
            </label>
          </div>
        </div>

        <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="text-red-700">{{ error }}</p>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Subscribing...' : 'Subscribe to Mailing List' }}
        </button>

        <p class="text-sm text-gray-500 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  interests: [] as string[],
})

const loading = ref(false)
const error = ref('')
const submitted = ref(false)

const handleSubmit = async () => {
  loading.value = true
  error.value = ''

  try {
    // TODO: Integrate with your email service (e.g., Mailchimp, ConvertKit, Resend, etc.)
    // For now, we'll simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', form.value)
    submitted.value = true
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
