/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        hijau: '#1A4D2E',
        hijaumuda: '#4F6F52',
        crem: '#E8DFCA',
        cremmuda: '#F5EFE6'
      },
      screens: {
        '2xl' : '1320px',
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

