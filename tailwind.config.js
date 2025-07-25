/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montreal: ["PP Neue Montreal", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        editorial: ["PP Editorial Old", "serif"],
      },
      colors: {
        'brand-dark': '#303030',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};