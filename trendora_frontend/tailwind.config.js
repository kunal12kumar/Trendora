/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake","garden","autumn","dracula"],
  },
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}