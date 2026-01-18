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
        <h1 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">Submit Your Profile</h1>
        <p class="text-xl md:text-2xl font-light opacity-95">
          Are you an EDM artist from Atlantic Canada? Share your music with our community!
        </p>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-6 py-16">
      <div v-if="submitted" class="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div class="text-6xl mb-4">✓</div>
        <h2 class="text-2xl font-bold text-green-900 mb-2">Submission Received!</h2>
        <p class="text-green-700">
          Thank you for submitting your profile. We'll review it and get back to you soon!
        </p>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <p class="text-blue-800 dark:text-blue-300 text-sm">
            All fields marked with * are required. We'll review your submission within 5-7 business days.
          </p>
        </div>

        <!-- Basic Information -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Basic Information</h3>

          <div>
            <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Artist/DJ Name *
            </label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., DJ Sunrise"
            />
          </div>

          <div>
            <label for="realName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Real Name (optional)
            </label>
            <input
              id="realName"
              v-model="form.realName"
              type="text"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your legal name"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                City *
              </label>
              <input
                id="city"
                v-model="form.city"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Halifax"
              />
            </div>
            <div>
              <label for="province" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Province *
              </label>
              <select
                id="province"
                v-model="form.province"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="NS">Nova Scotia</option>
                <option value="NB">New Brunswick</option>
                <option value="PE">Prince Edward Island</option>
                <option value="NL">Newfoundland & Labrador</option>
              </select>
            </div>
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Short Description *
            </label>
            <textarea
              id="description"
              v-model="form.description"
              required
              rows="3"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="A brief description of your music style and career..."
            />
          </div>

          <div>
            <label for="genres" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Genres * (comma separated)
            </label>
            <input
              id="genres"
              v-model="form.genres"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., House, Techno, Trance"
            />
          </div>
        </div>

        <!-- Contact & Links -->
        <div class="space-y-6 pt-6 border-t dark:border-gray-700">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Contact & Links</h3>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label for="website" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website
            </label>
            <input
              id="website"
              v-model="form.website"
              type="url"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="soundcloud" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                SoundCloud
              </label>
              <input
                id="soundcloud"
                v-model="form.soundcloud"
                type="url"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://soundcloud.com/..."
              />
            </div>
            <div>
              <label for="mixcloud" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mixcloud
              </label>
              <input
                id="mixcloud"
                v-model="form.mixcloud"
                type="url"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://mixcloud.com/..."
              />
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="space-y-6 pt-6 border-t dark:border-gray-700">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Additional Information</h3>

          <div>
            <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Biography (optional)
            </label>
            <textarea
              id="bio"
              v-model="form.bio"
              rows="6"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Tell us more about your journey, influences, and achievements..."
            />
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
          {{ loading ? 'Submitting...' : 'Submit Your Profile' }}
        </button>

        <p class="text-sm text-gray-500 text-center">
          By submitting, you agree to have your information displayed on EDM Atlantic.
        </p>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  title: '',
  realName: '',
  city: '',
  province: '',
  description: '',
  genres: '',
  email: '',
  website: '',
  soundcloud: '',
  mixcloud: '',
  bio: '',
})

const loading = ref(false)
const error = ref('')
const submitted = ref(false)

const handleSubmit = async () => {
  loading.value = true
  error.value = ''

  try {
    // TODO: Integrate with your backend/email service to handle submissions
    // Options: Send to email via Resend, save to database, create GitHub issue, etc.
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Artist submission:', form.value)
    submitted.value = true
  } catch (err) {
    error.value = 'Something went wrong. Please try again or contact us directly.'
  } finally {
    loading.value = false
  }
}
</script>
