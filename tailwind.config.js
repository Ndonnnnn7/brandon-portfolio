/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        primaryInk: "rgb(var(--color-primary-ink-rgb) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        secondaryInk: "rgb(var(--color-secondary-ink-rgb) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary-rgb) / <alpha-value>)",
        canvas: "rgb(var(--color-canvas-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        ink: "rgb(var(--color-ink-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        line: "rgb(var(--color-line-rgb) / <alpha-value>)",
        accentInk: "rgb(var(--color-accent-ink-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, var(--color-primary), var(--color-secondary) 52%, var(--color-primary))",
      }
    },
  },
  plugins: [],
}
