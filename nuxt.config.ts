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
})
