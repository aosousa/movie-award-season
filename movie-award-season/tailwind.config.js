/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '360px'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}