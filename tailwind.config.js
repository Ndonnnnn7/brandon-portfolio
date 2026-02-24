/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c6a65b",    // Gold
        secondary: "#c55a3b",  // Oren
        dark: "#0c0c0f",       // Hitam kebiruan 
        accent: "#ffa437",     // Pink kemerahan 
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