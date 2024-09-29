/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-90': 'rotateY(90deg)',
      },
    },
  },
  plugins: [],
}

