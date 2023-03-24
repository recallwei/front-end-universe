export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  nitro: {
    preset: 'vercel-edge'
  },
  tailwindcss: {
    viewer: true
  }
})
