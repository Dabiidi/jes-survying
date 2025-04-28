// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: { 
      colors: {
      primary: '#1E8073',      // Teal main color
      'primary-dark': '#166359', // Darker teal on hover
      background: '#F7FAFC',    // Light background
      text: '#4A5568',          // Slate Gray for text
      accent: '#FFD166',        // Yellow for highlights
    },
  },
  },
  plugins: [],
};
