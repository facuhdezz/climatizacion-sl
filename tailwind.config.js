export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '640px' }, // Para pantallas de hasta 640px
        'max-md': { 'max': '768px' }, // Para pantallas de hasta 768px
        'max-lg': { 'max': '1024px' }, // Para pantallas de hasta 1024px
        'max-xl': { 'max': '1280px' }, // Para pantallas de hasta 1280px
        'max-2xl': { 'max': '1536px' }, // Para pantallas de hasta 1280px
      },
    },
  },
  plugins: [],
}

