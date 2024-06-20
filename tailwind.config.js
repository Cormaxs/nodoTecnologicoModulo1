/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     
    },
    screens: {
      sm: '400px',
      md: '768px',
      lg: '900px', // Cambia este valor a 900px
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

