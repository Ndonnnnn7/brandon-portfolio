/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6d5dfc",    // Ungu Kebiruan
        secondary: "#885cf7",  // Ungu Terang
        dark: "#121321",       // Hitam kebiruan 
        accent: "#f42c7c",     // Pink kemerahan 
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #6d5dfc, #885cf7, #f42c7c)',
      }
    },
  },
  plugins: [],
}