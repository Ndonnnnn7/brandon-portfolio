/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6d5dfc",
        dark: "#121321",
        secondary: "#885cf7"
      },
      fontFamily: {
        // Ini akan menimpa font default Tailwind menjadi Poppins
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}