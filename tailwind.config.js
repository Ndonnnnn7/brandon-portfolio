/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8FE8F6",
        primaryInk: "#087F90",
        secondary: "#C8F7D7",
        secondaryInk: "#24724D",
        tertiary: "#DBF156",
        canvas: "#FFFFFF",
        surface: "#FFFFFF",
        ink: "#0B1214",
        muted: "#657275",
        line: "#DCEAEA",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #8FE8F6, #C8F7D7 52%, #8FE8F6)",
      }
    },
  },
  plugins: [],
}
