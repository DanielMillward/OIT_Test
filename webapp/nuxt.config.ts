// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    devProxy: {
      '/movies': {
        target: 'http://localhost:8080/movies',
        changeOrigin: true
      }
    }
  },

})

