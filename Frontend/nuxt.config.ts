// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/general.css'
  ],
  ssr: false, // Set ssr to false for Static Site Generation
  target: 'static', // Specify the target as static
  runtimeConfig: {
    public: {
      serverURL: "http://localhost:3001" // URL of your local server
    }
  },
  app: {
    baseURL: process.env.DEV ? '' : '/VenTour' // Name of your GitHub Repository
  }
})
