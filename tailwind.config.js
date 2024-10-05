/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-taste": "url('/public/pinchos/DSC_2781.jpg')",
        "title-about": "url('/public/pinchos/DSC_2916.jpg')",
        "design-detail": "url('/public/pinchos/DSC_2864.jpg')",
      },
      colors: {
        morao: '#b65964',
        fucia: '#fc0fc0'
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        lora: ['Lora', 'serif'],
        playfair: ['Playfair-display', 'serif']
      }
    },
  },
  plugins: [],
}

