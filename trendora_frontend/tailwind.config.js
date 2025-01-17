/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Add JSX and TSX
  daisyui: {
    themes: ["light", "dark", "cupcake", "garden", "autumn", "dracula"],
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
