/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-taste": "url('/public/pinchos/DSC_2781.jpg')"
      },
      colors: {
        morao: '#b65964',
      }
    },
  },
  plugins: [],
}

