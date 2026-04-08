/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'steam-dark': '#1b2838',
        'steam-blue': '#1a9fff',
        'steam-light': '#c6d4df',
      },
    },
  },
  plugins: [],
}

