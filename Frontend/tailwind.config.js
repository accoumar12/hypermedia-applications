/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/inndex.vue",
    //"./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {},
  },
  plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
}

