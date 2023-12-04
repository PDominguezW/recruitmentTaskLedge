// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Barack_Obama_ic%C3%B4ne.png" }],
        title: 'Obama'
    },
  },
  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.BACKEND_URL,
      BACKGROUND_IMAGE_URL: process.env.BACKGROUND_IMAGE_URL,
      GITHUB_BACKEND_URL: process.env.GITHUB_BACKEND_URL,
      GITHUB_FRONTEND_URL: process.env.GITHUB_FRONTEND_URL
    }
  },
})
