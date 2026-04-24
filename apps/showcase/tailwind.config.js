/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../packages/core/src/**/*.{vue,ts}" // Include core package components for skin classes
  ],
  darkMode: 'class',
  safelist: [
    { pattern: /text-violet-./ },
    { pattern: /bg-violet-./ }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
