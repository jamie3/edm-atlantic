// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  // Content configuration for production/serverless
  content: {
    database: {
      type: 'libsql',
      url: 'file:.nuxt/content.db'
    }
  },
  
  // Nitro configuration for Vercel
  nitro: {
    preset: 'vercel'
  }
})
