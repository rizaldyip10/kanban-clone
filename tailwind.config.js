/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sf-pro': ['SF Pro Display', 'sans-serif'],
      'sf-compact': ['SF Compact Display', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

