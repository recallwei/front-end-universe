export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@vueuse/nuxt'],
  nitro: {
    preset: 'vercel-edge'
  },
  tailwindcss: {
    viewer: false
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
