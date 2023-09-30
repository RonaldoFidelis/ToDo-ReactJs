/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'body':'#FF5700',
        'bg':'#171D30',
        'button':'#FF5700',
      }
    },
  },
  plugins: [],
}
