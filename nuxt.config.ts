export default defineNuxtConfig({
  css: ['~/assets/css/main.css'], 

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
