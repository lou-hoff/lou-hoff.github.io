// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  target: 'static',
  generate: {
    dir: 'public'
  },
  dir: {
    // The folder name Nuxt uses for static files (`public`) is already
    // reserved for the build output. So in deviation from the defaults we're
    // using a folder called `static` instead.
    public: 'static'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image'
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-06-26'
})
